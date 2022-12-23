import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import ReplyListItem from '../UIComponents/listItems/ReplyListItem'
import { ChangeTabContext } from '../contexts/sideBarControlContext/SideBarControlContext'

import replyApi from '../API/replyApi'
import { Alert } from '../utils/helpers'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import { useGetCurrentUser, useCurrentUser } from '../contexts/usersContext/CurrentUserContext'

import style from './CurrentUserReply.module.scss'

export default function CurrentUserReply() {
  const [repliedTweets, setRepliedTweets] = useState([])
  const navigate = useNavigate()
  const rerender = useRerender()
  const handleRerender = useHandleRerender()
  const getCurrentUser = useGetCurrentUser()
  const currentUser = useCurrentUser()
  const handleChangeTabContext = useContext(ChangeTabContext)

  useEffect(() => {
    handleRerender('')
    handleChangeTabContext('user')
    getCurrentUser(navigate)
  }, [rerender])

  useEffect(() => {
    handleRerender('')
    const currentUserId = localStorage.getItem('userId')
    replyApi
      .getUserReliedTweets(currentUserId)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setRepliedTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
  }, [rerender])

  return (
    <div className={style.userReply__container}>
      <CurrentUser
        userId={currentUser.id}
        coverImg={currentUser.cover}
        name={currentUser.name}
        account={currentUser.account}
        avatarImg={currentUser.avatar}
        description={currentUser.introduction}
        tweetCount={currentUser.tweetCount}
        followerCount={currentUser.followerCount}
        followingCount={currentUser.followingCount}
      >
        {repliedTweets.map((repliedTweet) => (
          <ReplyListItem
            key={repliedTweet.id}
            userId={repliedTweet.User.id}
            avatarImg={repliedTweet.User.avatar}
            name={repliedTweet.User.name}
            account={repliedTweet.User.account}
            time={repliedTweet.relativeTime}
            forUserId={repliedTweet.Tweet.UserId}
            forAccount={repliedTweet.Tweet.User.account}
            reply={repliedTweet.comment}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

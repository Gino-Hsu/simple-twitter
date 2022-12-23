import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import { ChangeTabContext } from '../contexts/sideBarControlContext/SideBarControlContext'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import { useGetCurrentUser, useCurrentUser } from '../contexts/usersContext/CurrentUserContext'

import style from './CurrentUserTweet.scss'

export default function CurrentUserTweet() {
  const [tweets, setTweets] = useState([])
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
    tweetApi
      .getUserTweets(currentUserId)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.log(error)
      })
  }, [rerender])
  return (
    <div className={style.userTweet__container}>
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
        {tweets.map((tweet) => (
          <TweetListItem
            key={tweet.id}
            tweet={tweet.description}
            tweetId={tweet.id}
            userId={tweet.User.id}
            userAvatar={tweet.User.avatar}
            account={tweet.User.account}
            userName={tweet.User.name}
            time={tweet.relativeTime}
            replyCount={tweet.replyCount}
            likeCount={tweet.likeCount}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

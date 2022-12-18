import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import ReplyListItem from '../UIComponents/listItems/ReplyListItem'

import userApi from '../API/userApi'
import replyApi from '../API/replyApi'
import { Alert } from '../utils/helpers'

import style from './CurrentUserReply.module.scss'

export default function CurrentUserReply() {
  const [currentUser, setCurrentUser] = useState([])
  const [repliedTweets, setRepliedTweets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])

  useEffect(() => {
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
  }, [])

  return (
    <div className={style.userReply__container}>
      <CurrentUser
        coverImg={currentUser.cover}
        name={currentUser.name}
        account={currentUser.account}
        avatarImg={currentUser.avatar}
        description={currentUser.introduction}
        tweetCount={currentUser.tweetCount}
        followerCount={currentUser.followersCount}
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
            forAccount={'少了'}
            reply={repliedTweet.comment}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

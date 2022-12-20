import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import userApi from '../API/userApi'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'
import {
  Rerender,
  HandleRerender,
} from '../contexts/rerenderContext/RenderContext'

import style from './CurrentUserTweet.scss'

export default function CurrentUserTweet() {
  const [currentUser, setCurrentUser] = useState([])
  const [tweets, setTweets] = useState([])
  const navigate = useNavigate()
  const rerender = Rerender()
  const handleRerender = HandleRerender()

  useEffect(() => {
    handleRerender('')
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

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import userApi from '../API/userApi'
import likeApi from '../API/likeApi'
import { Alert } from '../utils/helpers'
import {
  Rerender,
  HandleRerender,
} from '../contexts/rerenderContext/RenderContext'

import style from './CurrentUserLike.module.scss'

export default function CurrentUserLike() {
  const [currentUser, setCurrentUser] = useState([])
  const [likedTweets, setLikedTweets] = useState([])
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
    const currentUserId = localStorage.getItem('userId')
    likeApi
      .getUserLiked(currentUserId)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setLikedTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.log(error)
      })
  }, [])

  return (
    <div className={style.userLike__container}>
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
        {likedTweets.map((likedTweet) => (
          <TweetListItem
            key={likedTweet.id}
            tweet={likedTweet.Tweet.description}
            tweetId={likedTweet.TweetId}
            userId={likedTweet.Tweet.User.id}
            userAvatar={likedTweet.Tweet.User.avatar}
            account={likedTweet.Tweet.User.account}
            userName={likedTweet.Tweet.User.name}
            time={likedTweet.relativeTime}
            replyCount={likedTweet.Tweet.replyCount}
            likeCount={likedTweet.Tweet.likeCount}
            isLiked={likedTweet.Tweet.isLiked}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

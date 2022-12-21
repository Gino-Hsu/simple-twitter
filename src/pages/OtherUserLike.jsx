import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import { useFollowControl } from '../contexts/followedControlContext/FollowedControlContext'

import userApi from '../API/userApi'
import likeApi from '../API/likeApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserLike.module.scss'

export default function OtherUserLike() {
  const [user, setUser] = useState([])
  const [likedTweets, setLikedTweets] = useState([])
  const param = useParams()
  const navigate = useNavigate()
  const handleToggleFollow = useFollowControl()

  useEffect(() => {
    userApi
      .getOtherUser(param.user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請輸入登入',
        })
        navigate('/login')
        console.error(error)
      })
  }, [param.user_id])

  useEffect(() => {
    likeApi
      .getUserLiked(param.user_id)
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
          title: '請重新登入',
        })
        navigate('/login')
        console.log(error)
      })
  }, [param.user_id])

  return (
    <div className={style.userLike__container}>
      <OtherUser
        userId={user.id}
        coverImg={user.cover}
        name={user.name}
        account={user.account}
        avatarImg={user.avatar}
        introduction={user.introduction}
        tweetCount={user.tweetCount}
        followerCount={user.followerCount}
        followingCount={user.followingCount}
        onClick={handleToggleFollow}
        isFollowed={user.isFollowed}
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
      </OtherUser>
    </div>
  )
}

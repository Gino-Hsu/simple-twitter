import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import userApi from '../API/userApi'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserTweet.module.scss'

export default function OtherUserTweet() {
  const [user, setUser] = useState('')
  const [tweets, setTweets] = useState([])
  const param = useParams()
  const navigate = useNavigate()

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
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [param.user_id])

  useEffect(() => {
    tweetApi
      .getUserTweets(param.user_id)
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
  }, [param.user_id])

  return (
    <div className={style.userTweet__container}>
      <OtherUser
        userId={user.id}
        coverImg={user.cover}
        name={user.name}
        account={user.account}
        avatarImg={user.avatar}
        introduction={user.introduction}
        followerCount={user.followerCount}
        followingCount={user.followingCount}
        isFollowing={user.isFollowing}
        tweetCount={user.tweetCount}
      >
        {tweets.map((tweet) => (
          <TweetListItem
            key={tweet.id}
            tweet={tweet.description}
            userId={tweet.User.id}
            userAvatar={tweet.User.avatar}
            account={tweet.User.account}
            userName={tweet.User.name}
            time={tweet.relativeTime}
            replyCount={tweet.replyCount}
            likeCount={tweet.likeCount}
            isLiked={tweet.isLiked}
            tweetId={tweet.id}
          />
        ))}
      </OtherUser>
    </div>
  )
}

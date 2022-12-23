import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import { useFollowControl } from '../contexts/followedControlContext/FollowedControlContext'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import {
  useOtherUserContext,
  useGetOtherUserContext,
} from '../contexts/usersContext/OtherUserContext'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserTweet.module.scss'

export default function OtherUserTweet() {
  const param = useParams()
  const navigate = useNavigate()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const handleRerender = useHandleRerender()
  const handleToggleFollow = useFollowControl()
  const getOtherUserContext = useGetOtherUserContext()
  const [tweets, setTweets] = useState([])

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id, navigate)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
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
        console.log(error)
        navigate('/login')
      })
  }, [param.user_id, rerender])

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
        onClick={handleToggleFollow}
        isFollowed={user.isFollowed}
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

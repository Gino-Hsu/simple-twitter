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
import likeApi from '../API/likeApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserLike.module.scss'

export default function OtherUserLike() {
  const param = useParams()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const handleRerender = useHandleRerender()
  const handleToggleFollow = useFollowControl()
  const getOtherUserContext = useGetOtherUserContext()
  const navigate = useNavigate()
  const [likedTweets, setLikedTweets] = useState([])

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id, navigate)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
    likeApi
      .getUserLiked(param.user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setLikedTweets(data)
      })
      .catch(() => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入',
        })
        navigate('/login')
      })
  }, [param.user_id, rerender])

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

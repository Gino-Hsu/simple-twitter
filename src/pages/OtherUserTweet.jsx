import React, { useEffect } from 'react'
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
  useGetConfirmPageContext,
  useOtherUserTweetsContext,
} from '../contexts/usersContext/OtherUserContext'

import style from './OtherUserTweet.module.scss'

export default function OtherUserTweet() {
  const page = 'tweet'
  const param = useParams()
  const navigate = useNavigate()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const tweets = useOtherUserTweetsContext()
  const handleRerender = useHandleRerender()
  const handleToggleFollow = useFollowControl()
  const getOtherUserContext = useGetOtherUserContext()
  const getOtherUserTweetsContext = useGetConfirmPageContext()
  const id = localStorage.getItem('userId')

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
    getOtherUserTweetsContext(page, param.user_id)
  }, [param.user_id, rerender])

  useEffect(() => {
    !id && navigate('/login')
  }, [])
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

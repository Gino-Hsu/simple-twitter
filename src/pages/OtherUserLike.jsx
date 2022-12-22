import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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
  useOtherUserLikeContext,
  useGetOtherUserLikeContext,
} from '../contexts/usersContext/OtherUserContext'

import style from './OtherUserLike.module.scss'

export default function OtherUserLike() {
  const param = useParams()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const handleRerender = useHandleRerender()
  const likedTweets = useOtherUserLikeContext()
  const handleToggleFollow = useFollowControl()
  const getOtherUserContext = useGetOtherUserContext()
  const getOtherUserLikeContext = useGetOtherUserLikeContext()

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
    getOtherUserLikeContext(param.user_id)
  }, [param.user_id, handleToggleFollow])

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

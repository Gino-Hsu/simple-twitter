import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import ReplyListItem from '../UIComponents/listItems/ReplyListItem'
import { useFollowControl } from '../contexts/followedControlContext/FollowedControlContext'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import {
  useOtherUserContext,
  useGetOtherUserContext,
  useOtherUserReplyContext,
  useGetConfirmPageContext,
} from '../contexts/usersContext/OtherUserContext'

import style from './OtherUserReply.module.scss'

export default function OtherUserReply() {
  const page = 'reply'
  const param = useParams()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const handleRerender = useHandleRerender()
  const handleToggleFollow = useFollowControl()
  const repliedTweets = useOtherUserReplyContext()
  const getOtherUserContext = useGetOtherUserContext()
  const getOtherUserReplyContext = useGetConfirmPageContext()
  const navigate = useNavigate()
  const id = localStorage.getItem('userId')

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
    getOtherUserReplyContext(page, param.user_id)
  }, [param.user_id, rerender])

  useEffect(() => {
    !id && navigate('/login')
  }, [])

  return (
    <div className={style.userReply__container}>
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
            forAccount={repliedTweet.Tweet.User.account}
            reply={repliedTweet.comment}
          />
        ))}
      </OtherUser>
    </div>
  )
}

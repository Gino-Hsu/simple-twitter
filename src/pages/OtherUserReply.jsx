import React, { useEffect, useState } from 'react'
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
} from '../contexts/usersContext/OtherUserContext'
import replyApi from '../API/replyApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserReply.module.scss'

export default function OtherUserReply() {
  const param = useParams()
  const rerender = useRerender()
  const user = useOtherUserContext()
  const handleRerender = useHandleRerender()
  const handleToggleFollow = useFollowControl()
  const getOtherUserContext = useGetOtherUserContext()
  const navigate = useNavigate()
  const [repliedTweets, setRepliedTweets] = useState([])

  useEffect(() => {
    handleRerender('')
    getOtherUserContext(param.user_id, navigate)
  }, [param.user_id, rerender])

  useEffect(() => {
    handleRerender('')
    replyApi
      .getUserReliedTweets(param.user_id)
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
  }, [param.user_id, rerender])

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

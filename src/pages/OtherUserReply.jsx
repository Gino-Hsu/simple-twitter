import React, { useState, useEffect } from 'react'
import OtherUser from '../components/otherUser/OtherUser'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import ReplyListItem from '../UIComponents/listItems/ReplyListItem'

import userApi from '../API/userApi'
import replyApi from '../API/replyApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserReply.module.scss'

export default function OtherUserReply() {
  const [user, setUser] = useState('')
  const [repliedTweets, setRepliedTweets] = useState([])
  const navigate = useNavigate()
  const param = useParams()

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
  }, [])

  useEffect(() => {
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
        followerCount={user.followersCount}
        followingCount={user.followingCount}
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

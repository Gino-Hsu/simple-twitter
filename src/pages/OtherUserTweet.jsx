import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import userApi from '../API/userApi'

import style from './OtherUserTweet.module.scss'

import avatar from '../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

export default function OtherUserTweet({
  handleShowReplyModel,
  handleHideModel,
  replyModelIsShow,
}) {
  const [user, setUser] = useState('')
  const param = useParams()

  console.log(user)

  useEffect(() => {
    userApi.getOtherUser(param.user_id).then((res) => {
      const { data } = res
      if (res.status !== 200) {
        throw new Error(data.message)
      }
      setUser(data)
    })
  }, [])

  return (
    <div className={style.userTweet__container}>
      <OtherUser
        coverImg={user.cover}
        name={user.name}
        account={user.account}
        avatarImg={user.avatar}
        introduction={user.introduction}
        followerCount={user.followersCount}
        followingCount={user.followingCount}
      >
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
          handleShowReplyModel={handleShowReplyModel}
          handleHideModel={handleHideModel}
          replyModelIsShow={replyModelIsShow}
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
          handleShowReplyModel={handleShowReplyModel}
          handleHideModel={handleHideModel}
          replyModelIsShow={replyModelIsShow}
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={avatar}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
      </OtherUser>
    </div>
  )
}

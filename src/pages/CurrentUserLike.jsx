import React from 'react'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import style from './CurrentUserLike.module.scss'

import cover from '../public/default_background@2x.png'
import avatar from '../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

export default function CurrentUserLike({ setStep }) {
  return (
    <div className={style.userLike__container}>
      <CurrentUser
        setStep={setStep}
        coverImg={cover}
        name="Gino"
        account="gino"
        avatarImg={avatar}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum in quibusdam possimus atque velit, a adipisci perferendis, porro et enim ipsum dignissimos laboriosam veritatis quaerat tempore saepe doloribus laborum!"
        followerCount="34"
        followingCount="59"
      >
        <TweetListItem
          setStep={setStep}
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
      </CurrentUser>
    </div>
  )
}

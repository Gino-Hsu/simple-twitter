import React from 'react'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import style from './OtherUserTweet.module.scss'

import cover from '../public/default_background@2x.png'
import avatar from '../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

export default function OtherUserTweet() {
  return (
    <div className={style.userTweet__container}>
      <OtherUser
        coverImg={cover}
        name="Gino"
        account="gino"
        avatarImg={avatar}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum in quibusdam possimus atque velit, a adipisci perferendis, porro et enim ipsum dignissimos laboriosam veritatis quaerat tempore saepe doloribus laborum!"
        followerCount="34"
        followingCount="59"
      >
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

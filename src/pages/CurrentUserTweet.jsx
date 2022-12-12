import React from 'react'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import cover from '../public/default_background@2x.png'
import avatar from '../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

export default function CurrentUserTweet() {
  return <div>
    <CurrentUser coverImg={cover} name="Gino" account="gino" avatarImg={avatar} description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum in quibusdam possimus atque velit, a adipisci perferendis, porro et enim ipsum dignissimos laboriosam veritatis quaerat tempore saepe doloribus laborum!" followerCount="34" followingCount="59">
      <TweetListItem />
    </CurrentUser>
  </div>
}


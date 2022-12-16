import React from 'react'
import PopularUserItem from '../../UIComponents/layout/PopularUserItem'
import style from './PopularUser.module.scss'

import user1 from '../../public/seed/angry-birds.png'
import user2 from '../../public/seed/chat.png'
import user3 from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'
import cover from '../../public/default_background@2x.png'

const PROFILE__CURRENT__USER =[{
    id: 1,
    name: 'Jeff',
    account: 'jeff000',
    avatar: { user1 },
    introduction: '安安，今天好嗎',
    cover: { cover },
    followerCount: 20,
    followingCount: 25,
    follow: [3],
  }]

const PROFILE__USER = [
  {
    id: 1,
    name: 'Jeff',
    account: 'jeff000',
    avatar: { user1 },
    introduction: '安安，今天好嗎',
    cover: { cover },
    followerCount: 20,
    followingCount: 25,
    follow: [3],
  },
  {
    id: 2,
    name: 'Apple',
    account: 'apple1234',
    avatar: { user2 },
    introduction: '好想睡覺',
    cover: { cover },
    followerCount: 14,
    followingCount: 24,
    follow: [],
  },
  {
    id: 3,
    name: 'Egg',
    account: 'egg4321',
    avatar: { user3 },
    introduction: '錢花好兇',
    cover: { cover },
    followerCount: 40,
    followingCount: 8,
    follow: [],
  },
]

export default function PopularUser() {
  console.log(PROFILE__CURRENT__USER.follow)
  return (
    <div className={style.popularUser__container}>
      <div className={style.popularUser__title}>推薦跟隨</div>
      <div className={style.line}></div>
      <div className={style.popularUser__main}>
        {PROFILE__USER.map((item) => {
          console.log()
          return (
            <PopularUserItem
              key={item.id}
              name={item.name}
              account={item.account} 
              avatar={item.avatar}
              btnStyle="btn__pill__middle"
              text="正在跟隨"
              container="btn__follow__container__action"
            />
          )
        })}
      </div>
    </div>
  )
}

import React from 'react'
import style from './UserHeader.module.scss'

export default function UserHeader({ name, tweetCount }) {
  return (
    <div className={style.header__container}>
      <div className={style.icon}>
        <div className={style.icon__container}>
          <img className={style.img} src="" alt="" />
        </div>
      </div>
      <div className={style.text}>
        <div className={style.text__container}>
          <div className={style.name}>{name}</div>
          <div className={style.tweet__count}>{tweetCount}推文</div>
        </div>
      </div>
    </div>
  )
}

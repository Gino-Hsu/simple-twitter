import React from 'react'

import style from './AdminUserCard.module.scss'

export default function UserCardItem({cover, name, avatar, account, tweetCount, likeCount, followingCount, followerCount}) {
  return (
    <div className={style.card__container}>
      <div className={style.background__img}>
        <img src={cover} className={style.img} alt="background img" />
      </div>
      <div className={style.info}>
        <div className={style.title}>
          <div className={style.name}>{name}</div>
          <div className={style.account}>@{account}</div>
        </div>
        <div className={style.info__action}>
          <div className={style.action__container}>
            <div className={style.icon}>
              <img className={style.icon__tweet} alt="icon tweet" />
            </div>
            <span>{tweetCount}</span>
          </div>
          <div className={style.action__container}>
            <div className={style.icon}>
              <img className={style.icon__like} alt="icon like" />
            </div>
            <span>{likeCount}</span>
          </div>
        </div>
        <div className={style.follow}>
          <p>
            <span>{followingCount}個</span>跟隨中
          </p>
          <p>
            <span>{followerCount}位</span>跟隨者
          </p>
        </div>
      </div>
      <div className={style.user}>
        <div className={style.user__avatar}>
          <div className={style.avatar__container}>
            <img className={style.avatar__img} src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  )
}

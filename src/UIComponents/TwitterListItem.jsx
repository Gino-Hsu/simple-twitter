import React from 'react'
import style from './TwitterListItem.module.scss'

export default function TwitterListItem({
  twitter,
  userAvatar,
  account,
  userName,
  time,
  twitterReply,
  twitterLike,
}) {
  return (
    <div className={style.listItem__container}>
      <div className={style.listItem__avatar}>
        <div>
          <img src={userAvatar} alt="user avatar" />
        </div>
      </div>
      <div className={style.listItem__info}>
        <div className={style.info__account}>
          <p>{userName}</p>
          <span>{`${account} 。 ${time}`}</span>
        </div>
        <div className={style.info__tweet}>
          <p>{twitter}</p>
        </div>
        <div className={style.info__icons}>
          <div className={style.icon__reply}>
            <div className={style.cursor}>
              <img className="" alt="reply button" />
            </div>
            <span>{twitterReply}</span>
          </div>
          <div className={style.icon__like}>
            <div className={style.cursor}>
              <img className="" alt="like button" />
            </div>
            <span>{twitterLike}</span>
          </div>
        </div>
      </div>
      <div className={style.div}>
        <div className={style.line}></div>
      </div>
    </div>
  )
}

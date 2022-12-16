import React from 'react'

import style from './AdminListItem.module.scss'

export default function AdminListItem({
  avatar,
  name,
  account,
  description,
  time,
  tweetId,
  onClick,
}) {
  return (
    <div className={style.listItem__container}>
      <div className={style.avatar}>
        <img className={style.avatar__img} src={avatar} alt="Avatar" />
      </div>
      <div className={style.listItem__body}>
        <div className={style.listItem__body__header}>
          <div className={style.header__info}>
            <div className={style.info__name}>{name}</div>
            <div className={style.info__item}>
              <div className={style.info__item__account}>@{account}</div>
              <div className={style.info__item__spot}></div>
              <div className={style.info__item__time}>{time}</div>
            </div>
          </div>
          <div className={style.btn__delete} onClick={() => onClick(tweetId)}>
            <img className={style.delete__icon} alt="Delete" />
          </div>
        </div>
        <div className={style.tweet__text}>{description}</div>
      </div>
    </div>
  )
}

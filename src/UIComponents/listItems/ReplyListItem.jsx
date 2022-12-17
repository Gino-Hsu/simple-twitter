import React from 'react'
import { Link } from 'react-router-dom'

import style from './ReplyListItem.module.scss'

export default function ReplyListItem({
  avatarImg,
  name,
  userId,
  account,
  time,
  forAccount,
  reply,
}) {
  return (
    <div className={style.listItem__container}>
      <Link to={`user/other/tweet/${userId}`}>
        <div className={style.avatar}>
          <img className={style.avatar__img} src={avatarImg} alt="Avatar" />
        </div>
      </Link>
      <div className={style.listItem__body}>
        <div className={style.replyBy}>
          <div className={style.replyBy__name}>{name}</div>
          <div className={style.replyBy__account__time}>
            <div className={style.replyBy__account}>{`@${account}`}</div>
            <div className={style.spot} />
            <div className={style.replyBy__time}>{time}</div>
          </div>
        </div>
        <div className={style.reply__for}>
          <p>回覆</p>
          <p className={style.account}>{`@${forAccount}`}</p>
        </div>
        <div className={style.reply__text}>{reply}</div>
      </div>
    </div>
  )
}

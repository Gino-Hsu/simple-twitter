import React from 'react'

import style from './ReplyListItem.module.scss'

export default function ReplyListItem({
  avatar,
  name,
  account,
  time,
  forAccount,
  reply,
}) {
  return (
    <div className={style.listItem__container}>
      <div className={style.avatar}>
        <img className={style.avatar__img} src={avatar} alt="Avatar" />
      </div>
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

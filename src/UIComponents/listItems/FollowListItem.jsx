import React from 'react'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './FollowListItem.module.scss'

export default function FollowListItem({
  avatar,
  name,
  account,
  time,
  tweet,
  btnStyle,
  btnText,
}) {
  return (
    <div className={style.listItem__container}>
      <div className={style.avatar}>
        <img className={style.avatar__img} src={avatar} alt="Avatar" />
      </div>
      <div className={style.listItem__body}>
        <div className={style.listItem__body__header}>
          <div className={style.tweetBy}>
            <div className={style.tweetBy__name}>{name}</div>
            <div className={style.tweetBy__account__time}>
              <div className={style.tweetBy__account}>{`@${account}`}</div>
              <div className={style.spot} />
              <div className={style.tweetBy__time}>{time}</div>
            </div>
          </div>
          <div className={style.btn__container}>
            <ButtonUI btnStyle={btnStyle} text={btnText} />
          </div>
        </div>

        <div className={style.tweet__text}>{tweet}</div>
      </div>
    </div>
  )
}

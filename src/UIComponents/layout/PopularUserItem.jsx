import React from 'react'
import ButtonUI from '../buttons/ButtonUI'
import style from './PopularUserItem.module.scss'

export default function PopularUserItem({
  btnStyle,
  text,
  container,
  name,
  account,
  avatar,
}) {
  return (
    <div className={style.item}>
      <div className={style.user__avatar}>
        <img src={avatar} alt="avatar" />
      </div>
      <div className={style.user__info}>
        <p className={style.user__info__name}>{name}</p>
        <p className={style.user__info__account}>{`@${account}`}</p>
      </div>
      <div className={style.btn__follow}>
        <div className={style[container]}>
          <ButtonUI btnStyle={btnStyle} text={text} />
        </div>
      </div>
    </div>
  )
}

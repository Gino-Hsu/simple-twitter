import React from 'react'
import ButtonUI from '../buttons/ButtonUI'
import style from './PopularUserItem.module.scss'

export default function PopularUserItem({ btnStyle, text, container }) {
  return (
    <div className={style.item}>
      <div className={style.user__avatar}>
        <img src="" alt="logo" />
      </div>
      <div className={style.user__info}>
        <p className={style.user__info__name}>PizzaHut1</p>
        <p className={style.user__info__account}>@pizzahut</p>
      </div>
      <div className={style.btn__follow}>
        <div className={style[container]}>
          <ButtonUI btnStyle={btnStyle} text={text} />
        </div>
      </div>
    </div>
  )
}

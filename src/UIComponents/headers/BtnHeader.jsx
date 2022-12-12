import React from 'react'
import ButtonUI from '../buttons/ButtonUI'
import style from './BtnHeader.module.scss'

export default function HeaderBtn({ title, text }) {
  return (
    <div className={style.header__container}>
      <div className={style.header__return}>
        <div className={style.icon}>
          <div className={style.icon__container}>
            <img className={style.img} src="" alt="" />
          </div>
        </div>
        <div className={style.text}>
          <div className={style.text__container}>
            <div className={style.title}>{title}</div>
          </div>
        </div>
      </div>
      <div className={style.header__btn}>
        <ButtonUI btnStyle="btn__pill__middle" text={text} />
      </div>
    </div>
  )
}

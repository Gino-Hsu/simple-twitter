import React from 'react'
import ButtonUI from './ButtonUI'
import style from './PopularUserItem.module.scss'

export default function PopularUserItem() {
  return (
    <div className={style.item}>
      <div className={style.user__avatar}>
        <img src="" alt="logo" />
      </div>
      <div className={style.user__info}>
        <p className={style.user__info__name}>Pizza Hut</p>
        <p className={style.user__info__account}>@pizzahut</p>
      </div>
      <div className={style.btn__follow}>
        <ButtonUI btnStyle="btn__popularUser__following" text="正在跟隨" />
        {/* <ButtonUI btnStyle="btn__popularUser__unFollow" text="跟隨" /> */}
      </div>
    </div>
  )
}

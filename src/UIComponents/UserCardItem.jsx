import React from 'react'

import style from './UserCardItem'

export default function UserCardItem() {
  return (
    <div className={style.card__container}>
      <div className={style.background__img}>
        <div className={style.img__container}>
          <img className={style.img} />
        </div>
      </div>
      <div className={style.info}>
        <div className={style.info__title}>
          <div className={style}></div>
          <div className={style}></div>
        </div>
        <div className={style}></div>
        <div className={style}></div>
      </div>
      <div>跳出頁面的頭像</div>
    </div>
  )
}

import React from 'react'

import style from './AdminListItem.module.scss'

export default function AdminListItem() {
  return (
    <div className={style.listItem__container}>
      <div className={style.avatar}>
        <img className={style.avatar__img} src="" alt="Avatar" />
      </div>
      <div className={style.listItem__body}>
        <div className={style.listItem__body__header}>
          <div className={style.header__info}>
            <div className={style.info__name}>Jeff</div>
            <div className={style.info__item}>
              <div className={style.info__item__account}>@jeff</div>
              <div className={style.info__item__spot}></div>
              <div className={style.info__item__time}>3小時</div>
            </div>
          </div>
          <div className={style.header__btn}>
            <div className={style.btn__delete}>
              <img className={style.delete__icon} alt="Delete" />
            </div>
          </div>
        </div>
        <div className={style.tweet__text}>
          推文、推文推文推文推文推文推文推文 推文 推文 推文 推文 推文 推文 推文
          推文 推文 推文 推文 推文 推文 推文 推文 推文 推文 推文 推文 推文 推文
          推文 推文 推文 推文 推文 推文 推文 推文 推文 推文 推文
        </div>
      </div>
    </div>
  )
}

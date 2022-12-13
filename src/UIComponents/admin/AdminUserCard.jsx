import React from 'react'

import style from './AdminUserCard.module.scss'

export default function UserCardItem() {
  return (
    <div className={style.card__container}>
      <div className={style.background__img}>
        <div className={style.img__container}>
          <img className={style.img} alt="background img" />
        </div>
      </div>
      <div className={style.info}>
        <div className={style.info__action}>
          <div className={style.action__container}>
            <div className={style.icon}>
              <img className={style.icon__tweet} alt="icon tweet" />
            </div>
            <span>1.5k</span>
          </div>
          <div className={style.action__container}>
            <div className={style.icon}>
              <img className={style.icon__like} alt="icon like" />
            </div>
            <span>20k</span>
          </div>
        </div>
        <div className={style.follow}>
          <p>
            <span>34個</span>跟隨中
          </p>
          <p>
            <span>59位</span>跟隨者
          </p>
        </div>
      </div>
      <div className={style.user}>
        <div className={style.user__avatar}>
          <div className={style.avatar__container}>
            <img className={style.avatar__img} src="" alt="avatar" />
          </div>
        </div>
        <div className={style.title}>
          <div className={style.name}>John Doe</div>
          <div className={style.account}>@john</div>
        </div>
      </div>
    </div>
  )
}

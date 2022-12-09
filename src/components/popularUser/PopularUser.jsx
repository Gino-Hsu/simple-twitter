import React from 'react'
import PopularUserItem from '../../UIComponents/PopularUserItem'
import style from './PopularUser.module.scss'

export default function PopularUser() {
  return (
    <div className={style.popularUser__container}>
      <div className={style.popularUser__title}>推薦跟隨</div>
      <div className={style.line}></div>
      <div className={style.popularUser__main}>
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle__default"
          text="跟隨"
          container="btn__follow__container"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle__default"
          text="跟隨"
          container="btn__follow__container"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle__default"
          text="跟隨"
          container="btn__follow__container"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle"
          text="正在跟隨"
          container="btn__follow__container__action"
        />
        <PopularUserItem
          btnStyle="btn__pill__middle__default"
          text="跟隨"
          container="btn__follow__container"
        />
      </div>
    </div>
  )
}

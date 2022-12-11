import React from 'react'

import style from './FollowTab.module.scss'

export default function FollowTab() {
  return (
    <div className={style.tab__container}>
      <div className={style.follow}>
        <div className={style.follower}>跟隨者</div>
      </div>
      <div className={style.follow}>
        <div className={style.following}>正在跟隨</div>
      </div>
    </div>
  )
}

import React from 'react'

import style from './UserToggleMenu.module.scss'


export default function UserToggleMenu() {
  return (
    <div className={style.tab__container}>
      <div className={style.userMenu}>
        <div className={style.tweet}>推文</div>
      </div>
      <div className={style.userMenu}>
        <div className={style.reply}>回覆</div>
      </div>
      <div className={style.userMenu}>
        <div className={style.like}>喜歡的內容</div>
      </div>
    </div>
  )
}

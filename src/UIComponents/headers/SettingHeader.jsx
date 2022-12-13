import React from 'react'
import style from './SettingHeader.module.scss'

export default function HeaderText() {
  return (
    <div className={style.header__container}>
      <div className={style.title}>
        <div className={style.title__text}>帳戶設定</div>
      </div>
    </div>
  )
}

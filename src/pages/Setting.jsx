import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import SettinForm from '../components/settingForm/SettinForm'

import style from './Setting.module.scss'

export default function Setting() {
  return (
    <div className={style.setting}>
      <div className={style.setting__sideBar}>
        <SideBar />
      </div>
      <div className={style.setting__form}>
        <SettinForm />
      </div>
    </div>
  )
}

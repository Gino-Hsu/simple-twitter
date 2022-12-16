import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import SettingForm from '../components/settingForm/SettinForm'

import style from './Setting.module.scss'

export default function Setting({ step, handleChangeTab }) {
  return (
    <div className={style.setting}>
      <div className={style.setting__sideBar}>
        <SideBar step={step} handleChangeTab={handleChangeTab} />
      </div>
      <div className={style.setting__form}>
        <SettingForm />
      </div>
    </div>
  )
}

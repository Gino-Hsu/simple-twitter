import React from 'react'
import SideBar from '../components/sideBar/SideBar'
import SettingForm from '../components/settingForm/SettinForm'
import { ModalControlContextProvider } from '../contexts/modalControlContext/ModalControlContext'

import style from './Setting.module.scss'

export default function Setting() {
  return (
    <ModalControlContextProvider>
      <div className={style.setting}>
        <div className={style.setting__sideBar}>
          <SideBar />
        </div>
        <div className={style.setting__form}>
          <SettingForm />
        </div>
        <div className={style.unContainer} />
      </div>
    </ModalControlContextProvider>
  )
}

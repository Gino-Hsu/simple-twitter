import React from 'react'
import RegistForm from '../components/registForm/RegistForm'

import style from './RegistAndLogin.module.scss'

export default function Regist() {
  return (
    <div className={style.regist__container}>
      <RegistForm />
    </div>
  )
}

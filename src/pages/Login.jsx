import React from 'react'
import LoginForm from '../components/loginForm/LoginForm'

import style from './RegistAndLogin.module.scss'

export default function Login() {
  return (
    <div className={style.regist__container}>
      <LoginForm />
    </div>
  )
}

import React from 'react'
import LoginForm from '../components/loginForm/LoginForm'

import style from './RegistAndLogin.module.scss'

import HeaderBtn from '../UIComponents/headers/HeaderBtn'
import UserHeader from '../UIComponents/headers/UserHeader'
import HeaderText from '../UIComponents/headers/HeaderText.jsx'

export default function Login() {
  return (
    <div className={style.regist__container}>
      <UserHeader name="jeff" tweetCount="22" />
      <HeaderText />
      <HeaderBtn />
      <LoginForm />
    </div>
  )
}

import React, { useState } from 'react'
import LoginForm from '../components/loginForm/LoginForm'

// import authorizationAPI from '../API/authorization'

import style from './RegistAndLogin.module.scss'

export default function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  // const handleLogin = () => {
  //   authorizationAPI.
  // }

  // const handleRegist = () => {

  // }

  // const handleAdminLogin = () => {

  // }

  return (
    <div className={style.form__container}>
      <LoginForm
        account={account}
        password={password}
        handleAccountChange={handleAccountChange}
        handlePasswordChange={handlePasswordChange}
        // handleLogin={handleLogin}
        // handleRegist={handleRegist}
        // handleAdminLogin={handleAdminLogin}
      />
    </div>
  )
}

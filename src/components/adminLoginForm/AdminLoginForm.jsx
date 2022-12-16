import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'

import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './AdminLoginForm.module.scss'

export default function AdminLoginForm() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className={style.form__container}>
      <div className={style.logo}>
        <img className={style.logo__img} alt="Logo" />
      </div>
      <h1 className={style.title}>後台登入</h1>
      <form className={style.form}>
        <div className={style.input__container}>
          <LoginAndRegistInput
            inputId="account"
            inputName="帳號"
            inputPlaceHolder="請輸入帳號"
            inputType="text"
            inputValue={account}
            onChange={handleAccountChange}
          />
          <LoginAndRegistInput
            inputId="password"
            inputName="密碼"
            inputPlaceHolder="請輸入密碼"
            inputType="password"
            inputValue={password}
            onChange={handlePasswordChange}
          />
        </div>
        <ButtonUI btnStyle="btn__pill__large" text="登入" />
        <Link to="/login">
          <div className={style.link}>
            <ButtonUI btnStyle="link" text="前台登入" />
          </div>
        </Link>
      </form>
    </div>
  )
}

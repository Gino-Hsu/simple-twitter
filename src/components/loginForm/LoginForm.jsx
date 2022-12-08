import React, { useState } from 'react'
import { LoginAndRegistInput } from '../../UIComponents/Input'
import ButtonUI from '../../UIComponents/ButtonUI'

import style from './LoginForm.module.scss'

export default function LoginForm() {
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
      <h1 className={style.title}>登入 Alphitter</h1>
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
        <div className={style.link}>
          <ButtonUI btnStyle="link" text="註冊" />
          <div className={style.spot} />
          <ButtonUI btnStyle="link" text="後台登入" />
        </div>
      </form>
    </div>
  )
}

import React from 'react'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './LoginForm.module.scss'

export default function LoginForm({
  account,
  password,
  handleAccountChange,
  handlePasswordChange,
  handleLogin,
  handleRegist,
  handleAdminLogin,
}) {
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
        <ButtonUI
          btnStyle="btn__pill__large"
          text="登入"
          onClick={handleLogin}
        />
        <div className={style.link}>
          <ButtonUI btnStyle="link" text="註冊" onClick={handleRegist} />
          <div className={style.spot} />
          <ButtonUI
            btnStyle="link"
            text="後台登入"
            onClick={handleAdminLogin}
          />
        </div>
      </form>
    </div>
  )
}

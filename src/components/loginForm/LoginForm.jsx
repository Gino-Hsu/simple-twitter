import React from 'react'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import { Link } from 'react-router-dom'

import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './LoginForm.module.scss'

export default function LoginForm({
  account,
  password,
  handleAccountChange,
  handlePasswordChange,
  handleLogin,
  errorMessage,
}) {
  return (
    <div className={style.form__container}>
      <div className={style.logo}>
        <img className={style.logo__img} alt="Logo" />
      </div>
      <h1 className={style.title}>登入 Alphitter</h1>
      <form className={style.form} onSubmit={(e) => handleLogin(e)}>
        <div className={style.input__container}>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="account"
              inputName="帳號"
              inputPlaceHolder="請輸入帳號"
              inputType="text"
              inputValue={account}
              onChange={handleAccountChange}
              error={errorMessage.account}
            />
            {errorMessage.account !== '' && (
              <p className={style.account__error}>{errorMessage.account}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="password"
              inputName="密碼"
              inputPlaceHolder="請輸入密碼"
              inputType="password"
              inputValue={password}
              onChange={handlePasswordChange}
              error={errorMessage.password}
            />
            {errorMessage.password !== '' && (
              <p className={style.password__error}>{errorMessage.password}</p>
            )}
          </div>
        </div>
        <ButtonUI btnStyle="btn__pill__large" text="登入" />
        <div className={style.link}>
          <Link to="/regist">
            <ButtonUI btnStyle="link" text="註冊" />
          </Link>
          <div className={style.spot} />
          <Link to="/admin">
            <ButtonUI btnStyle="link" text="後台登入" />
          </Link>
        </div>
      </form>
    </div>
  )
}

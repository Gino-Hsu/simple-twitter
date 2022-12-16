import React from 'react'
import { Link } from 'react-router-dom'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'

import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './AdminLoginForm.module.scss'

export default function AdminLoginForm({
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
      <h1 className={style.title}>後台登入</h1>
      <form className={style.form} onSubmit={handleLogin}>
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
        <Link to="/login">
          <div className={style.link}>
            <ButtonUI btnStyle="link" text="前台登入" />
          </div>
        </Link>
      </form>
    </div>
  )
}

import React from 'react'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import { Link } from 'react-router-dom'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './RegistForm.module.scss'

export default function RegistForm({
  account,
  name,
  email,
  password,
  checkPassword,
  onAccountChange,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onCheckPasswordChange,
  onSubmit,
  errorMessage,
}) {
  return (
    <div className={style.form__container}>
      <div className={style.logo}>
        <img className={style.logo__img} alt="Logo" />
      </div>
      <h1 className={style.title}>建立你的帳號</h1>
      <form className={style.form} onSubmit={onSubmit}>
        <div className={style.input__container}>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="account"
              inputName="帳號"
              inputPlaceHolder="請輸入帳號"
              inputType="text"
              inputValue={account}
              onChange={onAccountChange}
              error={errorMessage.account}
            />
            {errorMessage && (
              <p className={style.account__error}>{errorMessage.account}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="name"
              inputName="名稱"
              inputPlaceHolder="請輸入名稱"
              inputType="text"
              inputValue={name}
              onChange={onNameChange}
              error={errorMessage.name}
            />
            {errorMessage && (
              <p className={style.name__error}>{errorMessage.name}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="email"
              inputName="Email"
              inputPlaceHolder="請輸入 Email"
              inputType="text"
              inputValue={email}
              onChange={onEmailChange}
              error={errorMessage.email}
            />
            {errorMessage && (
              <p className={style.email__error}>{errorMessage.email}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="password"
              inputName="密碼"
              inputPlaceHolder="請輸入密碼"
              inputType="password"
              inputValue={password}
              onChange={onPasswordChange}
              error={errorMessage.password}
            />
            {errorMessage && (
              <p className={style.password__error}>{errorMessage.password}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="checkPassword"
              inputName="密碼確認"
              inputPlaceHolder="請再次輸入密碼"
              inputType="password"
              inputValue={checkPassword}
              onChange={onCheckPasswordChange}
              error={errorMessage.checkPassword}
            />
            {errorMessage && (
              <p className={style.checkPassword__error}>
                {errorMessage.checkPassword}
              </p>
            )}
          </div>
        </div>
        <ButtonUI btnStyle="btn__pill__large" text="註冊" />
        <div className={style.link}>
          <Link to="/login">
            <ButtonUI btnStyle="link" text="取消" />
          </Link>
        </div>
      </form>
    </div>
  )
}

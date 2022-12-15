import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './RegistForm.module.scss'

export default function RegistForm() {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handleNameChange = (e) => {
    setName(e.target.value)
  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div className={style.form__container}>
      <div className={style.logo}>
        <img className={style.logo__img} alt="Logo" />
      </div>
      <h1 className={style.title}>建立你的帳號</h1>
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
            inputId="name"
            inputName="名稱"
            inputPlaceHolder="請輸入名稱"
            inputType="text"
            inputValue={name}
            onChange={handleNameChange}
          />
          <LoginAndRegistInput
            inputId="email"
            inputName="Email"
            inputPlaceHolder="請輸入 Email"
            inputType="text"
            inputValue={email}
            onChange={handleEmailChange}
          />
          <LoginAndRegistInput
            inputId="password"
            inputName="密碼"
            inputPlaceHolder="請輸入密碼"
            inputType="password"
            inputValue={password}
            onChange={handlePasswordChange}
          />
          <LoginAndRegistInput
            inputId="confirmPassword"
            inputName="密碼確認"
            inputPlaceHolder="請再次輸入密碼"
            inputType="password"
            inputValue={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
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

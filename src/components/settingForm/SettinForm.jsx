import React, { useState } from 'react'
import SettingHeader from '../../UIComponents/headers/SettingHeader'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import userApi from '../../API/userApi'
import { Toast } from '../../utils/helpers'

import style from './SettingForm.module.scss'

export default function SettinForm() {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')

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
    setCheckPassword(e.target.value)
  }

  const handleSettingSubmit = (e) => {
    console.log('here')
    e.preventDefault()
    const userId = localStorage.getItem('userId')
    userApi
      .putUserSetting({ userId, account, name, email, password, checkPassword })
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功更新設定!',
        })
        console.log(data)
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '更新設定失敗!',
        })
        console.error(error)
      })
  }

  return (
    <div className={style.setting}>
      <div className={style.setting__header}>
        <SettingHeader />
      </div>
      <form
        className={style.setting__form}
        onSubmit={(e) => {
          handleSettingSubmit(e)
        }}
      >
        <div className={style.setting__form__inputs}>
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
            inputPlaceHolder="請輸入使用者名稱"
            inputType="text"
            inputValue={name}
            onChange={handleNameChange}
          />
          <LoginAndRegistInput
            inputId="email"
            inputName="Email"
            inputPlaceHolder="請輸入 Email"
            inputType="email"
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
            inputValue={checkPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>
        <div className={style.setting__form__buttons}>
          <div className={style.setting__form__buttons__save}>
            <ButtonUI btnStyle="btn__pill__large" text="儲存" />
          </div>
          <div className={style.setting__form__buttons__logout}>
            <ButtonUI btnStyle="link" text="登出" />
          </div>
        </div>
      </form>
    </div>
  )
}

import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingHeader from '../../UIComponents/headers/SettingHeader'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import userApi from '../../API/userApi'
import { Toast, Alert } from '../../utils/helpers'

import style from './SettingForm.module.scss'

export default function SettinForm() {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const formIsValid = useRef('true')
  const navigate = useNavigate()

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

  const isValid = () => {
    setErrorMessage({})
    if (!email.includes('@')) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        email: "Email 格式不正確，缺少 '@'",
      }))
      formIsValid.current = 'false'
    }
    if (account.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        account: '帳號不能空白',
      }))
      formIsValid.current = 'false'
    }
    if (name.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        name: '名稱不能空白!',
      }))
      formIsValid.current = 'false'
    }
    if (email.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        email: 'Email 不能空白!',
      }))
      formIsValid.current = 'false'
    }
    if (password.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        password: '密碼不能空白!',
      }))
      formIsValid.current = 'false'
    }
    if (checkPassword.trim().length === 0) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        checkPassword: '密碼確認不能空白!',
      }))
      formIsValid.current = 'false'
    }
    if (name.trim().length > 50) {
      setErrorMessage((prevMessage) => ({
        ...prevMessage,
        name: '字數超過50字上限!',
      }))
      formIsValid.current = 'false'
    }
  }

  const handleSettingSubmit = (e) => {
    e.preventDefault()
    // 前端驗證
    isValid()

    if (formIsValid.current !== 'true') return

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

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setAccount(data.account)
        setName(data.name)
        setEmail(data.email)
      })
      .catch((error) => {
        navigate('/login')
        Alert.fire({
          icon: "error",
          title: "請重新登入!"
        })
        console.error(error)
      })
  }, [])

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
            {errorMessage && (
              <p className={style.account__error}>{errorMessage.account}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="name"
              inputName="名稱"
              inputPlaceHolder="請輸入使用者名稱"
              inputType="text"
              inputValue={name}
              onChange={handleNameChange}
              error={errorMessage.name}
            />
            {errorMessage && (
              <p className={style.account__error}>{errorMessage.name}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="email"
              inputName="Email"
              inputPlaceHolder="請輸入 Email"
              inputType="text"
              inputValue={email}
              onChange={handleEmailChange}
              error={errorMessage.email}
            />
            {errorMessage && (
              <p className={style.account__error}>{errorMessage.email}</p>
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
            {errorMessage && (
              <p className={style.account__error}>{errorMessage.password}</p>
            )}
          </div>
          <div className={style.input__container__err}>
            <LoginAndRegistInput
              inputId="checkPassword"
              inputName="密碼確認"
              inputPlaceHolder="請再次輸入密碼"
              inputType="password"
              inputValue={checkPassword}
              onChange={handleConfirmPasswordChange}
              error={errorMessage.checkPassword}
            />
            {errorMessage && (
              <p className={style.account__error}>
                {errorMessage.checkPassword}
              </p>
            )}
          </div>
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

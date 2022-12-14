import React, { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import SettingHeader from '../../UIComponents/headers/SettingHeader'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

import userApi from '../../API/userApi'
import { Toast } from '../../utils/helpers'
import {
  useGetCurrentUser,
  useCurrentUser,
} from '../../contexts/usersContext/CurrentUserContext'

import style from './SettingForm.module.scss'

export default function SettinForm() {
  const [account, setAccount] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checkPassword, setCheckPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({})
  const formIsValid = useRef('true')
  const getCurrentUser = useGetCurrentUser()
  const currentUser = useCurrentUser()
  const navigate = useNavigate()
  const handleChangeTabContext = useContext(ChangeTabContext)

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
        const errorMessage = error.response.data.message
        console.log(errorMessage)
        if (errorMessage === 'Error: account 已重複註冊!') {
          Toast.fire({
            icon: 'error',
            title: '帳戶已重複註冊!',
          })
          return
        } else if (errorMessage === 'Error: email 已重複註冊!') {
          Toast.fire({
            icon: 'error',
            title: 'Email 已重複註冊!',
          })
          return
        } else if (errorMessage === 'Error: 密碼與確認密碼不相符!') {
          Toast.fire({
            icon: 'error',
            title: '密碼與確認密碼不相符!',
          })
          return
        } else {
          Toast.fire({
            icon: 'error',
            title: '更新設定失敗!',
          })
        }
        console.error(error)
      })
  }

  useEffect(() => {
    handleChangeTabContext('setting')
    getCurrentUser(navigate)
    setAccount(currentUser.account)
    setName(currentUser.name)
    setEmail(currentUser.email)
  }, [])

  const handelSignOut = () => {
    localStorage.removeItem('tweetId')
    localStorage.removeItem('token')
    localStorage.removeItem('userId')
    navigate('/login')
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
          <div
            onClick={handelSignOut}
            className={style.setting__form__buttons__logout}
          >
            <ButtonUI btnStyle="link" text="登出" />
          </div>
        </div>
      </form>
    </div>
  )
}

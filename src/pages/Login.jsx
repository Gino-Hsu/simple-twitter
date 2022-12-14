import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LoginForm from '../components/loginForm/LoginForm'

import authorizationAPI from '../API/authorization'
import { Toast } from '../utils/helpers'
// import {loginValid} from '../validation/loginValidation'

import style from './RegistAndLogin.module.scss'

export default function Login() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    account: '',
    password: '',
  })
  const navigate = useNavigate()

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    // 表單字數驗證

    if (account.trim().length === 0 && password.trim().length === 0) {
      setErrorMessage({ account: '帳號不能空白', password: '密碼不能空白' })
      return
    } else if (account.trim().length === 0) {
      setErrorMessage({ account: '帳號不能空白', password: '' })
      return
    } else if (password.trim().length === 0) {
      setErrorMessage({ account: '', password: '密碼不能空白' })
      return
    } else if (account.trim().length > 0 || password.trim().length > 0) {
      setErrorMessage({ account: '', password: '' })
    }

    authorizationAPI
      .login({
        account,
        password,
      })
      .then((res) => {
        const { data } = res
        if (data.status === 'error') {
          throw new Error(data.message)
        }
        localStorage.setItem('token', data.token)
        Toast.fire({
          icon: 'success',
          title: '成功登入!',
        })
        navigate('/alphitter/home')
      })
      .catch((error) => {
        setPassword('')
        Toast.fire({
          icon: 'warning',
          title: '帳號密碼錯誤!',
        })
        console.log('error', error)
      })
  }

  return (
    <div className={style.form__container}>
      <LoginForm
        account={account}
        password={password}
        handleAccountChange={handleAccountChange}
        handlePasswordChange={handlePasswordChange}
        handleLogin={handleLogin}
        errorMessage={errorMessage}
      />
    </div>
  )
}

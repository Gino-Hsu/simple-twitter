import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminLoginForm from '../components/adminLoginForm/AdminLoginForm'
import { useButtonControl } from '../contexts/buttonControlContext/ButtonControlContext'
import authorizationAPI from '../API/authorization'
import { Toast } from '../utils/helpers'

import style from './RegistAndLogin.module.scss'

export default function AdminLogin() {
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState({
    account: '',
    password: '',
  })
  const navigate = useNavigate()
  const buttonControl = useButtonControl()

  const handleAccountChange = (e) => {
    setAccount(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = async (e) => {
    e.preventDefault()

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

    buttonControl(true)
    authorizationAPI
      .adminLogin({
        account,
        password,
      })
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        localStorage.setItem('token', data.token)
        Toast.fire({
          icon: 'success',
          title: '成功登入!',
        })
        buttonControl(false)
        navigate('/admin/tweets')
      })
      .catch((error) => {
        setPassword('')
        Toast.fire({
          icon: 'warning',
          title: '帳號密碼錯誤!',
        })
        buttonControl(false)
        console.error('error', error)
      })
  }

  return (
    <div className={style.form__container}>
      <AdminLoginForm
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

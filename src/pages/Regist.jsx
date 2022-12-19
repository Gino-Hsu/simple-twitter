import React, { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import RegistForm from '../components/registForm/RegistForm'

import authorizationAPI from '../API/authorization'
import { Toast } from '../utils/helpers'

import style from './RegistAndLogin.module.scss'

export default function Regist() {
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
  const handleCheckPasswordChange = (e) => {
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

  const handleRegist = async (e) => {
    e.preventDefault()
    // 前端驗證
    isValid()

    if (formIsValid.current !== 'true') return

    authorizationAPI
      .regist({
        account,
        name,
        email,
        password,
        checkPassword,
      })
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功註冊!',
        })
        navigate('/login')
      })
      .catch((error) => {
        const errorMessage = error.response.data.message.slice(7)
        setPassword('')
        setCheckPassword('')
        if (errorMessage === 'account 已重複註冊!') {
          Toast.fire({
            icon: 'warning',
            title: '帳號已重複註冊!',
          })
        } else if (errorMessage === 'email 已重複註冊!') {
          Toast.fire({
            icon: 'warning',
            title: 'Email 已重複註冊!',
          })
        } else if (errorMessage === '密碼與確認密碼不相符!') {
          Toast.fire({
            icon: 'warning',
            title: '密碼與確認密碼不相符!',
          })
        }
        console.log('error', error)
      })
  }

  return (
    <div className={style.form__container}>
      <RegistForm
        account={account}
        name={name}
        email={email}
        password={password}
        checkPassword={checkPassword}
        onAccountChange={handleAccountChange}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPasswordChange={handlePasswordChange}
        onCheckPasswordChange={handleCheckPasswordChange}
        onSubmit={handleRegist}
        errorMessage={errorMessage}
      />
    </div>
  )
}

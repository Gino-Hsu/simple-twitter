import React from 'react'
import AdminLoginForm from '../components/adminLoginForm/AdminLoginForm'

import style from './RegistAndLogin.module.scss'

export default function AdminLogin() {
  return (
    <div className={style.form__container}>
      <AdminLoginForm />
    </div>
  )
}

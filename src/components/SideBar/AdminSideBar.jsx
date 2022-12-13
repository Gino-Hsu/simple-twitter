import React from 'react'
import AdminNavItem from '../../UIComponents/layout/AdminNavItem'
import style from './AdminSideBar.module.scss'

export default function AdminSideBar() {
  return (
    <>
      <div className={style.nav__container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <AdminNavItem icon="icon__home" altName="home" title="推文清單" />
            <AdminNavItem icon="icon__user" altName="user" title="使用者列表" />
          </div>
        </div>
        <div className={style.signOut}>
          <img alt="sign-out" />
          <div className={style.btn__name}>登出</div>
        </div>
      </div>
    </>
  )
}

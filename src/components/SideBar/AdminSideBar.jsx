import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import AdminNavItem from '../../UIComponents/layout/AdminNavItem'
import style from './AdminSideBar.module.scss'

export default function AdminSideBar() {
  const navigate = useNavigate()

  const handelSignOut = () => {
    localStorage.removeItem('token')
    navigate('/admin')
  }
  return (
    <>
      <div className={style.nav__container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <NavLink to="/admin/tweets">
              {({ isActive }) =>
                isActive ? (
                  <AdminNavItem
                    iconStyle="icon__home__action"
                    textStyle="title__action"
                    altName="home"
                    title="推文清單"
                  />
                ) : (
                  <AdminNavItem
                    iconStyle="icon__home"
                    textStyle="title"
                    altName="home"
                    title="推文清單"
                  />
                )
              }
            </NavLink>
            <NavLink to="/admin/Users">
              {({ isActive }) =>
                isActive ? (
                  <AdminNavItem
                    iconStyle="icon__user__action"
                    textStyle="title__action"
                    altName="user"
                    title="使用者列表"
                  />
                ) : (
                  <AdminNavItem
                    iconStyle="icon__user"
                    textStyle="title"
                    altName="user"
                    title="使用者列表"
                  />
                )
              }
            </NavLink>
          </div>
        </div>
        <div onClick={() => handelSignOut()} className={style.signOut}>
          <img alt="sign-out" />
          <div className={style.btn__name}>登出</div>
        </div>
      </div>
    </>
  )
}

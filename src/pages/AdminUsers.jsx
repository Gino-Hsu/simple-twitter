import React from 'react'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import AdminUserCard from '../UIComponents/admin/AdminUserCard'

import style from './AdminUsers.module.scss'

export default function AdminUsers() {
  return (
    <div className={style.admin__container}>
      <div className={style.adminSideBar}>
        <AdminSideBar />
      </div>
      <div className={style.admin__main}>
        <div className={style.admin__title}>
          <div className={style.title}>使用者列表</div>
        </div>

        <div className={style.admin__card}>
          <div className={style.adminUserCards}>
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
            <AdminUserCard />
          </div>
        </div>
      </div>
    </div>
  )
}

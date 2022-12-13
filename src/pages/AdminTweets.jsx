import React from 'react'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import AdminListItem from '../UIComponents/admin/AdminListItem'

import style from './AdminTweets.module.scss'

export default function AdminTweets() {
  return (
    <div className={style.admin__container}>
      <div className={style.adminSideBar}>
        <AdminSideBar />
      </div>
      <div className={style.admin__main}>
        <div className={style.admin__title}>
          <div className={style.title}>推文清單</div>
        </div>

        <div className={style.adminListItem}>
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
          <AdminListItem />
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import NavItem from '../../UIComponents/NavItem'
import style from './SideBar.module.scss'

export default function SideBar() {
  return (
    <div className={style.aaa}>
      <div className={style.container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <NavItem icon="icon_home" altName="home" title="首頁" />
            <NavItem icon="icon_user" altName="user" title="個人資料" />
            <NavItem icon="icon_setting" altName="setting" title="設定" />
          </div>
          <div className={style.tweet}>
            <img alt="" />
            <button>推文</button>
          </div>
        </div>
        <div className={style.signOut}>
          <img alt="sign-out" />
          <div className={style.btn_name}>登出</div>
        </div>
      </div>
    </div>
  )
}

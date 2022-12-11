import React from 'react'
import NavItem from '../../UIComponents/layout/NavItem'
import style from './SideBar.module.scss'

export default function SideBar() {
  return (
    <>
      <div className={style.mobile}>
        <NavItem icon="icon__home" altName="home" />
        <NavItem icon="icon__tweet" altName="tweet" />
        <NavItem icon="icon__user" altName="user" />
        <NavItem icon="icon__setting" altName="setting" />
      </div>
      <div className={style.nav__container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <NavItem icon="icon__home" altName="home" title="首頁" />
            <NavItem icon="icon__user" altName="user" title="個人資料" />
            <NavItem icon="icon__setting" altName="setting" title="設定" />
          </div>
          <div className={style.tweet}>
            <img alt="" />
            <div className={style.tweet__btn}>推文</div>
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

import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import NavItem from '../../UIComponents/layout/NavItem'
import style from './SideBar.module.scss'

export default function SideBar({ step, handleChangeTab }) {
  const navigate = useNavigate()
  const handelClickHome = () => {
    handleChangeTab('home')
    navigate('/alphitter/home')
  }

  const handelClickUser = () => {
    handleChangeTab('user')
    navigate('/alphitter/user/self/tweet')
  }

  const handelClickSetting = () => {
    handleChangeTab('setting')
    navigate('/setting')
  }
  return (
    <>
      <div className={style.mobile}>
        <NavItem
          iconStyle={step === 'home' ? 'icon__home__action' : 'icon__home'}
          altName="home"
          onClick={() => handelClickHome()}
        />
        <NavItem iconStyle="icon__tweet" altName="tweet" />
        <NavItem
          iconStyle={step === 'user' ? 'icon__user__action' : 'icon__user'}
          onClick={() => handelClickUser()}
        />
        <NavItem
          iconStyle={
            step === 'setting' ? 'icon__setting__action' : 'icon__setting'
          }
          onClick={() => handelClickSetting()}
        />
      </div>
      <div className={style.nav__container}>
        <div className={style.main}>
          <div className={style.logo}>
            <img alt="logo" />
          </div>
          <div className={style.menu}>
            <NavLink
              onClick={handelClickHome}
              className={style.btn__link}
              to="/alphitter/home"
            >
              <NavItem
                iconStyle={
                  step === 'home' ? 'icon__home__action' : 'icon__home'
                }
                textStyle={step === 'home' ? 'title__action' : 'title'}
                altName="home"
                title="首頁"
              />
            </NavLink>
            <NavLink
              onClick={handelClickUser}
              className={style.btn__link}
              to="/alphitter/user/self/tweet"
            >
              <NavItem
                iconStyle={
                  step === 'user' ? 'icon__user__action' : 'icon__user'
                }
                textStyle={step === 'user' ? 'title__action' : 'title'}
                altName="user"
                title="個人資料"
              />
            </NavLink>
            <NavLink className={style.btn__link} to="/setting">
              <NavItem
                iconStyle={
                  step === 'setting' ? 'icon__setting__action' : 'icon__setting'
                }
                textStyle={step === 'setting' ? 'title__action' : 'title'}
                altName="setting"
                title="設定"
              />
            </NavLink>
          </div>
          <div className={style.tweet}>
            <Link className={style.btn__link} to={'/alphitter/home/#/tweet'}>
              <img alt="" />
              <div className={style.tweet__btn}>推文</div>
            </Link>
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

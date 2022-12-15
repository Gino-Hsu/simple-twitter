import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavItem from '../../UIComponents/layout/NavItem'
import style from './SideBar.module.scss'

export default function SideBar({ step, setStep }) {
  const handelClickHome = () => {
    setStep('home')
  }

  const handelClickUser = () => {
    setStep('user')
  }

  // const handelClickSetting = () => {
  //   setStep('setting')
  // }
  return (
    <>
      <div className={style.mobile}>
        <NavLink onClick={handelClickHome} to="/alphitter/home">
          {step === 'home' ? (
            <NavItem iconStyle="icon__home__action" altName="home" />
          ) : (
            <NavItem iconStyle="icon__home" altName="home" />
          )}
        </NavLink>
        <NavLink onClick={handelClickUser} to="#">
          <NavItem iconStyle="icon__tweet" altName="tweet" />
        </NavLink>
        <NavLink to="/alphitter/user/self/tweet">
          {step === 'user' ? (
            <NavItem iconStyle="icon__user__action" altName="user" />
          ) : (
            <NavItem iconStyle="icon__user" altName="user" />
          )}
        </NavLink>
        <NavLink to="/setting">
          {({ isActive }) =>
            isActive ? (
              <NavItem iconStyle="icon__setting__action" altName="setting" />
            ) : (
              <NavItem iconStyle="icon__setting" altName="setting" />
            )
          }
        </NavLink>
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
              {step === 'home' ? (
                <NavItem
                  iconStyle="icon__home__action"
                  textStyle="title__action"
                  altName="home"
                  title="首頁"
                />
              ) : (
                <NavItem
                  iconStyle="icon__home"
                  textStyle="title"
                  altName="home"
                  title="首頁"
                />
              )}
            </NavLink>
            <NavLink
              onClick={handelClickUser}
              className={style.btn__link}
              to="/alphitter/user/self/tweet"
            >
              {step === 'user' ? (
                <NavItem
                  iconStyle="icon__user__action"
                  textStyle="title__action"
                  altName="user"
                  title="個人資料"
                />
              ) : (
                <NavItem
                  iconStyle="icon__user"
                  textStyle="title"
                  altName="user"
                  title="個人資料"
                />
              )}
            </NavLink>
            <NavLink className={style.btn__link} to="/setting">
              {({ isActive }) =>
                isActive ? (
                  <NavItem
                    iconStyle="icon__setting__action"
                    textStyle="title__action"
                    altName="setting"
                    title="設定"
                  />
                ) : (
                  <NavItem
                    iconStyle="icon__setting"
                    textStyle="title"
                    altName="setting"
                    title="設定"
                  />
                )
              }
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

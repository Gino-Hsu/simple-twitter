import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import NavItem from '../../UIComponents/layout/NavItem'
import style from './SideBar.module.scss'

export default function SideBar() {
  const [controlColor, setControlColor] = useState('0')
  const handelClickStep = () => {
    setControlColor('1')
  }

  const handelClickNotStep = () => {
    setControlColor('0')
  }
  return (
    <>
      <div className={style.mobile}>
        <NavLink to="/alphitter/home">
          {({ isActive }) =>
            isActive ? (
              <NavItem iconStyle="icon__home__action" altName="home" />
            ) : (
              <NavItem iconStyle="icon__home" altName="home" />
            )
          }
        </NavLink>
        <NavLink to="#">
          <NavItem iconStyle="icon__tweet" altName="tweet" />
        </NavLink>
        <NavLink to="/alphitter/user/self/tweet">
          {({ isActive }) =>
            isActive ? (
              <NavItem iconStyle="icon__user__action" altName="user" />
            ) : (
              <NavItem iconStyle="icon__user" altName="user" />
            )
          }
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
            {/* <Link to="/alphitter/home">
              <NavItem
                iconStyle="icon__home"
                textStyle="title"
                altName="home"
                title="首頁"
              />
            </Link> */}
            <NavLink
              onClick={handelClickNotStep}
              className={style.btn__link}
              to="/alphitter/home"
            >
              {({ isActive }) =>
            isActive ? (
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
                )
              }
            </NavLink>
            <Link onClick={handelClickStep} to="/alphitter/user/self/tweet">
              {controlColor === '1' ? (
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
            </Link>
            {/* <NavLink
              className={style.btn__link}
              to="/alphitter/user/self/tweet"
            >
              {({ isActive }) =>
                isActive ? (
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
                )
              }
            </NavLink> */}
            <NavLink
              onClick={handelClickNotStep}
              className={style.btn__link}
              to="/setting"
            >
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

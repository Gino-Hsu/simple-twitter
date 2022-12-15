import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './UserToggleMenu.module.scss'
export default function UserToggleMenu() {
  return (
    <div className={style.tab__container}>
      <NavLink to="/alphitter/user/self/tweet">
        {({ isActive }) =>
          isActive ? (
            <div className={style.active}>
              <div className={style.tweet}>推文</div>
            </div>
          ) : (
            <div className={style.userMenu}>
              <div className={style.tweet}>推文</div>
            </div>
          )
        }
      </NavLink>
      <NavLink to={{ pathname: '/alphitter/user/self/reply' }}>
        {({ isActive }) =>
          isActive ? (
            <div className={style.active}>
              <div className={style.tweet}>回覆</div>
            </div>
          ) : (
            <div className={style.userMenu}>
              <div className={style.tweet}>回覆</div>
            </div>
          )
        }
      </NavLink>
      <NavLink
        to={{ pathname: '/alphitter/user/self/like', state: '13456789' }}
      >
        {({ isActive }) =>
          isActive ? (
            <div className={style.active}>
              <div className={style.tweet}>喜歡的內容</div>
            </div>
          ) : (
            <div className={style.userMenu}>
              <div className={style.tweet}>喜歡的內容</div>
            </div>
          )
        }
      </NavLink>
    </div>
  )
}

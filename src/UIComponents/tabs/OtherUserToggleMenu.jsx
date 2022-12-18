import React from 'react'
import { NavLink } from 'react-router-dom'

import style from './OtherUserToggleMenu.module.scss'
export default function OtherUserToggleMenu({ userId }) {
  return (
    <div className={style.tab__container}>
      <NavLink to={`/alphitter/user/other/tweet/${userId}`}>
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
      <NavLink to={`/alphitter/user/other/reply/${userId}`}>
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
      <NavLink to={`/alphitter/user/other/like/${userId}`}>
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

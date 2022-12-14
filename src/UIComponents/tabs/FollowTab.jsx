import React, { useContext } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

import style from './FollowTab.module.scss'

export default function FollowTab() {
  const handleChangeTab = useContext(ChangeTabContext)
  const param = useParams()

  return (
    <div className={style.tab__container}>
      <NavLink
        onClick={() => handleChangeTab('')}
        to={`/alphitter/user/follower/${param.user_id}`}
      >
        {({ isActive }) =>
          isActive ? (
            <div className={style.active}>
              <div className={style.follow__text__action}>跟隨者</div>
            </div>
          ) : (
            <div className={style.follow}>
              <div className={style.follow__text}>跟隨者</div>
            </div>
          )
        }
      </NavLink>
      <NavLink
        onClick={() => handleChangeTab('')}
        to={`/alphitter/user/following/${param.user_id}`}
      >
        {({ isActive }) =>
          isActive ? (
            <div className={style.active}>
              <div className={style.follow__text__action}>正在跟隨</div>
            </div>
          ) : (
            <div className={style.follow}>
              <div className={style.follow__text}>正在跟隨</div>
            </div>
          )
        }
      </NavLink>
    </div>
  )
}

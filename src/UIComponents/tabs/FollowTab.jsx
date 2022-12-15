import React from 'react'
import { Link } from 'react-router-dom'

import style from './FollowTab.module.scss'

export default function FollowTab({
  onChangeFollower,
  onChangeFollowing,
  styleFollower,
  styleFollowing,
  bottomFollower,
  bottomFollowing,
}) {
  return (
    <div className={style.tab__container}>
      <div className={style[bottomFollower]}>
        <Link to="/alphitter/user/self/follower">
          <div onClick={onChangeFollower} className={style[styleFollower]}>
            跟隨者
          </div>
        </Link>
      </div>

      <div className={style[bottomFollowing]}>
        <Link to="/alphitter/user/self/following">
          <div onClick={onChangeFollowing} className={style[styleFollowing]}>
            正在跟隨
          </div>
        </Link>
      </div>
    </div>
  )
}

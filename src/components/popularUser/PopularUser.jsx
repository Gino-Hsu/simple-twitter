import React from 'react'
import PopularUserItem from '../../UIComponents/layout/PopularUserItem'
import {
  useFollowControl,
  useGetFollowerShips,
} from '../../contexts/followedControlContext/FollowedControlContext'
import style from './PopularUser.module.scss'

export default function PopularUser() {
  const handleToggleFollow = useFollowControl()
  const followShips = useGetFollowerShips()
  return (
    <div className={style.popularUser__container}>
      <div className={style.popularUser__title}>推薦跟隨</div>
      <div className={style.line}></div>
      <div className={style.popularUser__main}>
        {followShips.map((followShip) => {
          return (
            <PopularUserItem
              key={followShip.id}
              userId={followShip.id}
              name={followShip.name}
              account={followShip.account}
              avatar={followShip.avatar}
              onClick={handleToggleFollow}
              isFollowed={followShip.isFollowed}
              btnStyle={
                followShip.isFollowed === 1
                  ? 'btn__pill__middle'
                  : 'btn__pill__middle__default'
              }
              text={followShip.isFollowed === 1 ? '正在跟隨' : '跟隨'}
              container={
                followShip.isFollowed === 1
                  ? 'btn__follow__container__action'
                  : 'btn__follow__container'
              }
            />
          )
        })}
      </div>
    </div>
  )
}

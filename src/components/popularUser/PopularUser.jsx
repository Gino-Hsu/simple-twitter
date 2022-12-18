import React, {useState, useEffect} from 'react'
import PopularUserItem from '../../UIComponents/layout/PopularUserItem'
import followShipApi from '../../API/followShipApi'
import { Toast } from '../../utils/helpers'

import style from './PopularUser.module.scss'

export default function PopularUser() {
  const [clickFollow, setClickFollow] = useState('')
  const [followShips, setFollowShip] = useState([])

  const handleToggleFollow = (id, isFollowed) => {
    const currentUserId = localStorage.getItem('userId')
    if (Number(currentUserId) === Number(id)) {
      Toast.fire({
            icon: "warning",
            title: "無法追隨自己!"
          })
      return
    }
    if (isFollowed === 0) {
      followShipApi
        .postFollowerShips(id)
        .then(res => {
          const {data} = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: "success",
            title: "成功追隨!"
          })
          setClickFollow(1)
        })
        .catch(error => {
          Toast.fire({
            icon: "error",
            title: "追隨失敗!"
          })
          setClickFollow('')
          console.error(error)
        })
    } else {
      followShipApi
        .deleteFollowerShips(id)
        .then (res => {
          const {data} = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
           Toast.fire({
            icon: "success",
            title: "退追隨了!"
          })
          setClickFollow(0)
        })
        .catch(error => {
          Toast.fire({
            icon: "error",
            title: "退追隨失敗!"
          })
          console.error(error)
        })
    }
  }

  useEffect(() => {
    followShipApi
      .getFollowerShips()
      .then(res => {
        const {data} = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowShip(data)
        setClickFollow('')
      })
      .catch(error => {
        console.error(error)
      })
  }, [clickFollow])

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
              isFollowing={followShip.isFollowing}
              btnStyle={followShip.isFollowing === 1
                  ? 'btn__pill__middle'
                  : 'btn__pill__middle__default'
              }
              text={followShip.isFollowing === 1
                  ? '正在跟隨'
                  : '跟隨'
              }
              container={followShip.isFollowing === 1
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

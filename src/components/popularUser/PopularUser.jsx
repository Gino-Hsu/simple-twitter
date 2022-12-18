import React, {useState, useEffect} from 'react'
import PopularUserItem from '../../UIComponents/layout/PopularUserItem'
import followShipApi from '../../API/followShipApi'

import style from './PopularUser.module.scss'

export default function PopularUser() {
  const [followShips, setFollowShip] = useState([])

  useEffect(() => {
    followShipApi
      .getFollowerShips()
      .then(res => {
        const {data} = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        console.log(data)
        setFollowShip(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={style.popularUser__container}>
      <div className={style.popularUser__title}>推薦跟隨</div>
      <div className={style.line}></div>
      <div className={style.popularUser__main}>
        {followShips.map((followShip) => {
          return (
            <PopularUserItem
              key={followShip.id}
              name={followShip.name}
              account={followShip.account}
              avatar={followShip.avatar}
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

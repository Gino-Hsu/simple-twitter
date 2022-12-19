import React, { createContext, useContext, useState, useEffect } from 'react'
import { Toast } from '../../utils/helpers'
import followShipApi from '../../API/followShipApi'

const FollowControlContext = createContext()
const GetFollowerShipsContext = createContext()

export function FollowerControlProvider({ children }) {
  const [clickFollow, setClickFollow] = useState('')
  const [followShips, setFollowShip] = useState([])

  const handleToggleFollow = (id, isFollowed) => {
    const currentUserId = localStorage.getItem('userId')
    if (Number(currentUserId) === Number(id)) {
      Toast.fire({
        icon: 'warning',
        title: '無法追隨自己!',
      })
      return
    }
    if (isFollowed === 0) {
      followShipApi
        .postFollowerShips(id)
        .then((res) => {
          const { data } = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '成功追隨!',
          })
          setClickFollow(1)
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: '追隨失敗!',
          })
          setClickFollow('')
          console.error(error)
        })
    } else {
      followShipApi
        .deleteFollowerShips(id)
        .then((res) => {
          const { data } = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '退追隨了!',
          })
          setClickFollow(0)
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: '退追隨失敗!',
          })
          console.error(error)
        })
    }
  }

  useEffect(() => {
    followShipApi
      .getFollowerShips()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowShip(data)
        setClickFollow('')
      })
      .catch((error) => {
        console.error(error)
      })
  }, [clickFollow])

  return (
    <GetFollowerShipsContext.Provider value={followShips}>
      <FollowControlContext.Provider value={handleToggleFollow}>
        {children}
      </FollowControlContext.Provider>
    </GetFollowerShipsContext.Provider>
  )
}

export function useFollowControl() {
  return useContext(FollowControlContext)
}

export function useGetFollowerShips() {
  return useContext(GetFollowerShipsContext)
}

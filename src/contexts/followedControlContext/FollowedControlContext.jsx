import React, { createContext, useContext, useState } from 'react'
import { Toast } from '../../utils/helpers'
import { useHandleRerender } from '../rerenderContext/RenderContext'
import followShipApi from '../../API/followShipApi'

const FollowControlContext = createContext()
const GetFollowerShipsContext = createContext()
const FollowShipsContext = createContext()

export function FollowerControlProvider({ children }) {
  const [followShips, setFollowShip] = useState([])
  const handleRerender = useHandleRerender()

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
          handleRerender('true')
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: '追隨失敗!',
          })
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
          handleRerender('true')
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

  const getFollowShips = () => {
    handleRerender('')
    followShipApi
      .getFollowerShips()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowShip(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <GetFollowerShipsContext.Provider value={getFollowShips}>
      <FollowControlContext.Provider value={handleToggleFollow}>
        <FollowShipsContext.Provider value={followShips}>
          {children}
        </FollowShipsContext.Provider>
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

export function useFollowerShips() {
  return useContext(FollowShipsContext)
}

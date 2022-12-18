import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserHeader from '../UIComponents/headers/UserHeader'
import MobileUser from '../components/currentUser/MobileUser'
import FollowTab from '../UIComponents/tabs/FollowTab'
import FollowListItem from '../UIComponents/listItems/FollowListItem'

import userApi from '../API/userApi'
import { Alert } from '../utils/helpers'

import style from './Follower.module.scss'

export default function Follower() {
  const [currentUser, setCurrentUser] = useState([])
  const [followingUsers, setFollowingUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch((error) => {
        navigate('/login')
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userApi
      .getUserFollowing(userId)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowingUsers(data)
      })
      .catch((error) => {
        navigate('/login')
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
  }, [])

  return (
    <div className={style.page__container}>
      <div className={style.userHeader}>
        <UserHeader
          name={currentUser.name}
          tweetCount={currentUser.tweetCount}
        />
      </div>
      <div className={style.mobileUser}>
        <MobileUser
          name={currentUser.name}
          account={currentUser.account}
          cover={currentUser.cover}
          avatar={currentUser.avatar}
          description={currentUser.introduction}
          followerCount={currentUser.followerCount}
          followingCount={currentUser.followingCount}
        />
      </div>
      <div className={style.tab}>
        <FollowTab />
      </div>
      <div className={style.follower__list}>
        {followingUsers.map((followingUser) => (
          <FollowListItem
            key={followingUser.Followings.id}
            avatar={followingUser.Followings.avatar}
            name={followingUser.Followings.name}
            account={followingUser.Followings.account}
            introduction={followingUser.Followings.introduction}
            btnStyle={
              followingUser.Followings.isFollowing === 1
                ? 'btn__pill__small'
                : 'btn__pill__small__default'
            }
            btnText={
              followingUser.Followings.isFollowing === 1 ? '正在跟隨' : '跟隨'
            }
          />
        ))}
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import UserHeader from '../UIComponents/headers/UserHeader'
import MobileUser from '../components/currentUser/MobileUser'
import MobileOtherUser from '../components/otherUser/MobileOtherUser'
import FollowTab from '../UIComponents/tabs/FollowTab'
import FollowListItem from '../UIComponents/listItems/FollowListItem'
import { useFollowControl } from '../contexts/followedControlContext/FollowedControlContext'

import userApi from '../API/userApi'
import { Alert } from '../utils/helpers'

import style from './Follower.module.scss'

export default function Follower() {
  const [user, setUser] = useState([])
  const [followingUsers, setFollowingUsers] = useState([])
  const handleToggleFollow = useFollowControl()
  const navigate = useNavigate()
  const param = useParams()
  const currentUserId = localStorage.getItem('userId')

  useEffect(() => {
    userApi
      .getOtherUser(param.user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setUser(data)
      })
      .catch((error) => {
        navigate('/login')
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
  }, [handleToggleFollow])

  useEffect(() => {
    userApi
      .getUserFollowing(param.user_id)
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
  }, [handleToggleFollow])
  return (
    <div className={style.page__container}>
      <div className={style.userHeader}>
        <UserHeader name={user.name} tweetCount={user.tweetCount} />
      </div>
      <div className={style.mobileUser}>
        {Number(user.id) === Number(currentUserId) ? (
          <MobileUser
            name={user.name}
            account={user.account}
            cover={user.cover}
            avatar={user.avatar}
            description={user.introduction}
            followerCount={user.followerCount}
            followingCount={user.followingCount}
          />
        ) : (
          <MobileOtherUser
            userId={user.id}
            name={user.name}
            account={user.account}
            cover={user.cover}
            avatar={user.avatar}
            description={user.introduction}
            followerCount={user.followerCount}
            followingCount={user.followingCount}
            onClick={handleToggleFollow}
            isFollowed={user.isFollowed}
          />
        )}
      </div>
      <div className={style.tab}>
        <FollowTab />
      </div>
      <div className={style.follower__list}>
        {followingUsers.map((followingUser) => (
          <FollowListItem
            key={followingUser.Followings.id}
            userId={followingUser.followingId}
            avatar={followingUser.Followings.avatar}
            name={followingUser.Followings.name}
            account={followingUser.Followings.account}
            introduction={followingUser.Followings.introduction}
            onClick={handleToggleFollow}
            isFollowed={followingUser.Followings.isFollowed}
            btnStyle={
              followingUser.Followings.isFollowed === 1
                ? 'btn__pill__small'
                : 'btn__pill__small__default'
            }
            btnText={
              followingUser.Followings.isFollowed === 1 ? '正在跟隨' : '跟隨'
            }
          />
        ))}
      </div>
    </div>
  )
}

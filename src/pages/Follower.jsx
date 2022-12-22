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
  const [followerUsers, setFollowerUsers] = useState([])
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
      .getUserFollower(param.user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowerUsers(data)
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
        {followerUsers.map((followerUser) => (
          <FollowListItem
            key={followerUser.Followers.id}
            userId={followerUser.followerId}
            avatar={followerUser.Followers.avatar}
            name={followerUser.Followers.name}
            account={followerUser.Followers.account}
            introduction={followerUser.Followers.introduction}
            onClick={handleToggleFollow}
            isFollowed={followerUser.Followers.isFollowed}
            btnStyle={
              followerUser.Followers.isFollowed === 1
                ? 'btn__pill__small'
                : 'btn__pill__small__default'
            }
            btnText={
              followerUser.Followers.isFollowed === 1 ? '正在跟隨' : '跟隨'
            }
          />
        ))}
      </div>
    </div>
  )
}

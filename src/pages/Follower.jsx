import React, {useState, useEffect} from 'react'
import UserHeader from '../UIComponents/headers/UserHeader'
import MobileUser from '../components/currentUser/MobileUser'
import FollowTab from '../UIComponents/tabs/FollowTab'
import FollowListItem from '../UIComponents/listItems/FollowListItem'

import userApi from '../API/userApi'

import style from './Follower.module.scss'

export default function Follower() {
  const [currentUser, setCurrentUser] = useState([])
  const [followerUsers, setFollowerUsers] = useState([])

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then(res => {
        const {data} = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const userId = localStorage.getItem('userId')
    userApi
      .getUserFollower(userId)
      .then(res => {
        const {data} = res
        if(res.status !== 200) {
          throw new Error(data.message)
        }
        setFollowerUsers(data)
      })
      .catch(error => {
        console.error(error)
      })
  }, [])

  return (
    <div className={style.page__container}>
      <div className={style.userHeader}>
        <UserHeader name={currentUser.name} tweetCount={currentUser.tweetCount} />
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
        {followerUsers.map(followerUser => (
          <FollowListItem
          key={followerUser.Followers.id}
          avatar={followerUser.Followers.avatar}
          name={followerUser.Followers.name}
          account={followerUser.Followers.account}
          introduction={followerUser.Followers.introduction}
          btnStyle={followerUser.Followers === 1 ?"btn__pill__small" : "btn__pill__small__default"}
          btnText={followerUser.Followers === 1 ? "正在跟隨" : "跟隨"}
        />
        ))}
      </div>
    </div>
  )
}

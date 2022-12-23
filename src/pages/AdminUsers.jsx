import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSideBar from '../components/sideBar/AdminSideBar'
import AdminUserCard from '../UIComponents/admin/AdminUserCard'

import userApi from '../API/userApi'
import { Alert } from '../utils/helpers'

import style from './AdminUsers.module.scss'

export default function AdminUsers() {
  const [users, setUsers] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    userApi
      .getAdminUsers()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setUsers(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/admin')
        console.error(error)
      })
  }, [])

  return (
    <div className={style.admin__container}>
      <div className={style.adminSideBar}>
        <AdminSideBar />
      </div>
      <div className={style.admin__main}>
        <div className={style.admin__title}>
          <div className={style.title}>使用者列表</div>
        </div>

        <div className={style.admin__card}>
          <div className={style.adminUserCards}>
            {users.map((user) => (
              <AdminUserCard
                key={user.id}
                cover={user.cover}
                name={user.name}
                avatar={user.avatar}
                account={user.account}
                tweetCount={user.tweetCount}
                likeCount={user.likeCount}
                followingCount={user.followingCount}
                followerCount={user.followerCount}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

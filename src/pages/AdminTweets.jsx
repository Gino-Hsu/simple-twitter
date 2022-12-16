import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import AdminListItem from '../UIComponents/admin/AdminListItem'

import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'

import style from './AdminTweets.module.scss'

export default function AdminTweets() {
  const [tweets, setTweets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    tweetApi
      .getAdminTweets()
      .then(res => {
        const { data } = res
        setTweets(data)
      })
      .catch((error) => {
        setTweets([])
        Alert.fire({
          icon: 'error',
          tilte: '請重新登入!'
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
          <div className={style.title}>推文清單</div>
        </div>
        <div className={style.adminListItem}>
          {tweets.map(tweet => (
            <AdminListItem
              key={tweet.id}
              avatar={tweet.User.avatar}
              name={tweet.User.name}
              account={tweet.User.account}
              description={tweet.description}
              time="13 小時"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

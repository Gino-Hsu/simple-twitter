import React, { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import AdminSideBar from '../components/SideBar/AdminSideBar'
import AdminListItem from '../UIComponents/admin/AdminListItem'
import { Toast } from '../utils/helpers'

import tweetApi from '../API/tweetApi'
import { Alert, WarnAlert } from '../utils/helpers'

import style from './AdminTweets.module.scss'

export default function AdminTweets() {
  const [tweets, setTweets] = useState([])
  const [onDeleted, setOnDeleted] = useState(false)
  const navigate = useNavigate()

  const handleDeleteItem = (tweetId) => {
    WarnAlert.fire({
      title: '確定要刪除嗎?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '確定，不需要了!',
      cancelButtonText: '保留!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        WarnAlert.fire('成功刪除', '推文回不去了!', 'success')

        tweetApi
          .deleteTweet(tweetId)
          .then((res) => {
            const { data } = res
            if (res.status !== 200) {
              throw new Error(data.message)
            }
            setOnDeleted(true)
          })
          .catch((error) => {
            Toast.fire({
              icon: 'warning',
              title: '刪除推文失敗!',
            })
            console.error(error)
          })
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        WarnAlert.fire('取消刪除', '推文獲得了救贖 :)', 'info')
      }
    })
  }

  useEffect(() => {
    tweetApi
      .getAdminTweets()
      .then((res) => {
        const { data } = res
        setTweets(data)
        if (onDeleted) setOnDeleted(false)
      })
      .catch((error) => {
        setTweets([])
        Alert.fire({
          icon: 'error',
          tilte: '請重新登入!',
        })
        navigate('/admin')
        console.error(error)
      })
  }, [onDeleted])

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
          {tweets.map((tweet) => (
            <AdminListItem
              key={tweet.id}
              avatar={tweet.User.avatar}
              name={tweet.User.name}
              account={tweet.User.account}
              description={tweet.description}
              time="13 小時"
              tweetId={tweet.id}
              onClick={handleDeleteItem}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

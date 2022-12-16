import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import MainTweet from '../components/mainTweet/MainTweet'

import tweetApi from '../API/tweetApi'
import userApi from '../API/userApi'
import { Alert } from '../utils/helpers'

import style from './Home.module.scss'

export default function Home({
  handleChangeTab,
  handleShowTweetModel,
  handleHideModel,
  tweetModelIsShow,
  handleShowReplyModel,
  replyModelIsShow,
}) {
  const [tweets, setTweets] = useState([])
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    tweetApi
      .getTweets()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setTweets(data)
      })
      .catch((error) => {
        setTweets([])
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        setCurrentUser(data)
      })
      .catch((error) => {
        setCurrentUser([])
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])
  return (
    <>
      <div className={style.main__screen}>
        <MainTweet
          tweets={tweets}
          currentUser={currentUser}
          handleChangeTab={handleChangeTab}
          handleShowTweetModel={handleShowTweetModel}
          handleHideModel={handleHideModel}
          tweetModelIsShow={tweetModelIsShow}
          handleShowReplyModel={handleShowReplyModel}
          replyModelIsShow={replyModelIsShow}
        />
      </div>
    </>
  )
}

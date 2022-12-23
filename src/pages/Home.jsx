import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MainTweet from '../components/mainTweet/MainTweet'
import { ChangeTabContext } from '../contexts/sideBarControlContext/SideBarControlContext'

import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import { useGetCurrentUser } from '../contexts/usersContext/CurrentUserContext'

import style from './Home.module.scss'

export default function Home() {
  const [tweets, setTweets] = useState([])
  const navigate = useNavigate()
  const rerender = useRerender()
  const handleRerender = useHandleRerender()
  const getCurrentUser = useGetCurrentUser()
  const handleChangeTabContext = useContext(ChangeTabContext)

  useEffect(() => {
    handleRerender('')
    handleChangeTabContext('home')
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
  }, [rerender])

  useEffect(() => {
    getCurrentUser(navigate)
  }, [])

  return (
    <>
      <div className={style.main__screen}>
        <MainTweet tweets={tweets} />
      </div>
    </>
  )
}

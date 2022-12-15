import React, {useState, useEffect} from 'react'
import MainTweet from '../components/mainTweet/MainTweet'
import TweetApi from '../API/tweetApi'
import UserApi from '../API/userApi'
// import { Toast } from '../utils/helpers'

import style from './Home.module.scss'

export default function Home() {
  const [tweets, setTweets] = useState([])
  const [currentUser, setCurrentUser] = useState([])

  useEffect(() => {
    TweetApi
      .getTweets()
      .then(res => {
        const {data} = res
        setTweets(data)
      })
  }, [])

  useEffect(() => {
    UserApi
      .getCurrentUser()
      .then(res => {
        const {data} = res
        setCurrentUser(data)
      })
  }, [])

  return (
    <div className={style.main__screen}>
      <MainTweet tweets={tweets} currentUser={currentUser} />
    </div>
  )
}

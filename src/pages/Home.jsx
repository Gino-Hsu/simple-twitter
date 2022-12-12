import React from 'react'
import MainTweet from '../components/mainTweet/MainTweet'
import style from './Home.module.scss'

export default function Home() {
  return (
    <div className={style.main__screen}>
      <MainTweet />
    </div>
  )
}

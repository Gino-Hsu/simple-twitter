import React from 'react'
import MainTweet from '../components/mainTweet/MainTweet'
import style from './Home.module.scss'

import Reply from '../pages/Reply'

export default function Home() {
  return (
      <div className={style.main__screen}>
        <MainTweet />
      </div>
  )
}

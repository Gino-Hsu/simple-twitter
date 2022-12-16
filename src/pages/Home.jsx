import React from 'react'
import MainTweet from '../components/mainTweet/MainTweet'
import style from './Home.module.scss'

export default function Home({ handleChangeTab }) {
  return (
    <div className={style.main__screen}>
      <MainTweet handleChangeTab={handleChangeTab} />
    </div>
  )
}

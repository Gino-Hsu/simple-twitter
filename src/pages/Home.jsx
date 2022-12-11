import React from 'react'
// import { Outlet } from 'react-router-dom'
import SideBar from '../components/SideBar/SideBar'
import PopularUser from '../components/popularUser/PopularUser'
import MainTweet from '../components/mainTweet/MainTweet'
import style from './Home.module.scss'

export default function Home() {
  return (
    <div className={style.main__container}>
      <div className={style.sideBar}>
        <SideBar />
      </div>
      <div className={style.main__screen}>
        <MainTweet />
        {/* <Outlet /> */}
      </div>
      <div className={style.popularUser}>
        <PopularUser />
      </div>
    </div>
  )
}

import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import PopularUser from '../../components/popularUser/PopularUser'
import style from './Layout.module.scss'

export default function Layout({
  step,
  handleChangeTab,
  handleShowTweetModel,
  handleHideTweetModel,
  tweetModelIsShow,
}) {
  return (
    <div className={style.main__container}>
      <div className={style.sideBar}>
        <SideBar
          step={step}
          handleChangeTab={handleChangeTab}
          handleShowTweetModel={handleShowTweetModel}
          handleHideTweetModel={handleHideTweetModel}
          tweetModelIsShow={tweetModelIsShow}
        />
      </div>
      <div className={style.main__screen}>
        <Outlet />
      </div>
      <div className={style.popularUser}>
        <PopularUser />
      </div>
    </div>
  )
}

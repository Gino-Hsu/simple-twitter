import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import PopularUser from '../../components/popularUser/PopularUser'
import ModalControlContextProvider from '../../contexts/modalControlContext/ModalControlContext'
import style from './Layout.module.scss'

export default function Layout() {
  return (
    <ModalControlContextProvider>
      <div className={style.main__container}>
        <div className={style.sideBar}>
          <SideBar />
        </div>
        <div className={style.main__screen}>
          <Outlet />
        </div>
        <div className={style.popularUser}>
          <PopularUser />
        </div>
      </div>
    </ModalControlContextProvider>
  )
}

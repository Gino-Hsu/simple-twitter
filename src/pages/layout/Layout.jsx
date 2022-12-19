import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../../components/SideBar/SideBar'
import PopularUser from '../../components/popularUser/PopularUser'
import ReplyModal from '../../components/replyModal/ReplyModal'
import {
  ReplyModelIsShow,
  HideModel,
} from '../../contexts/modalControlContext/ModalControlContext'
import style from './Layout.module.scss'

export default function Layout() {
  const handleHideModel = useContext(HideModel)
  const replyModelIsShow = useContext(ReplyModelIsShow)
  return (
    <div className={style.main__container}>
      {replyModelIsShow && <ReplyModal handleHideModel={handleHideModel} />}
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
  )
}

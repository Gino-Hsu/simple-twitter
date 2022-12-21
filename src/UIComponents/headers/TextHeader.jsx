import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './TextHeader.module.scss'

export default function HeaderText() {
  const navigate = useNavigate()
  return (
    <div className={style.header__container}>
      <div className={style.header__return}>
        <div className={style.icon}>
          <div onClick={() => navigate(-1)} className={style.icon__container}>
            <img className={style.img} src="" alt="" />
          </div>
        </div>
        <div className={style.text}>
          <div className={style.text__container}>
            <div className={style.title}>推文</div>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import ButtonUI from '../../../UIComponents/ButtonUI'

import style from './TwitterInput.module.scss'

export default function TwitterInput() {
  return (
    <div className={style.twitterInput__container}>
      <div className={style.mobile__avatar}>
        <img src="" alt="avatar" />
      </div>
      <div className={style.title}>
        <p>首頁</p>
      </div>
      <div className={style.inputBox}>
        <div className={style.inputBox__input}>
          <div className={style.avatar}>
            <img src="" alt="avatar" />
          </div>
          <input className={style.input} />
        </div>
        <div className={style.inputBox__btn}>
          <ButtonUI />
        </div>
      </div>
    </div>
  )
}

import React from 'react'

import style from './TweetInput.module.scss'
import ButtonUI from '../../../UIComponents/buttons/ButtonUI'

export default function TweetInput() {
  return (
    <div className={style.tweetInput__container}>
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
          <input
            type="text"
            placeholder="有什麼新鮮事？"
            readOnly="true"
            className={style.input}
          />
        </div>
      </div>
      <div className={style.btn__container}>
        <div className={style.btn__type}>
          <ButtonUI btnStyle="btn__pill__middle" text="推文" />
        </div>
      </div>
    </div>
  )
}

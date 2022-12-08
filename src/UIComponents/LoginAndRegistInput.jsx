import React from 'react'

import style from './LoginAndRegistInput.module.scss'

export default function LoginAndRegistInput({inputId, inputName, inputPlaceHolder, inputValue, onChange}) {
  return (
    <label htmlFor="{inputId}" className={style.input__container}>
      <div className={style.input__label}>{inputName}</div>
      <input id={inputId} className={style.input} placeholder={inputPlaceHolder} value={inputValue} onChange={onChange} />
      <div className={style.input__border__bottom} />
    </label>

    // 增加錯誤題是
  )
}


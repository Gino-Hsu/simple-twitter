import React from 'react'

import style from './ButtonUI.module.scss'

export default function ButtonUI({ btnStyle, text, onClick }) {
  return (
    <>
      <button className={style[btnStyle]} onClick={onClick}>
        <p>{text}</p>
      </button>
    </>
  )
}

import React from 'react'

import style from './ButtonUI.module.scss'

export default function ButtonUI({ btnStyle, text }) {
  return (
    <>
      <div className={style[btnStyle]}>
        <p>{text}</p>
      </div>
    </>
  )
}

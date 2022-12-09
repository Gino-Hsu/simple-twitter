import React from 'react'

import style from './BackDrop.module.scss'

export default function BackDrop({ resetConfirmed }) {
  return (
    <>
      <div className={style.backdrop} onClick={resetConfirmed} />
    </>
  )
}

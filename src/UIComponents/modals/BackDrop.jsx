import React from 'react'

import style from './BackDrop.module.scss'

export default function BackDrop({ onHideModel }) {
  return <div className={style.backdrop} onClick={() => onHideModel()} />
}

import React from 'react'

import style from './BackDrop.module.scss'

export default function BackDrop({ onHideTweetModel }) {
  return <div className={style.backdrop} onClick={() => onHideTweetModel()} />
}

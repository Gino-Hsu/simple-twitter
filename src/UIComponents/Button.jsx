import React from 'react'

import style from './Button.module.scss'

export default function Button({btnStyle, text}) {
  return (
    <div className={style[btnStyle]}>{text}</div>
  )
}

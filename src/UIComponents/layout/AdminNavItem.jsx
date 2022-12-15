import React from 'react'
import style from './AdminNavItem.module.scss'

export default function AdminNavItem({ iconStyle, textStyle, altName, title }) {
  return (
    <div className={style.container}>
      <div className={style.icon__style}>
        <img className={style[iconStyle]} alt={altName} />
      </div>
      <div className={style[textStyle]}>{title}</div>
    </div>
  )
}

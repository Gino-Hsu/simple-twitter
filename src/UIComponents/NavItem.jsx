import React from 'react'
import style from './NavItem.module.scss'

export default function NavItem({icon, altName, title}) {
  return (
    <div className={style.container}>
      <img className={style[icon]} alt={altName} />
      <div className={style.title}>{title}</div>
    </div>
  )
}

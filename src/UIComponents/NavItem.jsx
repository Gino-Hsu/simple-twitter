import React from 'react'
import style from './NavItem.module.scss'

export default function NavItem({ icon, altName, title }) {
  return (
    <div className={style.container}>
      <div className={style.icon__style}>
        <img className={style[icon]} alt={altName} />
      </div>
      <div className={style.title}>{title}</div>
    </div>
  )
}

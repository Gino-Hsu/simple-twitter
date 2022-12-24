import React from 'react'
import { useButtonIsDisable } from '../../contexts/buttonControlContext/ButtonControlContext'

import style from './ButtonUI.module.scss'

export default function ButtonUI({ btnStyle, text, onClick }) {
  const buttonIsDisable = useButtonIsDisable()
  return (
    <>
      <button className={style[btnStyle]} onClick={onClick} disabled={buttonIsDisable} >
        <p>{text}</p>
      </button>
    </>
  )
}

import React from 'react'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './Modal.module.scss'

export function Modal({ children, title, buttonText, onHideModel }) {
  return (
    <div className={style.modal}>
      <div className={style.modal__header}>
        <div className={style.header__container}>
          <div onClick={() => onHideModel()} className={style.control__return}>
            <img className={style.return__icon} alt="Return" />
          </div>
          <div className={style.title}>
            <h3>{title}</h3>
          </div>
        </div>
        <div className={style.btn__container}>
          <ButtonUI btnStyle="btn__pill__large" text={buttonText} />
        </div>
      </div>
      {children}
    </div>
  )
}

export function EditModalUi({ children, title, buttonText, onHideModel }) {
  return (
    <div className={style.modal}>
      <div className={style.modal__header}>
        <div className={style.header__container}>
          <div onClick={() => onHideModel()} className={style.control__return}>
            <img className={style.return__icon} alt="Return" />
          </div>
          <div className={style.title}>
            <h3>{title}</h3>
          </div>
        </div>
        <div className={style.btn__save__container}>
          <ButtonUI btnStyle="btn__pill__large" text={buttonText} />
        </div>
      </div>
      {children}
    </div>
  )
}

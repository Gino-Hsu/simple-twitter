import React from 'react'

import style from './Input.module.scss'

export function LoginAndRegistInput({
  inputId,
  inputName,
  inputPlaceHolder,
  inputType,
  inputValue,
  onChange,
  error,
}) {
  return (
    <label htmlFor={inputId} className={style.input__container}>
      <div className={style.input__label}>{inputName}</div>
      <input
        id={inputId}
        className={style.input}
        placeholder={inputPlaceHolder}
        type={inputType}
        value={inputValue}
        onChange={(e) => onChange(e)}
      />
      <div
        className={
          error === '' || !error
            ? style.input__border__bottom
            : style.input__border__bottom__error
        }
      />
    </label>
  )
}

export function Textarea({ textareaValue, textareaPlaceHolder, onChange }) {
  return (
    <div className={style.textarea__container}>
      <textarea
        className={style.textarea}
        placeholder={textareaPlaceHolder}
        value={textareaValue}
        onChange={(e) => onChange(e)}
      />
    </div>
  )
}

import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { EditModalUi } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'

import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'
import cover from '../../public/default_background@2x.png'

import style from './EditModal.module.scss'

export default function EditModal() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  // const [imageSrc, setImageSrc] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value)
  }

  return (
    <>
      {ReactDom.createPortal(
        <>
          <form className={style.view__container}>
            <EditModalUi title="編輯個人資料" buttonText="儲存">
              <div className={style.cover__container}>
                <img
                  className={style.cover__container__img}
                  src={cover}
                  alt="Cover Img"
                />
                <div className={style.icons}>
                  <label htmlFor="cover__input" className={style.coverChange}>
                    <img
                      className={style.coverChange__icon}
                      src=""
                      alt="Cover Change"
                    />
                  </label>
                  <div className={style.coverDelete}>
                    <img
                      className={style.coverDelete__icon}
                      src=""
                      alt="Cover Delete"
                    />
                  </div>
                </div>
              </div>

              <div className={style.avatar}>
                <img className={style.avatar__img} src={avatar} alt="Avatar" />
                <label htmlFor="avatar__input" className={style.avatarChange}>
                  <img
                    className={style.avatarChange__icon}
                    src=""
                    alt="Avatar Change"
                  />
                </label>
              </div>

              <div className={style.inputs}>
                <div className={style.inputs__name}>
                  <LoginAndRegistInput
                    inputId="name"
                    inputName="名稱"
                    inputPlaceHolder="請輸入使用者名稱"
                    inputType="text"
                    inputValue={name}
                    onChange={handleNameChange}
                  />
                  <p
                    className={style.inputs__name__count}
                  >{`${name.length}/50`}</p>
                </div>

                <div className={style.input__descripition}>
                  <div className={style.inputs__descripition}>
                  <LoginAndRegistInput
                    inputId="descripition"
                    inputName="自我介紹"
                    inputPlaceHolder="請輸入自我介紹"
                    inputType="text"
                    inputValue={description}
                    onChange={handleDescriptionChange}
                  />
                  </div>
                  <p
                    className={style.inputs__description__count}
                  >{`${description.length}/160`}</p>
                </div>
              </div>

              <input
                id="cover__input"
                type="file"
                className={style.cover__input}
              />
              <input
                id="avatar__input"
                type="file"
                className={style.avatar__input}
              />
            </EditModalUi>
          </form>
          <BackDrop />
        </>,
        document.getElementById('modal-root')
      )}
    </>
  )
}

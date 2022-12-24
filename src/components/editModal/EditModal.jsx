import React, { useState, useEffect, useContext, useRef } from 'react'
import ReactDOM from 'react-dom'
import { EditModalUi } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { LoginAndRegistInput } from '../../UIComponents/inputs/Input'
import { HideModel } from '../../contexts/modalControlContext/ModalControlContext'
import userApi from '../../API/userApi'
import { Toast } from '../../utils/helpers'
import {
  useRerender,
  useHandleRerender,
} from '../../contexts/rerenderContext/RenderContext'
import { useButtonControl } from '../../contexts/buttonControlContext/ButtonControlContext'

import style from './EditModal.module.scss'

export default function EditModal({ handleHideModel }) {
  const [userId, setUserId] = useState('')
  const [cover, setCover] = useState('')
  const [avatar, setAvatar] = useState('')
  const [name, setName] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [errorMessage, setErrormessage] = useState({})
  const [initCover, setInitCover] = useState(false)
  const rerender = useRerender()
  const handleRerender = useHandleRerender()
  const handelHideModel = useContext(HideModel)
  const formIsValid = useRef('true')
  const buttonControl = useButtonControl()

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleIntroductionChange = (e) => {
    setIntroduction(e.target.value)
  }

  const handleCancelChange = (id) => {
    userApi
      .patchUserCover(id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCover(data.cover)
        setInitCover(true)
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '背景圖片初始失敗!',
        })
        console.error(error)
      })
  }

  const handleCoverOnPreview = (e) => {
    const { files } = e.target
    if (files.length === 0) {
      setAvatar(avatar)
    } else {
      const imageURL = window.URL.createObjectURL(files[0])
      setCover(imageURL)
    }
  }

  const handleAvatarOnPreview = (e) => {
    const { files } = e.target
    if (files.length === 0) {
      setAvatar(avatar)
    } else {
      const imageURL = window.URL.createObjectURL(files[0])
      setAvatar(imageURL)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setInitCover(false)

    if (name.trim().length === 0) {
      setErrormessage({ ...errorMessage, name: '名稱不可空白!' })
      formIsValid.current = 'false'
    }
    if (name.trim().length > 50) {
      setErrormessage({ ...errorMessage, name: '名稱不可超過 50 字!' })
      formIsValid.current = 'false'
    }
    if (introduction.trim().length > 160) {
      setErrormessage({
        ...errorMessage,
        introduction: '自我介紹不可超過 160 字!',
      })
      formIsValid.current = 'false'
    }
    if (formIsValid.current === 'false') {
      formIsValid.current = 'true'
      return
    }

    const form = e.target
    const formData = new FormData(form)

    console.log(formData.cover)

    if (initCover) {
      formData.delete('cover')
    }

    buttonControl(true)
    userApi
      .putUserEdit(userId, formData)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功更新設定!',
        })
        handleRerender('true')
        handelHideModel()
        buttonControl(false)
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '更新設定失敗!',
        })
        console.error(error)
        buttonControl(false)
      })
  }

  useEffect(() => {
    handleRerender('')
    userApi.getCurrentUser().then((res) => {
      const { data } = res
      if (res.status !== 200) {
        throw new Error(data.message)
      }
      setUserId(data.id)
      setCover(data.cover)
      setAvatar(data.avatar)
      setName(data.name)
      setIntroduction(data.introduction ? data.introduction : '')
    })
  }, [rerender])

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <form
            className={style.view__container}
            onSubmit={(e) => handleSubmit(e)}
          >
            <EditModalUi
              onHideModel={handleHideModel}
              title="編輯個人資料"
              buttonText="儲存"
            >
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
                      alt="Cover Change"
                    />
                  </label>
                  <div
                    className={style.coverDelete}
                    onClick={() => handleCancelChange(userId)}
                  >
                    <img
                      className={style.coverDelete__icon}
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
                  <div className={style.input__container__err}>
                    <LoginAndRegistInput
                      inputId="name"
                      name="name"
                      inputName="名稱"
                      inputPlaceHolder="請輸入使用者名稱"
                      inputType="text"
                      inputValue={name}
                      onChange={handleNameChange}
                      error={errorMessage.name}
                    />
                    {errorMessage.name && (
                      <p className={style.name__error}>{errorMessage.name}</p>
                    )}
                  </div>
                  <p
                    className={style.inputs__name__count}
                  >{`${name.length}/50`}</p>
                </div>

                <div className={style.inputs__descripition}>
                  <div className={style.input__container__err}>
                    <LoginAndRegistInput
                      inputId="introduction"
                      name="introduction"
                      inputName="自我介紹"
                      inputPlaceHolder="請輸入自我介紹"
                      inputType="text"
                      inputValue={introduction}
                      onChange={handleIntroductionChange}
                      error={errorMessage.introduction}
                    />
                    {errorMessage.introduction && (
                      <p className={style.introduction__error}>
                        {errorMessage.introduction}
                      </p>
                    )}
                  </div>
                  <p
                    className={style.inputs__description__count}
                  >{`${introduction.length}/160`}</p>
                </div>
              </div>

              <input
                id="cover__input"
                name="cover"
                type="file"
                className={style.cover__input}
                onChange={(e) => handleCoverOnPreview(e)}
              />
              <input
                id="avatar__input"
                name="avatar"
                type="file"
                className={style.avatar__input}
                onChange={(e) => handleAvatarOnPreview(e)}
              />
            </EditModalUi>
          </form>
          <BackDrop onHideModel={handleHideModel} />
        </>,
        portalElement
      )}
    </>
  )
}

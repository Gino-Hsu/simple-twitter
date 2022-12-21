import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'

import tweetApi from '../../API/tweetApi'
import userApi from '../../API/userApi'
import { Toast, Alert } from '../../utils/helpers'
import { HandleRerender } from '../../contexts/rerenderContext/RenderContext'
import { HideModel } from '../../contexts/modalControlContext/ModalControlContext'

import style from './TweetModal.module.scss'

export default function TweetModal({ onHideModel }) {
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()
  const [description, setDescription] = useState('')
  const handleRerender = HandleRerender()
  const handelHideModel = useContext(HideModel)

  const handleTweetChange = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (description.trim().length === 0) {
      Toast.fire({
        icon: 'error',
        title: '內容不可空白!',
      })
      return
    }
    if (description.trim().length > 140) {
      Toast.fire({
        icon: 'error',
        title: '不可超過 140 字!',
      })
      return
    }

    tweetApi
      .postTweet(description)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '推文成功!',
        })
        handleRerender('true')
        handelHideModel()
        setDescription('')
      })
      .catch((error) => {
        const errorMessage = error.response.data.message

        if (errorMessage === 'Error: 內容不可空白!') {
          Toast.fire({
            icon: 'error',
            title: '內容不可空白!',
          })
          return
        }
        if (errorMessage === 'Error: 推文字數限制在 140 以內!') {
          Toast.fire({
            icon: 'error',
            title: '推文字數限制在 140 以內!',
          })
          return
        } else {
          Toast.fire({
            icon: 'error',
            title: '推文失敗',
          })
        }

        console.error(error)
      })
  }

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <form
            className={style.view__container}
            onSubmit={(e) => handleSubmit(e)}
          >
            <Modal onHideModel={onHideModel} buttonText="推文">
              <div className={style.modal__main}>
                <div className={style.avatar}>
                  <img
                    className={style.avatar__img}
                    src={currentUser.avatar}
                    alt="Avatar"
                  />
                </div>
                <div className={style.input__container}>
                  <Textarea
                    textareaPlaceHolder="有什麼新鮮事嗎？"
                    textareaValue={description}
                    onChange={handleTweetChange}
                  />
                </div>
              </div>
            </Modal>
          </form>
          <BackDrop onHideModel={onHideModel} />
        </>,
        portalElement
      )}
    </>
  )
}

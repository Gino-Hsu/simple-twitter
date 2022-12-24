import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import EmojiPicker, { Emoji } from 'emoji-picker-react'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'
import tweetApi from '../../API/tweetApi'
import userApi from '../../API/userApi'
import { Toast, Alert } from '../../utils/helpers'
import { useHandleRerender } from '../../contexts/rerenderContext/RenderContext'
import { HideModel } from '../../contexts/modalControlContext/ModalControlContext'
import { useButtonControl } from '../../contexts/buttonControlContext/ButtonControlContext'

import style from './TweetModal.module.scss'

export default function TweetModal({ onHideModel }) {
  const [currentUser, setCurrentUser] = useState([])
  const [description, setDescription] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)
  const navigate = useNavigate()
  const handleRerender = useHandleRerender()
  const handelHideModel = useContext(HideModel)
  const buttonControl = useButtonControl()

  const handleEmojiClick = (emojiObject) => {
    let des = description
    des += emojiObject.emoji
    setDescription(des)
  }

  const handleToggleEmoji = () => {
    if (showEmoji === false) {
      setShowEmoji(true)
    } else {
      setShowEmoji(false)
    }
  }

  const handleTweetChange = (e) => {
    setShowEmoji(false)
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
    
    buttonControl(true)
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
        buttonControl(false)
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
        buttonControl(false)
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
                    onEmojiClick={handleEmojiClick}
                  />
                </div>
                <p
                  className={style.input__container__count}
                >{`${description.length} / 140`}</p>
                <label htmlFor="toggleEmoji" className={style.emojiOpen} onClick={handleToggleEmoji}>
                  <Emoji unified="1f423" size="30" />
                </label>
                <div className={showEmoji ? style.emojiPicker__show : style.emojiPicker}>
                  {/* <input
                    id="toggleEmoji"
                    type="checkbox"
                    className={style.emojiOpenCheck}
                    checked={showEmoji ? true : false}
                  /> */}
                  <label
                    htmlFor="toggleEmoji"
                    className={style.emojiOpen__mobile}
                    onClick={handleToggleEmoji}
                  >
                    <Emoji unified="1f423" size="30" />
                  </label>
                  <div className={style.emoji}>
                    {showEmoji && (
                      <EmojiPicker
                        onEmojiClick={handleEmojiClick}
                        height="100%"
                        width="100%"
                      />
                    )}
                  </div>
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

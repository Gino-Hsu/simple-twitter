import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'

import tweetApi from '../../API/tweetApi'
import userApi from '../../API/userApi'
import { Toast, Alert } from '../../utils/helpers'

import style from './TweetModal.module.scss'

export default function TweetModal({ onHideModel }) {
  const [tweet, setTweet] = useState('')
  const [currentUser, setCurrentUser] = useState([])
  const navigate = useNavigate()
  // const [description, setDescription] = useState['']

  const handleTweetChange = (e) => {
    setTweet(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    tweetApi
      .postTweet(tweet)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '推文成功!',
        })
        setTweet('')
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '推文失敗!',
        })
        navigate('/login')
        console.error(error)
      })
  }

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then(res => {
        const {data} = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch(error => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!'
        })
        console.error(error)
      })
  })

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideModel={onHideModel} />,
        portalElement
      )}
      {ReactDOM.createPortal(
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
                  textareaValue={tweet}
                  onChange={handleTweetChange}
                />
              </div>
            </div>
          </Modal>
        </form>,
        portalElement
      )}
    </>
  )
}

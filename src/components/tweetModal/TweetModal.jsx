import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'

import tweetApi from '../../API/tweetApi'
import { Toast } from '../../utils/helpers'

import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

import style from './TweetModal.module.scss'

export default function TweetModal({ onHideTweetModel }) {
  const [tweet, setTweet] = useState('')

  const handleTweetChange = (e) => {
    setTweet(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    tweetApi
      .postTweets(tweet)
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
        // 關掉 modal
      })
      .catch((error) => {
        Toast.fire({
          icon: 'error',
          title: '推文失敗!',
        })
        console.error(error)
      })
  }

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideModel={onHideTweetModel} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <form
          className={style.view__container}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Modal onHideModel={onHideTweetModel} buttonText="推文">
            <div className={style.modal__main}>
              <div className={style.avatar}>
                <img className={style.avatar__img} src={avatar} alt="Avatar" />
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

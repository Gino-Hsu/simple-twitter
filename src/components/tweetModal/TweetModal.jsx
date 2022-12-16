import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'

import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

import style from './TweetModal.module.scss'

export default function TweetModal({ onHideTweetModel }) {
  const [tweet, setTweet] = useState('')

  const handleTweetChange = (e) => {
    setTweet(e.target.value)
  }

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onHideTweetModel={onHideTweetModel} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <div className={style.view__container}>
          <Modal onHideTweetModel={onHideTweetModel} buttonText="推文">
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
        </div>,
        portalElement
      )}
    </>
  )
}

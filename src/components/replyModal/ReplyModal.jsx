import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Modal from '../../UIComponents/Modal'
import BackDrop from '../../UIComponents/BackDrop'
import { Textarea } from '../../UIComponents/Input'

import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

import style from './ReplyModal.module.scss'

export default function ReplyModal() {
  const [reply, setReply] = useState('')

  const handleReplyChange = (e) => {
    setReply(e.target.value)
  }

  return (
    <>
      {ReactDom.createPortal(
        <>
          <div className={style.view__container}>
            <Modal buttonText="回覆" title="推文">
              <div className={style.other__user__container}>{/* here */}</div>

              <div className={style.modal__main}>
                <div className={style.avatar}>
                  <img
                    className={style.avatar__img}
                    src={avatar}
                    alt="Avatar"
                  />
                </div>
                <div className={style.input__container}>
                  <Textarea
                    textareaPlaceHolder="推你的回覆"
                    textareaValue={reply}
                    onChange={handleReplyChange}
                  />
                </div>
              </div>
            </Modal>
          </div>
          <BackDrop />
        </>,
        document.getElementById('modal-root')
      )}
    </>
  )
}

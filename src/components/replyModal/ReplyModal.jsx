import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Modal from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'

import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

import style from './ReplyModal.module.scss'

const DUMMYDATA = {
  name: 'Gino',
  account: 'gino',
  time: '3 小時',
  tweet:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. In ex quisquam magnam accusantium eius culpa? Doloremque natus molestias reiciendis maxime voluptatibus cum deserunt necessitatibus, sequi deleniti expedita tenetur omnis. Nam.',
}

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
              <div className={style.flexbox}>
                <div className={style.other__user__container}>
                  <div className={style.other__avatar__container}>
                    <div className={style.other__avatar}>
                      <img
                        className={style.other__avatar__img}
                        src={avatar}
                        alt="Avatar"
                      />
                    </div>
                    <div className={style.straight__line} />
                  </div>

                  <div className={style.tweet__container}>
                    <div className={style.tweet__owner}>
                      <div className={style.other__user__name}>
                        {DUMMYDATA.name}
                      </div>
                      <div className={style.tweetby}>
                        <div className={style.other__user__account}>
                          {`@${DUMMYDATA.account}`}
                        </div>
                        <div className={style.spot} />
                        <div className={style.tweet__time}>
                          {DUMMYDATA.time}
                        </div>
                      </div>
                    </div>

                    <div className={style.reply__for__mobile}>
                      <p>回覆</p>
                      <p className={style.account}>
                        {' '}
                        {`@${DUMMYDATA.account}`}
                      </p>
                    </div>

                    <div className={style.reply__context}>
                      {DUMMYDATA.tweet}
                    </div>

                    <div className={style.reply__for}>
                      <p>回覆</p>
                      <p className={style.account}>
                        {' '}
                        {`@${DUMMYDATA.account}`}
                      </p>
                    </div>
                  </div>
                </div>

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

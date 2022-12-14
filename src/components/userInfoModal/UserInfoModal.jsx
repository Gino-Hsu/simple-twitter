// import React, { useState } from 'react'
import ReactDom from 'react-dom'
import Modal from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
// import { Textarea } from '../../UIComponents/inputs/Input'

// import avatar from '../../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

import style from './UserInfoModal.module.scss'

export default function UserInfoModal() {
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [imageSrc, setImageSrc] = useState('')

  return (
    <>
      {ReactDom.createPortal(
        <>
          <form className={style.view__container}>
            <Modal title="編輯個人資料" buttonText="儲存">
              <div className={style.cover__container}>
                <img className={style.cover__container__img} src="" alt="Cover Img" />
                <div className={style.icons}>
                  <input id="cover__input" type="file" />
                  <label htmlFor="cover__input" className={style.coverChange}>
                    <img className={style.coverChange__icon} src="" alt="Cover Change" />
                  </label>
                  <div className={style.coverDelete}>
                    <img className={style.coverDelete__icon} src="" alt="Cover Delete" />
                  </div>
                </div>
              </div>
            </Modal>
          </form>
          <BackDrop />
        </>,
        document.getElementById('modal-root')
      )}
    </>
  )
}

                // <div className={style.input__container}>
                //   <Textarea
                //     textareaPlaceHolder="有什麼新鮮事嗎？"
                //     textareaValue={tweet}
                //     onChange={handleTweetChange}
                //   />
                // </div>
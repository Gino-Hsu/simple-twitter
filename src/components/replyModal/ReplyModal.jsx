import React, { useState, useEffect, useContext } from 'react'
import ReactDOM from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Modal } from '../../UIComponents/modals/Modal'
import BackDrop from '../../UIComponents/modals/BackDrop'
import { Textarea } from '../../UIComponents/inputs/Input'
import { HideModel } from '../../contexts/modalControlContext/ModalControlContext'
import { Rerender, HandleRerender } from '../../contexts/rerenderContext/RenderContext'

import userApi from '../../API/userApi'
import tweetApi from '../../API/tweetApi'
import replyApi from '../../API/replyApi'
import { Alert, Toast } from '../../utils/helpers'

import style from './ReplyModal.module.scss'

export default function ReplyModal({ handleHideModel }) {
  const [reply, setReply] = useState('')
  const [tweet, setTweet] = useState({})
  const [user, setUser] = useState({})
  const [currentUser, setCurrentUser] = useState({})
  const navigate = useNavigate()
  const rerender = Rerender()
  const handleRerender = HandleRerender()
  const handelHideModel = useContext(HideModel)

  const handleReplyChange = (e) => {
    setReply(e.target.value)
  }

  const handleReply = (e) => {
    e.preventDefault()

    if (reply.trim().length === 0) {
      Toast.fire({
        icon: 'error',
        title: '內容不可空白!',
      })
      return
    }

    const tweetId = Number(localStorage.getItem('tweetId'))
    replyApi
      .postReply(tweetId, reply)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功回覆!',
        })
        handleRerender('true')
        handelHideModel()
      })
      .catch((error) => {
        const errorMessage = error.response.data.message
        console.log(errorMessage)
        if (errorMessage === 'Error: Comment欄位必填') {
          Toast.fire({
            icon: 'error',
            title: '內容不可空白!',
          })
        }
        Toast.fire({
          icon: 'error',
          title: '回覆失敗!',
        })
        console.error(error)
      })
  }

  useEffect(() => {
    const tweetId = localStorage.getItem('tweetId')
    tweetApi
      .getTweet(tweetId)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setTweet(data)
        setUser(data.User)
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

  useEffect(() => {
    handleRerender('')
    userApi.getCurrentUser().then((res) => {
      const { data } = res
      if (res.status !== 200) {
        throw new Error(data.message)
      }
      setCurrentUser(data)
    })
  }, [rerender])

  const portalElement = document.getElementById('modal-root')
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <form
            className={style.view__container}
            onSubmit={(e) => handleReply(e)}
          >
            <Modal onHideModel={handleHideModel} buttonText="回覆" title="推文">
              <div className={style.flexbox}>
                <div className={style.other__user__container}>
                  <div className={style.other__avatar__container}>
                    <div className={style.other__avatar}>
                      <img
                        className={style.other__avatar__img}
                        src={user.avatar}
                        alt="Avatar"
                      />
                    </div>
                    <div className={style.straight__line} />
                  </div>

                  <div className={style.tweet__container}>
                    <div className={style.tweet__owner}>
                      <div className={style.other__user__name}>{user.name}</div>
                      <div className={style.tweetby}>
                        <div className={style.other__user__account}>
                          {`@${user.account}`}
                        </div>
                        <div className={style.spot} />
                        <div className={style.tweet__time}>
                          {tweet.relativeTime}
                        </div>
                      </div>
                    </div>

                    <div className={style.reply__for__mobile}>
                      <p>回覆</p>
                      <p className={style.account}> {`@${user.account}`}</p>
                    </div>

                    <div className={style.reply__context}>
                      {tweet.description}
                    </div>

                    <div className={style.reply__for}>
                      <p>回覆</p>
                      <p className={style.account}> {`@${user.account}`}</p>
                    </div>
                  </div>
                </div>

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
                      textareaPlaceHolder="推你的回覆"
                      textareaValue={reply}
                      onChange={handleReplyChange}
                    />
                  </div>
                </div>
              </div>
            </Modal>
          </form>
          <BackDrop onHideModel={handleHideModel} />
        </>,
        portalElement
      )}
    </>
  )
}

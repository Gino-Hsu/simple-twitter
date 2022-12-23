import React, { createContext, useState } from 'react'
// import Swal from 'sweetalert2'
import { WarnAlert } from '../../utils/helpers'

export const TweetModelIsShow = createContext()
export const ReplyModelIsShow = createContext()
export const EditModelIsShow = createContext()
export const ShowTweetModel = createContext()
export const ShowReplyModel = createContext()
export const ShowEditModel = createContext()
export const HideTweetModel = createContext()
export const HideModel = createContext()

export function ModalControlContextProvider({ children }) {
  const [tweetModelIsShow, setTweetModelIsShow] = useState(false)
  const [replyModelIsShow, setReplyModelIsShow] = useState(false)
  const [editModelIsShow, setEditModelIsShow] = useState(false)

  const handleShowTweetModel = () => {
    setTweetModelIsShow(true)
  }

  const handleHideTweetModel = () => {
    WarnAlert.fire({
      title: '文章還沒推出去，確定要離開嗎?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '確定，沒有要發文了!',
      cancelButtonText: '保留!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        // WarnAlert.fire('已關閉推文', '要記得回來喔!', 'success')
        setTweetModelIsShow(false)
      }
      // else if (result.dismiss === Swal.DismissReason.cancel) {
      // WarnAlert.fire('繼續編輯文章', '你的朋友正在等著你的文章 :)', 'info')
      // }
    })
  }

  const handleShowReplyModel = (tweetId) => {
    localStorage.setItem('tweetId', tweetId)
    setReplyModelIsShow(true)
  }

  const handleShowEditModel = () => {
    setEditModelIsShow(true)
  }

  const handleHideModel = () => {
    setReplyModelIsShow(false)
    setEditModelIsShow(false)
    setTweetModelIsShow(false)
  }
  return (
    <TweetModelIsShow.Provider value={tweetModelIsShow}>
      <ReplyModelIsShow.Provider value={replyModelIsShow}>
        <EditModelIsShow.Provider value={editModelIsShow}>
          <ShowTweetModel.Provider value={handleShowTweetModel}>
            <ShowReplyModel.Provider value={handleShowReplyModel}>
              <ShowEditModel.Provider value={handleShowEditModel}>
                <HideTweetModel.Provider value={handleHideTweetModel}>
                  <HideModel.Provider value={handleHideModel}>
                    {children}
                  </HideModel.Provider>
                </HideTweetModel.Provider>
              </ShowEditModel.Provider>
            </ShowReplyModel.Provider>
          </ShowTweetModel.Provider>
        </EditModelIsShow.Provider>
      </ReplyModelIsShow.Provider>
    </TweetModelIsShow.Provider>
  )
}

import React, { useState } from 'react'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import ReplyListItem from '../../UIComponents/listItems/ReplyListItem'
// import { ShowReplyModel } from '../../contexts/modalControlContext/ModalControlContext'

import style from './ReplyList.module.scss'

import likeApi from '../../API/likeApi'
import { Toast } from '../../utils/helpers'
export default function ReplyList({
  tweetId,
  userName,
  userId,
  account,
  tweet,
  time,
  replyCount,
  likeCount,
  replies,
  avatar,
  isLiked,
  handleShowReplyModel,
}) {
  const [liked, setLiked] = useState(isLiked)
  const [newLikeCount, setNewLikeCount] = useState(likeCount)
  // const handleShowReplyModel = useContext(ShowReplyModel)

  const handleToggleLiked = (isLiked) => {
    const id = localStorage.getItem('userId')
    if (Number(userId) === Number(id)) {
      Toast.fire({
        icon: 'error',
        title: '不能按自己 Like 喔!',
      })
      return
    }
    if (isLiked === 0) {
      likeApi
        .postLike(tweetId)
        .then((res) => {
          const { data } = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '成功點擊 Like',
          })
          setLiked(1)
          setNewLikeCount(newLikeCount + 1)
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: '點擊 Like 失敗 :(',
          })
          console.error(error)
        })
    } else {
      likeApi
        .postUnlike(tweetId)
        .then((res) => {
          const { data } = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '成功取消 Like',
          })
          setLiked(0)
          setNewLikeCount(newLikeCount - 1)
        })
        .catch((error) => {
          Toast.fire({
            icon: 'error',
            title: '取消 Like 失敗 :(',
          })
          console.error(error)
        })
    }
  }
  return (
    <div className={style.viewport}>
      <div className={style.tweet__container}>
        <div className={style.border__bottom}>
          <div className={style.header}>
            <div className={style.arrow}>
              <img className={style.arrow__img} alt="arrow" />
            </div>
            <div className={style.title}>
              <p>推文</p>
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.user}>
            <div className={style.avatar}>
              <img src={avatar} className={style.avatar__img} alt="avatar" />
            </div>
            <div className={style.user__info}>
              <p className={style.user__info__name}>{userName}</p>
              <p className={style.user__info__account}>{`@${account}`}</p>
            </div>
          </div>

          <div className={style.tweet__text}>{tweet}</div>
          <div className={style.createAt}>
            <div className={style.createAt__time}>{time}</div>
            {/* {/* <div className={style.spot} /> */}
            {/* <div className={style.createAt__data}>{data}</div> */}
          </div>
          <div className={style.counts}>
            <div className={style.replyCount}>
              {replyCount}
              <p className={style.lightGray}>回覆</p>
            </div>
            <div className={style.likeCount}>
              {likeCount}
              <p className={style.lightGray}>喜歡次數</p>
            </div>
          </div>
        </div>
        <div className={style.icons}>
          <div
            onClick={() => handleShowReplyModel(tweetId)}
            className={style.icon__reply}
          >
            <img className={style.icon__reply__img} />
          </div>
          <div
            onClick={() => handleToggleLiked(liked)}
            className={style.icon__like}
          >
            <img
              className={
                liked === 1
                  ? style.icon__like__img__action
                  : style.icon__like__img
              }
              alt="like button"
            />
          </div>
        </div>
      </div>

      <div className={style.border__bottom}>
        <div className={style.replyAction__container}>
          <div className={style.currentUser}>
            <div className={style.currentUser__avatar}>
              <img src={avatar} className={style.currentUser__avatar__img} />
            </div>
            <p className={style.currentUser__text}>推你的回覆</p>
          </div>

          <div
            onClick={() => handleShowReplyModel(tweetId)}
            className={style.btn__reply}
          >
            <ButtonUI btnStyle="btn__pill__middle" text="回覆" />
          </div>
        </div>
      </div>
      <div className={style.replyLists}>
        {replies.map((reply) => (
          <ReplyListItem
            key={reply.id}
            userId={reply.User.id}
            avatarImg={reply.User.avatar}
            name={reply.User.name}
            account={reply.User.account}
            time={reply.relativeTime}
            forAccount={reply.Tweet.User.account}
            reply={reply.comment}
            forUserId={userId}
          />
        ))}
      </div>
    </div>
  )
}

import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import style from './TweetListItem.module.scss'
import { profileLink } from '../../utils/routeLink'
import { ShowReplyModel } from '../../contexts/modalControlContext/ModalControlContext'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

import likeApi from '../../API/likeApi'
import { Toast } from '../../utils/helpers'

export default function TweetListItem({
  tweet,
  userAvatar,
  account,
  userName,
  userId,
  time,
  replyCount,
  likeCount,
  tweetId,
  isLiked,
}) {
  const [liked, setLiked] = useState(isLiked)
  const handleShowReplyModel = useContext(ShowReplyModel)
  const handleChangeTab = useContext(ChangeTabContext)

  const handleToggleLiked = (isLiked) => {
    if (isLiked === 0) {
      likeApi
        .postLike(tweetId)
        .then(res => {
          const {data} = res
          if (res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '成功點擊 Like',
          })
          setLiked(1)
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
        .then(res => {
          const {data} = res
          if(res.status !== 200) {
            throw new Error(data.message)
          }
          Toast.fire({
            icon: 'success',
            title: '成功取消 Like',
          })
          setLiked(0)
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
    <div className={style.listItem__container}>
      <Link to={profileLink(userId, 'tweet')}>
        <div className={style.listItem__avatar}>
          <div className={style.avatar__img}>
            <img src={userAvatar} alt="user avatar" />
          </div>
        </div>
      </Link>
      <div className={style.listItem__info}>
        <div className={style.info__account}>
          <p>{userName}</p>
          <div className={style.subtitle}>
            <span>{account}</span>
            <span className={style.spot}></span>
            <span>{time}</span>
          </div>
        </div>
        <Link
          onClick={() => handleChangeTab('home')}
          to={`/alphitter/reply/${tweetId}`}
        >
          <div className={style.info__tweet}>
            <p>{tweet}</p>
          </div>
        </Link>
        <div className={style.info__icons}>
          <div className={style.icon__reply}>
            <div
              onClick={() => handleShowReplyModel(tweetId)}
              className={style.cursor}
            >
              <img className="" alt="reply button" />
            </div>
            <span>{replyCount}</span>
          </div>
          <div className={style.icon__like}>
            <div
              className={style.cursor}
              onClick={() => handleToggleLiked(liked)}
            >
              <img className={liked === 1 && style.action} alt="like button" />
            </div>
            <span>{likeCount}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

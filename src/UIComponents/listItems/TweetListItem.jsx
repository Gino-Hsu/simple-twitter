import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import style from './TweetListItem.module.scss'
import { profileLink } from '../../utils/routeLink'
import { ShowReplyModel } from '../../contexts/modalControlContext/ModalControlContext'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

export default function TweetListItem({
  tweet,
  userAvatar,
  account,
  userName,
  userId,
  time,
  twitterReply,
  twitterLike,
  tweetId,
}) {
  const handleShowReplyModel = useContext(ShowReplyModel)
  const handleChangeTab = useContext(ChangeTabContext)
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
            <div onClick={() => handleShowReplyModel(tweetId)} className={style.cursor}>
              <img className="" alt="reply button" />
            </div>
            <span>{twitterReply}</span>
          </div>
          <div className={style.icon__like}>
            <div className={style.cursor}>
              <img className="" alt="like button" />
            </div>
            <span>{twitterLike}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

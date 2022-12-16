import React from 'react'
import { Link } from 'react-router-dom'
import style from './TweetListItem.module.scss'

export default function TweetListItem({
  tweet,
  userAvatar,
  account,
  userName,
  time,
  twitterReply,
  twitterLike,
  handleChangeTab
}) {
  return (
    <div className={style.listItem__container}>
      <div className={style.listItem__avatar}>
        <div className={style.avatar__img}>
          <img src={userAvatar} alt="user avatar" />
        </div>
      </div>
      <div className={style.listItem__info}>
        <div className={style.info__account}>
          <p>{userName}</p>
          <div className={style.subtitle}>
            <span>{account}</span>
            <span className={style.spot}></span>
            <span>{time}</span>
          </div>
        </div>
        <Link onClick={() => handleChangeTab('home')} to={'/alphitter/reply/'}>
          <div className={style.info__tweet}>
            <p>{tweet}</p>
          </div>
        </Link>
        <div className={style.info__icons}>
          <div className={style.icon__reply}>
            <div className={style.cursor}>
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

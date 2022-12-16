import React from 'react'
import TweetModal from '../../components/tweetModal/TweetModal'
import style from './NavItem.module.scss'

export default function NavItem({
  iconStyle,
  textStyle,
  altName,
  title,
  handleShowTweetModel,
  handleHideModel,
  tweetModelIsShow,
}) {
  return (
    <>
      <div onClick={handleShowTweetModel} className={style.container}>
        <div className={style.icon__style}>
          <img className={style[iconStyle]} alt={altName} />
        </div>
        <div className={style[textStyle]}>{title}</div>
      </div>
      {tweetModelIsShow && <TweetModal onHideTweetModel={handleHideModel} />}
    </>
  )
}

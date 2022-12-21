import React from 'react'
import { Link } from 'react-router-dom'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './MobileOtherUser.module.scss'

export default function MobileOtherUser({
  userId,
  account,
  name,
  cover,
  avatar,
  description,
  followerCount,
  followingCount,
  onClick,
  isFollowed,
}) {
  return (
    <div className={style.currentUser__container}>
      <div className={style.header}></div>

      <div className={style.body}>
        <div className={style.cover}>
          <img src={cover} className={style.cover__img} alt="Cover" />
        </div>

        <div className={style.userInfo}>
          <div className={style.userInfo__avatar}>
            <img
              src={avatar}
              className={style.userInfo__avatar__img}
              alt="Avatar"
            />
          </div>
          <div className={style.info__container}>
            <div className={style.userInfo__name}>{name}</div>
            <div className={style.userInfo__account}>{`@${account}`}</div>
          </div>
        </div>

        <div className={style.buttons}>
          <div className={style.buttons__emailIcon}>
            <img className={style.buttons__emailIcon__img} alt="" />
          </div>
          <div className={style.buttons__bellIcon}>
            <img className={style.buttons__bellIcon__img} alt="" />
          </div>
          <div
            onClick={() => onClick(userId, isFollowed)}
            className={style.buttons__followBtn}
          >
            {isFollowed === 1 ? (
              <ButtonUI btnStyle="btn__pill__small" text="正在跟隨" />
            ) : (
              <ButtonUI btnStyle="btn__pill__small__default" text="跟隨" />
            )}
          </div>
        </div>

        <div className={style.description}>
          <div className={style.description__text}>{description}</div>
          <div className={style.follows}>
            <Link to="/alphitter/user/self/follower">
              <div className={style.follows__follower}>
                <p
                  className={style.follows__follower__count}
                >{`${followerCount} 個`}</p>
                <p className={style.follows__follower__type}>跟隨中</p>
              </div>
            </Link>
            <Link to="/alphitter/user/self/following">
              <div className={style.follows__following}>
                <p
                  className={style.follows__following__count}
                >{`${followingCount} 個`}</p>
                <p className={style.follows__following__type}>跟隨者</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

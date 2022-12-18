import React from 'react'
import UserToggleMenu from '../../UIComponents/tabs/UserToggleMenu'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import UserHeader from '../../UIComponents/headers/UserHeader'

import style from './OtherUser.module.scss'

export default function OtherUser({
  coverImg,
  name,
  account,
  avatarImg,
  introduction,
  followerCount,
  followingCount,
  children,
}) {
  return (
    <div className={style.otherUser__container}>
      <div className={style.header}>
        <UserHeader name={name} tweetCount="99" />
      </div>

      <div className={style.body}>
        <div className={style.cover}>
          <img className={style.cover__img} src={coverImg} alt="Cover" />
        </div>

        <div className={style.userInfo}>
          <div className={style.userInfo__avatar}>
            <img
              className={style.userInfo__avatar__img}
              src={avatarImg}
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
          <div className={style.buttons__followBtn}>
            <ButtonUI btnStyle="btn__pill__small" text="正在跟隨" />
          </div>
        </div>

        <div className={style.description}>
          <div className={style.description__text}>{introduction}</div>
          <div className={style.follows}>
            <div className={style.follows__follower}>
              <p
                className={style.follows__follower__count}
              >{`${followerCount} 個`}</p>
              <p className={style.follows__follower__type}>跟隨中</p>
            </div>
            <div className={style.follows__following}>
              <p
                className={style.follows__following__count}
              >{`${followingCount} 個`}</p>
              <p className={style.follows__following__type}>跟隨者</p>
            </div>
          </div>
        </div>
      </div>

      <div className={style.lists__header}>
        <UserToggleMenu />
      </div>

      <div className={style.listsContainer}>{children}</div>
    </div>
  )
}

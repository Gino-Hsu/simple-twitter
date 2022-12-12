import React from 'react'
// import UserHeader
import UserToggleMenu from '../../UIComponents/tabs/UserToggleMenu'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'

import style from './CurrentUser.module.scss'

export default function CurrentUser({
  coverImg,
  name,
  account,
  avatarImg,
  description,
  followerCount,
  followingCount,
  children,
}) {
  return (
    <div className={style.currentUser__container}>
      <div className={style.header}>{/* userHeader */}</div>

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

        <div className={style.edit}>
          <div className={style.edit__container}>
            <ButtonUI btnStyle="btn__pill__small__default" text="編輯個人資料" />
          </div>
        </div>

        <div className={style.description}>
          <div className={style.description__text}>{description}</div>
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

      <div className={style.listsContainer}>
        <div className={style.listsContainer__listItems}>{children}</div>
      </div>
    </div>
  )
}

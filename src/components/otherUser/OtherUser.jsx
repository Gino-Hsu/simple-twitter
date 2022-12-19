import React from 'react'
import OtherUserToggleMenu from '../../UIComponents/tabs/OtherUserToggleMenu'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import UserHeader from '../../UIComponents/headers/UserHeader'

import style from './OtherUser.module.scss'

export default function OtherUser({
  userId,
  coverImg,
  name,
  account,
  avatarImg,
  introduction,
  tweetCount,
  followerCount,
  followingCount,
  isFollowing,
  children,
}) {
  return (
    <div className={style.otherUser__container}>
      <div className={style.header}>
        <UserHeader name={name} tweetCount={tweetCount} />
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
            {isFollowing === 1 ? (
              <ButtonUI btnStyle="btn__pill__small" text="正在跟隨" />
            ) : (
              <ButtonUI btnStyle="btn__pill__small__default" text="跟隨" />
            )}
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
        <OtherUserToggleMenu userId={userId} />
      </div>

      <div className={style.listsContainer}>{children}</div>
    </div>
  )
}

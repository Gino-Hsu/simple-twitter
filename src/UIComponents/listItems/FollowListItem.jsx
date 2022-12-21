import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { profileLink } from '../../utils/routeLink'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

import style from './FollowListItem.module.scss'

export default function FollowListItem({
  userId,
  avatar,
  name,
  account,
  introduction,
  onClick,
  isFollowed,
  btnStyle,
  btnText,
}) {
  const handleChangeTab = useContext(ChangeTabContext)

  const handleChooseTab = () => {
    const id = localStorage.getItem('userId')
    Number(userId) === Number(id)
      ? handleChangeTab('user')
      : handleChangeTab('home')
  }
  return (
    <div className={style.listItem__container}>
      <Link onClick={() => handleChooseTab()} to={profileLink(userId, 'tweet')}>
        <div className={style.avatar}>
          <img className={style.avatar__img} src={avatar} alt="Avatar" />
        </div>
      </Link>
      <div className={style.listItem__body}>
        <div className={style.listItem__body__header}>
          <div className={style.tweetBy}>
            <div className={style.tweetBy__name}>{name}</div>
            <div className={style.tweetBy__account__time}>
              <div className={style.tweetBy__account}>{`@${account}`}</div>
            </div>
          </div>
          <div
            onClick={() => onClick(userId, isFollowed)}
            className={style.btn__container}
          >
            <ButtonUI btnStyle={btnStyle} text={btnText} />
          </div>
        </div>

        <div className={style.tweet__text}>{introduction}</div>
      </div>
    </div>
  )
}

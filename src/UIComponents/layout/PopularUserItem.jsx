import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { profileLink } from '../../utils/routeLink'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'
import ButtonUI from '../buttons/ButtonUI'
import style from './PopularUserItem.module.scss'

export default function PopularUserItem({
  btnStyle,
  text,
  container,
  userId,
  name,
  account,
  avatar,
  onClick,
  isFollowing,
}) {
  const handleChangeTab = useContext(ChangeTabContext)

  const handleChooseTab = () => {
    const id = localStorage.getItem('userId')
    Number(userId) === Number(id)
      ? handleChangeTab('user')
      : handleChangeTab('home')
  }
  
  return (
    <div className={style.item}>
      <Link onClick={() => handleChooseTab()} to={profileLink(userId, 'tweet')}>
        <div className={style.user__avatar}>
          <img src={avatar} alt="avatar" />
        </div>
      </Link>
      <div className={style.user__info}>
        <p className={style.user__info__name}>{name}</p>
        <p className={style.user__info__account}>{`@${account}`}</p>
      </div>
      <div
        className={style.btn__follow}
        onClick={() => onClick(userId, isFollowing)}
      >
        <div className={style[container]}>
          <ButtonUI btnStyle={btnStyle} text={text} />
        </div>
      </div>
    </div>
  )
}

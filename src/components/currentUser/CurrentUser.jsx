import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserToggleMenu from '../../UIComponents/tabs/UserToggleMenu'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import UserHeader from '../../UIComponents/headers/UserHeader'
import EditModal from '../EditModal/EditModal'
import {
  EditModelIsShow,
  ShowEditModel,
  HideModel,
} from '../../contexts/modalControlContext/ModalControlContext'
import { ChangeTabContext } from '../../contexts/sideBarControlContext/SideBarControlContext'

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
  const handleShowEditModel = useContext(ShowEditModel)
  const handleHideModel = useContext(HideModel)
  const editModelIsShow = useContext(EditModelIsShow)
  const handleChangeTab = useContext(ChangeTabContext)
  return (
    <div className={style.currentUser__container}>
      <div className={style.header}>
        <UserHeader name="Gino" tweetCount="99" />
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

        <div onClick={handleShowEditModel} className={style.edit}>
          <div className={style.edit__container}>
            <ButtonUI
              btnStyle="btn__pill__small__default"
              text="編輯個人資料"
            />
          </div>
        </div>
        {editModelIsShow && <EditModal handleHideModel={handleHideModel} />}

        <div className={style.description}>
          <div className={style.description__text}>{description}</div>
          <div className={style.follows}>
            <Link
              onClick={() => handleChangeTab('')}
              className={style.router__link}
              to="/alphitter/user/self/follower"
            >
              <div className={style.follows__follower}>
                <p
                  className={style.follows__follower__count}
                >{`${followerCount} 個`}</p>
                <p className={style.follows__follower__type}>跟隨中</p>
              </div>
            </Link>
            <Link
              onClick={() => handleChangeTab('')}
              className={style.router__link}
              to="/alphitter/user/self/following"
            >
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
      <div className={style.lists__header}>
        <UserToggleMenu />
      </div>

      <div className={style.listsContainer}>{children}</div>
    </div>
  )
}

import React, { useContext } from 'react'
import UserHeader from '../../UIComponents/headers/UserHeader'
import MobileUser from '../../components/currentUser/MobileUser'
import FollowTab from '../../UIComponents/tabs/FollowTab'
import FollowListItem from '../../UIComponents/listItems/FollowListItem'
import EditModal from '../../components/editModal/EditModal'
import {
  EditModelIsShow,
  HideModel,
} from '../../contexts/modalControlContext/ModalControlContext'
import style from './Follower.module.scss'

import avatar from '../../public/logo_gray@2x.png'
export default function Follower() {
  const handleHideModel = useContext(HideModel)
  const editModelIsShow = useContext(EditModelIsShow)
  return (
    <>
      {editModelIsShow && <EditModal handleHideModel={handleHideModel} />}

      <div className={style.page__container}>
        <div className={style.userHeader}>
          <UserHeader name="jeff" tweetCount="20" />
        </div>
        <div className={style.mobileUser}>
          <MobileUser
            account="jeff"
            name="Jeff Wang"
            description="大家好又是新的一天"
            followerCount="34"
            followingCount="56"
          />
        </div>
        <div className={style.tab}>
          <FollowTab />
        </div>
        <div className={style.follower__list}>
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />

          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
          <FollowListItem
            avatar={avatar}
            name="jeff"
            account="jeff"
            time="3小時前"
            tweet="時間不夠"
            btnStyle="btn__pill__small"
            btnText="正在跟隨"
          />
        </div>
      </div>
    </>
  )
}

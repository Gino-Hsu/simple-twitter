import React, { useState } from 'react'
import UserHeader from '../../UIComponents/headers/UserHeader'
import MobileUser from '../../components/currentUser/MobileUser'
import FollowTab from '../../UIComponents/tabs/FollowTab'
import FollowListItem from '../../UIComponents/listItems/FollowListItem'
import style from './Follower.module.scss'

import avatar from '../../public/logo_gray@2x.png'
export default function Follower() {
  const [follower, setFollower] = useState('follower__action')
  const [following, setFollowing] = useState('following')
  const [followerLink, setFollowerLink] = useState('follow__action')
  const [followingLink, setFollowingLink] = useState('follow')
  const onChangeColorFollower = () => {
    setFollower('follower__action')
    setFollowing('following')
    setFollowerLink('follow__action')
    setFollowerLink('follow')
  }
  const onChangeColorFollowing = () => {
    setFollower('follower')
    setFollowing('following__action')
    setFollowerLink('follow')
    setFollowingLink('follow__action')
  }

  return (
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
        <FollowTab
          styleFollower={follower}
          styleFollowing={following}
          bottomFollower={followerLink}
          bottomFollowing={followingLink}
          onChange1={() => onChangeColorFollower()}
          onChange2={() => onChangeColorFollowing()}
        />
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
          btnStyle="btn__pill__small__default"
          btnText="跟隨"
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
          btnStyle="btn__pill__small__default"
          btnText="跟隨"
        />
      </div>
    </div>
  )
}

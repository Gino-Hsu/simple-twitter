import React from "react";
import FollowTab from "../../UIComponents/tabs/FollowTab"
import FollowListItem from '../../UIComponents/listItems/FollowListItem'
import style from './Follower.module.scss'
export default function Follower() {
  return (
    <div className={style.follower__container}>
      <div className={style.tab}>
        <FollowTab />
      </div>
      <div className={style.follower__list}>
        <FollowListItem
          name="jeff"
          account="@jeff"
          time="3小時前"
          tweet="時間不夠"
          btnStyle="btn__pill__small"
          btnText="正在跟隨"
        />

        <FollowListItem
          name="jeff"
          account="@jeff"
          time="3小時前"
          tweet="時間不夠"
          btnStyle="btn__pill__small__default"
          btnText="跟隨"
        />
      </div>
    </div>
  )
}
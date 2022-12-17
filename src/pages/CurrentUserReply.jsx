import React from 'react'
import CurrentUser from '../components/currentUser/CurrentUser'
import ReplyListItem from '../UIComponents/listItems/ReplyListItem'

import style from './CurrentUserReply.module.scss'

import cover from '../public/default_background@2x.png'
import avatar from '../public/seed/81803399afee0c76ba618049dfdf2441.jpg'

export default function CurrentUserReply({
  handleChangeTab,
  handleShowEditModel,
  handleHideModel,
  editModelIsShow,
}) {
  return (
    <div className={style.userReply__container}>
      <CurrentUser
        handleChangeTab={handleChangeTab}
        coverImg={cover}
        name="Gino"
        account="gino"
        avatarImg={avatar}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rerum in quibusdam possimus atque velit, a adipisci perferendis, porro et enim ipsum dignissimos laboriosam veritatis quaerat tempore saepe doloribus laborum!"
        followerCount="34"
        followingCount="59"
        handleShowEditModel={handleShowEditModel}
        handleHideModel={handleHideModel}
        editModelIsShow={editModelIsShow}
      >
        <ReplyListItem
          avatarImg={avatar}
          name="Gino"
          account="gino"
          time="3 小時"
          forAccount="jeff"
          reply="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ReplyListItem
          avatarImg={avatar}
          name="Gino"
          account="gino"
          time="3 小時"
          forAccount="jeff"
          reply="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ReplyListItem
          avatarImg={avatar}
          name="Gino"
          account="gino"
          time="3 小時"
          forAccount="jeff"
          reply="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ReplyListItem
          avatarImg={avatar}
          name="Gino"
          account="gino"
          time="3 小時"
          forAccount="jeff"
          reply="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
        <ReplyListItem
          avatarImg={avatar}
          name="Gino"
          account="gino"
          time="3 小時"
          forAccount="jeff"
          reply="Lorem ipsum dolor sit amet consectetur adipisicing elit."
        />
      </CurrentUser>
    </div>
  )
}

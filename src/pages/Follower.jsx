import React from "react";
import Follower from "../components/follow/Follower";
import UserHeader from "../UIComponents/headers/UserHeader"
import ButtonUI from "../UIComponents/buttons/ButtonUI";

import style from "./Follower.module.scss"

export default function FollowerPage({
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
    <div>
      <UserHeader name="jeff" tweetCount="20" />
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
            <ButtonUI
              btnStyle="btn__pill__small__default"
              text="編輯個人資料"
            />
          </div>
        </div>
      </div>
      <Follower />
    </div>
  )
}
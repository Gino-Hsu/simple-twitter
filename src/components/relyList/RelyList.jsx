import React, { useContext } from 'react'
import ButtonUI from '../../UIComponents/buttons/ButtonUI'
import ReplyListItem from '../../UIComponents/listItems/ReplyListItem'
import { ShowReplyModel } from '../../contexts/modalControlContext/ModalControlContext'

import style from './ReplyList.module.scss'

export default function ReplyList({
  userName,
  userId,
  account,
  tweet,
  time,
  replyCount,
  likeCount,
  replies,
  avatar,
}) {
  const handleShowReplyModel = useContext(ShowReplyModel)
  return (
    <div className={style.viewport}>
      <div className={style.tweet__container}>
        <div className={style.border__bottom}>
          <div className={style.header}>
            <div className={style.arrow}>
              <img className={style.arrow__img} alt="arrow" />
            </div>
            <div className={style.title}>
              <p>推文</p>
            </div>
          </div>
        </div>
        <div className={style.body}>
          <div className={style.user}>
            <div className={style.avatar}>
              <img src={avatar} className={style.avatar__img} alt="avatar" />
            </div>
            <div className={style.user__info}>
              <p className={style.user__info__name}>{userName}</p>
              <p className={style.user__info__account}>{`@${account}`}</p>
            </div>
          </div>

          <div className={style.tweet__text}>{tweet}</div>
          <div className={style.createAt}>
            <div className={style.createAt__time}>{time}</div>
            {/* {/* <div className={style.spot} /> */}
            {/* <div className={style.createAt__data}>{data}</div> */}
          </div>
          <div className={style.counts}>
            <div className={style.replyCount}>
              {replyCount}
              <p className={style.lightGray}>回覆</p>
            </div>
            <div className={style.likeCount}>
              {likeCount}
              <p className={style.lightGray}>喜歡次數</p>
            </div>
          </div>
        </div>
        <div className={style.icons}>
          <div onClick={handleShowReplyModel} className={style.icon__reply}>
            <img className={style.icon__reply__img} />
          </div>
          <div className={style.icon__like}>
            <img className={style.icon__like__img} />
          </div>
        </div>
      </div>

      <div className={style.border__bottom}>
        <div className={style.replyAction__container}>
          <div className={style.currentUser}>
            <div className={style.currentUser__avatar}>
              <img src={avatar} className={style.currentUser__avatar__img} />
            </div>
            <p className={style.currentUser__text}>推你的回覆</p>
          </div>

          <div className={style.btn__reply}>
            <ButtonUI btnStyle="btn__pill__middle" text="回覆" />
          </div>
        </div>
      </div>
      <div className={style.replyLists}>
        {replies.map((reply) => (
          <ReplyListItem
            key={reply.id}
            userId={userId}
            avatarImg="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/collage-1589368023.jpg?crop=0.501xw:1.00xh;0,0&resize=640:*"
            name="Gino"
            account="gino"
            time={reply.relativeTime}
            forAccount="小波"
            reply={reply.comment}
          />
        ))}
      </div>
    </div>
  )
}

import React, { useContext } from 'react'
import TweetInput from './tweetInput/TweetInput'
import TweetListItem from '../../UIComponents/listItems/TweetListItem'
import TweetModal from '../tweetModal/TweetModal'
import {
  TweetModelIsShow,
  ShowTweetModel,
  HideTweetModel,
} from '../../contexts/modalControlContext/ModalControlContext'

import style from './MainTweet.module.scss'

export default function MainTweet({ tweets, currentUser, handleChangeTab }) {
  const handleShowTweetModel = useContext(ShowTweetModel)
  const handleHideTweetModel = useContext(HideTweetModel)
  const tweetModelIsShow = useContext(TweetModelIsShow)
  return (
    <>
      <div className={style.main__container}>
        <div onClick={handleShowTweetModel} className={style.position}>
          <div className={style.tweetInput}>
            <TweetInput currentUser={currentUser} />
          </div>
        </div>
        <div className={style.tweetListItem}>
          {tweets.map((tweet) => (
            <TweetListItem
              key={tweet.id}
              tweet={tweet.description}
              account={tweet.User.account}
              userName={tweet.User.name}
              time={tweet.relativeTime}
              tweetId={tweet.id}
              twitterLike="23"
              twitterReply="39"
              handleChangeTab={handleChangeTab}
            />
          ))}
        </div>
      </div>
      {tweetModelIsShow && <TweetModal onHideModel={handleHideTweetModel} />}
    </>
  )
}

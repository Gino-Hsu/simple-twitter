import React from 'react'
import TweetInput from './tweetInput/TweetInput'
import TweetListItem from '../../UIComponents/listItems/TweetListItem'
import TweetModal from '../tweetModal/TweetModal'

import style from './MainTweet.module.scss'

export default function MainTweet({
  tweets,
  currentUser,
  handleChangeTab,
  handleShowTweetModel,
  handleHideModel,
  tweetModelIsShow,
  handleShowReplyModel,
  replyModelIsShow,
}) {
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
              handleShowReplyModel={handleShowReplyModel}
              handleHideModel={handleHideModel}
              replyModelIsShow={replyModelIsShow}
            />
          ))}
        </div>
      </div>
      {tweetModelIsShow && <TweetModal onHideTweetModel={handleHideModel} />}
    </>
  )
}

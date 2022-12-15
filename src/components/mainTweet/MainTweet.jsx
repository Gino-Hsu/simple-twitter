import React from 'react'
import TweetInput from './tweetInput/TweetInput'
import TweetListItem from '../../UIComponents/listItems/TweetListItem'

import style from './MainTweet.module.scss'

export default function MainTweet({tweets, currentUser}) {
  // console.log(tweets)

  return (
    <div className={style.main__container}>
      <div className={style.position}>
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
            twitterLike="23"
            twitterReply="39"
          />
        ))}
      </div>
    </div>
  )
}

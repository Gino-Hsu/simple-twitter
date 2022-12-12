import React from 'react'
import TweetInput from './tweetInput/TweetInput'
import TweetListItem from '../../UIComponents/listItems/TweetListItem'

import style from './MainTweet.module.scss'

export default function MainTweet() {
  return (
    <div className={style.main__container}>
      <div className={style.position}>
        <div className={style.tweetInput}>
          <TweetInput />
        </div>
      </div>
      <div className={style.tweetListItem}>
        <TweetListItem
          twitter="1234fklhgkldfshgljfhaglkdshglsahglkhdslkghjl;ashglafshglasdhgvlkashglkvhdsalvkhfslbvlcsnvlfs5678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TweetListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
      </div>
    </div>
  )
}

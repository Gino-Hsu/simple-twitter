import React from 'react'
import TwitterInput from './twitterInput/TwitterInput'
import TwitterListItem from '../../UIComponents/TwitterListItem'

import style from './MainTwitter.module.scss'

export default function MainTwitter() {
  return (
    <div className={style.main__container}>
      <div className={style.position}>
        <div className={style.twitterInput}>
          <TwitterInput />
        </div>
        <div className={style.line}></div>
      </div>
      <div className={style.twitterListItem}>
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
          twitter="12345678"
          account="@Apple"
          userName="apple"
          time="5小時"
          twitterLike="23"
          twitterReply="39"
        />
        <TwitterListItem
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

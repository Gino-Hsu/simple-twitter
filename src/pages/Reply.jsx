import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RelyList from '../components/relyList/RelyList'

import tweetApi from '../API/tweetApi'
import replyApi from '../API/ReplyApi'

export default function Reply(
  handleShowReplyModel,
  handleHideModel,
  replyModelIsShow
) {
  const [tweet, setTweet] = useState([])
  const [replies, setReplies] = useState([])
  const param = useParams()

  useEffect(() => {
    tweetApi.getTweet(param.tweet_id).then((res) => {
      const { data } = res
      setTweet(data)
    })
  }, [])

  useEffect(() => {
    replyApi.getRelies(param.tweet_id).then((res) => {
      const { data } = res
      setReplies(data)
    })
  })

  return (
    <div>
      <RelyList
        userName={tweet.User.name}
        account={tweet.User.account}
        tweet={tweet.description}
        time={tweet.exactTime}
        replyCount="34"
        likeCount="808"
        replies={replies}
        handleShowReplyModel={handleShowReplyModel}
        handleHideModel={handleHideModel}
        replyModelIsShow={replyModelIsShow}
      />
    </div>
  )
}

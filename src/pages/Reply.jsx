import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RelyList from '../components/relyList/RelyList'

import tweetApi from '../API/tweetApi'
import replyApi from '../API/replyApi'

export default function Reply() {
  const [tweet, setTweet] = useState({})
  const [user, setUser] = useState({})
  const [replies, setReplies] = useState([])
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    tweetApi
      .getTweet(param.tweet_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setTweet(data)
        setUser(data.User)
      })
      .catch((error) => {
        console.error(error)
        navigate('/login')
      })
  }, [])

  useEffect(() => {
    replyApi
      .getRelies(param.tweet_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setReplies(data)
      })
      .catch((error) => {
        console.error(error)
        navigate('/login')
      })
  }, [])

  return (
    <div>
      <RelyList
        userName={user.name}
        userId={user.id}
        avatar={user.avatar}
        account={user.account}
        tweet={tweet.description}
        time={tweet.exactTime}
        replyCount={tweet.replyCount}
        likeCount={tweet.likeCount}
        replies={replies}
      />
    </div>
  )
}

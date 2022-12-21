import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import RelyList from '../components/relyList/RelyList'
import { ShowReplyModel } from '../contexts/modalControlContext/ModalControlContext'

import tweetApi from '../API/tweetApi'
import replyApi from '../API/replyApi'

export default function Reply() {
  const [tweet, setTweet] = useState({})
  const [user, setUser] = useState({})
  const [replies, setReplies] = useState([])
  const param = useParams()
  const navigate = useNavigate()
  const handleShowReplyModel = useContext(ShowReplyModel)

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
  }, [handleShowReplyModel])

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
  }, [handleShowReplyModel])

  return (
    <div>
      <RelyList
        key={tweet.id}
        tweetId={tweet.id}
        userName={user.name}
        userId={user.id}
        avatar={user.avatar}
        account={user.account}
        tweet={tweet.description}
        time={tweet.exactTime}
        replyCount={tweet.replyCount}
        likeCount={tweet.likeCount}
        replies={replies}
        isLiked={tweet.isLiked}
        handleShowReplyModel={handleShowReplyModel}
      />
    </div>
  )
}

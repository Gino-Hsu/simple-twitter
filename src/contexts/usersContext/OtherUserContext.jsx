import React, { createContext, useContext, useState } from 'react'
import userApi from '../../API/userApi'
import tweetApi from '../../API/tweetApi'
import replyApi from '../../API/replyApi'
import likeApi from '../../API/likeApi'
import { Alert } from '../../utils/helpers'

const OtherUserContext = createContext()
const GetOtherUserContext = createContext()
const OtherUserTweetsContext = createContext()
const GetOtherUserTweetsContext = createContext()
const OtherUserReplyContext = createContext()
const GetOtherUserReplyContext = createContext()
const OtherUserLikeContext = createContext()
const GetOtherUserLikeContext = createContext()

export function OtherUserProvider({ children }) {
  const [otherUser, setOtherUser] = useState('')
  const [tweets, setTweets] = useState([])
  const [repliedTweets, setRepliedTweets] = useState([])
  const [likedTweets, setLikedTweets] = useState([])

  const handleConfirmUser = (user_id) => {
    userApi
      .getOtherUser(user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setOtherUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
  }

  const handleConfirmTweet = (user_id) => {
    tweetApi
      .getUserTweets(user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.log(error)
      })
  }

  const handleConfirmReply = (user_id) => {
    replyApi
      .getUserReliedTweets(user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setRepliedTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        console.error(error)
      })
    }

  const handleConfirmLike = (user_id) => {
    likeApi
      .getUserLiked(user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setLikedTweets(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入',
        })
        console.log(error)
      })
  }
  return (
    <OtherUserContext.Provider value={otherUser}>
      <OtherUserTweetsContext.Provider value={tweets}>
        <OtherUserReplyContext.Provider value={repliedTweets}>
          <OtherUserLikeContext.Provider value={likedTweets}>
            <GetOtherUserContext.Provider value={handleConfirmUser}>
              <GetOtherUserTweetsContext.Provider value={handleConfirmTweet}>
                <GetOtherUserReplyContext.Provider value={handleConfirmReply}>
                  <GetOtherUserLikeContext.Provider value={handleConfirmLike}>
                    {children}
                  </GetOtherUserLikeContext.Provider>
                </GetOtherUserReplyContext.Provider>
              </GetOtherUserTweetsContext.Provider>
            </GetOtherUserContext.Provider>
          </OtherUserLikeContext.Provider>
        </OtherUserReplyContext.Provider>
      </OtherUserTweetsContext.Provider>
    </OtherUserContext.Provider>
  )
}

export function useOtherUserContext() {
  return useContext(OtherUserContext)
}

export function useGetOtherUserContext() {
  return useContext(GetOtherUserContext)
}

export function useOtherUserTweetsContext() {
  return useContext(OtherUserTweetsContext)
}

export function useGetOtherUserTweetsContext() {
  return useContext(GetOtherUserTweetsContext)
}

export function useOtherUserReplyContext() {
  return useContext(OtherUserReplyContext)
}

export function useGetOtherUserReplyContext() {
  return useContext(GetOtherUserReplyContext)
}

export function useOtherUserLikeContext() {
  return useContext(OtherUserLikeContext)
}

export function useGetOtherUserLikeContext() {
  return useContext(GetOtherUserLikeContext)
}

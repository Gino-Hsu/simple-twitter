import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import userApi from '../API/userApi'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'

import style from './CurrentUserTweet.scss'

export default function CurrentUserTweet({
  handleChangeTab,
  handleShowReplyModel,
  replyModelIsShow,
  handleShowEditModel,
  handleHideModel,
  editModelIsShow,
}) {
  const [currentUser, setCurrentUser] = useState([])
  const [tweets, setTweets] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    userApi
      .getCurrentUser()
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setCurrentUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請重新登入!',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])

  useEffect(() => {
    const currentUserId = localStorage.getItem('userId')
    tweetApi
      .getUserTweets(currentUserId)
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
        navigate('/login')
        console.log(error)
      })
  }, [])

  return (
    <div className={style.userTweet__container}>
      <CurrentUser
        coverImg={currentUser.cover}
        name={currentUser.name}
        account={currentUser.account}
        avatarImg={currentUser.avatar}
        description={currentUser.introduction}
        followerCount={currentUser.followersCount}
        followingCount={currentUser.followingCount}
        handleChangeTab={handleChangeTab}
        handleShowEditModel={handleShowEditModel}
        handleHideModel={handleHideModel}
        editModelIsShow={editModelIsShow}
      >
        {tweets.map((tweet) => (
          <TweetListItem
            key={tweet.id}
            tweet={tweet.description}
            userId={tweet.User.id}
            userAvatar={tweet.User.avatar}
            account={tweet.User.account}
            userName={tweet.User.name}
            time={tweet.relativeTime}
            replyCount={tweet.replyCount}
            likeCount={tweet.likeCount}
            handleShowReplyModel={handleShowReplyModel}
            handleHideModel={handleHideModel}
            replyModelIsShow={replyModelIsShow}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

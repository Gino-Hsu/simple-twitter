import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import likeApi from '../API/likeApi'
import { Alert } from '../utils/helpers'
import {
  useRerender,
  useHandleRerender,
} from '../contexts/rerenderContext/RenderContext'
import {
  useGetCurrentUser,
  useCurrentUser,
} from '../contexts/usersContext/CurrentUserContext'
import { ChangeTabContext } from '../contexts/sideBarControlContext/SideBarControlContext'

import style from './CurrentUserLike.module.scss'

export default function CurrentUserLike() {
  const [likedTweets, setLikedTweets] = useState([])
  const navigate = useNavigate()
  const rerender = useRerender()
  const handleRerender = useHandleRerender()
  const getCurrentUser = useGetCurrentUser()
  const currentUser = useCurrentUser()
  const handleChangeTabContext = useContext(ChangeTabContext)

  useEffect(() => {
    handleRerender('')
    handleChangeTabContext('user')
    getCurrentUser(navigate)
  }, [rerender])

  useEffect(() => {
    likeApi
      .getUserLiked(currentUser.id)
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
          title: '請重新登入!',
        })
        navigate('/login')
        console.log(error)
      })
  }, [])

  return (
    <div className={style.userLike__container}>
      <CurrentUser
        userId={currentUser.id}
        coverImg={currentUser.cover}
        name={currentUser.name}
        account={currentUser.account}
        avatarImg={currentUser.avatar}
        description={currentUser.introduction}
        tweetCount={currentUser.tweetCount}
        followerCount={currentUser.followerCount}
        followingCount={currentUser.followingCount}
      >
        {likedTweets.map((likedTweet) => (
          <TweetListItem
            key={likedTweet.id}
            tweet={likedTweet.Tweet.description}
            tweetId={likedTweet.TweetId}
            userId={likedTweet.Tweet.User.id}
            userAvatar={likedTweet.Tweet.User.avatar}
            account={likedTweet.Tweet.User.account}
            userName={likedTweet.Tweet.User.name}
            time={likedTweet.relativeTime}
            replyCount={likedTweet.Tweet.replyCount}
            likeCount={likedTweet.Tweet.likeCount}
            isLiked={likedTweet.Tweet.isLiked}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

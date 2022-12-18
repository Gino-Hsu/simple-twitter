import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'
import userApi from '../API/userApi'
//暫時先用其他API測試
// import likeApi from '../API/likeApi'
import tweetApi from '../API/tweetApi'
import { Alert } from '../utils/helpers'
import style from './CurrentUserLike.module.scss'

export default function CurrentUserLike() {
  const [currentUser, setCurrentUser] = useState([])
  const [likedTweets, setLikedTweets] = useState([])
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
      // .getUserLikedTweets(currentUserId)
      .getUserTweets(currentUserId)
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
        coverImg={currentUser.cover}
        name={currentUser.name}
        account={currentUser.account}
        avatarImg={currentUser.avatar}
        description={currentUser.introduction}
        tweetCount={currentUser.tweetCount}
        followerCount={currentUser.followersCount}
        followingCount={currentUser.followingCount}
      >
        {likedTweets.map((like) => (
          <TweetListItem
            key={like.id}
            tweet={like.description}
            tweetId={like.id}
            userId={like.User.id}
            userAvatar={like.User.avatar}
            account={like.User.account}
            userName={like.User.name}
            time={like.relativeTime}
            replyCount={like.replyCount}
            likeCount={like.likeCount}
          />
        ))}
      </CurrentUser>
    </div>
  )
}

import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import OtherUser from '../components/otherUser/OtherUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'


import userApi from '../API/userApi'
import likeApi from '../API/likeApi'
import { Alert } from '../utils/helpers'

import style from './OtherUserLike.module.scss'

export default function OtherUserLike() {
  const [user, setUser] = useState('')
  const [likedTweets, setLikedTweets] = useState([])
  const param = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    userApi
      .getOtherUser(param.user_id)
      .then((res) => {
        const { data } = res
        if (res.status !== 200) {
          throw new Error(data.message)
        }
        setUser(data)
      })
      .catch((error) => {
        Alert.fire({
          icon: 'error',
          title: '請輸入登入',
        })
        navigate('/login')
        console.error(error)
      })
  }, [])

  useEffect(() => {
    likeApi
      .getUserLikedTweets(param.user_id)
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
          title: '請重新登入'
        })
        navigate('/login')
        console.log(error)
      })
  }, [])
  return (
    <div className={style.userLike__container}>
      <OtherUser
        coverImg={user.cover}
        name={user.name}
        account={user.account}
        avatarImg={user.avatar}
        introduction={user.introduction}
        followerCount={user.followersCount}
        followingCount={user.followingCount}
      >
        {likedTweets.map((like) => ())}
        <TweetListItem
          key={like.id}
          tweet={like.description}
          userId={like.User.id}
          userAvatar={like.User.avatar}
          account={like.User.account}
          userName={like.User.name}
          time={like.relativeTime}
          replyCount={like.replyCount}
          likeCount={like.likeCount}
        />
      </OtherUser>
    </div>
  )
}

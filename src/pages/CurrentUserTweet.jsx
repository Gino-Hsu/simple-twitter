import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import CurrentUser from '../components/currentUser/CurrentUser'
import TweetListItem from '../UIComponents/listItems/TweetListItem'

import userApi from '../API/userApi'
import { Alert } from '../utils/helpers'

import style from './CurrentUserTweet.scss'

export default function CurrentUserTweet({ handleChangeTab }) {
  const [currentUser, setCurrentUser] = useState([])
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
      >
        <TweetListItem
          handleChangeTab={handleChangeTab}
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
        <TweetListItem
          tweet="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          userAvatar={'avatar'}
          account="gino"
          userName="Gino"
          time="3 小時"
          twitterReply="13"
          twitterLike="76"
        />
      </CurrentUser>
    </div>
  )
}

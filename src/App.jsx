import './App.scss'
import React, { useState } from 'react'
import Swal from 'sweetalert2'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Login from './pages/Login'
import Regist from './pages/Regist'
import Setting from './pages/Setting'
import AdminLogin from './pages/AdminLogin'
import AdminTweets from './pages/AdminTweets'
import AdminUsers from './pages/AdminUsers'
import Home from './pages/Home'
import Reply from './pages/Reply'
import CurrentUserTweet from './pages/CurrentUserTweet'
import CurrentUserReply from './pages/CurrentUserReply'
import CurrentUserLike from './pages/CurrentUserLike'
import Follower from './components/follow/Follower'
import Following from './components/follow/Following'
import OtherUserTweet from './pages/OtherUserTweet'
import OtherUserReply from './pages/OtherUserReply'
import OtherUserLike from './pages/OtherUserLike'
import { WarnAlert } from './utils/helpers'

function App() {
  const [step, setStep] = useState('home')
  const [tweetModelIsShow, setTweetModelIsShow] = useState(false)
  const [replyModelIsShow, setReplyModelIsShow] = useState(false)
  const [editModelIsShow, setEditModelIsShow] = useState(false)
  const handleChangeTab = (tab) => {
    setStep(tab)
  }

  const handleShowTweetModel = () => {
    setTweetModelIsShow(true)
  }

  const handleHideTweetModel = () => {
    WarnAlert.fire({
      title: '文章還沒推出去，確定要離開嗎?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '確定，沒有要發文了!',
      cancelButtonText: '保留!',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        WarnAlert.fire('已關閉推文', '要記得回來喔!', 'success')

        setTweetModelIsShow(false)
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        WarnAlert.fire('繼續編輯文章', '你的朋友正在等著你的文章 :)', 'info')
      }
    })
  }

  const handleShowReplyModel = () => {
    setReplyModelIsShow(true)
  }

  const handleShowEditModel = () => {
    setEditModelIsShow(true)
  }

  const handleHideModel = () => {
    setReplyModelIsShow(false)
    setEditModelIsShow(false)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route
            path="/setting"
            element={<Setting step={step} handleChangeTab={handleChangeTab} />}
          ></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin/tweets" element={<AdminTweets />}></Route>
          <Route path="/admin/users" element={<AdminUsers />}></Route>
          <Route
            path="/alphitter"
            element={
              <Layout
                step={step}
                handleChangeTab={handleChangeTab}
                handleShowTweetModel={handleShowTweetModel}
                handleHideTweetModel={handleHideTweetModel}
                tweetModelIsShow={tweetModelIsShow}
              />
            }
          >
            <Route
              path="user/self/tweet"
              element={
                <CurrentUserTweet
                  handleChangeTab={handleChangeTab}
                  handleShowReplyModel={handleShowReplyModel}
                  handleHideModel={handleHideModel}
                  replyModelIsShow={replyModelIsShow}
                  handleShowEditModel={handleShowEditModel}
                  editModelIsShow={editModelIsShow}
                />
              }
            ></Route>
            <Route
              path="home"
              element={
                <Home
                  handleChangeTab={handleChangeTab}
                  handleShowTweetModel={handleShowTweetModel}
                  handleHideTweetModel={handleHideTweetModel}
                  handleHideModel={handleHideModel}
                  tweetModelIsShow={tweetModelIsShow}
                  handleShowReplyModel={handleShowReplyModel}
                  replyModelIsShow={replyModelIsShow}
                />
              }
            ></Route>
            <Route
              path="reply/:tweet_id"
              element={
                <Reply
                  handleShowReplyModel={handleShowReplyModel}
                  handleHideModel={handleHideModel}
                  replyModelIsShow={replyModelIsShow}
                />
              }
            ></Route>

            <Route
              path="user/self/reply"
              element={
                <CurrentUserReply
                  handleChangeTab={handleChangeTab}
                  handleHideModel={handleHideModel}
                  handleShowEditModel={handleShowEditModel}
                  editModelIsShow={editModelIsShow}
                />
              }
            ></Route>
            <Route
              path="user/self/like"
              element={
                <CurrentUserLike
                  handleChangeTab={handleChangeTab}
                  handleHideModel={handleHideModel}
                  handleShowReplyModel={handleShowReplyModel}
                  replyModelIsShow={replyModelIsShow}
                  handleShowEditModel={handleShowEditModel}
                  editModelIsShow={editModelIsShow}
                />
              }
            ></Route>
            <Route
              path="user/self/follower"
              element={<Follower handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="user/self/following"
              element={<Following handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="user/other/tweet/:user_id"
              element={
                <OtherUserTweet
                  handleShowReplyModel={handleShowReplyModel}
                  handleHideModel={handleHideModel}
                  replyModelIsShow={replyModelIsShow}
                />
              }
            ></Route>
            <Route
              path="user/other/reply/"
              element={<OtherUserReply />}
            ></Route>
            <Route
              path="user/other/like"
              element={
                <OtherUserLike
                  handleShowReplyModel={handleShowReplyModel}
                  handleHideModel={handleHideModel}
                  replyModelIsShow={replyModelIsShow}
                />
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

///<Route path="/彈跳視窗" element={<TweetModal />}></Route>
///<Route path="/彈跳視窗" element={<ReplyModal />}></Route>

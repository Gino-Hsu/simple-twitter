import './App.scss'
import React, { useState } from 'react'
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

function App() {
  const [step, setStep] = useState('home')
  const handleChangeTab = (tab) => {
    setStep(tab)
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
            element={<Layout step={step} handleChangeTab={handleChangeTab} />}
          >
            <Route
              path="user/self/tweet"
              element={<CurrentUserTweet handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="home"
              element={<Home handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route path="reply/:tweet_id" element={<Reply />}></Route>

            <Route
              path="user/self/reply"
              element={<CurrentUserReply handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="user/self/like"
              element={<CurrentUserLike handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="user/self/follower"
              element={<Follower handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route
              path="user/self/following"
              element={<Following handleChangeTab={handleChangeTab} />}
            ></Route>
            <Route path="user/other/tweet" element={<OtherUserTweet />}></Route>
            <Route
              path="user/other/reply/"
              element={<OtherUserReply />}
            ></Route>
            <Route path="user/other/like" element={<OtherUserLike />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

///<Route path="/彈跳視窗" element={<TweetModal />}></Route>
///<Route path="/彈跳視窗" element={<ReplyModal />}></Route>

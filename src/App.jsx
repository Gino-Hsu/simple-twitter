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
import EditModal from './components/EditModal/EditModal'

function App() {
  const [step, setStep] = useState('home')
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/modal" element={<EditModal />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/setting" element={<Setting />}></Route>
          <Route path="/admin" element={<AdminLogin />}></Route>
          <Route path="/admin/tweets" element={<AdminTweets />}></Route>
          <Route path="/admin/Users" element={<AdminUsers />}></Route>
          <Route path="/edit" element={<EditModal />}></Route>
          <Route
            path="/alphitter"
            element={<Layout step={step} setStep={setStep} />}
          >
            <Route path="home" element={<Home />}></Route>
            <Route path="reply" element={<Reply />}></Route>
            <Route
              path="user/self/tweet"
              element={<CurrentUserTweet setStep={setStep} />}
            ></Route>
            <Route
              path="user/self/reply"
              element={<CurrentUserReply setStep={setStep} />}
            ></Route>
            <Route
              path="user/self/like"
              element={<CurrentUserLike setStep={setStep} />}
            ></Route>
            <Route
              path="user/self/follower"
              element={<Follower setStep={setStep} />}
            ></Route>
            <Route
              path="user/self/following"
              element={<Following setStep={setStep} />}
            ></Route>
            <Route path="user/other/tweet" element={<OtherUserTweet />}></Route>
            <Route path="user/other/reply" element={<OtherUserReply />}></Route>
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

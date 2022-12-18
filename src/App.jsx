import './App.scss'
import React from 'react'

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
import SideBarControlContextProvider from './contexts/sideBarControlContext/SideBarControlContext'
import ModalControlContextProvider from './contexts/modalControlContext/ModalControlContext'

function App() {
  return (
    <SideBarControlContextProvider>
      <ModalControlContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/regist" element={<Regist />}></Route>
              <Route path="/setting" element={<Setting />}></Route>
              <Route path="/admin" element={<AdminLogin />}></Route>
              <Route path="/admin/tweets" element={<AdminTweets />}></Route>
              <Route path="/admin/users" element={<AdminUsers />}></Route>
              <Route path="/alphitter" element={<Layout />}>
                <Route
                  path="user/self/tweet"
                  element={<CurrentUserTweet />}
                ></Route>
                <Route path="home" element={<Home />}></Route>
                <Route path="reply/:tweet_id" element={<Reply />}></Route>
                <Route
                  path="user/self/reply"
                  element={<CurrentUserReply />}
                ></Route>
                <Route
                  path="user/self/like"
                  element={<CurrentUserLike />}
                ></Route>
                <Route path="user/self/follower" element={<Follower />}></Route>
                <Route
                  path="user/self/following"
                  element={<Following />}
                ></Route>
                <Route
                  path="user/other/tweet"
                  element={<OtherUserTweet />}
                ></Route>
                <Route
                  path="user/other/reply/"
                  element={<OtherUserReply />}
                ></Route>
                <Route
                  path="user/other/like"
                  element={<OtherUserLike />}
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </ModalControlContextProvider>
    </SideBarControlContextProvider>
  )
}

export default App
import './App.scss'
import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
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
import Follower from './pages/Follower'
import Following from './pages/Following'
import OtherUserTweet from './pages/OtherUserTweet'
import OtherUserReply from './pages/OtherUserReply'
import OtherUserLike from './pages/OtherUserLike'
import { SideBarControlContextProvider } from './contexts/sideBarControlContext/SideBarControlContext'
import { ModalControlContextProvider } from './contexts/modalControlContext/ModalControlContext'
import { FollowerControlProvider } from './contexts/followedControlContext/FollowedControlContext'
import { RenderContextProvider } from './contexts/rerenderContext/RenderContext'
import { OtherUserProvider } from './contexts/usersContext/OtherUserContext'
import { CurrentUserContextProvider } from './contexts/usersContext/CurrentUserContext'

function App() {
  return (
    <CurrentUserContextProvider>
      <OtherUserProvider>
        <RenderContextProvider>
          <FollowerControlProvider>
            <SideBarControlContextProvider>
              <ModalControlContextProvider>
                <div className="App">
                  <HashRouter>
                    <Routes>
                      <Route path="/login" element={<Login />}></Route>
                      <Route path="/regist" element={<Regist />}></Route>
                      <Route path="/setting" element={<Setting />}></Route>
                      <Route path="/admin" element={<AdminLogin />}></Route>
                      <Route
                        path="/admin/tweets"
                        element={<AdminTweets />}
                      ></Route>
                      <Route
                        path="/admin/users"
                        element={<AdminUsers />}
                      ></Route>
                      <Route path="/alphitter" element={<Layout />}>
                        <Route
                          path="user/self/tweet"
                          element={<CurrentUserTweet />}
                        ></Route>
                        <Route path="home" element={<Home />}></Route>
                        <Route
                          path="reply/:tweet_id"
                          element={<Reply />}
                        ></Route>
                        <Route
                          path="user/self/reply"
                          element={<CurrentUserReply />}
                        ></Route>
                        <Route
                          path="user/self/like"
                          element={<CurrentUserLike />}
                        ></Route>
                        <Route
                          path="user/follower/:user_id"
                          element={<Follower />}
                        ></Route>
                        <Route
                          path="user/following/:user_id"
                          element={<Following />}
                        ></Route>
                        <Route
                          path="user/other/tweet/:user_id"
                          element={<OtherUserTweet />}
                        ></Route>
                        <Route
                          path="user/other/reply/:user_id"
                          element={<OtherUserReply />}
                        ></Route>
                        <Route
                          path="user/other/like/:user_id"
                          element={<OtherUserLike />}
                        ></Route>
                      </Route>
                      <Route path="/*" element={<Login />}></Route>
                    </Routes>
                  </HashRouter>
                </div>
              </ModalControlContextProvider>
            </SideBarControlContextProvider>
          </FollowerControlProvider>
        </RenderContextProvider>
      </OtherUserProvider>
    </CurrentUserContextProvider>
  )
}

export default App

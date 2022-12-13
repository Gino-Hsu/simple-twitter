import './App.scss'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './pages/layout/Layout'
import Login from './pages/Login'
import Regist from './pages/Regist'
import AdminTweets from './pages/AdminTweets'
import Home from './pages/Home'
import Reply from './pages/Reply'
import Follower from './components/follow/Follower'
import Following from './components/follow/Following'

// import CurrenUserTweet from ''
// import CurrenUserReply from ''
// import CurrenUserLike from ''

// import OtherUserTweet from ''
// import OtherUserReply from ''
// import OtherUserLike from ''
// import Setting from ''
// import AdminLogin from ''

// import AdminUsers from ''

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
          <Route path="/alphitter" element={<Layout />}>
            <Route path="home" element={<Home />}></Route>
            <Route path="reply" element={<Reply />}></Route>
            <Route path="user/self/follower" element={<Follower />}></Route>
            <Route path="user/self/following" element={<Following />}></Route>
            {/* <Route path="user/other/tweet" element={<OtherUserTweet />}></Route>
            <Route path="user/other/reply" element={<OtherUserReply />}></Route>
            <Route path="user/other/like" element={<OtherUserLike />}></Route>
            <Route path="user/self/tweet" element={<CurrenUserTweet />}></Route>
            <Route path="user/self/reply" element={<CurrenUserReply />}></Route>
            <Route path="user/self/like" element={<CurrenUserLike />}></Route>
            

            <Route path="/setting" element={<Setting />}></Route>
            <Route path="/admin" element={<AdminLogin />}></Route>

            <Route path="/admin/Users" element={<AdminUsers />}></Route>
            <Route path="/彈跳視窗" element={<TweetModal />}></Route>
            <Route path="/彈跳視窗" element={<ReplyModal />}></Route>
            <Route path="/彈跳視窗" element={<EditModal />}></Route> */}
          </Route>
          <Route path="/admin/tweets" element={<AdminTweets />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

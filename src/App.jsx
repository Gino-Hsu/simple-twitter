import './App.scss'
import TwitterInput from './components/mainTweets/twitterInput/TwitterInput'
// import TweetListItem from './UIComponents/TweetListItem'
// import Regist from './pages/Regist'
// import Login from './pages/Login'
// import SideBar from './components/SideBar/SideBar'
// import PopularUser from './components/popularUser/PopularUser'
// import Home from './pages/Home'


function App() {
  return (
    <div className="App">
      {/* <Regist /> */}
      {/* <Login /> */}
      {/* <SideBar /> */}
      {/* <PopularUser /> */}
      {/* <Home /> */}
      {/* <TweetListItem
        twitter="12345678"
        account="@Apple"
        userName="apple"
        time="5小時"
        twitterLike="23"
        twitterReply="39"
      /> */}
      <TwitterInput />
    </div>
  )
}

export default App

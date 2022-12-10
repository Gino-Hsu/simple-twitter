import './App.scss'
import ReplyListItem from './UIComponents/ReplyListItem'

import avatar from './public/logo_gray@2x.png'


function App() {

  return <div className="App">
    <ReplyListItem avatar={avatar} name="Gino" account="gino" time="3 小時" forAccount="Jeff" reply="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium maxime fugiat odio. Voluptatum rerum reprehenderit repellat, debitis earum quibusdam error saepe sed velit! Sit optio quibusdam provident nesciunt sunt laboriosam." />
  return (
    <div className="App">

    </div>
  )
}

export default App

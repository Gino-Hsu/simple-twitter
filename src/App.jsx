import './App.scss'
import SideBar from './components/SideBar/SideBar'

function App({ item }) {
  return (
    <>
      <div className="App">{item}</div>
      <SideBar />
    </>
  )
}

export default App

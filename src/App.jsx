import './App.scss'
import NavItem from './UIComponents/NavItem'

function App({ item }) {
  return (
    <>
      <div className="App">{item}</div>
        <NavItem
          icon="icon-home"
          altName="home"
          title="首頁"
        />
    </>
  )
}

export default App

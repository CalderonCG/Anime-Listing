import { Route, Routes } from 'react-router-dom'
import './App.scss'
import SideBar from './components/SideBar/SideBar'
import Home from './pages/Home/Home'

function App() {

  return (
    <div className='app_container'>
      <SideBar/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App

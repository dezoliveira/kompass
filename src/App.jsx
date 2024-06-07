import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Location from './routes/Location'

import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/location' element={<Location/>} />
      </Routes>
    </>
  )
}

export default App

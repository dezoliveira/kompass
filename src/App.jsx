import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Location from './routes/Location'

import './App.css'

function App() {


  return (
    <>
    <h1>navbar</h1>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/location' element={<Location/>} />
    </Routes>
    </>
  )
}

export default App

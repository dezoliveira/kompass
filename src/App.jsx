import { Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Location from './routes/Location'

import './App.css'
import Layout from './components/Layout'

function App() {


  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/location' element={<Location/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App

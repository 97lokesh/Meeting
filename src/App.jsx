import React from 'react'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Important from './pages/Important'
import Meeting from './pages/Meeting'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Important' element={<Important/>}/>
        <Route path='/Meeting' element={<Meeting/>}/>
      </Routes>
    </>
  )
}

export default App
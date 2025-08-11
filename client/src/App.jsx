import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import ConvertUrl from './pages/ConvertUrl'
import ShortUrl from './pages/ShortUrl'

function App() {


  return (
    
     <Routes>
      <Route path='/home' element={<Landing/>} />
      <Route path='/convert-url' element={<ConvertUrl/>}/>
      <Route path='/short-url/:url' element={<ShortUrl/>}/>
      <Route path="*" element={<Landing />} />
     </Routes>
  )
}

export default App

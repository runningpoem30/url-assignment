import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import ConvertUrl from './pages/ConvertUrl'

function App() {


  return (
    
     <Routes>
      <Route path='/home' element={<Landing/>} />
      <Route path='/convert-url' element={<ConvertUrl/>}/>
     </Routes>
  )
}

export default App

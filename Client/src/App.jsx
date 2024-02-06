import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Main from './views/Main'
import UpdatePage from './components/UpdatePage'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path = "*" element={<Main/>}/>
          <Route path = "/meals/:id/edit" element ={<UpdatePage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

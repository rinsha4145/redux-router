import React from 'react'
import { Route,Router,Routes } from 'react-router-dom'
import Page1 from './Page1' 
import Page2 from './Page2'
import Page3 from './Page3'

function App() {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Page1/>}></Route>
          <Route path='/page2' element={<Page2/>}></Route>
          <Route path='/page3' element={<Page3/>}></Route>
        </Routes>
      
    </div>
  )
}

export default App
import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

//componets
import Layout from './componets/Layout'
import Home from './componets/Home/Home'
import Count_attendes from './componets/Home/Other opration/Count_attendes'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
                <Route path='/startAttdes/:semester/:subject/:className/:date/:startRoll' element={<Count_attendes/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

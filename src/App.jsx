import React from 'react'
import { BrowserRouter , Route , Routes } from 'react-router-dom'

//componets
import Layout from './componets/Layout'
import Home from './componets/Home/Home'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

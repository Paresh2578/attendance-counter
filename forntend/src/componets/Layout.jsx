import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'


//componets
import Header from './Header/Header'


export default function Layout() {
 
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

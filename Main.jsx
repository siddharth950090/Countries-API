import React, { useState } from 'react'
import './Main.css'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

const Main = () =>{
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
export default Main;

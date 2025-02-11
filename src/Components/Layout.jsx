import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import TopHeader from './TopHeader'

export const Layout = () => {
  return (
    <>
    <div id='navgrp'>
    {/* <TopHeader/> */}
    <Header/>
    </div>
   
    <Outlet/>
    <Footer/>
    </>
  )
}

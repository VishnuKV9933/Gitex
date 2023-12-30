import React from 'react'
import Header from '../Header/Header'
import MiniHeader from '../MiniHeader/MiniHeader'
import Footer from '../Footer/Footer'
import { Outlet } from "react-router";

export default function Layout():React.ReactElement {
  return (
    <>
    <Header/>
   <MiniHeader/>
   <Outlet/>
   <Footer/>
    </>
  )
}

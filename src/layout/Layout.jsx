import React from "react"
import { Outlet } from "react-router-dom"
import CatAndLogoNavbar from "../components/CatAndLogoNavbar"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Index from "../pages/Index"

const Layout = ( )=>{
   return(



   <>
    <CatAndLogoNavbar/>


    <Outlet/>

    <Index/>
    <Footer/>
   </>
   )
   




}
export default Layout
import React from "react";
import logo from '../assets/png/logo-no-background.png'
const Footer = ( )=>{
    return(

        <footer class="bg-black">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex justify-center text-teal-600 sm:justify-start">
            <img src={logo} className='w-32 h-24'/>
            </div>
      
            <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
              Copyright &copy; 2023. All rights reserved. Created by Lucas Speziale
            </p>
          </div>
        </div>
      </footer>
    )
}
export default Footer
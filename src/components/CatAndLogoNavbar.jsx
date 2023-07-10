import React from "react"
import { Link } from "react-router-dom"

import logo from '../assets/png/logo-no-background.png'
const CatAndLogoNavbar = ()=>{
 let token = localStorage.getItem('token')
    return(

   
<header className="bg-black  shadow-white-500/50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-44 md:h-16 flex-col md:flex-row items-center  justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" >
          <span className="sr-only">Home</span>
       <Link to='/'> <img src={logo} className='w-32 p-4 h-24' /></Link>   
        </a>
      </div>

      <div className="block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
           



            <li>
              <Link to='/publish'
                className="text-white text-xl transition hover:text-violet-600 "
                
              >
                Vender
              </Link>
            </li>

            <li>
              <Link to ='/buytickets'
                className="text-white transition text-xl hover:text-violet-600"
                
              >
                Comprar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
{!token ?(


      <div className="flex items-center gap-4">
        <div className="sm:flex  sm:gap-4">
          <Link to="/login" className="rounded-md bg-violet-700 px-5 py-2.5 text-sm font-medium text-white shadow" >
          Login
          </Link>

          
            <Link to='/signup'
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
             
            >
              Register
            </Link>
          </div>
        </div>
)


:null}

      
      </div>
    </div>
  
</header>

    )
}
export default CatAndLogoNavbar
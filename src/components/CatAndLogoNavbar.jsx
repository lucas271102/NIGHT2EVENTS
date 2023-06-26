import React from "react"
import { Link } from "react-router-dom"

import logo from '../assets/png/logo-no-background.png'
const CatAndLogoNavbar = ()=>{
    return(


   
<header className="bg-black">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" href="/">
          <span className="sr-only">Home</span>
          <img src={logo} className='w-32 p-4 h-24' />
        </a>
      </div>

      <div className="hidden md:block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a
                className="text-white transition hover:text-gray-500/75"
                href="/"
              >
                About
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-gray-500/75"
                href="/"
              >
                Careers
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-gray-500/75"
                href="/"
              >
                History
              </a>
            </li>

            <li>
              <a
                className="text-white transition hover:text-gray-500/75"
                href="/"
              >
                Services
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-gray-500/75"
                href="/"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                class="text-white transition hover:text-gray-500/75"
                href="/"
              >
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <a
            class="rounded-md bg-violet-700 px-5 py-2.5 text-sm font-medium text-white shadow"
            href="/"
          >
            Login
          </a>

          <div class="hidden sm:flex">
            <a
              class="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
              href="/"
            >
              Register
            </a>
          </div>
        </div>

        <div class="block md:hidden">
          <button
            class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</header>
    )
}
export default CatAndLogoNavbar
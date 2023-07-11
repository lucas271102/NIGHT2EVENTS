import React from "react"
import { Link } from "react-router-dom"

//import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import axios from "axios"
import { useState, useEffect } from "react"
import apiUrl from "../../api"
import tickets_actions from '../store/actions/buyTickets'
import { useSelector, useDispatch } from "react-redux"
import { Button, Spacer } from "@nextui-org/react";
import { Pagination } from "@nextui-org/react";
const BuyTickets=()=>{
//  const dispatch= useDispatch()
//  let {buyTickets_read} = tickets_actions
  //let tickets = useSelector(store=> store.tickets)
  //console.log(tickets)

  //useEffect(()=>{
    //if(tickets.length===0){
      //dispatch(buyTickets_read())
    //}
  //},[])


  const [tickets, setTickets]= useState([])
  useEffect(()=>{
    axios(`${apiUrl}tickets`)
    .then((res)=>setTickets(res.data.response))
    .catch((err)=>console.log(err))

  }, [])
    return(
        <div className="bg-black  h-full">
          

             <h1 className="text-3xl font-semibold p-4 text-white text-center">Here is your second chance to go out</h1>





<div className=" flex flex-wrap justify-center items-center gap-6 p-6 ">    
<div class="grid grid-cols-2 gap-2 lg:grid-cols-[400px_1fr] lg:gap-8">
  <div class="h-full w-[100%] rounded-lg  ">



  <div class="flex h-screen flex-col justify-between border rounded-md  bg-white">
  <div class="px-4  py-6">
    <span
      class="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-black"
    >
      Logo
    </span>

    <ul class="mt-6 space-y-1">
      <li>
        <a
          href=""
          class="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-black"
        >
          General
        </a>
      </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-white hover:bg-black "
          >
            <span class="text-sm font-medium"> Teams </span>

            <span
              class="shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Banned Users
              </a>
            </li>

            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Calendar
              </a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <a
          href=""
          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Billing
        </a>
      </li>

      <li>
        <a
          href=""
          class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          Invoices
        </a>
      </li>

      <li>
        <details class="group [&_summary::-webkit-details-marker]:hidden">
          <summary
            class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <span class="text-sm font-medium"> Account </span>

            <span
              class="shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <ul class="mt-2 space-y-1 px-4">
            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Details
              </a>
            </li>

            <li>
              <a
                href=""
                class="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                Security
              </a>
            </li>

            <li>
              <form action="/logout">
                <button
                  type="submit"
                  class="w-full rounded-lg px-4 py-2 text-sm font-medium text-gray-500 [text-align:_inherit] hover:bg-gray-100 hover:text-gray-700"
                >
                  Logout
                </button>
              </form>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>

  <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
    <a href="#" class="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
      <img
        alt="Man"
        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        class="h-10 w-10 rounded-full object-cover"
      />

      <div>
        <p class="text-xs">
          <strong class="block font-medium">Eric Frusciante</strong>

          <span> eric@frusciante.com </span>
        </p>
      </div>
    </a>
  </div>
</div>
  </div>
  <div class="h-full gap-4  flex flex-wrap justify-center items-center rounded-lg ">


{tickets.map((tick)=>(
  
  
<div  className="group relative     rounded-xl   xl:w-[25%]  ">
  <button
    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="h-4 w-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={tick.photo}
    alt=""
    className="h-64 w-full   border rounded-xl object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative border border-gray-100 relative rounded-xl bg-white p-6">
    <span
      className="whitespace-nowrap bg-violet-700 px-3 py-1.5 text-xs  text-white font-medium"
    >
      New
    </span>

    <h3 className="mt-4 text-lg font-medium text-gray-900">{tick.name}</h3>

    <p className="mt-1.5 text-sm text-gray-700">${tick.price}</p>

    <form className="mt-4 w-[50%] flex justify-center items-center ">
    <button  className="w-[100%] bg-violet-700 transition-hover:w-[150%] text-white p-2 norder rounded-md " >Add to cart</button>
    </form>
  </div>
</div>
   ))}

  </div>
</div>
   </div>
   <div className="flex justify-center items-center ">

   <Pagination total={5} color={"secondary"} initialPage={1} className='flex justify-center items-center right-0' />
   </div>
        </div>
    )
}
export default BuyTickets
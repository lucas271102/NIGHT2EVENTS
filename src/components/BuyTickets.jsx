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
const {buyTickets_read} = tickets_actions

const BuyTickets=()=>{
  let dispatch= useDispatch()
let store = useSelector(store=>store.tickets.tickets)  
  console.log(store)


 
  useEffect(()=>{
    if(!store){
      dispatch(buyTickets_read())

    }
   

  }, [])
    return(
        <div className="bg-black  h-full">
          

             <h1 className="text-3xl font-semibold p-4 text-white text-center">Here is your second chance to go out</h1>





<div className=" flex flex-wrap justify-center items-center gap-6 p-6 ">    

  <div class="h-full w-[100%] rounded-lg  ">



 
  </div>
  <div class="h-full gap-4  flex flex-wrap justify-center items-center rounded-lg ">


{store.map((tick)=>{ return(


  
  
      <div className="group relative     rounded-xl w-[50%]  lg:w-[22%] shadow-[0_0_15px_white] ">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
          </svg>
        </button>
  
        <img
          src={tick.photo}
          alt=""
          className="h-64 w-full   border rounded-xl object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
  
        <div className="relative border border-gray-100  rounded-xl bg-white p-6">
          <span
            className="whitespace-nowrap bg-violet-700 px-3 py-1.5 text-xs  text-white font-medium"
          >
            New
          </span>
  
          <h3 className="mt-4 text-lg font-medium text-gray-900">{tick.name}</h3>
  
          <p className="mt-1.5 text-sm text-gray-700">${tick.price}</p>
  
          <form className="mt-4 w-[50%] flex justify-center items-center ">
            <button className="w-[100%] bg-violet-700 transition-hover:w-[150%] text-white p-2 norder rounded-md ">Add to cart</button>
          </form>
        </div>
      </div>
    
)
  
})}

  </div>

   </div>
   <div className="flex justify-center items-center ">

   <Pagination total={5} color={"secondary"} initialPage={1} className='flex justify-center items-center right-0' />
   </div>
        </div>
    )
}
export default BuyTickets
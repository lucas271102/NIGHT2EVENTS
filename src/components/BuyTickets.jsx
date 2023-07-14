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
//  const dispatch= useDispatch()
  
  
 // let tickets = useSelector(store=>console.log(store.buyTickets))
 // useEffect(()=>{
  //  if(tickets.length=== 0){

 ///     dispatch(buyTickets_read())
   // }
    
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
  
  <div
  class="relative w-screen max-w-sm  h-full flex justify-center  mt-0 border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8"
  aria-modal="true"
  role="dialog"
  tabindex="-1"
>
  <button class="absolute end-4 top-4 text-gray-600 transition hover:scale-110">
    <span class="sr-only">Close cart</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-5 w-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>

  <div class="mt-4 space-y-6">
    <ul class="space-y-4">
      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>

      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>

      <li class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
          alt=""
          class="h-16 w-16 rounded object-cover"
        />

        <div>
          <h3 class="text-sm text-gray-900">Basic Tee 6-Pack</h3>

          <dl class="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt class="inline">Size:</dt>
              <dd class="inline">XXS</dd>
            </div>

            <div>
              <dt class="inline">Color:</dt>
              <dd class="inline">White</dd>
            </div>
          </dl>
        </div>
      </li>
    </ul>

    <div class="space-y-4 text-center">
      <a
        href="#"
        class="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
      >
        View my cart (2)
      </a>

      <Link to='/cart'
      
        class="block rounded bg-violet-700 px-5 py-3 text-sm text-white transition hover:bg-black"
      >
        Checkout
      </Link>

      <button
      
        class="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
      >
        Continue shopping
      </button>
    </div>
  </div>
</div>
 











</div>
  </div>
  <div class="h-full gap-4  flex flex-wrap justify-center items-center rounded-lg ">


{tickets.map((tick)=>{ return(


  
  
      <div className="group relative     rounded-xl   xl:w-[25%] shadow-[0_0_15px_white] ">
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
   </div>
   <div className="flex justify-center items-center ">

   <Pagination total={5} color={"secondary"} initialPage={1} className='flex justify-center items-center right-0' />
   </div>
        </div>
    )
}
export default BuyTickets
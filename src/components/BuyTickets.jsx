import React from "react"
import { Link } from "react-router-dom"

import { Card, CardHeader, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import axios from "axios"
import { useState, useEffect } from "react"
import apiUrl from "../../api"
import tickets_actions from '../store/actions/buyTickets'
import { useSelector, useDispatch } from "react-redux"

const BuyTickets=()=>{
  const dispatch= useDispatch()
  let {buyTickets_read} = tickets_actions
  let tickets = useSelector(store=> store.buyTickets.tickets)
  console.log(tickets)

  useEffect(()=>{
    if(tickets.length===0){
      dispatch(buyTickets_read())
    }
  },[])
    return(
        <div className="bg-black h-screen">

             <h1 className="text-3xl  p-2 text-white text-center">Here is your second chance to go out</h1>
{tickets.map((tick)=>(







             <Card maxW='sm'>
  <CardBody>
    <Image
      src={tick.photo}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>{tick.name}</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        ${tick.price}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='purple'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
))}


        </div>
    )
}
export default BuyTickets
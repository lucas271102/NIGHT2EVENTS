import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../api";
const buyTickets_read = createAsyncThunk('buyTickets_read',
async()=>{
  
   try {
  
     axios(`${apiUrl}tickets`)
    .then((res)=>res.data)
    return res.data.response
   } catch (error) {
    console.log(error)
    return{
        tickets:[]
    }
   }}
)
const actions = {buyTickets_read}
export default actions
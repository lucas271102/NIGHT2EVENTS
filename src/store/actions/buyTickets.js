import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../api";
const buyTickets_read = createAsyncThunk('buyTickets_read',
async()=>{
  
   try {
  
    let res =  await axios(`${apiUrl}tickets`)
    return {tickets:res.response}
   } catch (error) {
    console.log(error)
    return{
        tickets:[]
    }
   }}
)
const actions = {buyTickets_read}
export default actions
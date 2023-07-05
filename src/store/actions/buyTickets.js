import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../api";
const buyTickets_read = createAsyncThunk('buyTickets_read',
async(response)=>{
    console.log('response', res)
   try {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    let res = await axios(apiUrl+'tickets', headers)
    console.log('response', res.data.tickets)
    return {tickets:res.data.tickets}
   } catch (error) {
    console.log(error)
    return{
        tickets:[]
    }
   }}
)
const actions = {buyTickets_read}
export default actions 
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import apiUrl from "../../../api";
const buyTickets_read = createAsyncThunk('buyTickets_read',
async(response)=>{
    console.log('response', res)
   try {
    let token = localStorage.getItem('token')
    let headers = {headers:{'Authorization':`Bearer ${token}`}}
    
   } catch (error) {
    
   }}
)
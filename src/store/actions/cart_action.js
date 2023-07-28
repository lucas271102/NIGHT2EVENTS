import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
const read_cart = createAsyncThunk('read_cart', async()=>{
  try {
      
     
      let res = await axios(apiUrl +'/cart')
      console.log(res.data)
      return {
        cartItem:res.data
      }
    } catch (error) {
        return{
            cartItem:[]
        }
    }

})


const actions = { read_cart };

export default actions;
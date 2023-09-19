import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";
const read_cart = createAsyncThunk('read_cart', async()=>{
  try {
      
     
      let res = axios(apiUrl + '/cart/cart')
      console.log(await res.data.response)
      return {
        cartItem:await res.data.response
      }
    } catch (error) {
        return{
            cartItem:[]
        }
    }

})


const actions = { read_cart };

export default actions;
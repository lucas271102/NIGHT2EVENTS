import { configureStore } from "@reduxjs/toolkit";
import user_LoginReducer from './reducers/user_Login.js'
const store = configureStore({
    reducer:{
    userLogin : user_LoginReducer
    }
})
export default store
import { configureStore } from "@reduxjs/toolkit";
import user_LoginReducer from './reducers/user_Login.js'
import buyTickets_reducer from './reducers/buyTickets_reducer.js'
import cartNav_reducer from './reducers/cartNav_red.js'
const store = configureStore({
    reducer:{
    userLogin : user_LoginReducer,
    buyTickets:buyTickets_reducer,
    navCartItemsCount:cartNav_reducer
    }
})
export default store
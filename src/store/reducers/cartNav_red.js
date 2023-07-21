import { createReducer } from "@reduxjs/toolkit";
import actions from '../actions/cartNav.js'
const {cartNav_action }= actions
let initialState={
    cart : []
}
const reducer = createReducer(
    initialState,
    (builder)=>{
        builder.addCase(
    cartNav_action.fulfilled,
    (state, action)=>{
        let newState={
            ...state,
            cart:action.payload.cart
        }
        return newState
    }
        )
    }
)
export default reducer
import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/buyTickets";
const {buyTickets_read}=actions 
let initialState= {
    tickets:[]
}
const reducer = createReducer(
    initialState,
    (builder)=>
    builder.addCase(
        buyTickets_read.fulfilled,
        (state, action)=>{
            let newState={
                ...state,
                tickets:action.payload.tickets

            }
            return newState 
        }
    )
)
export default reducer
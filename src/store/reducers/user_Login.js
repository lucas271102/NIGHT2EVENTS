import { createReducer } from "@reduxjs/toolkit";
import userLogin_action from '../actions/userLogin.js'
const {SaveUserLogin}= userLogin_action
let initalState={
    token:'',
    user:{}
}
const reducer= createReducer(
    initalState, 
    (builder)=>builder
    .addCase(
        SaveUserLogin,(state, action)=>{
            const newState={
                ...state,
                token:action.payload.token,
                user:action.payload.user
            }
            return newState
        }
    )
)
export default reducer 
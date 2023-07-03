import { createAction } from "@reduxjs/toolkit";
const SaveUserLogin = createAction(
    'user_login',
    (object)=>{
        return{
            payload:{
                token:object.token,
                user:object.user
            }
        }

    }
)
const actions =  {SaveUserLogin}
export default actions 
import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import  Login  from "../src/components/Login.jsx";
import Index from "../src/pages/Index";
import SignUp from "../src/components/SignUp";
import BuyTickets from "../src/components/BuyTickets";
import Publish from "../src/components/Publish";
import Cart from "../src/components/Cart";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {path:'/login', element:<Login/>},
            { path: "/", element: <Index/> },
            {path:"/signup", element: <SignUp/>},
            {path:'/buytickets', element:<BuyTickets/>},
            {path:'/publish', element:<Publish/>},
            {path:'/cart', element:<Cart/>}
        ]
    }
])
export default router
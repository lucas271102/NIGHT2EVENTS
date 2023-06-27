import { createBrowserRouter } from "react-router-dom";
import Layout from "../src/layout/Layout";
import  Login  from "../src/components/Login.jsx";
import Index from "../src/pages/Index";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Layout/>,
        children:[
            {path:'/login', element:<Login/>},
            { path: "/", element: <Index/> },
        ]
    }
])
export default router
import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useRef } from "react";
import apiUrl from "../../api";
import { Link, useNavigate } from "react-router-dom";
import Login from "./Login";
import Alert from "./Alert";
import logo from '../assets/png/logo-no-background.png'
import { useToast } from "@chakra-ui/react";
const SignUp = ()=>{
    const navigate = useNavigate()
    const password = useRef()
    const email = useRef()
    const profilePicture= useRef()
    const toast = useToast()
    function handleForm(e){
        e.preventDefault()
        let data ={
            email:email.current.value,
            password:password.current.value,
            profilePicture: profilePicture.current.value
        }
    console.log(data)
    axios.post(`${apiUrl}/users/signup`, data)
    .then(res=>{
      toast({
        title: 'User registered',
        description: 'Now, you can sign in to buy',
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      localStorage.setItem('user', data)
  
          navigate('/login')
    })
    .catch(err=>{console.log(err)
      toast({
        title: err,
        description: '',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
})      
    }

    return (
        <section className="relative flex flex-wrap bg-violet-700 lg:h-screen lg:items-center">
  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src={logo}
      className="relative inset-0 h-full w-full object-cover"
    />
  </div>
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-light font-sans text-white sm:text-3xl">Welcome TO NIGHT2Events!</h1>

      <p className="mt-4  text-xl font-light text-white">
        Register here
      </p>
    </div>

    <form onSubmit={(e)=>handleForm(e)} class="mx-auto mb-0 mt-8 max-w-md space-y-4">
      <div>
        <label for="email" className="sr-only">Email</label>

        <div className="relative">
          <input
            type="email"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter email"
            ref={email}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label for="password" className="sr-only">Password</label>

        <div className="relative">
          <input
            type="password"
            className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Enter password"
            ref={password}
          />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>
      <div>
        <label htmlFor="photo" className="sr-only">Profile Picture</label>

        <div className="relative">
        <input type="file" name="photo" id="upload" label='Photo' ref={profilePicture} />

          <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
         ¿Ya tenés una cuenta?
          <Link to='/login' className="underline" >Inicia sesión</Link>
        </p>

        <input
          type="submit"
          className="inline-block cursor-pointer rounded-lg bg-white px-5 py-3 text-sm font-medium text-violet-700"
       />
          
        
      </div>
    </form>
  </div>

</section>
    )
}

export default SignUp
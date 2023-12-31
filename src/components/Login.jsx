import React from 'react'
import logo from '../assets/png/logo-no-background.png'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import apiUrl from '../../api.js'
import userLogin from '../store/actions/userLogin.js'
import { useNavigate } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
const {SaveUserLogin}= userLogin
const Login = () => {
 const dispatch= useDispatch()
 const navigate = useNavigate()
 const email = useRef()
 const password= useRef()
const toast = useToast()
 const Signin = (e)=>{
e.preventDefault()
let inputEmail= email.current.value
let inputPassword= password.current.value

let dataUser={
  email:inputEmail,
  password:inputPassword
}
axios.post(apiUrl+'/users/signin', dataUser)
.then(res=>{
  console.log(res)
  toast({
    title: 'Signed in successfully',
    description: 'Now, you can buy',
    status: 'success',
    duration: 9000,
    isClosable: true,
  })
  localStorage.setItem('token', res.data.token)
  localStorage.setItem('user',JSON.stringify(res.data.user))
  
  dispatch(SaveUserLogin({
    token:res.data.token,
    user:res.data.user
  }))
  setTimeout(function(){
    navigate('/')
  },2000)
})
.catch(err=>{
  toast({
    title: 'Something went wrong...',
    description: '',
    status: 'error',
    duration: 9000,
    isClosable: true,
  })
  console.log(err)
})
 }
  return (
   <>
   

<section className="relative flex flex-wrap bg-violet-700 lg:h-screen lg:items-center">
  <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-light text-white sm:text-3xl">Inicia sesión</h1>

      
    </div>

    <form action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm text-white">
          No account?
          <Link to='/signup' className="underline" href="">Sign up</Link>
        </p>

        <button
          type="submit"
          className="inline-block rounded-lg bg-white px-5 py-3 text-sm font-light text-violet-700"
          onClick={Signin}
        >
          Sign in
        </button>
      </div>
    </form>
  </div>

  <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
    <img
      alt="Welcome"
      src={logo}
      className="relative inset-0 h-full w-full object-cover"
    />
  </div>
</section>
   </>
  )
}
export default Login
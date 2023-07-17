import React from "react"
import { Link } from "react-router-dom"
import { Modal, Input, Row, Checkbox, Button, Text } from "@nextui-org/react";
import logo from '../assets/png/logo-no-background.png'


import axios from 'axios'
import { useRef } from "react";
import { useToast } from '@chakra-ui/react'
import apiUrl from '../../api.js'
import { useNavigate } from "react-router-dom";
const CatAndLogoNavbar = ()=>{
 let token = localStorage.getItem('token')
 const [visible, setVisible] = React.useState(false);
 const handler = () => setVisible(true);
 const closeHandler = () => {
   setVisible(false);
   console.log("closed");
 };
const navigate = useNavigate()
const toast = useToast()
 const name = useRef()
 const price = useRef()
 const photo=useRef()
 const stock_available= useRef()
 const category_id= useRef()

 const publish = (e)=>{
  
  let newName= name.current.value
  let newPrice = price.current.value
  let newPhoto= photo.current.value
  let newCategory=category_id.current.value
  let newStock = stock_available.current.value
  let publicData= {
    name:newName,
    price:newPrice,
    photo:newPhoto,
    category_id:newCategory,
    stock_available:newStock
  }

  axios.post(apiUrl+'tickets/publish', publicData)
  .then(res=>{
    console.log(res)
    toast({
      title: 'Ticket published successfully',
      description: 'Now, you can see it',
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  setTimeout(() => {
    navigate('/buytickets')
  }, 1500);
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
    return(

   
<header className="bg-black  shadow-white-500/50">
  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-44 md:h-16 flex-col md:flex-row items-center  justify-between">
      <div className="md:flex md:items-center md:gap-12">
        <a className="block text-teal-600" >
          <span className="sr-only">Home</span>
       <Link to='/'> <img src={logo} className='w-32 p-4 h-24' /></Link>   
        </a>
      </div>

      <div className="block">
        <nav aria-label="Global">
          <ul className="flex items-center gap-6 text-sm">
           



            <li>
            <div>
      <Button auto color="secondary"  shadow onPress={handler}>
        Vender
      </Button>
      <Modal
        closeButton
        
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Publish your
            <Text b size={18}>
                   ticket
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Name"
            ref={name}
          
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Price"
            ref={price}
           
          />
           <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Photo"
            ref={photo}
            type='file'
            
          />
           <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder='Category'
            ref={category_id}
          />
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder='Stock'
            ref={stock_available}
          />
          <Row justify="space-between">
            <Checkbox>
              <Text size={14}>Remember me</Text>
            </Checkbox>
            <Text size={14}>Forgot password?</Text>
          </Row>
        </Modal.Body>
        <Modal.Footer className="flex justify-between">
          <button className="bg-red-500 p-2 text-white font-semibold text-lg  font-sans border rounded-lg w-24" onClick={closeHandler}>
            Close
          </button>
          <button className="bg-violet-700 font-sans p-2 text-white font-semibold text-lg border rounded-lg w-24" onClick={publish}>
            Publish
          </button>
        </Modal.Footer>
      </Modal>
    </div>
















            </li>

            <li>
              <Link to ='/buytickets'
                className="text-white transition text-xl hover:text-violet-600"
                
              >
                Comprar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
{!token ?(


      <div className="flex items-center gap-4">
        <div className="sm:flex  sm:gap-4">
          <Link to="/login" className="rounded-md bg-violet-700 px-5 py-2.5 text-sm font-medium text-white shadow" >
          Login
          </Link>

          
            <Link to='/signup'
              className="rounded-md bg-white px-5 py-2.5 text-sm font-medium text-black"
             
            >
              Register
            </Link>
          </div>
        </div>
)


:null}

      
      </div>
    </div>
  
</header>

    )
}
export default CatAndLogoNavbar
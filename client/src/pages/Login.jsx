import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../features/auth/authSlice';
import Loader from '../components/Loader';
import { toast } from 'react-toastify';

const Login = () => {

  const {user,isLoading,isError,message} = useSelector((state)=>state.auth)

const navigate = useNavigate();
const dispatch = useDispatch();

const [formData, setFormData] = useState({
  
  email:"",
  password:"",
  
})

const{email,password} = formData;

const handleChange = (e) =>{
  setFormData({
    ...formData,
    [e.target.name] : e.target.value,
  })
}

const handleSubmit = e =>{
  e.preventDefault()

  dispatch(loginUser(formData))
}

useEffect(()=>{
  if(user){
    navigate('/')
  }
  if(isError && message){
    toast.error(message)
  }
},[isError,message,user])

if(isLoading){
  return <Loader/>
}


  return (
    <div className='min-h-screen p-10'>
    <h1 className='text-center font-bold text-xl'>Login Here</h1>

    <div className='p-5 border my-5'>
     <form onSubmit={handleSubmit}>

     <input name='email' value={email} onChange={handleChange} type='email'className='my-2 focus:outline-0  border border-gray-200 p-2 w-full disabled:bg-sky-100 text-sm'
     placeholder='Enter Email'/>

     <input name='password' value={password} onChange={handleChange} type='password' className='focus:outline-0 my-2 border border-gray-200 p-2 w-full focus:outline-0 disabled:bg-sky-100 text-sm'
     placeholder='Enter Password'/>

     <button className='bg-black w-full text-white my-2 py-2 px-4 font-semibold hover:bg-green-600 hover:duration-150 hover:cursor-pointer'>Login</button>

     </form>
    </div>
    </div>
  )
}

export default Login

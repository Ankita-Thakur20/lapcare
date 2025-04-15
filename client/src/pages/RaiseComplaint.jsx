import React, { useState } from 'react'
import BackButton from '../components/BackButton'
import {useDispatch, useSelector} from 'react-redux'
import { raiseComplaint } from '../features/complaint/complaintSlice'
import { useNavigate } from 'react-router-dom'

const RaiseComplaint = () => {

const {user} = useSelector((state)=>state.auth)
const dispatch = useDispatch()
const navigte = useNavigate()

const[formData,setFormData] = useState({
  laptop:"",
  description:"",
  image:""
})

const{laptop,description,image} = formData;

const handleChange = e =>{
  setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit = (e)=>{
  e.preventDefault()
  dispatch(raiseComplaint(formData))
  navigte("/complaints")
}

  return (
    
    <div className='min-h-screen p-10'>
      <BackButton url={"/"}/>
    <h1 className='text-center font-bold text-xl'>Raise Complaint</h1>

    <div className='p-5 border my-5'>
     <form onSubmit={handleSubmit}>
     <input type='text' value={user.name} className=' my-2 border border-gray-200 p-2 w-full disabled:bg-sky-100 text-sm'
     disabled/>

     <input type='email' value={user.email} className='my-2 border border-gray-200 p-2 w-full disabled:bg-sky-100 text-sm'
     disabled/>

     <select onChange={handleChange} name="laptop" value={laptop} className='p-2 border border-gray-200 w-full my-2 text-gray-500 focus:outline-0'>
        <option value="#">Select Laptop Brand</option>
        <option value="apple">Apple</option>
        <option value="lenovo">Lenovo</option>
        <option value="dell">Dell</option>
        <option value="hp">HP</option>
        <option value="samsung">Samsung</option>
        <option value="acer">Acer</option>
     </select>

     <textarea onChange={handleChange} name="description" value={description}  className='p-2 border border-gray-200 w-full my-2 focus:outline-0'placeholder='Describe Your issue here'></textarea>

     <input onChange={handleChange} name="image" value={image}  type='text' className=' my-2 border border-gray-200 p-2 w-full focus:outline-0 disabled:bg-sky-100 text-sm'
     placeholder='Image Url'/>

     <button className='bg-black w-full text-white my-2 py-2 px-4 font-semibold hover:bg-green-600 hover:duration-150 hover:cursor-pointer'>Raise Complaint</button>

     </form>
    </div>
    </div>
    
  )
}

export default RaiseComplaint

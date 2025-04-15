import React, { useEffect, useState } from 'react'
import BackButton from '../components/BackButton'
import Comment from '../components/comment'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import Loader from '../components/Loader';
import {useDispatch, useSelector} from 'react-redux'
import { closeComplaint, getComplaint } from '../features/complaint/complaintSlice';
import { createComment, getComments } from '../features/comment/commentSlice';

const SingleComplaint = () => {
const {singleComplaint , isLoading, isError, message}= 
useSelector((state)=>state.complaint)

const {comments} = useSelector((state)=>state.comment)

const[text,setText]= useState("")


const {id} = useParams()
const dispatch = useDispatch()

const handleCloseComplaint =(id)=>{
  dispatch(closeComplaint(id))
}


const handleAddComment = (e)=>{
  e.preventDefault()
  dispatch(createComment(
    {
      id:id,
      text:text,
    }
  ))
  setText("")
}

useEffect(()=>{

  //complaints
  dispatch(getComplaint(id))
  //comments
  dispatch(getComments(id))
 
  if(isError && message){
   toast.error(message)
  }
 },[isError,message,id])
 
 if(isLoading){
   return <Loader/>
 }

  return (
    <div className='min-h-screen p-10'>
      <BackButton url={"/complaints"}/>
      <div className='my-3 relative p-5 border border-gray-200 flex items-center justify-between flex-col md:flex-row'>

      <div className={singleComplaint.status === "open" ? 
      'absolute top-3 right-3 bg-green-500 rounded-full text-white text-center p-0.5 font-bold px-2'
      :singleComplaint.status === "pending"? 'absolute top-3 right-3 bg-yellow-500 rounded-full text-white text-center p-0.5 font-bold px-2':
      'absolute top-3 right-3 bg-red-500 rounded-full text-white text-center p-0.5 font-bold px-2'}>{singleComplaint?.status}</div>

        <div className='my-3 w-full md:w-1/2 text-center md:text-left '>
         <h1 className='text-2xl font-bold my-2 uppercase'>Brand : {singleComplaint?.laptop}</h1> 
         <p className='text-sm font-semibold text-gray-600 my-2'>{singleComplaint?.description}
         </p>
         <p className='text-sm font-semibold text-gray-400 my-2'>Date : {new Date(singleComplaint.createdAt).toLocaleDateString("en-IN")}</p>
         <p className='text-sm font-semibold text-gray-400 my-2'>Complaint id : {singleComplaint._id}</p>
        </div>

        <div>

        </div>
        <img 
        className='h-72'
        src= {singleComplaint?.image}/>
      </div>

      
        <div className='my-5 border border gray-400 p-5'>
        <form onSubmit={handleAddComment} >
        <input onChange={e=>setText(e.target.value)} value={text} type='text' className=' my-2 focus:outline-0  border border-gray-200 p-2 w-full disabled:bg-sky-100 text-sm'
     placeholder='Enter Comment'/>
     <button className='bg-black w-full text-white my-2 py-2 px-4 font-semibold hover:bg-gray-600 hover:duration-150 hover:cursor-pointer'>Add Comment</button>
        </form>


        
       {
        comments.map((comment)=><Comment key={comment._id} comment={comment}/>)
       }

        </div>
        <button onClick={()=>handleCloseComplaint(id)}
         className='bg-red-500 w-full text-white my-2 py-2 px-4 font-semibold hover:bg-red-400 hover:duration-150 hover:cursor-pointer disabled:bg-gray-500' disabled={singleComplaint.status==="close"}>
       {singleComplaint.status === "close" ? "closed" : "Close my complaint"}
       </button>

    </div>
  )
}

export default SingleComplaint

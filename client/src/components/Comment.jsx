import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const comment = ({comment}) => {

  const {user} = useSelector((state)=>state.auth)
  const navigate = useNavigate()

  useEffect(()=>{
    if(!user){
      navigate("/login")
    }
  },[user])

  return (
    <div className={
      comment?.user === user?.id ? 'my-2 bg-green-100 p-4 border border-gray-200' : 'my-2 bg-sky-100 p-4 border border-gray-200'
    }>
    <h2 className='text-lg font-semibold'>{comment?.message}</h2>
    <p className='text-sm font-semibold text-gray-500 mb-2'>{new Date(comment.createdAt).toLocaleDateString('en-IN')}</p>
    <div className='text-gray-400 text-sm font-semibold'>
      {
        user?.id === comment?.user ? "By me" : "By You"
      }
    </div>
  </div>
  )
}

export default comment

import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return (
    <div className='min-h-screen p-10'>
      <h1 className='text-xl font-bold text-center'>Welcome Admin</h1>
      <div className='p-5 border border-gray-400 flex flex-col my-5'>

      <Link to={'/admin/users'} className='text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black hover:border border-gray-200 duration-150 hover:shadow-lg'>All Users</Link>
      <Link to={'/complaints'} className='text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black hover:border border-gray-200 duration-150 hover:shadow-lg'>All Complaints</Link>
      {/* <Link to={'/complaints'} className='text-center bg-black text-white font-semibold py-2 px-8 w-full my-2 hover:cursor-pointer hover:bg-white hover:text-black hover:border border-gray-200 duration-150 hover:shadow-lg'>All Comments</Link> */}

      </div>
    </div>
  )
}

export default AdminDashboard

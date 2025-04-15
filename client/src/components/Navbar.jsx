import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../features/auth/authSlice';

const Navbar = () => {
const {user} = useSelector(state=>state.auth)

const dispatch = useDispatch()

const handleLogOut =()=>{
    dispatch(logoutUser())
}

return (
<nav className='py-2 px-8 md:px-16 border border-gray-200 shadow-lg flex items-center justify-between'>
<Link to={'/'} className='text-xl font-bold uppercase'>LapCare</Link>
<div>
    {
        !user ? (
            <>
            <Link to={'/register'} className='py-1 px-4 text-white bg-sky-500 font-semibold mx-1'>Register</Link>
            <Link to={'/login'} className='py-1 px-4 text-white bg-sky-500 font-semibold mx-1'>Login</Link>
            </>
        ):(
            <button onClick={handleLogOut} className='py-1 px-4 text-white bg-red-500 font-semibold mx-1'>LogOut</button>
        )
    }
   
</div>
 </nav>
)
}

export default Navbar

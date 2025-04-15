import React from 'react'
import {Link} from 'react-router-dom'

const BackButton = ({url}) => {
  return (
   <Link to={url} className='font-semibold bg-yellow-200 p-2 my-4 rounded-full hover:bg-yellow-400 hover:cursor-pointer duration-150'>Back</Link>
  )
}

export default BackButton

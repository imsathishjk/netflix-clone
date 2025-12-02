import React, { useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
const Loading = ({ err }) => {


  const location = useLocation();
  const { id } = useParams();

  return (
    <div className={`flex items-center justify-center ${location.pathname == `/netflix/${id}` ? 'h-[30vh]' : ''}`}>
      {
        err ? <p className='text-red-200 font-semibold'>{err} <span><i className="fa-solid fa-triangle-exclamation"></i></span> </p> : <div className='w-8 h-8 rounded-full border-2 border-red-100 border-t-2 border-t-red-500 animate-spin'></div>
      }
    </div>
  )
}

export default Loading

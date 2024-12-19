import React from 'react'
import { FaHandsClapping } from "react-icons/fa6";
const Header = () => {
  return (
    <div className='flex justify-between max-h-16  p-2  items-center '>
      <div>
        <div className='flex gap-2 items-center'>
        <h1 className='text-lg font-bold '>Hello , <span className='text-green-400'>Brooklyn Simmons  </span> </h1>
        <FaHandsClapping className='text-yellow-300' size={24}/>
        </div>
       
        <p className='text-base'>Welcome to <span className='text-green-700'>Spot Trading !</span> </p>
      </div>


      <div >
        <button className='bg-green-600 p-2 rounded text-white'> Start Trading</button>
      </div>
    </div>
  )
}

export default Header

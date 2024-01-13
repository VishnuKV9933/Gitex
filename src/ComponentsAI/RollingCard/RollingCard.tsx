import React from 'react'
import './rollingcard.css'
import { SPONSORSHIP } from '../../Types'
export default function RollingCard({img,headding,discription}:SPONSORSHIP):React.ReactElement {
 
  return (
   
      <div className='cube h-[250px] col-span-2'>
            <div className='roll-card1 w-full h-full bg-red-400'>
              <img className='h-[75%] w-full' src={img} alt="img" />
              <div className='w-full h-[25%] ai-blue-bg text-white flex justify-center items-center text-center font-bold text-[13px] sm:text-[17px]'>{headding}</div>
            </div>
            <div className='roll-card3 w-full h-full ai-blue-bg text-white flex flex-col justify-start p-[5%]  items-center'>
              <h1 className='text-center font-bold text-[13px] sm:text-[17px]'>{headding}</h1>
              <p className='text-center  text-[11px] sm:text-[14px]'>{discription}</p>
            </div>
     
      </div>
   
  )
}

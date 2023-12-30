import React, { useRef } from 'react'
import './personCard.css'

import { Person } from '../../Types'

interface PersonCardProps {
    person: Person;
  }

export default function PersonCard({person}:PersonCardProps):React.ReactElement {
    const effectref = useRef<HTMLDivElement>(null);

  function handleMouseOver(){
    if (effectref.current) {
        effectref.current.style.width = "100%";
      }
  }
  function handleMouseLeave(){
    if (effectref.current) {
        effectref.current.style.width = "0%";
      }
  }
    return (
    <>
    <div onMouseLeave={handleMouseLeave} onMouseOver={handleMouseOver} className=' w-full h-full '>
        <div ref={effectref} 
          className='animate-elem'></div>
        <img  className='speaker-img w-full h-[70%]' src={person.Image} alt="" />
        <div className='card-bottom w-full h-[30%] p-[5%]'>
            <h1 className='text-sm font-bold'>{person.name}</h1>
            <h2 style={{fontSize:"12px"}} className=''>{person.designation}</h2>
            <h1 className='text-red-700 font-bold'>{person.company}</h1>
            <h1>{person.country}</h1>

        </div>
    </div>
    </>
  )
}

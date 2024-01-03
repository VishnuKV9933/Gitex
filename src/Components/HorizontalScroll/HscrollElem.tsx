import React, { useState } from 'react'
import './HorizontalScroll.css'

type Element = {
    img: string,
    content: string,
    discription: string,
    };

export default function HscrollElem({elem}:any):React.ReactElement {
    const [animation,setAnimation]=useState(false)

  return (
    <div
    onMouseOver={()=>{setAnimation(true)}}
    onMouseLeave={()=>setAnimation(false)}
 className='ml-[ 2%] shadow-md relative scroll-element overflow-hidden rounded-2xl w-[200px] sm:w-[300px] md:w-[350px] h-full '>
  <div className='h-scroll-animation relative w-full h-[50%] flex justify-center items-center '>
               {/* animation content start*/}
                <div className={`${animation?'h-scroll-animation-elem-hover':'h-scroll-animation-elem'} `}> </div>
                 {/* animation content end*/}
  <img className='w-full h-full absolute' src={elem.img} alt="img" />
  </div>
    <div className='h-scroll-content'>{elem.content}</div>
    <div className='w-full h-[50%] p-[5%] bg-white flex flex-col justify-between'>
        <h1  className='h-scroll-discription text-blue-900 font-semibold text-sm'>{elem.discription}</h1>
        <button className='h-scroll-viewMore w-full text-stone-600 font-semibold bg-stone-200 hover:bg-stone-300 p-[2%]'>View More</button>
    </div>
</div>
  )
}

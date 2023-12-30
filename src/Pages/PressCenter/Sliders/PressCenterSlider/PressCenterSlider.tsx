import React, { useEffect, useRef, useState } from 'react'
import { PRESSRELEASES } from '../../../../Types'
import './presercenterslider.css'
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";
type PressCenterSliderProps={
    items:PRESSRELEASES[],
    press:boolean
}
export default function PressCenterSlider({items,press}:PressCenterSliderProps):React.ReactElement {
    const containerRef = useRef<HTMLDivElement>(null)
    const elemRef1 = useRef<HTMLDivElement>(null);
    const elemRef2 = useRef<HTMLDivElement>(null);
    const [timerCount,setTimerCount]=useState(0)


 
    function siderMoveLeft() {
        if (elemRef2.current&&elemRef1.current) {
            let  length=elemRef2.current.offsetLeft-elemRef1.current.offsetLeft
            
          
      
            
            if (containerRef.current) {
                
                let initialOffset = containerRef.current.scrollLeft - length;
                containerRef.current.scrollLeft = initialOffset;
            }
        }
      }
      function siderMoveRight() {
        if (elemRef2.current&&elemRef1.current) {
            let  length=elemRef2.current.offsetLeft-elemRef1.current.offsetLeft
            
          
            
            if (containerRef.current) {
                
                let initialOffset = containerRef.current.scrollLeft + length;
                containerRef.current.scrollLeft = initialOffset;
            }
        }
      }

      useEffect(()=>{
        let timer:NodeJS.Timeout;

  const intervalHandler = () => {
    siderMoveRight();
    setTimerCount((prevCount) => prevCount + 1);

  };
  
  if (press) {
    timer = setInterval(intervalHandler, 3000);
    if (timerCount > items.length - 1) {
      clearInterval(timer);
    }
  } else {
    timer = setInterval(intervalHandler, 2000);
    if (timerCount > items.length - 1) {
      clearInterval(timer);
    }
  }

  return () => {
    clearInterval(timer);
  };
      },[timerCount])


  return (

    <div className='presscenterslider-container w-full h-full flex ' ref={containerRef}>

        <div
        onClick={siderMoveLeft}
         style={{zIndex:'100'}} className=' cursor-pointer absolute left-[0%] md:left-[1%] lg:left-[1%] top-[50%] md:text-[30px] font-extrabold'>
        <SlArrowLeft/>
        </div>
        <div   onClick={siderMoveRight}
        style={{zIndex:'100'}} className='cursor-pointer absolute right-[0%] md:right-[1%] lg:right-[1%] top-[50%] md:text-[30px] font-extrabold'>
        <SlArrowRight/>
        </div>
         
            {items.map((item,index)=>{
                return(

    <div ref={index===0?elemRef1:index===1?elemRef2:null} key={index} className='bg-white presscenterslider-element w-[180px] sm:w-[250px]  md:w-[300px] h-[220px] sm:h-[250px]  md:h-[300px] border mr-[1%]'>
      <img className='h-[50%] sm:h-[57%] md:h-[65%]  w-full' src={item.img} alt="img" />
      <div className='w-full h-[35%]  p-[2%]'>
           {press && <div className='w-full  h-[30px] flex justify-between items-center cursor-pointer'>
                <div className='text-sm text-stone-400'>{item.date}</div>
                <div style={{fontSize:'12px'}} className='px-1 rounded h-[25px] text-sm bg-stone-300 flex justify-center items-center font-semibold'>DWTC</div>
            </div>}
            <h1 className='flex items-center justify-center text-[10px] md:text-[12px] font-bold'>
                {item.discription}
            </h1>
      </div>
    </div>
                )
            })}
    </div>
  )
}

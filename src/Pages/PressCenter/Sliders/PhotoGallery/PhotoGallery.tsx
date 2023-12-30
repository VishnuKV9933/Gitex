import React, { useEffect, useRef, useState } from 'react'
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";
import './photogallery.css'
import induxtryimg from '../../../../assets/industry.png'
import fileDownload from 'js-file-download';
type PhotoGalleryProps={
    items:string[],
}

export default function PhotoGallery({items}:PhotoGalleryProps) {
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
  
  timer = setInterval(intervalHandler, 3000);
  if (timerCount > items.length - 1) {
    clearInterval(timer);
  }

  return () => {
    clearInterval(timer);
  };
      },[timerCount])

      const handleDownload = async(imageUrl:string) => {
        try {
          const imageUrl = induxtryimg
          const response = await fetch(imageUrl);
          const blob = await response.blob();
      
          // Use js-file-download to trigger the download
          fileDownload(blob, 'galary_image.png');
        } catch (error) {
          console.error('Error downloading image:', error);
        }
      };
    

  return (

    <div className='industryslider-container w-full h-full flex ' ref={containerRef}>

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

    <div ref={index===0?elemRef1:index===1?elemRef2:null} key={index} className='relative bg-white industryslider-element w-[180px] sm:w-[250px]  md:w-[300px] h-[150px] sm:h-[200px]   border mr-[1%] '>
      <img className='h-full   w-full' src={item} alt="img" />
     
      <div onClick={()=>handleDownload(item)} className='w-full h-[15%] cursor-pointer flex justify-end absolute bottom-[2%] right-[5%] '>
        <img className='rounded-md' src={induxtryimg} alt="" />
      </div>
    </div>
                )
            })}
    </div>
  )
}



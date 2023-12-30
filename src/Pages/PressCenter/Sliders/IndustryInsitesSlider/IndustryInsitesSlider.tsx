import React, { useEffect, useRef, useState } from 'react'
import { INDUSTRYINSIGHTS } from '../../../../Types'
import { SlArrowLeft,SlArrowRight  } from "react-icons/sl";
import './induxtryinsitesslider.css'
import induxtryimg from '../../../../assets/industry.png'
import pdfContent from  './industry.pdf'
import fileDownload from 'js-file-download';
type PressCenterSliderProps={
    items:INDUSTRYINSIGHTS[],
}
export default function IndustryInsitesSlider({items}:PressCenterSliderProps) {
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

      useEffect(() => {
        let timer: NodeJS.Timeout;
      
        const intervalHandler = () => {
          siderMoveRight();
          setTimerCount((prevCount) => prevCount + 1);
        };
      

        timer = setInterval(() => {
          intervalHandler();
      

        }, 1000);
        if (timerCount >= items.length) {
         
          clearInterval(timer);
        }
        // Cleanup the interval on component unmount
        return () => {
          clearInterval(timer);
        };
      }, [timerCount, items.length]);

      function handleDownload() {
        const pdfUrl = pdfContent;

        // Fetch the PDF file content
        fetch(pdfUrl as RequestInfo)
        .then((response) => response.blob())
        .then((blob) => {
          // Trigger the download
          fileDownload(blob, 'Insite.pdf');
        })
        .catch((error) => {
          console.error('Error fetching PDF file:', error);
        });
    }

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

    <div ref={index===0?elemRef1:index===1?elemRef2:null} key={index} className='bg-white industryslider-element w-[180px] sm:w-[250px]  md:w-[300px] h-[150px] sm:h-[200px]   border mr-[1%] px-[3%] pt-[3%] pb-[1%]'>
      <img className='h-[40%]   w-full' src={item.img} alt="img" />
      <div className='w-full h-[40%]  p-[2%]'>
            <h1 className='flex items-center justify-center text-[10px] md:text-[11px] font-bold'>
                {item.discription}
            </h1>
      </div>
      
      <div onClick={handleDownload} className='w-full h-[20%] cursor-pointer flex justify-end'>
        <img src={induxtryimg} alt="img" />
      </div>
    </div>
                )
            })}
    </div>
  )
}


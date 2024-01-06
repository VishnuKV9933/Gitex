import React from 'react'
import './mediamodal.css'
import { MEDIAPARTNER } from '../../Types';
import { IoMdClose } from "react-icons/io";
type MediaModalProps={
    modalOpen:boolean,
    setModalOpen:(modalOpen: boolean) => void,
    element:MEDIAPARTNER
}

export default function MediaModal({modalOpen,setModalOpen,element}:MediaModalProps):React.ReactElement {
    function modalClose(e:React.MouseEvent){
        const target = e.target as HTMLElement;
        if(target.id==='mediamodalcontainer') setModalOpen(false)
    }
  return (
    <>
    {modalOpen&&
    <div id='mediamodalcontainer'
    onClick={
        (e)=>{modalClose(e)
    e.stopPropagation()
    }}
     className='mediamodal-container flex justify-center items-center '>
     <div className='mediamodal-content rounded flex justify-between items-center flex-col gap-1 md:gap-[50px] relative'>
        <div
        onClick={
            (e)=>{setModalOpen(false)
        e.stopPropagation()
        }}
          className='absolute top-2 right-2 text-white font-bold text-[25px]'><IoMdClose/></div>
       
        <h1 className='text-[11px] sm:text-sm md:text-lg text-center mt-5 font-medium text-white relative'>{element.header}</h1>

        <div className='w-[70px] h-[70px] sm:w-[150px] sm:h-[150px]  mb-[2%] p-[1%] flex justify-center items-center bg-white'>
        <img className='w-[55px] sm:w-[70px] sm:w-[100px] h-auto' src={element.img} alt="img" />
        </div>

            <h6 className='text-[10px] sm:text-sm md:text-lg text-white text-center max-w-[700px] '>
           {element.discription}
            </h6>
          
            <button className='text-white w-[80px] h-[20px] sm:w-[100px] sm:h-[30px] flex  bg-red-600 text-[11px] sm:text-sm md:text-lg
             justify-center items-center rounded cursor-pointer exhibit '>WEBSITE</button>

     </div>
    </div>
    }
    </>
  )
}

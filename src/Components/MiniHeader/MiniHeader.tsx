import React, { useEffect, useRef, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti';
import logo from '../../assets/logo.png'
import './miniheader.css'

import { useSelector, useDispatch } from 'react-redux';
import { adjustOpen} from '../../Redux/Gitex';
import { RootState } from '../../Redux/Store';
import { Link } from 'react-router-dom';
import MiniMenu from '../MiniMenu/MiniMenu';



export default function MiniHeader():React.ReactElement {
  const elemRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const {value}= useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  useEffect(()=>{


    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  const handleIntersection: IntersectionObserverCallback = (entries) => {
   

    

    entries.forEach((entry)=>{

      if(!entry.isIntersecting){

        setVisible(false);
      }else{
        setVisible(true);
      }
          
    })

  }

  const observer = new IntersectionObserver(handleIntersection, observerOptions);

  observer.observe(elemRef.current as Element);
  return () => {
    observer.disconnect();
};

  },[])


  return (
    <>
   
      <div ref={elemRef} className="flex flex-col justify-center  py-[1%] bg-black px-[5%] h-[150px] w-full gap-[10%] md:hidden">
         
        <div className='flex justify-center items-center w-full gap-[5%]'>
<Link to={'/register'}>

        <div className="w-[130px] font-semibold	text-sm sm:text-md sm:[200px] h-[30px] flex text-white  justify-center items-center rounded  cursor-pointer  register ">
          Register Interest
        </div>
</Link>
        <Link to={'/exhibit'}>
        <div className="w-[100px] h-[30px] flex font-semibold	text-sm sm:text-md text-white bg-red-600  justify-center items-center rounded cursor-pointer exhibit ">
          Exhibit 2024
        </div>
        </Link>
        </div>
        <div className='w-full flex justify-between py-2 items-center  h-[50%]'>

        <img
          src={logo}
          alt="img"
          className={`h-[100%]  mt-2 'visible'`}
        />
      <div className=" text-black   flex justify-end items-center pr-[10%] gap-6 font-semibold relative   ">
        <div onClick={() => {dispatch(adjustOpen()) }}
          className="flex justify-center items-center cursor-pointer text-bas bg-white p-1" >

{
          value &&
      <div className={`${visible?'h-[250px] w-[250px]  absolute top-[100%] left-[150%] translate-x-[-130%] z-[300]' :'minimenu-invisible'}   minimenuAnimation `}>
        <MiniMenu/>
      </div>
          }

          MENU
          <div className="text-xl	">
            <TiArrowSortedDown />
          </div>
        </div>
      </div>
        </div>

      </div>



   {!visible && <div className="fixed-miniheader fixed top-0 left-0 z-[300] flex flex-col justify-center  py-[1%] bg-black px-[5%] h-[150px]  gap-[10%] md:hidden">
         
         <div className='flex justify-center items-center w-full gap-[5%]'>
         <Link to={'/register'}>
         <div className="w-[130px] font-semibold	text-sm sm:text-md sm:[200px] h-[30px] flex text-white  justify-center items-center rounded  cursor-pointer  register ">
           Register Interest
         </div>
         </Link>
         <Link to={'/exhibit'}>
         <div className="w-[100px] h-[30px] flex font-semibold	text-sm sm:text-md text-white bg-red-600  justify-center items-center rounded cursor-pointer exhibit ">
           Exhibit 2024
         </div>
         </Link>
         </div>
         <div className='w-full flex justify-between py-2 items-center  h-[50%]'>
 
         <img
           src={logo}
           alt="img"
           className={`h-[100%]  mt-2 'visible'`}
         />
       <div className=" text-black   flex justify-end items-center pr-[10%] gap-6 font-semibold relative   ">
         <div onClick={() => {dispatch(adjustOpen()) }}
           className="flex justify-center items-center cursor-pointer text-bas bg-white p-1" >

{
          (!visible && value) &&
      <div className=" w-[250px]  absolute top-[100%] left-[150%] translate-x-[-130%] ">

        <MiniMenu/>
      </div>
          }

           MENU
           <div className="text-xl	">
             <TiArrowSortedDown />
           </div>
         </div>
       </div>
         </div>
 
       </div>}

 
  
  </>
  )
}

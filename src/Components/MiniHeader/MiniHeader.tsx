import React, { useEffect, useState } from 'react'
import { TiArrowSortedDown } from 'react-icons/ti';
import logo from '../../assets/logo.png'
import './miniheader.css'

import { useSelector, useDispatch } from 'react-redux';
import { adjustOpen} from '../../Redux/Gitex';
import { RootState } from '../../Redux/Store';
import MenuItems from '../Menu/MenuItems';

export default function MiniHeader():React.ReactElement {
  const [visible, setVisible] = useState(false);
  const {value}= useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {

    const handleScroll = () => {
   
           
    if(window.scrollY>150){
      setVisible(false);
    }else{
      setVisible(true);
    }
            
};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
   
      <div className="flex flex-col justify-center  py-[1%] bg-black px-[5%] h-[150px] w-full gap-[10%] md:hidden">
         
        <div className='flex justify-center items-center w-full gap-[5%]'>

        <div className="w-[130px] font-semibold	text-sm sm:text-md sm:[200px] h-[30px] flex text-white  justify-center items-center rounded  cursor-pointer  register ">
          Register Interest
        </div>

        <div className="w-[100px] h-[30px] flex font-semibold	text-sm sm:text-md text-white bg-red-600  justify-center items-center rounded cursor-pointer exhibit ">
          Exhibit 2024
        </div>
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
        <MenuItems/>
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


 
  
  </>
  )
}

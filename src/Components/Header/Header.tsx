import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../assets/logo.png'
import { TiArrowSortedDown } from "react-icons/ti";

import { useSelector, useDispatch } from 'react-redux';
import { adjustOpen} from '../../Redux/Gitex';
import { RootState } from '../../Redux/Store';
import MenuItems from '../Menu/MenuItems';

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const {value}= useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();

  useEffect(() => {

    

    const handleScroll = () => {
   
           
    if(window.scrollY>150){
        setVisible(true);
    }else{
        setVisible(false);
    }
            
};

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>

{/* menu start */}
          {
          (visible && value) &&
      <div   className=" w-[300px] hidden md:block h-[300px] header-menu">
        <MenuItems/>
      </div>
          }

{/* menu end */}

    
    <div  className={` top-bar ${visible ? 'h-[150px] hidden md:block' : 'h-[0px]'}`}>
     

<div className='flex items-center'>
<img src={logo} alt="img" className={`${visible ? ' h-2/3 ml-[10%] ' : 'invisible'}`}/>
</div>

<div className={ ` ${visible ? ' text-white flex justify-end items-center pr-[10%] gap-6 font-semibold relative' : 'invisible'}`}>
<Link to={'/register'}>

<div className='w-[150px] h-[30px] flex justify-center items-center rounded register cursor-pointer'>Register Interest</div>
</Link>
<Link to={'/exhibit'}>
<div className='w-[120px] h-[30px] bg-red-600 flex justify-center items-center rounded cursor-pointer exhibit '>Exhibit 2024</div>

</Link>
<div  onClick={() => {dispatch(adjustOpen()) }}
 className='flex justify-center items-center cursor-pointer text-base'>
  MENU
 <div className='text-xl	'>

  <TiArrowSortedDown/>
 </div>

 
  </div>
</div>
   
    </div>


    {/* mini header start */}
   {visible && <div className="fixed top-0 left-0 z-[300] flex flex-col justify-center  py-[1%] bg-black px-[5%] h-[150px] w-full gap-[10%] md:hidden">
         
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
          (visible && value) &&
      <div className=" w-[250px]  absolute top-[100%] left-[150%] translate-x-[-130%] ">

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
 
       </div>}
    {/* mini header end */}

    </>

  );
};

export default Header;

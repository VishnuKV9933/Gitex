import React, { useEffect, useState } from "react";
import "./tophome.css";
import logo from "../../assets/logo.png";
import { TiArrowSortedDown } from "react-icons/ti";

import { useSelector, useDispatch } from "react-redux";
import { adjustOpen } from "../../Redux/Gitex";
import { RootState } from "../../Redux/Store";
import MenuItems from "../Menu/MenuItems";
import { Link } from "react-router-dom";

export default function FixedHead():React.ReactElement {
 
  const { value } = useSelector((state: RootState) => state.menu);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

    useEffect(() => {
      const handleScroll = (e:Event) => {
        if (window.scrollY > 150) {
          setVisible(true);
        } else {
          setVisible(false);
        }
          e.stopPropagation()
      };
  
      window.addEventListener("scroll", handleScroll);
      
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <>

{value &&
  <div  className={`${! visible ?'w-[300px] hidden md:block  z-50 absolute top-[17%] right-[7%]':'invisible'} menuAnimations`}>
    <MenuItems/>
  </div>
  
}

<div  className="top-home ">
     
    
      <div className="logo  items-center hidden md:block">
        <img
          src={logo}
          alt="img"
          className='h-[80%] ml-[10%] mt-5 visible'
        />
      </div>
      
<div className=""></div>




       <div className=" text-white flex justify-end items-center pr-[10%] gap-6 font-semibold relative  overflow-hidden mt-[5%]">
     
        <Link to={'/register'}>
        <div className="w-[150px] h-[30px] sm:flex hidden justify-center items-center rounded register cursor-pointer  ">
          Register Interest
        </div>
        </Link>

        <Link to={'/exhibit'}>
        <div className="w-[120px] h-[30px] sm:flex hidden bg-red-600  justify-center items-center rounded cursor-pointer exhibit ">
          Exhibit 2024
        </div>
        </Link>



        <div
          onClick={(e) => {
            dispatch(adjustOpen());
           
            e.stopPropagation()
           
            
          }}
          className="flex justify-center items-center cursor-pointer text-base"
        >
          MENU
          <div className="text-xl	">
            <TiArrowSortedDown />
          </div>
        </div>
      </div> 



      
    </div>

    </>
  )
}

import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import menulink from '../../assets/menulink.png'
import "./menulist.css";
import { Link } from "react-router-dom";

export default function MenuItems(): React.ReactElement {
    const [active,setActive]=useState<string>('')
  function listOpen(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    event.preventDefault()
    console.log(event.currentTarget.id,'id');
    
    if(event.currentTarget.id===active) return setActive('')
   
    if(event.currentTarget.id){
  const clickedElementId = event.currentTarget.id;
  console.log(active,'active');
  setActive(clickedElementId)
  
    }

    event.stopPropagation()
  }

  useEffect(()=>{
    console.log(active,'acc');
    
  },[active])
  return (
    <div  className="transparent-blur ">
{/* ----------------------list start--------------------- */}
<div onClick={(e)=>{console.log("fdskj");
}}>
  
</div>
        <div id="ATTEND" onClick={(e)=> {
          e.preventDefault()
          listOpen(e)
          console.log("clicked");
          e.stopPropagation()
          } } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='ATTEND'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
        ATTEND
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='ATTEND'?'menu-ul':''} `}>
        <Link to={'/speakers'}>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>Speakers 2023</li>
        </Link>
        <Link to={'/planvisit'}>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Plan your visit</li>
        </Link>
        <Link to={'/whyvisit'}>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Why visit</li>
        </Link>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Press Registration</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Speaker Registration</li>
        <Link to={'/presscenter'}>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Press Centre</li>
        </Link>
      </ul>

{/* ------------------------------------------- */}

        <div id="LEARN" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='LEARN'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      LEARN
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='LEARN'?'menu-ul ':''} `}>
        <li  className={`${active==='LEARN'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>About GITEX</li>
        <li className={`${active==='LEARN'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>FAQs</li>
        <li className={`${active==='LEARN'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}

<div id="EXHIBIT" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='EXHIBIT'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      EXHIBIT
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='EXHIBIT'?'menu-ul ':''} `}>
        <li  className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>Why Exhibit</li>
        <li className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Exhibit GITEX 2024</li>
        <li className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>GITEX AFRICA 2024</li>
        <li  className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>GITEX EUROPE 2025</li>
        <li className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}> Media Partners</li>
        <li className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}> Associations and Partners</li>
        <li className={`${active==='EXHIBIT'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Community Partners</li>
      </ul>
{/* ------------------------------------------- */}

<div id="THEMES" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='THEMES'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      THEMES
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='THEMES'?'menu-ul ':''} `}>
        <li  className={`${active==='THEMES'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>About GITEX</li>
        <li className={`${active==='THEMES'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>FAQs</li>
        <li className={`${active==='THEMES'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}


<div id="ALLSHOWS" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='ALLSHOWS'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      ALL SHOWS
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='ALLSHOWS'?'menu-ul ':''} `}>
        <li  className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>About GITEX</li>
        <li className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>FAQs</li>
        <li className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}
<div className="relative">
  
<img className="w-full  " src={menulink} alt="" />
<Link to={'/translate'}>

<div className="arlink"></div>
</Link>
</div>
    </div>
  );
}

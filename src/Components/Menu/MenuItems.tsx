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
<div >
  
</div>
        <div id="ATTEND" onClick={(e)=> {
          e.preventDefault()
          listOpen(e)
          console.log("clicked");
          e.stopPropagation()
          } } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='ATTEND'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center ">
        ATTEND
      </div>
      { active==='ATTEND' ? <IoIosArrowDown/>:<IoIosArrowForward/>  }
        </div>
      <ul className={`${active==='ATTEND'?'h-[280px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <Link to={'/speakers'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300  `}>Speakers 2023</li>
        </Link>
        <Link to={'/planvisit'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Plan your visit</li>
        </Link>
        <Link to={'/whyvisit'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Why visit</li>
        </Link>
        <Link to={'/workshoptraining'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Workshops & Training</li>
        </Link>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Press Registration</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Speaker Registration</li>
        <Link to={'/presscenter'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Press Centre</li>
        </Link>
      </ul>

{/* ------------------------------------------- */}

        <div id="LEARN" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='LEARN'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      LEARN
      </div>
      { active==='LEARN' ? <IoIosArrowDown/>:<IoIosArrowForward/> }
        </div>
      <ul className={`${active==='LEARN'?'h-[120px]':'h-[0px]'} open-animation  overflow-hidden`}>
      <Link to={'/aboutgitex'}>
        <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>About GITEX</li>
      </Link>
        <Link to={'/faq'}>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>FAQs</li>
        </Link>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}

<div id="EXHIBIT" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='EXHIBIT'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      EXHIBIT
      </div>
      { active==='EXHIBIT' ? <IoIosArrowDown/>:<IoIosArrowForward/>   }
        </div>
      <ul className={`${active==='EXHIBIT'?'h-[280px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>Why Exhibit</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Exhibit GITEX 2024</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>GITEX AFRICA 2024</li>
        <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>GITEX EUROPE 2025</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}> Media Partners</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}> Associations and Partners</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Community Partners</li>
      </ul>
{/* ------------------------------------------- */}

<div id="THEMES" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='THEMES'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      THEMES
      </div>
      { active==='THEMES' ? <IoIosArrowDown/>:<IoIosArrowForward/> }
        </div>
      <ul className={`${active==='THEMES'?'h-[120px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>About GITEX</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>FAQs</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}


<div id="ALLSHOWS" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='ALLSHOWS'?'bg-red-600':''}`}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      ALL SHOWS
      </div>
      { active==='ALLSHOWS' ? <IoIosArrowDown/>:<IoIosArrowForward/> }
        </div>
      <ul className={`${active==='ALLSHOWS'?'h-[120px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>About GITEX</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>FAQs</li>
        <li className={`hover:ml-2 li-menu transition-all duration-300`}>Latest News</li>
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

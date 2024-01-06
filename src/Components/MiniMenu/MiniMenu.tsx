import React, { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import menulink from '../../assets/menulink.png'
import { Link } from "react-router-dom";
import './minimenu.css'

export default function MiniMenu():React.ReactElement {
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
        <ul className={`${active==='ATTEND'?'h-[200px]':'h-[0px]'} open-animation  overflow-hidden`}>
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
          <Link to={'/latestnews'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Latest News</li>
          </Link>
        </ul>
  {/* ------------------------------------------- */}
  
  <div id="EXHIBIT" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='EXHIBIT'?'bg-red-600':''}`}>
        <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
        EXHIBIT
        </div>
        { active==='EXHIBIT' ? <IoIosArrowDown/>:<IoIosArrowForward/>   }
          </div>
        <ul className={`${active==='EXHIBIT'?'h-[160px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <Link to={'/whyexhibit'}>
          <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>Why Exhibit</li>
        </Link>
          <Link to={'/mediapartners'}> 
          <li className={`hover:ml-2 li-menu transition-all duration-300`}> Media Partners</li>
          </Link>
          <Link to={'/associationspartners'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}> Associations and Partners</li>
          </Link>
          <Link to={'/communitypartners'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Community Partners</li>
          </Link>
        </ul>
  {/* ------------------------------------------- */}
  
  <div id="THEMES" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='THEMES'?'bg-red-600':''}`}>
        <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
        THEMES
        </div>
        { active==='THEMES' ? <IoIosArrowDown/>:<IoIosArrowForward/> }
          </div>
        <ul className={`${active==='THEMES'?'h-[360px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <Link to={'/ai'}>
          <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>AI</li>
        </Link>
  
        <Link to={'/telecoms'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Telecoms</li>
  
        </Link>
        <Link to={'/cybersecurity'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Cybersecurity</li>
        </Link>
  
        <Link to={'/mobility'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Future Mobility</li>
        </Link>
        
        <Link to={'/developer'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Coders/Developers</li>
        </Link>
  
        <Link to={'/metaverse'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Metaverse</li>
        </Link>
        <Link to={'/youth'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>YouthX</li>
        </Link>
        <Link to={'/sustainability'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>Sustainability</li>
        </Link>
        <Link to={'/cto'}>
          <li className={`hover:ml-2 li-menu transition-all duration-300`}>CTO World Congress</li>
        </Link>
        </ul>
  {/* ------------------------------------------- */}
  
  
  <div id="ALLSHOWS" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-neutral-800 h-10 ${active==='ALLSHOWS'?'bg-red-600':''}`}>
        <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
        ALL SHOWS
        </div>
        { active==='ALLSHOWS' ? <IoIosArrowDown/>:<IoIosArrowForward/> }
          </div>
        <ul className={`${active==='ALLSHOWS'?'h-[40px]':'h-[0px]'} open-animation  overflow-hidden`}>
        <Link to={'/'}>
          <li  className={`hover:ml-2 li-menu transition-all duration-300  `}>GITEX GLOBAL</li>
        </Link>
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
  
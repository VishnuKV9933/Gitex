import React, { useState } from "react";
import "./footer.css";
import fb from "../../assets/footerfb.png";
import xx from "../../assets/footerx.png";
import insta from "../../assets/footerinsta.png";
import linkedin from "../../assets/footerlinkedin.png";
import utube from "../../assets/footerutube.png";
import morocologo from "../../assets/morokologo.png";
import berlinelogo from "../../assets/berlinelogo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";

export default function Footer(): React.ReactElement {

  const [active,setActive]=useState<string>('')
  function listOpen(event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) {
    event.preventDefault()

    if(event.currentTarget.id===active) return setActive('')
   
    if(event.currentTarget.id){
  const clickedElementId = event.currentTarget.id;
  setActive(clickedElementId)
    }
  }

  return (
    <div className="footer-main">

      
    <div className="footer-container  pt-[5%] ">
      {/* first row start */}
      <div className="elements  flex flex-col justify-start items-start gap-[30px] md:gap-[50px] cursor-pointer mb-[2%]">
        <div className="text-white font-medium text-xl">GITEX GLOBAL</div>
        <div className="exhibit bg-red-600 text-white font-medium rounded px-1 py-2">
          Sign up for newsletter
        </div>
        <div className="flex w-[200px] justify-between">
          <img className="w-7 h-7" src={fb} alt="" />
          <img className="w-7 h-7" src={xx} alt="" />
          <img className="w-7 h-7" src={utube} alt="" />
          <img className="w-7 h-7" src={linkedin} alt="" />
          <img className="w-7 h-7" src={insta} alt="" />
        </div>
        <img className="w-[50%] " src={morocologo} alt="" />
        <img className="w-[50%] " src={berlinelogo} alt="" />
      </div>

      {/* second row start */}
      <div className="elements  mb-[2%]">
      {/* ----------------------list start--------------------- */}
      <div  className="text-white ">
        <div id="ATTEND" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-white h-14 `}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
        ATTEND
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='ATTEND'?'menu-ul':''} `}>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>Speakers 2023</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Plan your visit</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Why visit</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Press Registration</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Speaker Registration</li>
        <li className={`${active==='ATTEND'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Press Centre</li>
      </ul>
{/* ------------------------------------------- */}

        <div id="LEARN" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-white h-14 `}>
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

<div id="EXHIBIT" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-white h-14 `}>
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

<div id="THEMES" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-white h-14 `}>
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
<div id="ALLSHOWS" onClick={(e)=> listOpen(e) } className={` cursor-pointer flex items-center justify-between px-3 border-b-[1px] border-white h-14 `}>
      <div  className="transition-all duration-300 hover:ml-2 flex justify-center items-center  ">
      ALLSHOWS
      </div>
      { !active ? <IoIosArrowForward/>:  <IoIosArrowDown/>  }
        </div>
      <ul className={`${active==='ALLSHOWS'?'menu-ul ':''} `}>
        <li  className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}  `}>About GITEX</li>
        <li className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>FAQs</li>
        <li className={`${active==='ALLSHOWS'?'menu-li transition-all duration-300 hover:ml-2':'hidden'}`}>Latest News</li>
      </ul>
{/* ------------------------------------------- */}

{/* <img className="w-full" src={menulink} alt="" /> */}
    </div>
    {/* menulist end */}
      </div>
      {/* third row start */}
      <div className="elements  flex flex-col ju stify-start items-start  gap-[1px] md:gap-1 break-all mb-[2%]">
        <div className="text-white font-medium text-xl border-b-2 w-full mb-5">
          Let’s Talk
        </div>
        <div className="text-white font-medium">
          Visitor and Registration Inquiries
        </div>
        <div className="text-white font-medium cursor-pointer mb-3">
          support@gitex.com
        </div>
        <div className="text-white font-medium">Sales Inquiry</div>
        <div className="text-white font-medium cursor-pointer mb-3">
          GitexSales@dwtc.com
        </div>
        <div className="text-white font-medium">Marketing Inquiry</div>
        <div className="text-white font-medium cursor-pointer mb-3">
          gitexmarketing@dwtc.com
        </div>
        <div className="text-white font-medium">Conferences</div>
        <div className="text-white font-medium cursor-pointer mb-3">
          Gitex@dwtc.com
        </div>
        <Link to="/">
          <div className="text-white text-lg font-medium cursor-pointer ">
            FAQs
          </div>
        </Link>
      </div>
      {/* forth row start */}
      <div className="elements  flex flex-col justify-start items-start gap-5  mb-[2%]">
        <div className="exhibit px-6  bg-red-600 text-white font-medium rounded w-[50%] md:w-[100%] py-2 ">
          Exhibit 2024
        </div>
        <div className="register flex justify-center w-[50%] md:w-[100%] px-6  text-white font-medium rounded  py-2 ">
          Exhibit 2024
        </div>
        <div className="register flex justify-center  w-[50%] md:w-[100%] px-6  text-white font-medium rounded  py-2 ">
        Press registration
        </div>
        <div className="register flex justify-center  w-[50%] md:w-[100%] px-6  text-white font-medium rounded  py-2 ">
        Press centre
        </div>
        
      </div>

      
    

      {/* forth row end */}
    </div >




    <div className=" flex flex-col md:flex-row gap-[4%]  w-full  pb-[5%] pt-[2%] text-white justify-between border-t-2">
   <div className="flex  flex-wrap ">Event Website By: <img src="" alt="" /><span></span>MY WORLD OF EXPO</div>
 
   <div className="flex flex-wrap">
    <div>Privacy Policy</div>
    <div>Terms & Conditions</div>
    <div>© Copyright 2023</div>
   </div>

    </div>
    </div>
  );
}

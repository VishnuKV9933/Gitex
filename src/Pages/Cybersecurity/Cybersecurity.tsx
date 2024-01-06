import React, { useEffect } from "react";
import "./cybersecurity.css";
import FixedHead from "../../Components/FixedHead/FixedHead";
import ACSpeakers from "../../Components/AISpeakers/ACspeakers";
import AISlider from "../../Components/AISlider/AISlider";
import InfiniteSlider from "../../Components/InfiniteSlider/InfiniteSlider";
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
export default function Cybersecurity(): React.ReactElement {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>
      <FixedHead />
      <div className="cyber-banner w-full sm:h-[300px] h-[200px] flex flex-col justify-end items-center pb-[1%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
          Year’s most anticipated cybersecurity event
        </h1>
        <h1 className="text-white text-3xl md:text-6xl font-semibold">
          GITEX CYBER VALLEY
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
            Year’s most anticipated assembly of cybersecurity professionals
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
            As generative AI ascends to transformative new heights, reports show
            that annual global cybercrime could cost a staggering $10.5 trillion
            by 2025.
          </h1>
          <h1 className="text-sm mt-[5%] text-stone-500">
            As companies across the world scramble to get their cyber resilience
            prepared to combat AI, GITEX provides the ultimate platform to get
            your brand in front of the trade buyers and decision makers from all
            major tech sectors from across the globe.
          </h1>

          <div className=" w-[300px] h-[50px] justify-start items-center flex justify-between relative">
            <button className=" text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer  ">
              Exhibit at GITEX
            </button>

            <button className=" text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer   ">
              Register Interest
            </button>
          </div>
        </div>

        <div className=" w-full overflow-hidden sm:w-1/2  ">
          <div className="relative w-full overflow-hidden    ">
            <div className="animateimgblur"></div>

            <img
              className="animateImg w-full "
              src="https://gitex.com/contents/Theme-3/images/cybersecurity-image1.jpg"
              alt=""
            />
          </div>

          <img
            className="w-i/2"
            src="https://gitex.com/contents/Theme-3/images/cyber/cybersec-sponsors.png"
            alt=""
          />
        </div>
      </section>


      <section className='w-full text-container'>
        <h1 className='my-[5%] ceter-red-underline text-center text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold'>Game-changing features</h1>
        <div className='w-full flex flex-col sm:flex-row px-[5%] flex-wrap pb-[5%]'>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <h1 className='text-red-600 font-bold'>GITEX CISO LOUNGE</h1>
                    <p className='text-sm md:text-base text-stone-600'>Top 150 CISO’s from cross industry sectors engage in meaningful interactions, discuss industry ideas and challenges with peers.</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <h1 className='text-red-600 font-bold'>CYBER WORKSHOPS</h1>
                    <p className='text-sm md:text-base text-stone-600'>Hands-on, interactive workshops will give you a clear insight into proactive approaches to combating modern cyber threats.</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <h1 className='text-red-600 font-bold'>EXPERIENCE DIGITAL TWIN SIMULATION</h1>
                    <p className='text-sm md:text-base text-stone-600'>A first-to-GITEX, experience how a city is secured from cyberattacks, how the power of data and real-time simulation is leveraged to build insight-driven decisions.</p>
                </div>
        </div>
      </section>
<ACSpeakers/>

<AISlider/>

<>


<div  className='w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center'>
    <h1 className='happening-header text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative'>Latest News</h1>
</div>
 

<InfiniteSlider/>


</>


    </>
  );
}

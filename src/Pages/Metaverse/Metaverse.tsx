import React, { useEffect } from 'react'
import './metaverse.css'
import FixedHead from '../../Components/FixedHead/FixedHead'
import ACSpeakers from '../../Components/AISpeakers/ACspeakers'
import AISlider from '../../Components/AISlider/AISlider'

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
import ScrollComponent from '../../Components/ScrollComponent/Scrollcomponent'

export default function Metaverse() :React.ReactElement{
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>
     <FixedHead/>
      <div className="meta-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        Metaverse
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          The ultimate web 3.0/ metaverse event
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          In the ever-evolving landscape of technology,<span className='font-bold'>Web 3.0 and the Metaverse are the buzzwords that are </span> redefining our digital experience. Web 3.0 promises a smarter and more connected world where data is linked in a way that is easily processed by machines.
         </h1>

         <h1 className="text-sm mt-[10%] text-stone-500">
         According to a recent report, the global Web 3.0<span className='font-bold'>market is expected to reach $1.7 trillion by 2025, </span> growing at a CAGR of 43.1% - join us at GITEX GLOBAL and meet the creators and inventors behind the metaverse leading the way on future developments, and network with buyers sourcing the latest technology in the web 3.0 industry.         </h1>

          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
            <button className=" text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer  ">
              Exhibit at GITEX
            </button>

            <button className="mt-2 text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer   ">
              Register Interest
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/metaverse-image1.jpg"
            alt="img"
          />
        </div>
      </section>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        
      <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/metaverse-image2.jpg"
            alt="img"
          />
        </div>
        
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          The ultimate web 3.0/ metaverse event
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          In the ever-evolving landscape of technology,<span className='font-bold'>Web 3.0 and the Metaverse are the buzzwords that are </span> redefining our digital experience. Web 3.0 promises a smarter and more connected world where data is linked in a way that is easily processed by machines.
         </h1>

         <h1 className="text-sm mt-[10%] text-stone-500">
         According to a recent report, the global Web 3.0<span className='font-bold'>market is expected to reach $1.7 trillion by 2025, </span> growing at a CAGR of 43.1% - join us at GITEX GLOBAL and meet the creators and inventors behind the metaverse leading the way on future developments, and network with buyers sourcing the latest technology in the web 3.0 industry.         </h1>

          
        </div>
       
      </section>


      <ACSpeakers/>

<AISlider/>

   {/* slider start */}
   <>
        <div className="w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center">
          <h1 className="happening-header mb-[30px] text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative">
            Latest News
          </h1>
        <ScrollComponent/>
        </div>
 
      </>
      {/* slider end */}
      
    </>
  )
}

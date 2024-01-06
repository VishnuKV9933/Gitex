import React, { useEffect } from "react";
import "./telecoms.css";
import FixedHead from "../../Components/FixedHead/FixedHead";
import AiSpeakers from "../../Components/AISpeakers/AiSpeakers";
import AISlider from "../../Components/AISlider/AISlider";
import InfiniteSlider from "../../Components/InfiniteSlider/InfiniteSlider";

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
import ACSpeakers from "../../Components/AISpeakers/ACspeakers";

export default function Telecoms(): React.ReactElement {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>
      <FixedHead />
      <div className="telecoms-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
          TELECOMS AT GITEX GLOBAL
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
            TELECOMS / 5G / INTELLIGENT CONNECTIVITY
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
            GITEX GLOBAL hosts over 1/3rd of the world’s biggest telecom
            operators exploring the challenges and opportunities facing CSPs as
            they invest in next-gen technologies to meet growing connectivity
            demands.{" "}
          </h1>
          <h1 className="text-sm mt-[5%] text-stone-500">
            Discover how Communication Service Providers (CSPs) are adapting
            their networks to catalyze the transition, expanding their revenue
            streams by offering bundled packages such as Video-onDemand
            solutions to customers.
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
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/Telecoms-image1.jpg"
            alt=""
          />
        </div>
      </section>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/Telecoms-image2.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-start items-start px-[1%] w-full sm:w-1/2 gap-[10px] ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
            Convening global telecoms and network infrastructure innovators
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
            In an era where connectivity is more than just a utility—it's the
            lifeblood of businesses and communities—GITEX GLOBAL brings together
            key stakeholders in the telecommunications and network
            infrastructure spaces. We invite industry leaders, technology
            vendors, policy makers, and innovators to engage in meaningful
            dialogues, form partnerships, and set the course for the future of
            intelligent connectivity.
          </h1>

          <h1 className="text-sm  text-stone-500">
            With exclusive access to cutting-edge innovations and the brightest
            minds in the field, attending GITEX is not just an option - it's a
            necessity for anyone serious about leading in the digital age.
          </h1>
        </div>
      </section>

      <section className="p-[5%] keytopics-container ">

        <h1 className="left-red-underline text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 ">Key topics include:</h1>
          
          <div className="flex justify-around items-center flex-wrap">

          <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Future of Intelligent Connectivity</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Edge Computing in Telecoms</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Cybersecurity for Network Infrastructure</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Monetization Strategies for CSPs</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Monetization Strategies for CSPs</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Blockchain and Telecoms</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Monetization Strategies for CSPs</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Quality of Service (QoS)</h1>
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

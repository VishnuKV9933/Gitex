import React, { useEffect } from 'react'
import './sustainability.css'
import img1 from '../../assets/sustain1.png'
import img2 from '../../assets/sustain2.png.png'
import img3 from '../../assets/sustain3.png'
import FixedHead from '../../Components/FixedHead/FixedHead'
import ACSpeakers from '../../Components/AISpeakers/ACspeakers'
import AISlider from '../../Components/AISlider/AISlider'

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
import ScrollComponent from '../../Components/ScrollComponent/Scrollcomponent'


export default function Sustainability():React.ReactElement {


  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(menuClose());
  },[])
  return (
    <>
        <FixedHead/>
      <div className="sustainable-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        Sustainable Tech at GITEX GLOBAL
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full px-[5%] pt-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          Region‘s largest green tech & ESG event: GITEX IMPACT
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
         
After the incredible launch of GITEX IMPACT in 2023, <span className='font-bold'> green tech will continue to be a greater focus at the largest tech </span>and startup event in the world, GITEX GLOBAL. With over 170,000+ trade buyers from 170+ regions across the globe, sustainability leaders come together to source and discuss green transition solutions and strategies, empowering climate tech companies & startups with the blueprint for amplifying the 2030 sustainability agenda.        </h1>

          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
            <button className="mt-2 text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer   ">
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
            src="https://gitex.com/contents/Theme-3/images/sustainability-image1.jpg"
            alt="img"
          />
        </div>
      </section>

      <section className='w-full sustainable-text-container mt-[5%] pt-[1%]'>
        <h1 className='my-[5%] ceter-red-underline text-center text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold'>Unmissable moments</h1>
        <div className='w-full flex flex-col sm:flex-row px-[5%] flex-wrap pb-[5%]'>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                   
                   <img className='w-1/2 text-stone-300' src={img1} alt="img" />
                    <h1 className='text-red-600 font-bold'>GITEX CISO LOUNGE</h1>
                    <p className='text-sm md:text-base text-stone-600'>Top 150 CISO’s from cross industry sectors engage in meaningful interactions, discuss industry ideas and challenges with peers.</p>
                </div>

              
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                   
                   <img className='w-1/2 text-stone-300' src={img2} alt="img" />
                    <h1 className='text-red-600 font-bold'>GITEX CISO LOUNGE</h1>
                    <p className='text-sm md:text-base text-stone-600'>Top 150 CISO’s from cross industry sectors engage in meaningful interactions, discuss industry ideas and challenges with peers.</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <img className='w-1/2' src={img3} alt="img" />
                    <h1 className='text-red-600 font-bold'>EXPERIENCE DIGITAL TWIN SIMULATION</h1>
                    <p className='text-sm md:text-base text-stone-600'>A first-to-GITEX, experience how a city is secured from cyberattacks, how the power of data and real-time simulation is leveraged to build insight-driven decisions.</p>
                </div>
        </div>
      </section>

      <section className="top-section flex flex-col sm:flex-row w-full px-[5%] py-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          The 2nd edition of GITEX IMPACT
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
         
          GITEX Impact stands as the world's premier technology gathering focused on transformative <span className='font-bold'>solutions in climate change, ESG investing, sustainable</span> finance, and public-private collaborations.     </h1>

          <h1 className="text-sm mt-[10%] text-stone-500">We are thrilled to share the stage with other industry-defining events, collectively forming the globe's most expansive tech ecosystem. A single attendee ticket grants you access to a multitude of shows, each spotlighting groundbreaking advancements in fields like Sustainability Tech, ESG Approaches, AI, Robotics, HealthTech, DeepTech, EdTech, FinTech, the Metaverse, Web 3.0, coding, and future mobility solutions.</h1>

          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
            <button className="mt-2 text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer   ">
            Discover GITEX Impact
            </button>
           
          </div>
        </div>
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <img
            className=" w-full "
            src="https://gitex.com/contents/Theme-3/images/sustainability-image2.jpg"
            alt="img"
          />
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

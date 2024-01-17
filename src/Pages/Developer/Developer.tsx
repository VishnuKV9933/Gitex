import React, { useEffect } from 'react'
import './developer.css'
import FixedHead from '../../Components/FixedHead/FixedHead'
import ACSpeakers from '../../Components/AISpeakers/ACspeakers'
import AISlider from '../../Components/AISlider/AISlider'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
import ScrollComponent from '../../Components/ScrollComponent/Scrollcomponent'

   


export default function Developer():React.ReactElement {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>
            <FixedHead/>
      <div className="developer-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        Coding/ Developers
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
            <img className='w-[100px] sm:w-[200px]' src="https://gitex.com/contents/Theme-3/images/Global-DevSlam-logo.png" alt="" />
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          World's largest meetup for the developers and coding community
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          This unparalleled event unites developers, coders, change-makers, and top-tier developers in an immersive 3D experience. Backed by Coders HQ—a UAE government initiative—and the Python Software Foundation, Global DevSlam, co-located with GITEX GLOBAL, provides a unique platform for C-suite leaders, government dignitaries, and a diverse coding talent pool.          </h1>

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
            src="https://gitex.com/contents/Theme-3/images/coding-image1.jpg"
            alt="img"
          />
        </div>
      </section>
      

      <section className='w-full text-container'>
        <h1 className='mb-[5%] pt-[5%] ceter-red-underline text-center text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold'>What to expect</h1>
        <div className='w-full flex flex-col sm:flex-row px-[5%] flex-wrap pb-[5%] justify-center'>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r border-b'>
                    <h1 className='text-red-600 font-bold'>Direct access to tier 1 trade buyers</h1>
                    <p className='text-sm md:text-base text-stone-600'>Global Devslam, in partnership with GITEX GLOBAL, hosts the most curated trade buyer community in the world across all major tech sectors. </p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r border-b'>
                    <h1 className='text-red-600 font-bold'>All-New Zonal Experience</h1>
                    <p className='text-sm md:text-base text-stone-600'>5 top zones offering amazing curated visitor experiences, covering front end & back end coding, low code and no code platforms, full stack development, APIs & microservices & platform engineering. Walk in with a problem, walk out with a solution.</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-b'>
                    <h1 className='text-red-600 font-bold'>Certified Trainings & Sponsored Workshops</h1>
                    <p className='text-sm md:text-base text-stone-600'>Exclusive, hands-on certified workshops & in-depth trainings for upskilling and career development.</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r'>
                    <h1 className='text-red-600 font-bold'>Talent Connect</h1>
                    <p className='text-sm md:text-base text-stone-600'>Your ultimate talent networking and career building platform with over 1,000 job opportunities.</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <h1 className='text-red-600 font-bold'>Devslam Hack</h1>
                    <p className='text-sm md:text-base text-stone-600'>Collaborative hackathons with some of the biggest tech companies worldwide with 500+ participants across 5 challenges, with the aim to solve global tech issues.</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  '>
                    <h1 className='text-red-600 font-bold'>Scholarships(V2G)</h1>
                    <p className='text-sm md:text-base text-stone-600'>Win $40,000 worth of scholarships on coding, Ai and Data Science.</p>
                </div>
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

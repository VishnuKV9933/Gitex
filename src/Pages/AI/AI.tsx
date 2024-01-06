import React, { useEffect, useState } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import './ai.css'
import AiSpeakers from '../../Components/AISpeakers/AiSpeakers'
import { LiaDotCircleSolid } from "react-icons/lia";
import { FaPlus } from 'react-icons/fa6';
import AISlider from '../../Components/AISlider/AISlider';
import InfiniteSlider from '../../Components/InfiniteSlider/InfiniteSlider';

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';


export default function AI():React.ReactElement {
    const [expand,setExpand] =useState<string>('')
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
    function expandContainer(id:string) {
        if(expand===id) {return setExpand('')}
        setExpand(id)
      }
  return (
    <>
       <FixedHead/>
      <div className='ai-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]'>
        <h1 className='text-white text-2xl md:text-4xl font-semibold'>The Year to Imagine AI in Everything.</h1>
      </div>

      <section className='top-section flex flex-col sm:flex-row w-full p-[5%]'>
          <div className='flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  '>
              <div className='top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900'>The largest gathering of CTO's in the world</div>
              <h1 className='text-sm mt-[10%] text-stone-500'>Inspired by the ultra talented tech creators taking the world, we are proudly showcasing the  GITEX GLOBAL CTO WORLD CONGRESS at GITEX 2024 for the second year in a row. The world will finally steal a peek inside the minds and spirits of the world's best tech architects in the year's largest gathering of tech disruptors. </h1>
              <h1 className='text-sm mt-[5%] text-stone-500'>Listen to ground breaking conferences from the world-leaders in AI, meet the startups and business at the frontier of AI development and discover why experts forecast that AI is expected to contribute up to $15.7 trillion to the global economy by 2030. </h1>

              <div className=' w-[200px] h-[50px] justify-start items-center flex  relative'>
            <button className='exh-btn text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer absolute top-[50%] left-[0%]  '>Register Interest</button>
            </div>
          </div>
          <div className='relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
          <div className='animateimgblur'></div>
                <img  className='animateImg w-full ' src="https://gitex.com/contents/Theme-3/images/AI-image-1.jpg" alt="" />
          </div>
      </section>



      <section className='w-full'>
        <h1 className='my-[5%] ceter-red-underline text-center text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold'>What to expect</h1>
        <div className='w-full flex flex-col sm:flex-row px-[5%] flex-wrap pb-[5%]'>

                <div className='flex flex-col justify-start w-full sm:w-1/2 items-center text-center p-[2%]  border-r border-b'>
                    <h1 className='text-red-600 font-bold'>CONFERENCES</h1>
                    <p className='text-sm md:text-base text-stone-600'>Attracting 100's <span className='font-bold'>of the best speakers across the globe</span>  to give high impact insights in everything from NLP, generative AI to machine learning.</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/2 items-center text-center p-[5%]  border-b'>
                    <h1 className='text-red-600 font-bold'>NETWORKING SESSIONS</h1>
                    <p className='text-sm md:text-base text-stone-600'>Meet investors looking to enter the AI space, or find the next big tech startup <span className='font-bold'> in organized investor sessions - through</span>  our organized meetings concierge programme, so that we can efficiently organize your meetings schedule.</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/2 items-center text-center p-[5%] border-r'>
                    <h1 className='text-red-600 font-bold '>AI RESEARCH & ACADEMIA</h1>
                    <p className='text-sm md:text-base text-stone-600'>Mentorship, scholarships and internships for the youth. A platform for PhD aspirants in AI to progress.  </p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/2 items-center text-center p-[5%] '>
                    <h1 className='text-red-600 font-bold '>CERTIFIED WORKSHOPS</h1>
                    <p className='text-sm md:text-base text-stone-600'>Highly technical, educational & thought provoking certified AI & data science workshops from the top 2% of global minds in AI & data science.</p>
                </div>
        </div>
      </section>

      <AiSpeakers/>

      <section className='top-section flex flex-col sm:flex-row w-full p-[5%]'>
          <div className='relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
          <div className='animateimgblur'></div>
                <img  className='animateImg w-full ' src="https://gitex.com/contents/Theme-3/images/AI-image-2.jpg" alt="" />
          </div>
          <div className='flex flex-col justify-start items-start px-[1%] w-full sm:w-1/2 gap-[10px] '>
              <div className='top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900'>Why is AI at the forefront of business priority?</div>
              <h1 className='text-sm mt-[10%] text-stone-500'>The adoption of AI has skyrocketed in the last few years, with all industries exploring new ways to utilize the latest available technology to:</h1>
                    <div className='flex justify-center items-center'>
                   <div className='text-red-600 mr-[10px]'> <LiaDotCircleSolid/> </div>
                    <div className='text-stone-500 text-sm'>Improve efficiency</div>
                    </div>

                    

                    <div className='flex justify-center items-center'>
                   <div className='text-red-600 mr-[10px]'> <LiaDotCircleSolid/> </div>
                    <div className='text-stone-500 text-sm'>Cut operating costs</div>
                    </div>
                    <div className='flex justify-center items-center'>
                   <div className='text-red-600 mr-[10px]'> <LiaDotCircleSolid/> </div>
                    <div className='text-stone-500 text-sm'>Improve business sustainability</div>
                    </div>
              <h1 className='text-sm  text-stone-500'>There have been massive leap's forward in AI development and software has become much more accessible to the public, such as ChatGPT and Google's Bard. AI is becoming mainstream, and GITEX GLOBAL provides a platform for the world's brightest minds to share their thoughts and ideas on the AI wave encompassing the world. </h1>
              <div className=' w-[200px] h-[50px] justify-start items-center flex  relative'>
            <button className='exh-btn text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer absolute top-[50%] left-[0%]] ) '>Register Interest</button>
            </div>
          </div>
      </section>

{/* ----------faq---start--------- */}
      <section className='w-full p-[5%] Aifaq'>

      <div className='left-red-underline text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900'>Frequently asked questions</div>


      <div  onClick={() => expandContainer('Whyattend')}
                         className={`animation-component bg-white w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={`${expand ==='Whyattend'? 'h-[40px]' : 'h-[20px]'} animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Why should I attend?</span>
                            <div className={`${expand ==='Whyattend'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='Whyattend'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX GLOBAL is the premier event for exhibitors showcasing the latest in first-hand technology that has inspired generations and innovations that are set to change the world.</p>
                        </div>

                        <div  onClick={() => expandContainer('Wherexhibitors')}
                         className={`animation-component bg-white w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Where can I view a complete list of exhibitors?</span>
                            <div className={`${expand ==='Wherexhibitors'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='Wherexhibitors'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX GLOBAL will welcome 6,000+ exhibitors from 170+ countries. To view the full list of exhibitors, visit our exhibitor listing page.</p>
                        </div>

                        <div  onClick={() => expandContainer('howsow')}
                         className={`animation-component bg-white w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>How many visitors are expected to visit the show?</span>
                            <div className={`${expand ==='howsow'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='howsow'? 'h-[70px]  sm:h-[50px] md:h-[40px]' : 'h-[0px]'} animation-component overflow-hidden text-sm sm:text-lg`}>GITEX GLOBAL 2023 is expecting to welcome over 180,000 visitors across the 5 days of the event.</p>
                        </div>


                        <div  onClick={() => expandContainer('countries')}
                         className={`animation-component bg-white w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>What are some of the top visiting countries?</span>
                            <div className={`${expand ==='countries'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='countries'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX is a true global event that welcomes exhibitors and visitors from over 180+ countries including Italy, India, Brazil, Bahrain, KSA, Korea, Japan, France, Serbia, Sweden and more.</p>
                        </div>
      </section>
{/* ----------faq---end--------- */}
<AISlider/>

<>


<div  className='w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center'>
    <h1 className='happening-header text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative'>Latest News</h1>
</div>
 

<InfiniteSlider/>


</>


    </>
  )
}

import React from 'react';
import './whyVisit.css'
import ai from '../../assets/ai.png'
import de from '../../assets/de.png'
import gi from '../../assets/gi.png'
import ur from '../../assets/ur.png'
import fs from '../../assets/fs.png'
import fb from '../../assets/fb.png'
import mm from '../../assets/mm.png'
import gtxwhitelogo from '../../assets/footerbottom1.png'
import trbot2 from '../../assets/translatebottom2.png'
import { persons,latestNews } from '../../Constants/constants'
import VerticalScroll from '../../Components/VerticalScroll/VerticalScroll';
import HorizontalScroll from '../../Components/HorizontalScroll/HorizontalScroll';
import Happenings from '../../Components/Happenings/Happenings';
import FixedHead from '../../Components/FixedHead/FixedHead';
import MuitiCarousel from '../../Components/MultiCarousel/MuitiCarousel';




export default function WhyVisit():React.ReactElement {



  return (
    <div className='w-full '>
      {/* <TopHome/> */}
      <FixedHead/>
      <div className='whyvishit-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]'>
        <h1 className='text-white text-2xl md:text-4xl font-semibold'>WHY VISIT GITEX GLOBAL?</h1>
      </div>
      <section className='top-section flex flex-col sm:flex-row w-full p-[5%]'>
          <div className='flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  '>
              <div className='top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900'>Unmissable moments, shared</div>
              <h1 className='text-lg mt-[10%] text-stone-500'>GITEX GLOBAL welcomes you to join the leading minds from governments, big tech, startups and investors at the epicenter of global tech innovation. Register your interest to attend today to join our mailing list and discover exclusive content and unique features of the upcoming GITEX 2024.</h1>
              <h2 className='text-lg font-bold md:text-xl text-blue-900 lg:text-2xl  test-blue-900'>14th to 18th October 2024</h2>
              <button className='translate-btn rounded px-2 mt-4 text-md md:text-lg'>Register Interest to Visit</button>
          </div>
          <div className='relative w-full overflow-hidden sm:w-1/2 bg-red-600 h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]'>
          <div className='animateimgblur'></div>
                <img  className='animateImg w-full h-full' src="https://www.gitex.com/contents/Theme-3/images/visit/whyvisit-img.jpg" alt="" />
          </div>
      </section>

      <section className='company-container w-full p-[5%] '>
<div className='header w-full md:w-[70%] flex justify-center items-center font-bold  break-words text-left text-white text-2xl sm-text-3xl md:text-4xl'>Bringing tech communities together to connect, innovate & collaborate</div>
      <div className='companylist-container'>

          <div className='flex justify-center items-center font-bold text-blue-900 word-blreak text-center py-[5%] w-full text-2xl sm:text-3xl md:text-4xl'>The largest gathering of tech professionals in the world</div>
        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>

          <div className='w-full sm:w-[40%] p-[2%]  flex flex-col justify-center items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={gtxwhitelogo} alt="img" />
            <div className='bottom-subhead'>GITEX GLOBAL</div>
            <div className='text-stone-500 text-sm '>The world’s most iconic tech event, bigger and better than ever before - 6,000+ Exhibitors, 30 halls, 1,400+ Speakers, 180+ countries.</div>
          </div>
          
           <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={ai} alt="img" />
            <div className='bottom-subhead'>AI EVERYTHING</div>
            <div className='text-stone-500 text-sm '>The largest gathering of AI professionals in the world, featuring global leaders in generative AI and beyond - 600,000 sqft, 10 Halls, 110+ speakers.</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={de} alt="img" />
            <div className='bottom-subhead'>GLOBAL DEVSLAM</div>
            <div className='text-stone-500 text-sm '>First ever regional launch of Pycon MEA data science, 1st of its kind collaborative hackathon - joined by over 15,000+ coders.</div>
          </div>
        </div>

        {/* <div className='flex justify-center items-center font-bold text break-words text-center text-blue-800 3xl md:text-4xl my-9'>{t('bottomhead2')}</div> */}

        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 '>
            <img className=' w-1/2 h-[100px]' src={gi} alt="img" />
            <div className='bottom-subhead'>GITEX IMPACT</div>
            <div className='text-stone-500 text-sm '>The region’s largest event for sustainability tech innovation. 50+ ministry delegations, 150+ climate tech startups, 100+ leading sustainable tech speakers.</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center '>
            <img className=' w-1/2 h-[100px]' src={ur} alt="img" />
            <div className='bottom-subhead'>FUTURE URBANISM</div>
            <div className='text-stone-500 text-sm '>The premier global forum for the world's most influential urbanists. 20+ megacity projects, 200+ property developers, 50+ ministry delegations.</div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
        <div className='w-full sm:w-[40%] p-[2%] flex flex-col justify-center items-center sm:border-t-2 sm:border-b-2'>
            <img className='w-1/2 h-[100px]' src={trbot2} alt="img" />
            <div className='bottom-subhead'>EXPAND NORTH STAR</div>
            <div className='text-stone-500 text-sm '>The world’s largest event for startups and investors, now bigger than ever in a brand new venue. Featuring over 2,000+ of the world’s leading tech startups.</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-l-2 sm:border-r-2 sm:border-b-2 sm:border-t-2'>
            <img className=' w-1/2 h-[100px]' src={fs} alt="img" />
            <div className='bottom-subhead'>FINTECH SURGE</div>
            <div className='text-stone-500 text-sm '>Fintech Surge is the premier hub for entrepreneurs, innovators, investors, regulators and institutions of PayTech, WealthTech, InsureTech and RegTech.</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2 sm:border-t-2'>
            <img className=' w-1/2 h-[100px]' src={fb} alt="img" />
            <div className='bottom-subhead'>FUTURE BLOCKCHAIN SUMMIT</div>
            <div className='text-stone-500 text-sm '>Fintech Surge is the premier hub for entrepreneurs, innovators, investors, regulators and institutions of PayTech, WealthTech, InsureTech and RegTech.</div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row justify-start sm:pl-[10%] text-center '>
    
          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-b-2  md:ml-[20%]'>
            <img className=' w-1/2 h-[100px]' src={mm} alt="img" />
            <div className='bottom-subhead'>MARKETING MANIA</div>
            <div className='text-stone-500 text-sm '>Discover the latest AI, MarTech & AdTech innovations that will invent the digital experiences of 2024. Join award-winning CMOs as they share their secret sauce in boosting brand identity, innovation & creativity.</div>
          </div>
        </div>

      </div>
</section>
{/* vertical scroll start */}
<section className='flex flex-col sm:flex-row  break-words'>

      <div className='flex flex-col items-start justify-between sm:justify-start sm:gap-9 md:gap-12 gap-3 w-full sm:w-[40%] h-[250px] sm:h-full p-[2%] md:p-[5%]'>
         <h1 className='relative vertical-scroll-header text-2xl sm:text-3xl md:text-4xl font-semibold text-blue-900'>   Hear global leaders debate, challenge and scrutinise the tech paradigm of the future</h1>     
         <h3 className='text-blue-900'>80% First-time speakers in the region</h3>
         <button className='translate-btn rounded px-2 mt-4 text-md md:text-lg'>View all speakers 2023</button>
      </div>

      <div className='w-full sm:w-[60%]  h-full flex justify-center gap-3 sm:justify-start sm:gap-8'>
       
        
        <VerticalScroll persons={persons.slice(0,4)} />
        <VerticalScroll persons={persons.slice(0,4)} />
        
      
      </div>
</section>


{/* vertical scroll end */}

{/* exclusive happenings start */}
<Happenings/>
{/* exclusive happenings start */}
<>


<div  className='w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center'>
    <h1 className='happening-header text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative'>Latest News</h1>
    </div>
 
{/* <HorizontalScroll/> */}

<MuitiCarousel/>
</>
    </div>
  )
}

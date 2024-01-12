import React from 'react'
import './aistartups.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
export default function AIStartups():React.ReactElement {
  return (
    <>
    <section className='aistartup banner '>
        <h1>BECOME THE NEXT TECH GIANT</h1>
      </section>

      <section >
          <div className='flex flex-col sm:flex-row'>
              <div className='zoom-img w-full sm:w-1/2'>
                <div className='top-sign'></div>
                <img src="https://www.ai-everything.com/images/exclusive-matchmaking-features1611.jpg" alt="img" />
                <div className='bottom-sign'></div>
              </div>
              <div className='pos-up min-h-[150px] shadow w-full sm:w-1/2 flex flex-col gap-[10%] justify-center items-center text-center'>
                    <h1 style={{color:"#001e71"}} className='font-bold w-[80%] text-sm sm:text-xl md:text-2xl'>EXCLUSIVE MATCHMAKING <span style={{color:'#00aeba'}}>FEATURES</span></h1>
                    <p className='text-stone-600 text-[13px] sm:text-[15px] md:text-[18px]'>connect you with government representatives and senior business decision-makers , facilitating seamless face-to-face introductions before that all-important pitch</p>
              </div>
          </div>

          <div className='flex flex-col sm:flex-row'>
              <div className='pos-up min-h-[150px] shadow w-full sm:w-1/2 flex flex-col gap-[10%] justify-center items-center text-center'>
                    <h1 style={{color:"#001e71"}} className='font-bold w-[80%] text-sm sm:text-xl md:text-2xl'>MENTORSHIP AND<span style={{color:'#00aeba'}}>CONSULTATION CLINICS</span></h1>
                    <p className='text-stone-600 text-[13px] sm:text-[15px] md:text-[18px]'>position your Startup as a thought-leader onsite, ensuring your brand stays front-of-mind in the context of problem solving</p>
              </div>
              <div className='zoom-img w-full sm:w-1/2'>
                <div className='top-sign'></div>
                <img src="https://www.ai-everything.com/images/mentorship-and-consultation-clinics1611.jpg" alt="img" />
                <div className='bottom-sign'></div>
              </div>
          </div>

          <div className='flex flex-col sm:flex-row'>
              <div className='zoom-img w-full sm:w-1/2'>
                <div className='top-sign'></div>
                <img src="https://www.ai-everything.com/assets/img/1-Supernova-51-1024x683.jpg" alt="img" />
                <div className='bottom-sign'></div>
              </div>
              <div className='pos-up min-h-[150px] shadow w-full sm:w-1/2 flex flex-col gap-[10%] justify-center items-center text-center'>
                    <h1 style={{color:"#001e71"}} className='font-bold w-[80%] text-sm sm:text-xl md:text-2xl'>SUPERNOVA<span style={{color:'#00aeba'}}>CHALLENGE</span></h1>
                    <p className='text-stone-600 text-[13px] sm:text-[15px] md:text-[18px]'>invites disruptive startups like yours to vie for a $100,000 investment in front of an esteemed AI jury, instantly raising your profile within one of the world’s most prestigious, targeted communities</p>
                    <div className='flex justify-center'>
                      <Link to={'/aieverithing'}>
                      <button className='btn-out'>
                          <div className='btn-in'>
                            <div className='btn-center-round'>
                              <div className='btn-item-1'>
                            <MdOutlineKeyboardArrowRight/>
                              </div>
                              <div className='btn-item-2 '>
                            <FaArrowRightLong/>
                              </div>
                            </div>
                          </div>
                        <h1 >  Learn More</h1>
                      </button>
                      </Link>
                    </div>
              </div>
          </div>

          <div className='flex flex-col sm:flex-row'>
              <div className='pos-up min-h-[150px] shadow w-full sm:w-1/2 flex flex-col gap-[10%] justify-center items-center text-center'>
                    <h1 style={{color:"#001e71"}} className='font-bold w-[80%] text-sm sm:text-xl md:text-2xl'>WORLD-CLASS ACCREDITED<span style={{color:'#00aeba'}}>WORKSHOPS</span></h1>
                    <p className='text-stone-600 text-[13px] sm:text-[15px] md:text-[18px]'>conducted by global visionaries offer exclusive on-the-ground coaching to develop your capacity across industry niches</p>
                    <div className='flex justify-center'>
                      <Link to={'/aieverithing'}>
                      <button className='btn-out'>
                          <div className='btn-in'>
                            <div className='btn-center-round'>
                              <div className='btn-item-1'>
                            <MdOutlineKeyboardArrowRight/>
                              </div>
                              <div className='btn-item-2 '>
                            <FaArrowRightLong/>
                              </div>
                            </div>
                          </div>
                        <h1 >  Learn More</h1>
                      </button>
                      </Link>
                    </div>
              </div>
              <div className='zoom-img w-full sm:w-1/2'>
                <div className='top-sign'></div>
                <img src="https://www.ai-everything.com/images/world-class-accredited-workshops1611.jpg" alt="img" />
                <div className='bottom-sign'></div>
              </div>
          </div>
      </section>
    </>
  )
}

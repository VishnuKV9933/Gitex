import React from 'react'
import './planVisit.css'
import img1 from "../../assets/visitimg1.png"
import img2 from "../../assets/visitimg2.png"
import img3 from "../../assets/visitimg3.png"
import img4 from "../../assets/visitimg4.png"
import { TbCircleDot } from "react-icons/tb";
import FixedHead from '../../Components/FixedHead/FixedHead'

export default function PlanVisit():React.ReactElement {
  return (
    <div>
        <div className='w-full '>
            <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
                <h1 className='text-2xl md:text-4xl font-bold'>PLAN YOUR VISIT TO GITEX GLOBAL</h1>
                 </div>
                 {/* second section */}
            <div className=' flex flex-col justify-center md:justify-start items-center h-[500px] text-center'>
              <h1 className='second-header text-2xl md:text-5xl font-semibold text-blue-900 md:py-[4%]'>GITEX Visa Assistance</h1>
              <strong className='font-extrabold text-md text-stone-500'>For visa support for general and restricted countries</strong>
              <p className=' text-md text-stone-500'>Please contact</p>
              <p className=' text-md text-red-500 cursor-pointer'>abdallah.aridi@the-eventalist.net</p>
              <strong className=' text-md text-stone-500'>Abdallah Aridi</strong>
              <p className=' text-md text-stone-500'>The Eventalist Event Management Company</p>
              <p className=' text-md text-stone-500'>Office: +971 (4) 3888222 EXT: 130</p>
              <p className=' text-md text-stone-500'>Mob: +971504589745</p>
              <p className=' text-md text-black mt-[5%]'>For any other urgent queries regarding visas please reach out to us:<span className='text-red-500'>GITEXVisaSupport@dwtc.com </span> </p>
            </div>
               {/* second section end*/}
               {/* third section start */}
               <div className='third-section flex flex-col justify-center gap-10 md:justify-between items-center md:px-[22%] pb-[4%]  text-center'>

               <h1 className='second-header text-2xl md:text-5xl font-semibold text-white md:py-[4%]'>TRAVEL MADE EASY AT GITEX GLOBAL</h1>
                        <p className='text-white break-words'>The easiest way to reach Dubai World Trade Center is by Metro, Taxi, Uber, and Careem transport services. Check our attendee discounts below on travel and accommodation.</p>
                        <strong className='text-white break-words'>Closer to the event we will be sharing exclusive discounts with our preferred travel and hotel partners within the city - so stay tuned for exhibitor and visitor discounts.</strong>
               </div>
                {/* third section end */}
                <div className='flex justify-center flex-col w-full px-[10%] pb-[5%]'>
                    <h1 className='second-header text-2xl md:text-5xl font-semibold text-blue-900 md:py-[4%]'>Recommended modes of transport within the city</h1>
                        <div className='flex flex-col sm:flex-row mt-4 sm:mt-9 md:mt-12'>
                            <img className='w-full sm:w-1/2' src={img1} alt="" />
                            <div className='w-full sm:w-1/2 h-[300px]  md:h-[400px] lg:h-[500px] shadow-2xl flex flex-col items-start justify-center text-left p-[2%]'>
                                <h1 className='text-2xl md:text-3xl font-semibold text-blue-900 '>Take the metro</h1>
                                <h2 className='text-stone-500'>The Dubai Metro via the <strong> Dubai World Trade Center (DWTC) station</strong> on the Red Line, gives visitors of GITEX GLOBAL direct access to the venue.</h2>
                                <h2 className='text-stone-500 mt-[5%]'>To ensure a smooth metro journey and avoid extra waiting, please purchase a Nol Card in advance through the ticket machines and in-person ticket counters in all stations to use the metro before entering through the barriers. Both cash and cards are accepted.</h2>
                            </div>
                        </div>
                        {/* --------------------------------- */}

                        <div className='flex flex-col sm:flex-row '>
                            <div className='w-full sm:w-1/2 h-[500px]  md:h-[500px] lg:h-[500px] shadow-2xl flex flex-col items-start justify-center text-left p-[2%]'>
                                <h1 className='text-2xl md:text-3xl font-semibold text-blue-900 '>Park your car at these dubai metro stations to take the train</h1>
                               
                           <h2 className='text-stone-500 mt-[5%]'>GITEX GLOBAL grew so much that we added additional parking options to reach the event with more ease. Visitors can now park their vehicles in the following parking lots and use the metro to reach the Dubai World Trade Center station:</h2>
                            <div className='flex gap-2 justify-center items-center'>
                                <div className='text-red-500'>
                                <TbCircleDot/>
                                </div>
                                <div className='text-stone-500 text-sm'><strong>Centrepoint Metro Station</strong> Parking</div>
                            </div>
                            <div className='flex gap-2 justify-center items-center mt-2'>
                                <div className='text-red-500'>
                                <TbCircleDot/>
                                </div>
                                <div className='text-stone-500 text-sm'><strong>Etisalat Metro Station</strong> Parking</div>
                            </div>
                            <div className='flex gap-2 justify-center items-center mt-2'>
                                <div className='text-red-500'>
                                <TbCircleDot/>
                                </div>
                                <div className='text-stone-500 text-sm'><strong>Jebel Ali Metro Station</strong> Parking</div>
                            </div>
                            <div className='flex gap-2 justify-center items-center mt-2'>
                                <div className='text-red-500'>
                                <TbCircleDot/>
                                </div>
                                <div className='text-stone-500 text-sm'>The Multi-storey parking building near Max Station (previously known as Al Jafiliya) in Al Kifaf area, and using Al Jafiliya metro station to reach the exhibition</div>
                            </div>
                            </div>
                            <img className='w-full sm:w-1/2' src={img2 } alt="" />
                        </div>
                        {/* --------------------------------- */}

                        <div className='flex flex-col sm:flex-row '>
                            <img className='w-full sm:w-1/2' src={img3} alt="" />
                            <div className='w-full sm:w-1/2 h-[300px]  md:h-[400px] lg:h-[500px] shadow-2xl flex flex-col items-start justify-center text-left p-[2%]'>
                                <h1 className='text-2xl md:text-3xl font-semibold text-blue-900 '>Park your car to take free dedicated shuttle buses</h1>
                                <h2 className='text-stone-500'>Visitors can park their vehicles in the parking lot of the <strong>Dubai Mall Zabeel Extension, and take the exclusively arranged shuttle buses for pick-up and drop off</strong>  (from Dubai Mall parking to DWTC and back).</h2>
                            </div>
                        </div>
                        {/* --------------------------------- */}

                        <div className='flex flex-col sm:flex-row '>
                            <div className='w-full sm:w-1/2 h-[300px]  md:h-[400px] lg:h-[500px] shadow-2xl flex flex-col items-start justify-center text-left p-[2%]'>
                                <h1 className='text-2xl md:text-3xl font-semibold text-blue-900 '>Travel by taxi</h1>
                                <h2 className='text-stone-500'> <strong>Metered private taxis and on-demand transport services are growing in popularity and readily available around Dubai .</strong>  If you already have a Careem or Uber app from another country, the same app can be used to book your ride in Dubai. If you are unfamiliar with Careem or Uber, both companies offer downloadable apps for both Android and iOS platforms.</h2>
                            </div>
                            <img className='w-full sm:w-1/2' src={img4} alt="" />
                        </div>
                        {/* --------------------------------- */}
                </div>
        </div>
    </div>
  )
}

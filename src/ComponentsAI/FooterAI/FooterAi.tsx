import React from 'react'
import './footerai.css'
import { MdArrowForwardIos } from "react-icons/md";
import aifootersocial from '../../assets/aifootersocial.png'
export default function FooterAi():React.ReactElement {
  return (
      <>
    <div className='backgroud-ai-darkblue w-full flex flex-wrap p-[5%] break-words'>
        <div className='w-full sm:w-1/4 min-w-[250px]'>
            <img className='max-w-[200px]' src="https://www.ai-everything.com/images/AIE-Logo_2024-White.png" alt="" />
            <h1 className='text-white text-xl sm:text-2xl mt-[10px] sm:mt-[20px]'>Our Social Networks</h1>
            <img className='w-[200px] mt-[10px] sm:mt-[20px]' src={aifootersocial} alt="" />
            <h1 className='text-white text-xl sm:text-2xl mt-[10px] sm:mt-[20px]'>Registration & Ticketing Inquiries</h1>
            <p className='font-semibold text-blue-300 hover:text-blue-200 cursor-pointer mt-[10px] sm:mt-[20px]'>Registration@visit.gitex.com</p>
        </div>

        <div className='w-full sm:w-1/4 mt-[50px] sm:mt-0 min-w-[200px]'>
            <h1 className='text-2xl font-semibold text-white'>SHOW TIMINGS</h1>
            <div className='text-sm text-white mt-[10px] sm:mt-[20px]'>14th October - 11AM - 5PM</div>
            <div className='text-sm text-white mt-[15px] sm:mt-[15px]'>15th October - 10AM - 5PM</div>
            <div className='text-sm text-white mt-[15px] sm:mt-[15px]'>16th October - 10AM - 5PM</div>
            <div className='text-sm text-white mt-[15px] sm:mt-[15px]'>17th October - 10AM - 5PM</div>
            <div className='text-sm text-white mt-[15px] sm:mt-[15px]'>18th October - 10AM - 5PM</div>

        </div>

        <div className='w-full h-full hidden lg:block sm:w-1/4'></div>

        <div className='w-full sm:w-1/4 mt-[50px] sm:mt-0 min-w-[200px]'>
        <h1 className='text-2xl font-semibold text-white'>SHOW TIMINGS</h1>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[10px] sm:mt-[20px]'>
                <><MdArrowForwardIos/></>
                <>Media Registration</>
            </div>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[5px] sm:mt-[15px]'>
                <><MdArrowForwardIos/></>
                <>Exhibit</>
            </div>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[5px] sm:mt-[15px]'>
                <><MdArrowForwardIos/></>
                <>Visit</>
            </div>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[5px] sm:mt-[15px]'>
                <><MdArrowForwardIos/></>
                <>Speaker Enquiry</>
            </div>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[5px] sm:mt-[15px]'>
                <><MdArrowForwardIos/></>
                <>About Ai Everything</>
            </div>

            <div className='flex justify-center items-center w-fit text-white gap-2 mt-[5px] sm:mt-[15px]'>
                <><MdArrowForwardIos/></>
                <>Contact Us</>
            </div>
        </div>        
    </div>

    <section style={{backgroundColor:'rgb(1, 1, 78)'}} className='flex flex-col sm:flex-row justify-center text-center sm:justify-between items-center text-white text-sm p-2'>
            <div>© Copyright All Rights Reserved | Terms and Conditions Privacy Policy</div>
            <div>Event Website by:  My World of Expo</div>
    </section>
      </>
  )
}

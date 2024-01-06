import React, { useEffect } from 'react'
import './youth.css'
import FixedHead from '../../Components/FixedHead/FixedHead'
import InfiniteSlider from '../../Components/InfiniteSlider/InfiniteSlider'

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';




export default function Youth():React.ReactElement {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>
        <FixedHead/>
      <div className="youth-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        GITEX YOUTHX
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          EMPOWERING YOUTH, CREATING LEADERS - GITEX YouthX
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          One-of-its-kind event that provides a <span className='font-bold'>dedicated entrepreneurship, leadership & innovation</span>  development platform for students, educational institutions & youth startups.         </h1>

         <h1 className="text-sm mt-[10%] text-stone-500">
         The event enables young innovators and institutions to exhibit alongside world-class companies, be mentored by global industry leaders, participate in live competitions and share innovative ideas on stage.</h1>
          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
            <button className="mt-2 text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer   ">
              Register Interest
            </button>
          </div>
        </div>
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/youthximage1new.jpg"
            alt="img"
          />
        </div>
      </section>
      
      <section className='w-full px-[10%] flex flex-col sm:flex-row justify-center items-between gap-[5%]'>
      <div className='w-full  sm:w-1/6 h-[130px] sm:h-[170px]  border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>1500+</h1>
        <p className='text-stone-500 text-sm text-center'>Students</p>
      </div>
      <div className='w-full  sm:w-1/6 h-[130px] sm:h-[170px]  border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>400+</h1>
        <p className='text-stone-500 text-sm text-center'>Youth Ambassadors</p>
      </div>
      <div className='w-full  sm:w-1/6 h-[130px] sm:h-[170px]  border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>40+</h1>
        <p className='text-stone-500 text-sm text-center'>Schools & Universities</p>
      </div>
      <div className='w-full  sm:w-1/6 h-[130px] sm:h-[170px]  border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>150+</h1>
        <p className='text-stone-500 text-sm text-center'>Speakers + Judges</p>
      </div>
      <div className='w-full  sm:w-1/6 h-[130px] sm:h-[170px]  border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>120+</h1>
        <p className='text-stone-500 text-sm text-center'>Youth Ideas Pitched</p>
      </div>
      </section>

      <section className="p-[5%] keytopics-container ">

<h1 className="left-red-underline text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 ">YouthX Unipreneur Covers</h1>
  
  <div className="flex justify-around items-center flex-wrap">

  <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
    <h1 className="font-bold text-blue-900 text-center">4 days of impactful conferences</h1>
   </div>

   <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
    <h1 className="font-bold text-blue-900 text-center">Youth Pitch Battle - for university startups</h1>
   </div>

   <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
    <h1 className="font-bold text-blue-900 text-center">Network with 400+ active Investors</h1>
   </div>

   <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
    <h1 className="font-bold text-blue-900 text-center">Extraordinary showcase of youth startups</h1>
   </div>

  </div>
  
</section>



<>


<div  className='w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center'>
    <h1 className='happening-header text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative'>Latest News</h1>
</div>
 

<InfiniteSlider/>


</>



    </>
  )
}

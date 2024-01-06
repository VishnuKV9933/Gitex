import React from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import './whyexhibit.css'
import HorizontalExhibitSlider from './Sliders/HorizontalExhibitSlider/HorizontalExhibitSlider'
import MuitiCarousel from '../../Components/MultiCarousel/MuitiCarousel'

export default function WhyExhibit():React.ReactElement {
  return (
    <>
           {/* banner start */}
           <FixedHead/>
            <div className='whyexhibit-banner flex justify-center items-end pb-[4%]  text-white'>
             <h1 className='text-2xl md:text-4xl font-bold'>Exhibit at GITEX GLOBAL</h1>
            </div>

      {/* banner end */}   

      <section className='px-[5%] pt-[5%] flex flex-col sm:flex-row w-full '>
        <div className='box1 w-full sm:w-1/2  pb-[2%] pr-[2%] flex flex-col justify-between gap-[15px]'>
            <h1 className='ml-[4%] text-lg sm:text-xl md:text-2xl lg:text-3xl w-[80%] text-blue-900 font-medium'>“My team loves GITEX, because here we get business done.”</h1>
            <p className='ml-[4%] text-sm text-stone-500 '>GITEX’s claim as the largest and best rated tech & <span className='font-bold'>startup show unequivocally confirmed,</span>  no tech show in the world has more generated, <span className='font-bold'>more MoUs signed, or more</span> contacts made than at GITEX GLOBAL.</p>
            <p className='ml-[4%] text-sm text-stone-500 '>The brightest minds across the tech industry <span className='font-bold'>come to GITEX to source new solutions </span> and build lasting, powerful relationships<span className='font-bold'>get your brand in front of the biggest</span>, most global tech community in the world, 14 - 18 Oct 2024.</p>
            <div className='ml-[4%] w-[200px] h-[50px] justify-start items-center flex  relative'>
            <button className='exh-btn text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer absolute top-[50%] left-[0%]] ) '>EXHIBIT 2024</button>
            </div>
        </div>
        <div className='w-full sm:w-1/2  '>
            <img src="https://gitex.com/contents/Theme-3/images/whyexhibit02new.jpg" alt="" />
        </div>
      </section>

      <section className='w-full p-[10%] flex flex-col sm:flex-row justify-center items-between gap-[5%]'>
      <div className='w-full  sm:w-1/3 h-[130px] sm:h-[170px] md:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>Rated #1</h1>
        <p className='text-stone-500 text-sm text-center'>independently rated #1 large scale exhibition</p>
      </div>
      <div className='w-full  sm:w-1/3 h-[130px] sm:h-[170px] md:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>170,000+</h1>
        <p className='text-stone-500 text-sm text-center'>trade buyers from across tech industry</p>
      </div>
      <div className='w-full  sm:w-1/3 h-[130px] sm:h-[170px] md:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
        <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>25%</h1>
        <p className='text-stone-500 text-sm text-center'>of attendees are C-level executives</p>
      </div>
      </section>


        {/* <HorizontalExhibitSlider>
        <div className='w-full h-[200px] bg-blue-400'>s</div>
        <div className='w-full h-[200px] bg-green-400'>s</div>
        <div className='w-full h-[200px] bg-red-400'>s</div>
        </HorizontalExhibitSlider> */}

            <div className='banner-tracks w-full h-[200px] flex flex-col justify-center items-center text-white text-xl sm:text-2xl md:text-3xl font-bold text-center'>
                <h1>Putting business first.</h1>
          <h1>Join the GITEX concierge meetings programme</h1>
            </div>
           <section className='w-full flex flex-col sm:flex-row  gap-[5]'>

                <div className='w-full py-[5%] pl-[5%] gap-[5%] h-full sm:w-1/2  flex flex-wrap flex-col justify-center items-center sm:flex-row '>
              
                <div className='w-full   sm:w-[40%]  h-[130px] sm:h-[140px] lg:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
                  <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>11,350</h1>
                  <p className='text-stone-500 text-sm text-center'>concierge meetings took place onsite</p>
                </div>
                <div className='w-full    sm:w-[40%]  h-[130px] sm:h-[140px] lg:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
                  <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>2 million</h1>
                  <p className='text-stone-500 text-sm text-center'>connections made via the app</p>
                </div>
                <div className='w-full    sm:w-[40%]   h-[130px] sm:h-[140px] lg:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
                  <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>909,000+</h1>
                  <p className='text-stone-500 text-sm text-center'>messages exchanged</p>
                </div>
                <div className='w-full    sm:w-[40%]   h-[130px] sm:h-[140px] lg:h-[200px] border border-blue-900 mb-[5%] boxeffect'>
                  <h1 className='sm:text-xl md:text-2xl text-blue-900  font-semibold'>502,000+</h1>
                  <p className='text-stone-500 text-sm text-center'>badges and business cards scanned</p>
                </div>
                </div>
                <div className='w-full h-full sm:w-1/2  p-[5%]'>
                    <img src="https://gitex.com/contents/theme-3/images/whyexhibit03new.jpg" alt="" />
                </div>
           </section>

           <MuitiCarousel/>

    </>
  )
}

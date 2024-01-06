import React from 'react'
import './mobility.css'
import FixedHead from '../../Components/FixedHead/FixedHead'
import ACSpeakers from '../../Components/AISpeakers/ACspeakers'
import AISlider from '../../Components/AISlider/AISlider'
import InfiniteSlider from '../../Components/InfiniteSlider/InfiniteSlider'
export default function Mobility():React.ReactElement {
  return (
    <>
          <FixedHead/>
      <div className="mobility-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        FUTURE MOBILITY
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          The largest future mobility event in MENA
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          GITEX GLOBAL will host the largest future mobility event in the Middle East, with Future Mobility being placed as a priority at this year’s edition of the largest tech event in the world.
          </h1>
          <h1 className="text-sm mt-[5%] text-stone-500">
          With surges in development of green tech and AI, the future of mobility has never looked brighter. GITEX GLOBAL provides the ultimate platform for  <span className='font-bold'>getting your brand in front of the consumers, buyers</span> and those sourcing the latest in mobility tech.
          </h1>

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
            src="https://gitex.com/contents/Theme-3/images/mobility-image1.jpg"
            alt="img"
          />
        </div>
      </section>

      <section className="p-[5%] keytopics-container ">

        <h1 className="left-red-underline text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 ">Key topics include:</h1>
          
          <div className="flex justify-around items-center flex-wrap">

          <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Ai, Metaverse and Cars - what’s the hype, what's the fun ?</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Generative Ai, Blockchain Technology, IP patenting and Infringement Dilemma</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Future Car Designs with Ai : Materials, Range, Designing and more - who's your speeding competition?</h1>
           </div>

           <div className="red-boxeffect bg-white w-[200px] sm:w-[250px] h-[100px] sm:h-[170px] mb-[5%]">
            <h1 className="font-bold text-blue-900 text-center">Decoding the Future of Mobility in the Ai era</h1>
           </div>

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



      <section className='w-full text-container'>
        <h1 className='mb-[5%] pt-[5%] ceter-red-underline text-center text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold'>Game-changing features</h1>
        <div className='w-full flex flex-col sm:flex-row px-[5%] flex-wrap pb-[5%] justify-center'>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r border-b'>
                    <h1 className='text-red-600 font-bold'>FUTURE OF MOBILITY</h1>
                    <p className='text-sm md:text-base text-stone-600'>Meet world’s most promising mobility leaders and share thought leadership decoding the Future of Mobility in the Ai era</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r border-b'>
                    <h1 className='text-red-600 font-bold'>AI, BLOCKCHAIN</h1>
                    <p className='text-sm md:text-base text-stone-600'>Engage with world’s biggest mobility brands to learn if the EV designing ecosystem is disrupted by Generative AI, blockchain patenting, and IP infringement dilemma?</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-b'>
                    <h1 className='text-red-600 font-bold'>VEHICLE-TO-GRID (V2G)</h1>
                    <p className='text-sm md:text-base text-stone-600'>Explore if bidirectional charging the next big thing for EVs as the strain on power grids global vehicle-to-grid (V2G) market will reach $15.03 billion by 2031</p>
                </div>

                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  border-r '>
                    <h1 className='text-red-600 font-bold'>SPEEDING COMPETITION</h1>
                    <p className='text-sm md:text-base text-stone-600'>Identify your prospects for collaboration over your speeding competition</p>
                </div>
                <div className='flex flex-col justify-start w-full sm:w-1/3 items-center text-center p-[2%]  '>
                    <h1 className='text-red-600 font-bold'>METAVERSE</h1>
                    <p className='text-sm md:text-base text-stone-600'>Learn trends and what's coming around Ai, Metaverse and Car</p>
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
  )
}

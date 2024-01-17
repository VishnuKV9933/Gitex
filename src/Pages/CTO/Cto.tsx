import React, { useEffect } from 'react'
import './cto.css'
import FixedHead from '../../Components/FixedHead/FixedHead'
import ACSpeakers from '../../Components/AISpeakers/ACspeakers'
import AISlider from '../../Components/AISlider/AISlider'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';
import ScrollComponent from '../../Components/ScrollComponent/Scrollcomponent'

export default function Cto():React.ReactElement {
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(menuClose());
    },[])
  return (
    <>

<FixedHead/>
      <div className="cto-banner w-full sm:h-[300px] h-[200px] flex justify-center items-end pb-[4%]">
        <h1 className="text-white text-2xl md:text-4xl font-semibold">
        CTO World Congress
        </h1>
      </div>

      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
          <div className="top-header relative text-2xl md:text-3xl text-blue-900 lg:text-4xl font-semibold test-blue-900">
          The largest gathering of CTO's in the world
          </div>
          <h1 className="text-sm mt-[10%] text-stone-500">
          Inspired by the ultra talented tech creators taking the world, we are proudly showcasing the  GITEX GLOBAL CTO WORLD CONGRESS at GITEX 2024 for the second year in a row. The world will finally steal a peek inside the minds and spirits of the world's best tech architects in the year's largest gathering of tech disruptors.          </h1>


          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
            <button className=" text-[11px] sm:text-[15px] flex text-white font-medium hover:border border-red-600 px-[7px] py-[5px] bg-red-600  justify-center items-center rounded cursor-pointer  ">
            Register Interest
            </button>

          </div>
        </div>
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/CTO-image1.jpg"
            alt="img"
          />
        </div>
      </section>


      <section className="top-section flex flex-col sm:flex-row w-full p-[5%]">
        
        <div className="relative w-full overflow-hidden sm:w-1/2  h-[300px] sm:h-[350px] md:h-[400px] lg:h-[450px]">
          <div className="animateimgblur"></div>
          <img
            className="animateImg w-full "
            src="https://gitex.com/contents/Theme-3/images/CTO-image1.jpg"
            alt="img"
          />
        </div>

        <div className="flex flex-col justify-start items-start p-[1%] w-full sm:w-1/2  ">
      
          <h1 className="text-sm  text-stone-500">
         <span className='font-bold'>CTOs are deftly navigating the tumultuous waves </span> of fervent public dialogues encompassing the realm of AI. As the digital economy is propelled forward by digital transformation, it is the responsibility of tech architects to spearhead the progression in a conscientious fashion.
          </h1>

          <h1 className="text-sm mt-[10%] text-stone-500">
          The GITEX GLOBAL CTO WORLD CONGRESS will play host to over 500+ CTOs leading the technological charge across the biggest companies from all 7 continents. Listen to how they plan to ride the latest AI wave and discover their predictions for the next decade of cutting-edge tech.          </h1>


          <div className="my-2 sm:w-[300px] h-[50px] justify-start justify-center items-between sm:items-center flex flex-col sm:flex-row sm:justify-between relative">
           

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

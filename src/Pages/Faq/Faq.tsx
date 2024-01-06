import React, { useEffect, useState } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import './faq.css'
import { FaPlus } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';


export default function Faq():React.ReactElement {

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
          {/* banner start */}
          <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
             <h1 className='text-2xl md:text-4xl font-bold'>FAQ'S</h1>
            </div>

      {/* banner end */}   

      <section className='w-full   px-[7%]'>
        <div className='w-full h-full  border-l-2 border-blue-900 pt-[5%]'>
           
                <h1 className='faq-rounded w-full text-xl sm:text-2xl md:text-3xl font-bold text-blue-900  mb-[5%] pl-[3%] relative user-select-none'>About</h1>
                <div className='w-full h-fit  pl-[5%]'>

                        <div  onClick={() => expandContainer('Whyattend')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={`${expand ==='Whyattend'? 'h-[40px]' : 'h-[20px]'} animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Why should I attend?</span>
                            <div className={`${expand ==='Whyattend'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='Whyattend'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX GLOBAL is the premier event for exhibitors showcasing the latest in first-hand technology that has inspired generations and innovations that are set to change the world.</p>
                        </div>

                        <div  onClick={() => expandContainer('Wherexhibitors')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Where can I view a complete list of exhibitors?</span>
                            <div className={`${expand ==='Wherexhibitors'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='Wherexhibitors'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX GLOBAL will welcome 6,000+ exhibitors from 170+ countries. To view the full list of exhibitors, visit our exhibitor listing page.</p>
                        </div>

                        <div  onClick={() => expandContainer('howsow')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>How many visitors are expected to visit the show?</span>
                            <div className={`${expand ==='howsow'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='howsow'? 'h-[70px]  sm:h-[50px] md:h-[40px]' : 'h-[0px]'} animation-component overflow-hidden text-sm sm:text-lg`}>GITEX GLOBAL 2023 is expecting to welcome over 180,000 visitors across the 5 days of the event.</p>
                        </div>


                        <div  onClick={() => expandContainer('countries')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>What are some of the top visiting countries?</span>
                            <div className={`${expand ==='countries'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='countries'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX is a true global event that welcomes exhibitors and visitors from over 180+ countries including Italy, India, Brazil, Bahrain, KSA, Korea, Japan, France, Serbia, Sweden and more.</p>
                        </div>

                      
                        

                      
                </div>





                <h1 className='faq-rounded w-full text-xl sm:text-2xl md:text-3xl font-bold text-blue-900  mt-[15%] mb-[5%] pl-[3%] relative user-select-none'>Pricing</h1>
                <div className='w-full h-fit  pl-[5%]'>

                        <div  onClick={() => expandContainer('visitorpass')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Which shows are included with GITEX GLOBAL visitor pass?</span>
                            <div className={`${expand ==='visitorpass'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='visitorpass'? 'h-[80px]  sm:h-[70px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>GITEX GLOBAL is the premier event for exhibitors showcasing the latest in first-hand technology that has inspired generations and innovations that are set to change the world.</p>
                        </div>

                        <div  onClick={() => expandContainer('theShow')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>What is the cost of entry passes to the Show?</span>
                            <div className={`${expand ==='theShow'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='theShow'? 'h-[80px]  md:h-[90px] lg:h-[70px]' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Visitor passes to the shows will vary based on preference and location and start at AED 100. Kindly go through full event pass details to ensure you are purchasing the right pass for you. To register to attend click here</p>
                        </div>

                        <div  onClick={() => expandContainer('conferences')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>What is the pricing for conferences?</span>
                            <div className={`${expand ==='conferences'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='conferences'? 'h-[80px]  md:h-[90px] lg:h-[70px]' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Pricing for conferences is dependent upon the type of pass you choose to register for. Access to conferences is only included in Delegate Pass and Certified Training options. To purchase your delegate pass , click here.</p>
                        </div>

                        <div  onClick={() => expandContainer('purchaseonsite')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Can I buy my pass onsite?</span>
                            <div className={`${expand ==='purchaseonsite'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='purchaseonsite'? 'h-[80px]  sm:h-[60px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Yes, passes are available for purchase onsite. However we recommend getting your passes online to facilitate your arrival to the event and avail online purchase discounts as prices will increase for purchase onsite.</p>
                        </div>

                        <div  onClick={() => expandContainer('online')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Can I buy my pass online?</span>
                            <div className={`${expand ==='online'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='online'? 'h-[60px] sm:h-[40px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Yes, passes are available online and you can purchase them here.</p>
                        </div>

                </div>



                <h1 className='faq-rounded w-full text-xl sm:text-2xl md:text-3xl font-bold text-blue-900  mt-[15%] mb-[5%] pl-[3%] relative user-select-none'>Traveller Information</h1>
                <div className='w-full h-fit  pl-[5%]'>

                        <div  onClick={() => expandContainer('thevenue')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Are drinks & outside food allowed in the halls?</span>
                            <div className={`${expand ==='thevenue'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='thevenue'? 'h-[80px]  sm:h-[90px] md:h-[80px]' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>There are numerous food and beverage options available at the food court, at very reasonable prices. As per the regulations laid down by Dubai Municipality, food and beverages may not be brought from outside the venue.</p>
                        </div>

                        <div  onClick={() => expandContainer('theevent')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Can I store or leave my luggage at some place during the event?</span>
                            <div className={`${expand ==='theevent'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='theevent'? 'h-[80px] md:h-[50px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Unfortunately Dubai World Trade Centre doesn't have space for visitors to store luggage during the show.</p>
                        </div>

                        <div  onClick={() => expandContainer('visitors')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Do you offer free WiFi at the event for visitors?</span>
                            <div className={`${expand ==='visitors'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='visitors'? 'h-[80px] md:h-[50px] ' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>Visitors can access @DWTC Free-WiFi during the show. Exhibitors have access to dedicated Wifi lines.</p>
                        </div>

                        <div  onClick={() => expandContainer('recommend')}
                         className={`animation-component w-full cursor-pointer   py-[2%] rounded-md border mb-[4] px-[1%] mb-[2%]`}>
                            <div className={` animation-component font-bold flex justify-between text-sm sm:text-lg`}> <span>Which mode of transport should I adopt to get to the event?</span>
                            <div className={`${expand ==='recommend'? 'plux-rotate ' : ''} animation-component h-5 w-5 text-red-600 flex justify-center items-center`}><FaPlus/></div>
                        </div>
                            <p className={`${expand ==='recommend'? 'h-[80px]  sm:h-[90px] md:h-[80px]' : 'h-[0px]'} overflow-hidden  animation-component text-sm sm:text-lg`}>We recommend the metro, or taxi. For the Metro, take the ‘Red Line’ Metro to Dubai World Trade Centre station. The metro runs every seven minutes to all major business, tourist and residential areas. To view the route map and for more information, visit the RTA website or call 800 90 90.</p>
                        </div>

                        

                </div>


        </div>
      </section>
    </>
  )
}

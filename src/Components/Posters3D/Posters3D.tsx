import ggshow from '../../assets/GG-show.jpg'
import geshow from '../../assets/GE-show.jpg'
import gfshow from '../../assets/Gf-bannerGG.jpg'
import './poster3d.css'
import { MdArrowOutward } from "react-icons/md";
import { useState } from 'react';

export default function Posters3D():React.ReactElement {
    const [translateOne,setTranslateOne]=useState('0%,0,0px')
    const [translateTwo,setTranslateTwo]=useState('100%,-70%,500px')
    const [translateThree,setTranslateThree]=useState('130%,-100%,0px')

    const [oneActive, setOneActive]=useState(false)
    const [twoActive, setTwoeActive]=useState(true)
    const [threeActive, setThreeActive]=useState(false)


    function rotatePosition(item:string):void{
        if (item==='one'){
            setOneActive(true)
            setTwoeActive(false)
            setThreeActive(false)
            setTranslateOne('100%,-70%,500px')
            setTranslateTwo('130%,-100%,0px')
            setTranslateThree('0%,0,0px')
        }else if(item==='two'){
            setOneActive(false)
            setTwoeActive(true)
            setThreeActive(false)
            setTranslateOne('130%,-100%,0px')
            setTranslateTwo('0%,0,0px')
            setTranslateThree('100%,-70%,500px')
        }else if(item==='three'){
            setOneActive(false)
            setTwoeActive(false)
            setThreeActive(true)
            setTranslateOne('0%,0,0px')
            setTranslateTwo('100%,-70%,500px')
            setTranslateThree('130%,-100%,0px')
        }
        
    }

  return (
      <>

  {/* buttons to control start */}
  <div className='flex justify-center px-[5%]'>
  <div className=' w-[100%] mt-6   h-60  sm:hidden sm:top-0 '>
                                <div className='w-[300px] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-900 top-text'>
                                    Find Your World
                                    <div className='top-textline'></div>
                                    </div>

                                <div onClick={()=>rotatePosition('one')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${oneActive ? 'text-blue-900' : 'text-stone-500' } `}>
                                    GITEX AFRICA 2024  <div className={`${oneActive?'activeArrow':'arrow'}`}>
                                         <MdArrowOutward/>
                                        </div>
                                 </div>
                                <div onClick={()=>rotatePosition('two')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${twoActive ? 'text-blue-900' : 'text-stone-500' }   `}>
                                    GITEX GLOBAL 2024
                                    <div className={`${twoActive?'activeArrow':'arrow'}`}><MdArrowOutward/></div>
                                </div>
                                <div onClick={()=>rotatePosition('three')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${threeActive ? 'text-blue-900' : 'text-stone-500' } `}> 
                                  <div>GITEX EUROPE 2025 <span className='text-red-500'>New*</span></div>
                                  <div className={`${threeActive?'activeArrow':'arrow'}`}> <MdArrowOutward/></div>
                                 </div>
                    </div>

  </div>
                         {/* buttons to control end */}


    <div className='main-container  h-[250px]  px-[5%]'>
        
        <div className='slide'>
                            
                        {/* buttons to control start */}
                    <div className='btn-container w-[40%] md:w-[30%]  h-60 hidden sm:block sm:top-0 '>
                                <div className='w-[300px] text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-900 top-text'>
                                    Find Your World
                                    <div className='top-textline'></div>
                                    </div>

                                <div onClick={()=>rotatePosition('one')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${oneActive ? 'text-blue-900' : 'text-stone-500' } `}>
                                    GITEX AFRICA 2024  <div className={`${oneActive?'activeArrow':'arrow'}`}>
                                         <MdArrowOutward/>
                                        </div>
                                 </div>
                                <div onClick={()=>rotatePosition('two')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${twoActive ? 'text-blue-900' : 'text-stone-500' }   `}>
                                    GITEX GLOBAL 2024
                                    <div className={`${twoActive?'activeArrow':'arrow'}`}><MdArrowOutward/></div>
                                </div>
                                <div onClick={()=>rotatePosition('three')} className={`control-btn border-b-2 h-[15%]  hover:text-blue-900 ${threeActive ? 'text-blue-900' : 'text-stone-500' } `}> 
                                  <div>GITEX EUROPE 2025 <span className='text-red-500'>New*</span></div>
                                  <div className={`${threeActive?'activeArrow':'arrow'}`}> <MdArrowOutward/></div>
                                 </div>
                    </div>
                         {/* buttons to control end */}


                <div style={{ transform: `translate3d(${translateOne} )`  }}  className='element '>
                    <img className='w-full h-full' src={ggshow} alt="" />
                </div>
                <div style={{ transform: `translate3d(${translateTwo} )`  }}  className='element '>
                <img className='w-full h-full' src={geshow} alt="" />
                </div>
                <div style={{ transform: `translate3d(${translateThree} )`  }}  className='element '>
                <img className='w-full h-full' src={gfshow} alt="" />
                </div>




                    {/* bottom text  */}
                    <div className='w-full bottom-text hidden sm:block'>

                    <div className=' w-full flex justify-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-900 top-text'>Thank you to our leading global partners</div>
                        <div className='w-full flex justify-center items-center '>
                <div className='bottom-textline'></div>
                    </div>
                    </div>
                     {/* bottom text  */}

        </div>
    </div>
                    {/* bottom text  */}
                    

                <div className='sm:hidden w-full flex justify-center text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-900 top-text'>Thank you to our leading global partners</div>
                        <div className='sm:hidden w-full flex justify-center items-center '>
                <div className='bottom-textline'></div>
                    </div>
                   
                     {/* bottom text  */}
        </>
  )
}

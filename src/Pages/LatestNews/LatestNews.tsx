import React, { useEffect } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import { latestNews } from '../../Constants/constants'
import HscrollElem from '../../Components/HorizontalScroll/HscrollElem'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';

export default function LatestNews():React.ReactElement {
  const dispatch = useDispatch();
  
  useEffect(()=>{
  dispatch(menuClose());
  
},[])

const array = [...latestNews,...latestNews]

  return (
    <>
         <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%] gap-[4%]  text-white'>
                <h1 className='text-2xl md:text-4xl font-bold'>News</h1>
            </div>

            <div className='w-full p-[2%] flex justify-center items-center flex-wrap gap-[3%]'>
            {array.map((elem)=>{
                return(
                    <div className='h-[300px] sm:h-[350px] mt-4 w-[220px] sm:w-[300px] md:h-[350px] md:w-[350px]'>

                        <HscrollElem elem={elem}/>
                    </div>
                )
            })}
            </div>
    </>
  )
}

import React from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import { latestNews } from '../../Constants/constants'
import HscrollElem from '../../Components/HorizontalScroll/HscrollElem'

export default function LatestNews():React.ReactElement {
  return (
    <>
         <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
                <h1 className='text-2xl md:text-4xl font-bold'>News</h1>
            </div>

            <div className='w-full p-[2%] flex justify-center items-center flex-wrap gap-[3%]'>
            {latestNews.map((elem)=>{
                return(
                    <div className='h-[350px]'>

                        <HscrollElem elem={elem}/>
                    </div>
                )
            })}
            </div>
    </>
  )
}

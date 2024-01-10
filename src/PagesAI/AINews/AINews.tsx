import React from 'react'
import './ainews.css'
import { AinewsArray } from '../../Constants/constants'
export default function AINews():React.ReactElement {
  return (
    <>
    <section className='ainew banner '>
        <h1>INDUSTRY NEWS</h1>
      </section>
      <section className='p-[5%]'>
                <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-[2%] mb-[100px] sm:mb-[0px]'>
                       
                            {
                                AinewsArray.map((elm,index)=>{
                                    return(
                                        <div key={index} className='col-span-2 h-[400px] overflow-hidden ainewscard  relative '>
                                            <img src={elm.img} className='w-full h-[65%]' alt="img" />
                                            <div className='w-full h-[35%] p-2 backgroud-ai-darkblue'>
                                                <div className='flex flex-wrap mb-2 gap-1 justify-start items-center '>
                                                    <div className='vertical-blue-dropdawn'></div>
                                                        <h1 className='text-sm font-bold ai-blue-font-Color'>{elm.company}</h1>
                                                        <p className='text-stone-500'>{elm.date}</p>
                                                </div>
                                                <h1 className='font-bold text-white'>{elm.discription}</h1>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                      
                </div>
      </section>
    </>
  )
}

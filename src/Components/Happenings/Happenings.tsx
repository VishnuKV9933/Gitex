import React, { useState } from 'react'

export default function Happenings():React.ReactElement {
    const [hoverId,setHoverId]=useState('')
    function hoverEffect(id:string){
        setHoverId(id)
    }
  return (
    <div className='w-full p-[5%] flex flex-col   ter text-center'>
        <h1 className='happening-header text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words  m-auto relative'>Exclusive Happenings @ GITEX GLOBAL</h1>

        <section className='grid grid-cols-12 w-full gap-2 mt-[10%] '>
            <div id='1'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('1')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-3  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='1' ? 'text-white' :  'text-red-700' }`}>40+ Expert-led workshops</h1>
            <p style={{fontSize:'12px'}}  className={`${hoverId==='1' ? 'text-white' :  'text-stone-500' } text-sm` }>Over 5 days there will be over 40+ expert led, certified workshops hosted by tech innovators and leaders from across the world. Sit down and develop your hands-on skills in workshops including GENERATIVE AI EXPERT and many more.</p>
            </div>
            <div id='2'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('2')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-3  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='2' ? 'text-white' :  'text-red-700' }`}>CSO Business Club</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='2' ? 'text-white' :  'text-stone-500' } text-sm` }>Gain exclusive access to the largest community of sustainability evangelists - hosting over 300+ global sustainable champions. In the build up to COP 28, we will be addressing strategies, investments and emissions.</p>
            </div>
            <div id='3'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('3')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-3  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='3' ? 'text-white' :  'text-red-700' }`}>Hackathon</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='3' ? 'text-white' :  'text-stone-500' } text-sm` }>Collaborative hackathons with some of the biggest tech companies worldwide with over 500+ participants across 5 challenges, with the aim to solve global tech issues.</p>
            </div>
            <div id=''
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('4')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-3  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='4' ? 'text-white' :  'text-red-700' }`}>Expand North Star Supernova Challenge</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='4' ? 'text-white' :  'text-stone-500' } text-sm` }>With a prize fund of $200,000 cutting edge startups developing the newest tech will battle for a chance to win prizes from 12 different nomination categories. Feel the energy, punches and sheer brilliance of the Supernova Challenge - your moment is now!</p>
            </div>
        </section>
<section className='w-full flex justify-center items-center '>

        <div className='grid grid-cols-12 w-full gap-2 md:w-3/4 mt-2'>
           
            <div id='5'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('5')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-4  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='5' ? 'text-white' :  'text-red-700' }`}>Angel Sunday</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='5' ? 'text-white' :  'text-stone-500' } text-sm` }>Expand North Star at Dubai Harbour will open its doors on Sunday 15th, one day before GITEX opens. Angel Sunday is calling seasoned and aspiring investors to join the world's most astute VCs to get in on the action. Spot and invest in the next breakthrough startup now.</p>
            </div>
            <div id='6'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('6')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-4  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='6' ? 'text-white' :  'text-red-700' }`}>Expand North Star Supernova Challenge</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='6' ? 'text-white' :  'text-stone-500' } text-sm` }>With a prize fund of $200,000 cutting edge startups developing the newest tech will battle for a chance to win prizes from 12 different nomination categories. Feel the energy, punches and sheer brilliance of the Supernova Challenge - your moment is now!</p>
            </div>
            <div id='7'
             onMouseLeave={()=>hoverEffect('')}
             onMouseOver={()=>hoverEffect('7')} className="happening-elem col-span-12 sm:col-span-6 md:col-span-4  p-[7%] text-left rounded  hover:bg-red-600 hover:shadow-2xl hover:shadow-red-700 cursor-pointer">
            <h1 className={`font-bold ${hoverId==='7' ? 'text-white' :  'text-red-700' }`}>Expand North Star Supernova Challenge</h1>
            <p style={{fontSize:'12px'}} className={`${hoverId==='7' ? 'text-white' :  'text-stone-500' } text-sm` }>With a prize fund of $200,000 cutting edge startups developing the newest tech will battle for a chance to win prizes from 12 different nomination categories. Feel the energy, punches and sheer brilliance of the Supernova Challenge - your moment is now!</p>
            </div>
        </div>
</section>

    </div>

  )
}

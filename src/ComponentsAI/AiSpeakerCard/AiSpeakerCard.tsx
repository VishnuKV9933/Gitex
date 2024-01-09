import React from 'react'
import './aispeakercard.css'
import { AISPEAKERS } from '../../Types'
type SpeakerCardProps={
    speaker:AISPEAKERS
}
export default function AiSpeakerCard({speaker}:SpeakerCardProps):React.ReactElement {
  return (
    <div className='w-full h-full ai-card-container relative '>
        <div className='text-sm text-white w-full h-[65%] aicard-animation flex justify-center text-center items-center'>
            {speaker.discription}
        </div>
      <img className='w-full h-[65%]' src={speaker.img} alt="" />
      <div className='w-full h-[35%] text-center'>
            <h1 className='text-base sm:text-lg md:text-xl font-medium ai-blue-font-Color'>{speaker.name}</h1>

            <p className='text-blue-900 font-medium text-sm sm:text-base'>{speaker.position}</p>
            <p className='text-sm sm:text-base text-stone-500'>{speaker.company}</p>
      </div>
    </div>
  )
}

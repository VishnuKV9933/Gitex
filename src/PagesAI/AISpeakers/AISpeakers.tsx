import AiSpeakerCard from '../../ComponentsAI/AiSpeakerCard/AiSpeakerCard'
import { AiSpeakersArray } from '../../Constants/constants'
import './aispeakers.css'

export default function AISpeakers() {
  return (
    <>
      <section className='aispeaker banner '>
        <h1>SPEAKERS</h1>
      </section>

      <section className='p-[5%]'>
      <h1 style={{marginBottom:'5%'}} className="text-center center-blue-splictline text-xl sm:text-2xl md:text-4xl text-blue-900 font-bold relative mb-4">
      TOP SPEAKERS IN AI
      </h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full gap-[2%] '>
     
     
{AiSpeakersArray.map((speaker)=>{
  return(
    <div className='sm:col-span-1  h-[250px] md:h-[300px] lg:h-[350px] flex items-center justify-center'>
   
      <AiSpeakerCard speaker={speaker}/>

    </div>
  )
})}


      </div>
      </section>
    </>
  )
}

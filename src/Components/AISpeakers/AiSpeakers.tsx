import React from 'react'
import './aispeakers.css'
import { persons } from '../../Constants/constants'
import { Link } from 'react-router-dom'
export default function AiSpeakers():React.ReactElement {
    const people = [...persons].reverse()
  return (
    <div className=' ai-speakers-container px-[5%] flex flex-col'>
      <h1 className='left-red-underline text-xl sm:text-2xl md:text-3xl text-white font-bold'>Speakers </h1>
    <section className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 sm:gap-[2%]  '>
{people.map((person,index)=>{
    return(
       
         <div key={index} className='col-span-3 sm:col-span-2  h-[300px] sm:h-[400px] flex justify-center items-center mb-[5%] '>
         <div className='speaker-card h-full  w-[300px] sm:w-full md:max-w-[300px] overflow-hidden relative'>
                    <div className='speaker-img-blueshade'></div>
                 <div className='speaker-img-container w-full h-[65%]  relative'>
                    <div className='speaker-img-redshade flex justify-center items-center text-center text-white p-[5%]'>
                    Leads the world’s largest art community with over 76 million registered users and hosting over 500 million pieces of art.
                    </div>
                    <img className='speakerimg w-full h-full' src={person.Image} alt="" />
                 </div>
                 <div className='speaker-card-bottom w-ful h-[35%] p-[5%]'>
                        <h1 className='text-white'>{person.name}</h1>
                        <h2 className='text-white text-sm'>{person.designation}</h2>
                        <h4 className='text-red-600 font-bold'>{person.company}</h4>
                        <h3 className='text-white '>{person.country}</h3>
                 </div>
         </div>
     </div>
     
    )
})}
           
    </section>
<div className='w-full flex justify-center mt-[10%]'>

    <Link to={'/speakers'}>
        <div className="w-fit px-2 text-white  h-[30px] sm:flex hidden bg-red-600  justify-center items-center rounded cursor-pointer exhibit ">
        View all speakers
        </div>
        </Link>
</div>
    
  
    </div>

  )
}

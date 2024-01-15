import React from 'react'
import './mediagallery.css'
import { aivisitimageGallery } from '../../Constants/constants'
export default function MediaGallery() {
  return (
    <div>
        <section className="aimedia banner ">
        <h1>MEDIA GALLERY</h1>
      </section>

      <section className='grid grid-cols-1 sm:grid-cols-2 gap-5 md:grid-cols-3 lg:sm:grid-cols-4 w-full p-[5%] '>
      {
                aivisitimageGallery.map((img,index)=>{
                    return(
                        <div key={index} className='gallery relative col-span-1 p-1 shadow-xl border'>
                            
                            <div className='white-shadow'></div>
                            <img className=' w-full' src={img} alt="" />
                        </div>
                    )
                })
            }
      </section>
    </div>
  )
}

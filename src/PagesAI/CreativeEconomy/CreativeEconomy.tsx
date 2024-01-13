import React from 'react'
import './creativeEconomy.css'
export default function CreativeEconomy():React.ReactElement {
  return (
    <>
      <section className='aieconomy banner '>
        <h1>CREATIVE ECONOMY</h1>
      </section>
      <section className='p-[7%]'>

        <div className='w-full flex flex-col sm:flex-row gap-[3%]'>
          <div className='w-full sm:w-1/2'>
            <img src="https://www.ai-everything.com/assets/img/creative-economy-subn1.jpg" alt="img" />
          </div>
          <div className='w-full sm:w-1/2 '>
            <h1 className='w-[90%] font-bold text-sm sm:text-xl md:text-2xl xl:text-3xl'>THE FIRST OF ITS KIND YEARLY RENDEZVOUS FOR THE CREATIVE TECH INDUSTRY</h1>
            <p className='mt-4 text-stone-500 text-sm sm:text-base'>Creative technology has become a critical engine of the economy. AI, big data, augmented/mixed reality and blockchain are already disrupting the way creative industries produce, distribute and consume content In line with the Dubai Creative Economy Strategy launched to double the number of creators from 70K to 150K and double the creative industries’ contribution to the GDP by 5% by 2025.</p>
          </div>
        </div>


        <h1 className='font-bold text-sm sm:text-xl md:text-2xl xl:text-4xl text-blue-900 text-center my-[5%]'>THE VISION</h1>
        <img className='w-full' src="https://www.ai-everything.com/assets/img/creative-economy-visionn1.jpg" alt="img" />
        <div className='p-[2%] mt-[5%]'>
          <img src="https://www.ai-everything.com/assets/img/fasionnw2.jpg" alt="" />
          <img className="mt-[3%]" src="https://www.ai-everything.com/assets/img/fasionnw3.jpg" alt="" />
          <img className="mt-[3%]" src="https://www.ai-everything.com/assets/img/fasionnw4.jpg" alt="" />

          <img className='my-[3%]' src="https://www.ai-everything.com/assets/img/fasionnw5.jpg" alt="" />
        </div>
      </section>
    </>
  )
}

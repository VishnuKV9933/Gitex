import React from 'react'
import tononous from '../../assets/Tonomus-wordmark.png'
import eandw from '../../assets/e&white.jpeg'
import huawei from '../../assets/huawei.png'
import salesforce from '../../assets/Salesforce-logo.jpg'
import hp from '../../assets/HP_Black22.png'
import manage from '../../assets/ManageEngine11.png'
import usetech from '../../assets/usetech_logo_print.jpg'
import midis from '../../assets/midis2.png'
import dic from '../../assets/DIC 250px.jpeg'
import techdici from '../../assets/tech-destination-logo.png'
import tegroup from '../../assets/tecomgroup-logo.jpg'

export default function Logos():React.ReactElement {
  return (
    <>
    <div className='w-full px-[5%] text-center'>

        <div className='flex flex-col justify-center items-center  border-dotted border-b-4 w-full font-medium text-lg mt-6 gap-10'>
            TECHNOLOGY AND DIGITAL PARTNER
            <img className='w-[200px] sm:w-[25%]' src={tononous} alt="Logo Tonomus" />
       </div>

       <div className='flex flex-col justify-center items-center  border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-10'>
       GOLD SPONSORS
       <div className='flex flex-wrap justify-center items-center md:gap-10'>

            <img className='w-[200px] sm:w-[25%]' src={eandw} alt="Logo Tonomus" />
            <img className='w-[200px] sm:w-[25%]' src={huawei} alt="Logo Tonomus" />
            <img className='w-[200px] sm:w-[20%]' src={salesforce} alt="Logo Tonomus" />
       </div>
       </div>

       <div className='flex flex-col justify-center items-center  border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-10'>
        <div className='flex '>
         <div>SILVER SPONSORS</div> 
        </div>
       <div className='flex flex-wrap justify-center items-center md:gap-10'>

            <img className='w-[100px] sm:w-[15%]' src={hp} alt="Logo Tonomus" />
            <img className='w-[200px] sm:w-[25%]' src={manage} alt="Logo Tonomus" />
            <img className='w-[200px] sm:w-[20%]' src={usetech} alt="Logo Tonomus" />
       </div>
       </div>

       <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-[50px] md:gap-[100px]'>
                <div className='flex flex-col  items-start  p-[10px] gap-6 w-[200px]'>
                MAJLIS LOUNGE SPONSOR
                <img className='w-[200px] md:w-[90%] ' src={midis} alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px]'>
                INNOVATION PARTNER & MOBILE APP PARTNER
                <img className='w-[200px] md:w-[90%] ' src={dic} alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col items-center  p-[10px] gap-6 w-[200px] sm:w-[300px]'>
                CONNEXIONS LOUNGE SPONSOR
                <img className='w-[200px] md:w-[90%] ' src={techdici} alt="Logo Tonomus" />
                </div>
                <div className='flex flex-col items-center  p-[10px] gap-6 w-[200px] sm:w-[300px]'>
                MEDIA CENTRE IN PARTNERSHIP WITH
                <img className='w-[200px] md:w-[90%] ' src={tegroup} alt="Logo Tonomus" />
                </div>
       </div>

    </div>
       
       <div className='w-full flex justify-center items-center'></div>
    </>
  )
}

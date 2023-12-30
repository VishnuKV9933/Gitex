
import React from 'react';
import './translate.css'
import overviewlogo from '../../assets/overviewlogoband.png'
import animateImage from '../../assets/ani1.jpg'
import gtxwhitelogo from '../../assets/footerbottom1.png'
import trbot2 from '../../assets/translatebottom2.png'
import ai from '../../assets/ai.png'
import de from '../../assets/de.png'
import sp from '../../assets/sp.png'
import gi from '../../assets/gi.png'
import ur from '../../assets/ur.png'
import fs from '../../assets/fs.png'
import fb from '../../assets/fb.png'
import mm from '../../assets/mm.png'



import { useTranslation } from 'react-i18next';

export default function Translate():React.ReactElement {
   
    const { t} = useTranslation();

    // const changeLanguage = (language: string) => {
    //     i18n.changeLanguage(language);
    //   };
      return (
        <div>
{/* banner top */}
       <div className='translate-banner w-full h-[400px] text-right p-[5%] flex flex-col justify-center sm:justify-normal'>
        <div className='text-2xl sm:text-4xl font-bold'>
        {t('bannerHeadline')}
        <div className='text-xl flex flex-col gap-4 mt-4'>
        {t('bannerLine1')}
        <div> {t('bannerLine2')}</div>
        </div>
        </div>
        <div className='translate-btn  w-[150px] h-[30px] rounded mt-3'>{t('getyourticket')}</div>
       </div>
{/* banner top end */}

{/* animation image start*/}
<section className='p-[5%] w-full'>
        <img className='w-full' src={overviewlogo} alt="" />

        <div className='w-full flex flex-col sm:flex-row gap-5 mt-[10%]'>

            <div className='w-full sm:w-1/2  text-sm text-stone-500 text-right flex flex-col justify-center h-[350px]'>
            <div className='w-full mb-4'>{t('imageLine')}</div>
            <div>{t('imagePara')}</div>
            <div className='translate-btn  w-[150px] h-[30px] rounded mt-3'>{t('getyourticket')}</div>
            </div>
            <div className='w-full sm:w-1/2 sm:h-[300px] md:h-[400px]   overflow-hidden relative'>
              <div className=''></div>
                <img  className=' w-full h-full' src={animateImage} alt="" />
            </div>

        </div>
</section>
{/* animation image end */}

<section className='bottom-container w-full p-[5%] '>
<div className='bottom-header flex justify-center items-center font-bold text break-words text-center text-white 3xl md:text-4xl'>{t('bottomLine')}</div>
      <div className='companylist-container'>

      

        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
          <div className='w-full sm:w-[40%] p-[2%]  flex flex-col justify-center items-center sm:border-r-2'>
            <img className=' w-1/2 h-[100px]' src={gtxwhitelogo} alt="img" />
            <div className='bottom-subhead'>GITEX GLOBAL</div>
            <div className='text-stone-500 text-sm '>{t('gitexglobel1')}</div>
            <div className='text-stone-500 text-sm mt-4'>{t('gitexglobel2')}</div>
          </div>
            <div className='w-full sm:w-[40%] p-[2%] flex flex-col justify-center items-center '>
            <img className='w-1/2 h-[100px]' src={trbot2} alt="img" />
            <div className='bottom-subhead'>EXPAND NORTH STAR</div>
            <div className='text-stone-500 text-sm '>{t('gitexglobel2')}</div>
            <div className='text-stone-500 text-sm mt-4'>{t('gitexglobel1')}</div>
          </div>
        </div>

        <div className='flex justify-center items-center font-bold text break-words text-center text-blue-800 3xl md:text-4xl my-9'>{t('bottomhead2')}</div>

      


        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={ai} alt="img" />
            <div className='bottom-subhead'>AI EVERYTHING</div>
            <div className='text-stone-500 text-sm '>{t('bottompara1')}</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={de} alt="img" />
            <div className='bottom-subhead'>GLOBAL DEVSLAM</div>
            <div className='text-stone-500 text-sm '>{t('bottompara2')}</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={sp} alt="img" />
            <div className='bottom-subhead'>SUPERBRIDGE SUMMIT</div>
            <div className='text-stone-500 text-sm '>{t('bottompara3')}</div>
          </div>
        </div>



        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={gi} alt="img" />
            <div className='bottom-subhead'>GITEX IMPACT</div>
            <div className='text-stone-500 text-sm '>{t('bottompara1')}</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={ur} alt="img" />
            <div className='bottom-subhead'>FUTURE URBANISM</div>
            <div className='text-stone-500 text-sm '>{t('bottompara3')}</div>
          </div>
        </div>
      
        <div className='flex flex-col sm:flex-row justify-center text-center px-[3%]'>
          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={fs} alt="img" />
            <div className='bottom-subhead'>FINTECH SURGE</div>
            <div className='text-stone-500 text-sm '>{t('bottompara1')}</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-r-2 sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={fb} alt="img" />
            <div className='bottom-subhead'>FUTURE BLOCKCHAIN SUMMIT</div>
            <div className='text-stone-500 text-sm '>{t('bottompara2')}</div>
          </div>

          <div className='w-full sm:w-[30%] p-[2%]  flex flex-col  items-center sm:border-b-2'>
            <img className=' w-1/2 h-[100px]' src={mm} alt="img" />
            <div className='bottom-subhead'>MARKETING MANIA</div>
            <div className='text-stone-500 text-sm '>{t('bottompara3')}</div>
          </div>
        </div>


      </div>
</section>
        </div>
      );
}


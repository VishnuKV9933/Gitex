import React, { useEffect } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import Logos from '../../Components/Logos/Logos'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';

export default function AssociationsPartners():React.ReactElement{
const dispatch = useDispatch();
useEffect(()=>{
    dispatch(menuClose());
   
},[])
  return (
    <>
         <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
                <h1 className='text-2xl md:text-4xl font-medium'>SPONSORS 2023</h1>
            </div>

                <Logos/>
            <section className='w-full px-[5%] text-center'>
            <label className='text-lg font-medium'>CONFERENCE SPONSORS</label>
            <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-[50px] md:gap-[100px]'>
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/Lenovo-Logo.png" alt="logo" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/OrangeLogo_.png" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/SNO-SnowflakeLogo_blue.png" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/Meituan-logo.jpg" alt="img" />

                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/KAUST-logo.jpg" alt="logo" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/nice-logo.jpg" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/logo_se_green.png" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/Yango-Log-Black.png" alt="img" />

                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/BCG_LOCKUP.jpg" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/Mckinsey-logo.jpg" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/Dataiku-logo.jpg" alt="img" />
            </div>

        

            <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-[50px] md:gap-[100px]'>
                <div className='flex flex-col  items-start  p-[10px] gap-6 w-[200px] text-lg'>
                <label className='h-1/2'> REGISTRATION SPONSOR</label>
                <img className='w-[200px] md:w-[90%] h-1/2' src='https://gitex.com/contents/Theme-3/images/coinw-logo.png' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'> BADGE SPONSOR</label>
                <img className='w-[200px] md:w-[90%] h-1/2' src='https://gitex.com/contents/Theme-3/images/sponsor/digital-future-holding.jpeg' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'> LANYARD SPONSOR</label>
                <img className='w-[200px] md:w-[90%] h-1/2' src='https://gitex.com/contents/Theme-3/images/sponsor/FastexTicket2508.png' alt="Logo Tonomus" />
                </div>
           </div>

           
                    <label className='text-lg font-medium'>TECH TALKS / X-LABS SPONSORS</label>
            <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-[30px] md:gap-[100px]'>
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/SW_Logo.jpg" alt="logo" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/BDES-4453-Resize-Logo_500x500.png" alt="img" />
                <img className='w-[150px]' src="https://gitex.com/contents/Theme-3/images/sponsor/IFS_logo_2021.png" alt="img" />
                <div className='w-[150px] h-[50px] flex justify-center items-center'>
                <img className='w-[50px] h-[50px]' src="https://gitex.com/contents/Theme-3/images/sponsor/MB-Crest_High31.png" alt="img" />
                </div>
                <img className='w-[200px]' src="https://gitex.com/contents/Theme-3/images/sponsor/IllumioGrayOrange0609.jpg" alt="logo" />
                <img className='w-[200px]' src="https://gitex.com/contents/Theme-3/images/sponsor/ExclaimerNavy0609.jpg" alt="img" />
                <img className='w-[200px]' src="https://gitex.com/contents/Theme-3/images/sponsor/World_Wide_Technology_New_Logo.png" alt="img" />
                
            </div>


            <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl mt-6 gap-[50px] md:gap-[100px]'>
                <div className='flex flex-col  items-center  p-[10px] gap-6 w-[250px] text-lg'>
                <label className='h-1/2'> OFFICIAL MEDIA MONITORING PARTNER</label>
                <img className='w-[150px] ' src='https://gitex.com/contents/Theme-3/images/Spica-Media2.png' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'> KNOWLEDGE PARTNER</label>
                <img className='w-[150px] ' src='https://gitex.com/contents/Theme-3/images/FS_Mark_Logo.png' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'> BUSINESS BROADCAST PARTNER</label>
                <img className='w-[100px] ' src='https://gitex.com/contents/Theme-3/images/CNBC.jpg' alt="Logo Tonomus" />
                </div>
           </div>

           <div className='flex flex-wrap  justify-center items-stert   border-dotted border-b-4 w-full font-medium text-xl my-6 gap-[50px] md:gap-[100px]'>
                <div className='flex flex-col  items-center  p-[10px] gap-6 w-[250px] text-lg'>
                <label className='h-1/2'>OFFICIAL PAN-AFRICAN NEWSWIRE</label>
                <img className='w-[150px] h-[60px]' src='https://gitex.com/contents/Theme-3/images/APO-logo.jpg' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'>OFFICIAL GLOBAL NEWSWIRE</label>
                <img className='w-[150px] ' src='https://gitex.com/contents/Theme-3/images/PRN_Logo_.jpg' alt="Logo Tonomus" />
                </div>

                <div className='flex flex-col  items-center   p-[10px] gap-6 w-[200px] sm:w-[300px] text-lg'>
                <label className='h-1/2'>OFFICIAL NIGHTLIFE PARTNER</label>
                <img className='w-[100px] ' src='https://gitex.com/contents/Theme-3/images/Barasti_Logo_V3-logo_.png' alt="Logo Tonomus" />
                </div>
           </div>


            </section>
    </>
  )
}

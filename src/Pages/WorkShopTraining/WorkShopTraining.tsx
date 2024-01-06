import React, { useEffect } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import './workshop.css'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';







export default function WorkShopTraining():React.ReactElement{
  const dispatch = useDispatch();
useEffect(()=>{
  dispatch(menuClose());
},[])

  return (
    <>
     {/* banner start */}
            <FixedHead/>
            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
             <h1 className='text-2xl md:text-4xl font-bold'>WORKSHOPS AND TRAININGS</h1>
            </div>

      {/* banner end */}   

      <div className='w-full px-[5%]'>
            <div className='w-full flex flex-col md:flex-row gap-4'>
                <div className='w-full md:w-1/2 py-3 flex flex-col gap-4 text-sm sm:text-lg '>
                <p>Step into the future of technological innovation at GITEX, where cutting-edge advancements and dynamic tech evolution converge. From October 14th to 18th 2024, we're excited to unveil a series of <span className='font-bold'>newly curated certified training sessions and workshops.</span> </p>
                    <p>Engage in a diverse range of topics, from exploring the potentials of the Industrial Metaverse to mastering the intricacies of Generative AI.</p>
                    <p>Each session will be led by a panel of yet-to-be-announced esteemed experts, offering a mix of <span className='font-bold'>theoretical insights</span>  and  <span className='font-bold'>practical, hands-on experience.</span> Whether you're a Chief AI Officer, UX Designer, Data Scientist, or an aspiring tech enthusiast, these sessions are crafted to enrich your knowledge and skills.</p>
                <div className='h-[50px] flex items-center'>
                    <button className='workshop-btn rounded-md px-3 px-2 font-semibold w-fit md:h-[30px]'>Register Interest to Visit</button>
                </div>
                </div>

               <img className='w-full md:w-1/2 h-[300px] mt-4 mb-4' src="https://gitex.com/Uploads/PageImages/79754a81-d5f7-4fc4-8438-32d0ee66512f.jpg" alt="" />
            </div>


            <div  className="px-[5%] grid grid-cols-1 md:grid-cols-5 grid-rows-[200px,200px,200px,200px,200px,200px,200px] md:grid-rows-[150px,150px] gap-2 mt-6 mb-[5%]">
                
                <div className="col-span-1 md:col-span-2 md:row-span-2 row-span-1"><img className="w-full h-full" src='https://gitex.com/Uploads//Posts/2023%20Workshops/FRH_9755.jpg' alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/Uploads//Posts/2023%20Workshops/_FAH5055.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/Uploads//Posts/2023%20Workshops/NY1_2041.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/Uploads//Posts/2023%20Workshops/FRH_0303.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/Uploads//Posts/2023%20Workshops/FRH_9922.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/Uploads//Posts/2023%20Workshops/_FAH4945.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img06.jpg" alt="img" /></div>

            </div>
      </div>
    </>
  )
}

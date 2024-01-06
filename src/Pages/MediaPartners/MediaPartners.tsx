import React, { useEffect, useState } from 'react'
import FixedHead from '../../Components/FixedHead/FixedHead'
import { mediaArray } from '../../Constants/constants'
import MediaModal from '../../Components/MediaModal/MediaModal'
import { MEDIAPARTNER } from '../../Types'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';


export default function MediaPartners():React.ReactElement {
  const [modalOpen,setModalOpen] = useState<boolean>(false)
  const [elem,setElement] = useState<MEDIAPARTNER>({ })
  const dispatch = useDispatch();
  useEffect(()=>{
  dispatch(menuClose());
 
},[])
  return (
    <>
          <FixedHead/>
          <MediaModal modalOpen={modalOpen} setModalOpen={setModalOpen} element={elem}/>

            <div className='plan-banner flex justify-center items-end pb-[4%]  text-white'>
                <h1 className='text-2xl md:text-4xl font-bold'>Media Partners</h1>
            </div>
            <section className='w-full p-[5%] flex justify-center items-center flex-wrap gap-[2%]'>
              {mediaArray.map((elem,index)=>{
                return(
                  <div onClick={()=>{
                     setModalOpen(true)
                     setElement(elem)
                    }
                    }
                   key={index} className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px]  mb-[2%] p-[1%] flex justify-center items-center hover:border-2 border-red-600 shadow-lg'>
                    <img className='w-[70px] sm:w-[100px] h-auto' src={elem.img} alt="" />
                  </div>
                )
              })}
            </section>
    </>
  )
}

import React, { useState } from 'react'
import './aitoggle.css'
import togglelogo from  '../../assets/togglelogo.png'
import togglesocial from '../../assets/togglesocial.png'
import { ImCross } from "react-icons/im";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
type aitoggleProps={
    toggle:boolean,
    setToggleOpen: (newToggle: boolean) => void;
}
export default function AIToggle({toggle,setToggleOpen}:aitoggleProps):React.ReactElement {

    const [open,setOpen] =useState('')
    function handleSetOpen(id:string){
        if(id===open){setOpen('') 
    }else {
        setOpen(id)
    }
    }

    function toggleclose(e:React.MouseEvent) {
        const target = e.target as HTMLElement;
        if (target.id === 'container-toggle') {
          setToggleOpen(false);
        }
      }
  return (
    <>
      <section onClick={(e) => {
        e.preventDefault()
        toggleclose(e)
        } }id='container-toggle' className={`${!toggle && 'toggle-container-close'} toggle-container fixed lg:hidden top-0 left-0 flex justify-end transition-all duration-700 `}>
            <div className={`${!toggle && 'toggle-close'}  w-[320px] h-full bg-white transition-all duration-700 `}>
                <div className='pl-[20px] pr-[40px] py-[15px] flex justify-between items-center border-b'>
                    <img  className='h-[80px] w-[50%] min-w-[120px]' src={togglelogo} alt="logo"/>
                   <div onClick={()=>setToggleOpen(false)} className='text-stone-500'>
                    <ImCross/>
                   </div>
                </div>

                <ul className=''>
                    <li className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'>
                        EXHIBIT
                        <div onClick={()=>handleSetOpen('EXHIBIT')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='EXHIBIT'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                    </li>
                    <li className='w-full'>
                        <div  className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'> 
                        VISIT
                        <div onClick={()=>handleSetOpen('VISIT')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='VISIT'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                        </div>
                        <section className={`${open==='VISIT'?'h-[150px]':'h-[0px]'} transition-all duration-500 overflow-hidden w-full`}>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                WHY VISIT
                            </div>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                AGENDA
                            </div>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                EXHIBITORS
                            </div>
                        </section>
                    </li>
                    <Link to={'/aispeakers'}>
                    <li className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'>
                        SPEAKERS
                        <div onClick={()=>handleSetOpen('SPEAKERS')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='SPEAKERS'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                    </li>
                    </Link>
                    <li className='w-full'>
                        <div  className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'> 
                        SELECTORS
                        <div onClick={()=>handleSetOpen('SELECTORS')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='SELECTORS'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                        </div>
                        <section className={`${open==='SELECTORS'?'h-[150px]':'h-[0px]'} transition-all duration-500 overflow-hidden w-full`}>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                CREATIVE ECONOMY
                            </div>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                GITEX YOUTHX
                            </div>
                            <div className='h-[50px] w-full border-b text-stone-500 text-[15px] flex px-[40px] justify-start items-center hover:text-blue-400 cursor-pointer'>
                                STARTUPS
                            </div>
                        </section>
                    </li>
                    <li className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'>
                        ABOUT
                        <div onClick={()=>handleSetOpen('ABOUT')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='ABOUT'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                    </li>
                    <Link to={'/ainews'}>

                    <li className='flex px-[20px] justify-between items-center border-b h-[50px] text-stone-500 text-[15px] hover:text-blue-400 cursor-pointer'>
                        NEWS
                        <div onClick={()=>handleSetOpen('NEWS')} className={`rotation-box w-[30px] h-[30px] bg-stone-200 rounded justify-center items-center flex ${open==='NEWS'&&'option-rotate'}`}>
                                <MdOutlineKeyboardArrowDown/>
                        </div>
                    </li>
                    </Link>
                </ul>
                <div className='w-full flex justify-center ' >
                    <img className='cursor-pointer mt-5' src={togglesocial} alt="socila" />
                </div>
            </div>
      </section>
    </>
  )
}

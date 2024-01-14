import React, { useEffect, useRef, useState } from 'react'
import './aiabout.css'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { FaArrowRightLong } from 'react-icons/fa6'
export default function AIAbout():React.ReactElement {
    const timerRef = useRef(null)
    const zoomRef = useRef(null)
    const rotateRef = useRef(null)

    const [attendees,setAttendees] = useState<number>(9000)
    const [exhibetors,setExhibetors]  = useState<number>(120)
    const [speakers,setSpeakers]  = useState<number>(100)


    function increaseCount(){
        let count =0;
        const timer = setInterval(()=>{
            count++
            if(count>=10) clearInterval(timer)
            setAttendees((pre)=>{
                if(pre<10000){

                    return pre+100
                }else{
                    return pre
                }
            })

            setExhibetors((pre)=>{
                if(pre<130){
                    return  pre+1
                }else{
                    return pre
                }
               
            })
            setSpeakers(pre=>{
                if(pre<200){
                   return pre+10
                }else{
                    return pre
                }
            })
        },100)
    }


    useEffect(() => {

        const rootMarginTop = '500px 0px 0px 0px';

        const observerOptions = {
          root: null,
          rootMargin: rootMarginTop,
          threshold: 0.25,
        };
        const handleIntersection: IntersectionObserverCallback = (entries) => {
          entries.forEach((entry) => {
            const targetElement = entry.target; 
            if(targetElement.id==='timerelement'){

                         if(entry.isIntersecting){
                            increaseCount()
                        }
                         }
            else if(targetElement.id==='zoomelem'){
                if(entry.isIntersecting){
                    
                    entry.target.classList.add('zoom-elem')
                }else{
                    entry.target.classList.remove('zoom-elem')
                }
            }

            else if(targetElement.id==='rotateelem'){
                if(entry.isIntersecting){
                    
                    entry.target.classList.remove('rotate90')
                }else{
                    entry.target.classList.add('rotate90')
                }
            }


            

          });
        };
    
        const observer = new IntersectionObserver(
          handleIntersection,
          observerOptions
        );
        if (timerRef.current) {
          observer.observe(timerRef?.current as Element);
        }

        if (zoomRef.current) {
            observer.observe(zoomRef?.current as Element);
          }

          if (rotateRef.current) {
            observer.observe(rotateRef?.current as Element);
          }


        
    
        return () => {
          observer.disconnect();
        };
      }, []);



  return (
    <>
    <section className="aiabout banner ">
        <h1>WHERE EVERYTHING AI HAPPENS</h1>
      </section>

      <section>
        <h1 className='text-sm font-semibold sm:text-base md:text-2xl tracking-tighter px-[5%] mt-[5%]'>Ai Everything is where the global artificial intelligence ecosystem coalesces to create the world’s most impactful, visionary and ground-breaking artificial intelligence summit…where trailblazers and innovators go to inspire and to be inspired. A revolutionary event for revolutionary times.  </h1>
        <h1 className='text-sm font-semibold sm:text-base md:text-2xl tracking-tighter px-[5%] mt-[2%]'>In 2021 Ai Everything will be hosted side-by-side with the region’s leading multi sector tech event GITEX. Together, Ai Everything x GITEX Global promises 5 power packed days of international networking, learning and infinite business opportunities.</h1>
        <div className='flex justify-center my-[3%]'>
                    
                    <button className='btn-out w-[240px]'>
                        <div className='btn-in'>
                          <div className='btn-center-round'>
                            <div className='btn-item-1'>
                          <MdOutlineKeyboardArrowRight/>
                            </div>
                            <div className='btn-item-2 '>
                          <FaArrowRightLong/>
                            </div>
                          </div>
                        </div>
                      <h1 > BOOK A STAND</h1>
                    </button>
                   
                  </div>
      </section>

      <section id='timerelement' ref={timerRef} className='grid grid-cols-4 w-full  gap-1 sm:grid-cols-6 md:grid-cols-5 sm:gap-0 px-[1%] text-center'>
        <div className='bg-blue-300 col-span-2 md:col-span-1 h-[150px] ai-darkblue-bg text-white bring-center'>
          <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'> {attendees}</h1>
          <h3 className='text-sm sm:text-base md:text-lg'>ATTENDEES</h3>
            </div>
        <div className='bg-blue-900 col-span-2 md:col-span-1 h-[150px] ai-blue-bg text-white bring-center'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'> {exhibetors}</h1>
          <h3 className='text-sm sm:text-base md:text-lg'>EXHIBITORS</h3>
        </div>
        <div className='bg-blue-300 col-span-2 md:col-span-1 h-[150px] ai-darkblue-bg text-white bring-center'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'> {speakers}</h1>
          <h3 className='text-sm sm:text-base md:text-lg'>SPEAKERS</h3>
        </div>
        <div className='bg-blue-900 col-span-2 md:col-span-1 h-[150px] ai-blue-bg text-white bring-center'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'> {exhibetors}</h1>
          <h3 className='text-sm sm:text-base md:text-lg'>HOURS OF CONTENT</h3>
        </div>
        <div className='bg-blue-300 col-span-2 md:col-span-1 h-[150px] ai-darkblue-bg text-white bring-center'>
        <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'> {speakers}</h1>
          <h3 className='text-sm sm:text-base md:text-lg'>GOVERNMENT LEADERS</h3>
        </div>
      </section>

      <section className='animation-container p-[5%]'>

            <div id='zoomelem' ref={zoomRef} className=' no-zoom flex flex-col md:flex-row gap-[1%] md:gap-[3%]'>
                <div className='smoothanimation main-card w-full md:w-1/2  text-justify shadow-xl pb-[3%] relative'>
                <div className='blue-hover-elem'></div>
                    <img className='w-full' src="https://www.ai-everything.com/images/whyAiEverything.jpg" alt="img" />
                    <h1 className='text-center text-stone-500 text-xl sm:text-xl mt-[5%] mb-[2%] font-bold tracking-tight'>Why Ai Everything?</h1>
                    <p className='p-[1%] text-sm md:text-base text-stone-500'>Held under the patronage of the UAE Prime Minister and Hosted by the UAE Minister of State for AI, the first edition of Ai Everything succeeded in attracting more than 200 public sector representatives and Ministries from 4 continents – a previously unseen level of government attendance at any technology-inspired event.</p>
                    <p className='p-[1%] text-sm md:text-base text-stone-500'>Strategically co-located with GITEX, Ai-Everything will benefit from a globally impactful marketing campaign with a 41 year legacy, whilst retaining a unique focus on the global artificial intelligence ecosystem. This strategy will provide government and C-Level executives a key platform to draw on the knowledge of leading experts and meet with hundreds of leading brands and enterprises transforming today’s challenges through the adoption of artificial intelligence.</p>
                </div>
                <div className='smoothanimation main-card w-full md:w-1/2  text-justify shadow-xl pb-[3%] relative'>
                    <div className='blue-hover-elem'></div>
                    <img className='w-full' src="https://www.ai-everything.com/images/whatsNext.jpg" alt="img" />
                    <h1 className='text-center text-stone-500 text-xl sm:text-xl mt-[5%] mb-[2%] font-bold tracking-tight'>Why Ai Everything?</h1>
                    <p className='p-[1%] text-sm md:text-base text-stone-500'>Following a recent report by Forbes stating that companies in the Middle East are more ready to implement AI solutions than companies elsewhere in the world, Ai Everything 2021 is perfectly positioned to take the real, global AI conversation to the next level.</p>
                    <p className='p-[1%] text-sm md:text-base text-stone-500'>Each Agenda track will deliver insights from actual revenue-bearing case studies, providing a candid outlet for debate surrounding ethics, governance, bias and the Future of Work.</p>
                    <p className='p-[1%] text-sm md:text-base text-stone-500'>This is where one of the world’s largest gatherings of Data Scientists, C Level decision makers, academics and technology providers will gather. This is where divisive issues will reach a higher level of resolve, being voiced openly from different, unfiltered perspectives.</p>
                </div>
            </div>

            <div id="rotateelem" ref={rotateRef} className='semismoothanimation mt-[50px] filp-card w-full flex flex-col md:flex-row py-[1%] px-[2%] gap-[3%] rounded-2xl items-c enter '>
                <div className='w-full md:w-[80%] text-center md:flex flex-col justify-around'>
                    <h1 className='ai-blue-bg text-white font-bold sm:text-xl md:text-2xl italic tracking-tight'>"Our experience has been phenomenal. WE WILL BE BACK"</h1>
                    <h1 className='ai-darkblue-text font-bold sm:text-xl md:text-2xl text-blue-900'>Rana Bouri</h1>
                    <p className='text-stone-500'>Marketing Director, <span className='font-bold'>Microsoft</span></p>
                </div>
                <img className='m-auto md:m-0 w-full md:w-[20%] max-w-[350px]' src="https://www.ai-everything.com/images/microsoftLogo2.jpg" alt="img" />
            </div>

      </section>
      
    </>
  )
}

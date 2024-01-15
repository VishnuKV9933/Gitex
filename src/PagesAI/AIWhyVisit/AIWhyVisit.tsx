import React, { useEffect, useRef } from 'react'
import './aiwhyvisit.css'
import { aivisitimageGallery } from '../../Constants/constants'
import { Youtube } from '../../ComponentsAI/Youtube/Youtube'
export default function AIWhyVisit():React.ReactElement{
    const suddenOpenref=useRef(null)
    const videoelemref=useRef(null)
    const videoIdArray=['OEHpgt9eP_E','D6DujA67kNg','aapXXAa9yCo']
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
              if(targetElement.id==='suddenopen'){
                if(entry.isIntersecting){
                    entry.target.classList.remove('sudden-open')
                }else{
                    entry.target.classList.add('sudden-open')
                }
            }

            else if(targetElement.id==='videoelem'){
              
              if(entry.isIntersecting){
                console.log("videowlem");
                  entry.target.classList.remove('video-container')
              }else{
                  entry.target.classList.add('video-container')
              }
          }

          });
        };
    
        const observer = new IntersectionObserver(
          handleIntersection,
          observerOptions
        );
      
          if (suddenOpenref.current) {
            observer.observe(suddenOpenref?.current as Element);
          }  

          if (videoelemref.current) {
            observer.observe(videoelemref?.current as Element);
          }  

          
    
        return () => {
          observer.disconnect();
        };
      }, []);


  return (
    <>
        <section className="aiwhyvisit banner ">
        <h1>WHY VISIT?</h1>
      </section>

      <section className='p-[5%]'>
      <h1 className='text-sm font-semibold sm:text-base md:text-2xl tracking-tighter   ai-mediumdarkblue-text'>AI is becoming the new normal and companies who ignore it will sadly be left behind. In the region where attention on data is at its strongest, Ai Everything is the place where businesses and individuals at any stage of deployment can discover clear strategies for success:</h1>
            <div className='grid grid-cols-1 sm:grid-cols-5 gap-2 mt-[5%]'>
                
                
                <div className='col-span-1 aivisitcard relative bg-white w-full sm:w-auto sm:max-w-[200px] p-[5%] mb-2 hover:shadow-xl'>
                    <div className='w-full relative flex items-center justify-center h-[90px] '>
                        <div className='aivisit-animation w-[80px] sm:w-1/2 '>
                            <img className='w-full ' src="https://www.ai-everything.com/images/Increase-profitability0904.jpg" alt="" />
                        </div>
                        <div className='black-line left-[100px] lg:left-[80px]'></div>
                        </div>
                <h1 className='text-sm font-semibold sm:text-base md:text-xl tracking-tighter   ai-mediumdarkblue-text'>AI is becoming the new normal and </h1>
               <p className='text-[13px] sm:text-[15px] md:text-[17px] mt-3'>Increase your profitability and competitive edge with access to the latest solutions designed to extract maximum value from AI at optimum scale.</p>
                </div>

                <div className='col-span-1 aivisitcard relative bg-white w-full sm:w-auto sm:max-w-[200px] p-[5%] mb-2 hover:shadow-xl'>
                    <div className='w-full relative flex items-center justify-center h-[90px] '>
                        <div className='aivisit-animation w-[80px] sm:w-1/2 '>
                            <img className='w-full ' src="https://www.ai-everything.com/images/ReduceOpportunity0904.jpg" alt="" />
                        </div>
                        <div className='black-line left-[100px] lg:left-[80px]'></div>
                        </div>
                <h1 className='text-sm font-semibold sm:text-base md:text-xl tracking-tighter   ai-mediumdarkblue-text'>Reduce your opportunity costs</h1>
               <p className='text-[13px] sm:text-[15px] md:text-[17px] mt-3'>Reduce your opportunity costs by aligning with proven integration strategies being showcased at the Conference.</p>
                </div>

                <div className='col-span-1 aivisitcard relative bg-white w-full sm:w-auto sm:max-w-[200px] p-[5%] mb-2 hover:shadow-xl'>
                    <div className='w-full relative flex items-center justify-center h-[90px] '>
                        <div className='aivisit-animation w-[80px] sm:w-1/2 '>
                            <img className='w-full ' src="https://www.ai-everything.com/images/EnsureProfessional0904.jpg" alt="" />
                        </div>
                        <div className='black-line left-[100px] lg:left-[80px]'></div>
                        </div>
                <h1 className='text-sm font-semibold sm:text-base md:text-xl tracking-tighter   ai-mediumdarkblue-text'>Ensure your professional development</h1>
               <p className='text-[13px] sm:text-[15px] md:text-[17px] mt-3'>Ensure your professional development through workshops designed to upgrade your skillset as your .</p>
                </div>

                <div className='col-span-1 aivisitcard relative bg-white w-full sm:w-auto sm:max-w-[200px] p-[5%] mb-2 hover:shadow-xl'>
                    <div className='w-full relative flex items-center justify-center h-[90px] '>
                        <div className='aivisit-animation w-[80px] sm:w-1/2 '>
                            <img className='w-full ' src="https://www.ai-everything.com/images/BeVoice0904.jpg" alt="" />
                        </div>
                        <div className='black-line left-[100px] lg:left-[80px]'></div>
                        </div>
                <h1 className='text-sm font-semibold sm:text-base md:text-xl tracking-tighter   ai-mediumdarkblue-text'>Be a voice for good and discover what’s next</h1>
               <p className='text-[13px] sm:text-[15px] md:text-[17px] mt-3'>Be a voice for good and discover what’s next as we debate the extent to which AI is being deployed in line with society’s needs.</p>
                </div>

                <div className='col-span-1 aivisitcard relative bg-white w-full sm:w-auto sm:max-w-[200px] p-[5%] mb-2 hover:shadow-xl'>
                    <div className='w-full relative flex items-center justify-center h-[90px] '>
                        <div className='aivisit-animation w-[80px] sm:w-1/2 '>
                            <img className='w-full ' src="https://www.ai-everything.com/images/AchieveRecognition0904.jpg" alt="" />
                        </div>
                        <div className='black-line left-[100px] lg:left-[80px]'></div>
                        </div>
                <h1 className='text-sm font-semibold sm:text-base md:text-xl tracking-tighter   ai-mediumdarkblue-text'>Achieve widespread recognition</h1>
               <p className='text-[13px] sm:text-[15px] md:text-[17px] mt-3'>Achieve widespread recognition by participating in competitive platforms open to AI technology makers and takers alike.</p>
                </div>

            </div>
      </section>

      <section className='px-1 relative'>
        <h1 className='center-blue-splictline relative font-bold sm:text-lg md:text-xl lg:text-4xl text-center ai-mediumdarkblue-text my-[5%]'><span className='ai-blue-font-Color'> AI EVERYTHING -</span> 2022 RELIVE THE BEST MOMENTS AS THEY HAPPENED</h1>
        <div  className='mt-[5%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:sm:grid-cols-4 w-full'>
            {
                aivisitimageGallery.map((img,index)=>{
                    return(
                        <div key={index} className='img-body col-span-1 relative bg-red-400 overflow-hidden'>
                            
                            <div className='img-animation'></div>
                            <img className='img-item w-full' src={img} alt="" />
                        </div>
                    )
                })
            }
            </div>
            <div className='p-[3%] flex justify-center '>
              <button className="ai-header-btn  fixed-btn-border-ai">
                <div className="btn-top-half"></div>
                <h1 className="btn-text">VIEW ALL</h1>
                <div className="btn-bottom-half"></div>
              </button>
            </div>
      </section>

      <section id='suddenopen' ref={suddenOpenref} className="sudden-open bg-blue-exhibitai pt-[5%]">
      <h1 className="platform-header center-blue-splictline text-center justify-center text-xl mb-4 sm:text-2xl md:text-4xl text-blue-900 font-bold relative">
   <span className="ai-blue-font-Color">CONNECT WITH THE PROFESSIONALS </span> LEADING THE AI REVOLUTION
          </h1>
          <div className="w-full h-full px-[7%] flex flex-col sm:flex-row gap-[3%] py-[4%]  ">
            <div className="w-full sm:w-1/2 zoom-aiex-img relative child-one">
            <div style={{display:'block'}} className="top-sign"></div>
                <img className="w-full h-full" src="https://www.ai-everything.com/images/leadersInAi0904.jpg" alt="img" />
              <div style={{display:'block'}} className="bottom-sign"></div>
            </div>
            <div className="w-full sm:w-1/2 child-two">
                <p className="text-[12px] sm:text-[15px] md:text-[16px]">AiEverything brings together the leading experts in AI from across the globe, from senior professionals at fortune 500 companies transforming day to day operations, to professors at the top 2% of world universities researching and uncovering new ways to improve AI.</p>
                <h1 className="text-2xl font-bold my-[5%]">At AiEverything you can:</h1>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">Listen to over 130+ hours worth of content from global speakers</p>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">Network with global AI exhibitors who are launching the latest products and services</p>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">Organize closed door meeting with potential investors</p>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">Make valuable, real business connections</p>
            </div>
          </div>
      </section>

      <section >
                    <h1 className="my-[20px] text-center platform-header flex justify-center text-xl mb-4 sm:text-2xl md:text-4xl text-blue-900 font-bold">THEY SAY IT BETTER</h1>
                      <div id="videoelem" ref={videoelemref} className="video-container flex flex-col sm:flex-row justify-center items-center sm:justify-around flex-wrap gap-[10px] p-[10px]">
                       {
                        videoIdArray.map((id,index)=>{
                          return(
                              <div key={index} className="border-dotted video-elem  border-blue-400 p-[1%] border-2">
                                <Youtube  id={id}/>
                              </div>
                          )
                        })
                       }
                       
                      </div>
                        <div className='w-full flex justify-center items-center h-[100px]'>
                       <button className='gradbtn p-[10px] relative w-full max-w-[300px] h-[50px]'>
                      <div className="gradbtn-left"></div>
                      <div className="gradbtn-right"></div>
                     <span className='span-text'>  HEAR FROM INDUSTRY LEADERS</span> 
                        </button>
                        </div>
                  </section>
    </>
  )
}

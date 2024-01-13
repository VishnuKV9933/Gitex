import React, { useEffect, useRef } from "react";
import "./aiexhibit.css";
import RollingCard from "../../ComponentsAI/RollingCard/RollingCard";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Youtube } from "../../ComponentsAI/Youtube/Youtube";
import { SponsorshipArroay } from "../../Constants/constants";


export default function AIExhibit(): React.ReactElement {

    const sidecomerefelem=useRef(null)
    const tosideelem=useRef(null)
    const suddenOpenref=useRef(null)
    const videoelemref=useRef(null)
    
    const linkArrray=['https://youtu.be/D6DujA67kNg','https://youtu.be/aapXXAa9yCo','https://youtu.be/OEHpgt9eP_E']

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
            if(targetElement.id==='tocenter'){

                if(entry.isIntersecting){
                    entry.target.classList.remove('move-child-out')
                }else{
                    entry.target.classList.add('move-child-out')
                }
            }else if(targetElement.id==='toside'){
                if(entry.isIntersecting){
                    entry.target.classList.remove('move-child-in')
                }else{
                    entry.target.classList.add('move-child-in')
                }
            }

            else if(targetElement.id==='suddenopen'){
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
        if (sidecomerefelem.current) {
          observer.observe(sidecomerefelem?.current as Element);
        }

        if (tosideelem.current) {
            observer.observe(tosideelem?.current as Element);
          }
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
      <section className="aiexhibit banner ">
        <h1>WHY EXHIBIT?</h1>
      </section>

      <section className="overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[40%] flex flex-col items-start px-[2%] pt-[2%]  text-left gap-[7%]">
            <h1 className="font-bold w-[80%] text-sm sm:text-xl md:text-2xl">
              MEET ENTHUSIASTIC TRADE BUYERS
            </h1>
            <h2 className="">
              Gain valuable market share in a region where buyers are ready to
              adopt
            </h2>
            <p className="text-stone-500 text-[12px] sm:text-[15px] md:text-[16px]">
              When it comes to implementing AI, companies in the Middle East
              possess a maturity level and comfort with implementing AI to
              achieve their business goals. Forbes Insights State of AI in the
              Middle East report.
            </p>
          </div>
          <div className="text w-full lg:w-[60%] py-[1%] px-[2%]   ">
            <div className="zoom-aiex-img w-full h-full relative max-h-[300px]">
              <div className="top-sign"></div>
              <img
                className="w-full h-full max-h-[300px]"
                src="https://www.ai-everything.com/images/leadQuality1611.jpg"
                alt=""
              />
              <div className="bottom-sign"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row mt-3">
        <div className="text w-full lg:w-[60%] py-[1%] px-[2%]   ">
            <div className="zoom-aiex-img w-full h-full relative max-h-[300px]">
              <div className="top-sign"></div>
              <img
                className="w-full h-full max-h-[300px]"
                src="https://www.ai-everything.com/images/unrivalledPotential1611.jpg"
                alt="img"
              />
              <div className="bottom-sign"></div>
            </div>
          </div>
          <div className="w-full lg:w-[40%] flex flex-col items-start px-[2%] pt-[2%]  text-left gap-[7%]">
            <h1 className="font-bold w-[80%] text-sm sm:text-xl md:text-2xl">
            UNRIVALLED POTENTIAL
            </h1>
            <h2 className="">
            Meet public sector executives thanks to unrivalled Government support
            </h2>
            <p className="text-stone-500 text-[12px] sm:text-[15px] md:text-[16px]">
            More than 200 government representatives and ministries from 4 continents attend Ai Everything – a previously unseen municipal turnout across any niche technology-inspired platform.
            </p>
          </div>
        </div>

        <div id="tocenter"  ref={sidecomerefelem} className="move-child-out flex flex-col lg:flex-row mt-3">
          <div className="childone w-full lg:w-[40%] flex flex-col items-start px-[2%] pt-[2%]  text-left gap-[7%]">
            <h1 className="font-bold w-[80%] text-sm sm:text-xl md:text-2xl">
            BRAND EXPOSURE
            </h1>
            <h2 className="">
            Leverage content to promote your brand
            </h2>
            <p className="text-stone-500 text-[12px] sm:text-[15px] md:text-[16px]">
            One of the biggest obstacles to AI deployment is difficulty in identifying appropriate business cases. Utilize Ai Everything’s captive audience to spotlight your own successes and make the strongest possible foothold in the market.
            </p>
          </div>
          <div className="childtwo text w-full lg:w-[60%] py-[1%] px-[2%]   ">
            <div className="zoom-aiex-img w-full h-full relative max-h-[300px]">
              <div className="top-sign"></div>
              <img
                className="w-full h-full max-h-[300px]"
                src="https://www.ai-everything.com/images/brandExposure1611.jpg"
                alt=""
              />
              <div className="bottom-sign"></div>
            </div>
          </div>
        </div>

        <div id="toside"  ref={tosideelem} className="move-child-in flex flex-col lg:flex-row mt-3">
        <div className="childtwo text w-full lg:w-[60%] py-[1%] px-[2%]   ">
            <div className="zoom-aiex-img w-full h-full relative max-h-[300px]">
              <div className="top-sign"></div>
              <img
                className="w-full h-full max-h-[300px]"
                src="https://www.ai-everything.com/images/leadQuality1611.jpg"
                alt=""
              />
              <div className="bottom-sign"></div>
            </div>
          </div>
          <div className="childone w-full lg:w-[40%] flex flex-col items-start px-[2%] pt-[2%]  text-left gap-[7%]">
            <h1 className="font-bold w-[80%] text-sm sm:text-xl md:text-2xl">
            CREDIBILITY
            </h1>
            <h2 className="">
            Convert visitors into clients through invaluable face-to-face exposure
            </h2>
            <p className="text-stone-500 text-[12px] sm:text-[15px] md:text-[16px]">
            The cost of a face-to-face meeting with a prospect at a trade show is $142. The cost of a face-to-face meeting at a prospect’s office is $259. Study by Spingo.com quoted by Forbes in 2019.
            </p>
          </div>
        </div>


      </section>

      <section id='suddenopen' ref={suddenOpenref} className="sudden-open bg-blue-exhibitai pt-[5%]">
      <h1 className="platform-header center-blue-splictline text-center justify-center text-xl mb-4 sm:text-2xl md:text-4xl text-blue-900 font-bold relative">
   <span className="ai-blue-font-Color">WHERE REAL </span> GLOBAL BUSINESS IS DONE
          </h1>
          <div className="w-full h-full px-[7%] flex flex-col sm:flex-row gap-[3%] py-[4%]  ">
            <div className="w-full sm:w-1/2 zoom-aiex-img relative child-one">
            <div style={{display:'block'}} className="top-sign"></div>
                <img className="w-full h-full" src="https://www.ai-everything.com/images/RealBusiness0904.jpg" alt="img" />
              <div style={{display:'block'}} className="bottom-sign"></div>
            </div>
            <div className="w-full sm:w-1/2 child-two">
                <p className="text-[12px] sm:text-[15px] md:text-[16px]">The unified GITEX ecosystem attracted over 170,000 trade buyers to network, collaborate and sign MoU’s on site last year. For 2023, in The Year to Imagine AI in Everything, AiEverything will occupy 10 halls and over 210,000 sqft of floor space - making it the largest AI event in the world and at the center stage of the largest gathering of tech professionals.</p>
                <h1 className="text-2xl font-bold my-[5%]">Of the 170,000:</h1>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">144,500 or 85% of GITEX buyers found the product or service they were looking for</p>
                <p className="square-bullet text-[12px] sm:text-[15px] md:text-[16px]">144,500 or 85% of GITEX buyers found the product or service they were looking for</p>
            </div>
          </div>
      </section>
      <h1 className="text-center platform-header center-blue-splictline flex justify-center text-xl mb-4 sm:text-2xl md:text-4xl text-blue-900 font-bold relative pt-[40px]">
      EXHIBITOR & SPONSORSHIP PACKAGES
          </h1>

      <section className="bg-blue-100 rollcard-container px-[8%] pt-[50px] pb-[300px] sm:pb-[250px] md:pb-[150px] grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-[3%] sm:gap-[10%] md:gap-[10%]" >
       {SponsorshipArroay.map((elem,index)=>{
        return(
          <RollingCard key={index} img={elem.img} discription={elem.discription} headding={elem.headding} />
        )
       })}
       
 

      </section>
      <div className='flex justify-center bg-blue-100 shadow-dawn'>
                    
                      <button className='btn-out w-[250px]'>
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
                        <h1 >  CONTACT SALES</h1>
                      </button>
                     
                    </div>
                  <section >
                    <h1 className="my-[20px] text-center platform-header center-blue-splictline flex justify-center text-xl mb-4 sm:text-2xl md:text-4xl text-blue-900 font-bold">THEY SAY IT BETTER</h1>
                    <h3 className="ai-blue-font-Color text-center">Hear from industry leaders</h3>
                      <div id="videoelem" ref={videoelemref} className="video-container flex flex-col sm:flex-row justify-center items-center sm:justify-around flex-wrap gap-[10px] p-[10px]">
                       {
                        linkArrray.map((link,index)=>{
                          return(
                              <div key={index} className="border-dotted video-elem  border-blue-400 p-[1%] border-2">
                                <Youtube  link={link}/>
                              </div>
                          )
                        })
                       }
                       
                      </div>
                  </section>
                  <div className='flex justify-center  py-[5%] '>

                  <button className='btn-out w-[170px]'>
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
                        <h1 >  VIEW ALL</h1>
                      </button>
                  </div>
    </>
  );
}

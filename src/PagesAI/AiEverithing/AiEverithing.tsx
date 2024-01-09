import React from "react";
import "./aieverithing.css";
import { AiSpeakersArray } from "../../Constants/constants";
import AiSpeakerCard from "../../ComponentsAI/AiSpeakerCard/AiSpeakerCard";
import MouseMoveEffect from "../../ComponentsAI/MouseMoveEffect/MouseMoveEffect";

export default function AiEverithing(): React.ReactElement {
  return (
    <>

    <section>
      <MouseMoveEffect/>
    </section>
      <section className=" flex flex-col sm:flex-row p-[5%]">
        <div className="w-full sm:w-1/2 sm:pr-[2%]">
          <h1 className="platform-header left-blue-splictline text-xl sm:text-2xl md:text-3xl text-blue-900 font-bold relative">
            CREATING A PLATFORM FOR THE WORLD TO ADVANCE AI
          </h1>
          <p className="text-sm sm:text-base md:text-[16px] mb-4 ">
            AI Everything, at the center of GITEX GLOBAL, unites startups,
            companies and governments all{" "}
            <span className="font-bold">
              across the world in the technological{" "}
            </span>{" "}
            advancement of AI.
          </p>
          <p className="text-sm sm:text-base md:text-[16px] mb-4 ">
            Our 2023 edition embodied the{" "}
            <span className="font-bold">
              ethos of AI in Everything, from the latest in generative AI, cloud
              & IoT, the premier launch of the Abu Dhabi Autonomous Racing
              league (A2RL),
            </span>{" "}
            and AI technology being used to fight against climate change.
          </p>
          <p className="text-sm sm:text-base md:text-[16px] mb-4 ">
            <span className="font-bold">
              The excitement, curiosity and power of AI has only just begun
            </span>{" "}
            - join us at AI Everything 2024 at GITEX GLOBAL and showcase your
            brand to the world.
          </p>
        </div>
        <div className="w-full sm:w-1/2 sm:pl-[2%]">
          <img
            className="img-entering-animation"
            src="https://www.ai-everything.com/images/Creating_Img.jpg"
            alt="img"
          />
        </div>
      </section>

      <h1 className="text-center center-blue-splictline text-xl sm:text-2xl md:text-4xl text-blue-900 font-bold relative">
        CREATING A PLATFORM FOR THE WORLD TO ADVANCE AI
      </h1>
      <section className="flex flex-col sm:flex-row p-[5%] gap-[3%] border-b-2">
        <div className="highlights-animation-container side-shadow  w-full sm:w-1/2 h-full relative ">
          <div className="img-highlights-animation "></div>
          <div className="animation-line"></div>
          <img
            className="w-full h-full"
            src="https://www.ai-everything.com/images/1.jpg"
            alt="img"
          />
        </div>

        <div className="container-sideline w-full sm:w-1/2 flex flex-wrap gap-[2%] justify-end ">

          <div className="highlights-animation-container w-full sm:w-[49%] h-[49%] relative overflow-hidden">
            <div className="img-highlights-animation "></div>
            <div className="animation-line"></div>
            <img
              className="w-full h-full"
              src="https://www.ai-everything.com/images/2.jpg"
              alt="img"
            />
          </div>

          <div className="highlights-animation-container w-full sm:w-[49%]  h-[49%] relative overflow-hidden">
            <div className="img-highlights-animation "></div>
            <div className="animation-line"></div>
            <img
              className="w-full h-full"
              src="https://www.ai-everything.com/images/3.jpg"
              alt="img"
            />
          </div>

          <div className="highlights-animation-container w-full sm:w-[49%]  h-[49%] relative overflow-hidden">
            <div className="img-highlights-animation "></div>
            <div className="animation-line"></div>
            <img
              className="w-full h-full"
              src="https://www.ai-everything.com/images/4.jpg"
              alt="img"
            />
          </div>

          <div className="highlights-animation-container w-full sm:w-[49%] h-[49%] relative overflow-hidden">
            <div className="img-highlights-animation "></div>
            <div className="animation-line"></div>
            <img
              className="w-full h-full"
              src="https://www.ai-everything.com/images/5.jpg"
              alt="img"
            />
          </div>
        </div>
      </section>


      <section className="flex flex-col sm:flex-row w-full px-[5%] pt-[2%]">
        <div className="w-full sm:w-1/2 px-[5%] pt-[5%]">
          <img src="https://www.ai-everything.com/images/HisExcellencyOmarSultan06102.png" alt="" />
        </div>

        <div className="w-full p-[10px] sm:w-1/2 flex flex-col justify-end sm:pb-[10%]">
          <h1 className="italic font-bold sm:text-xl md:text-2xl">“We want to lead the world in embracing AI, to unleash positive, impactful changes that best serve Dubai, the region and beyond.”</h1>
            <p className="text-sm sm:text-base font-bold mt-3">HIS EXCELLENCY OMAR SULTAN AL OLAMA</p>
            <p className="text-sm sm:text-base mt-2">UAE Minister of State for Artificial Intelligence,</p>
            <p className="text-sm sm:text-base mt-2">Digital Economy and Remote Work Applications</p>
        </div>
      </section>

      <section className="text-white text-center w-full h-[100px] backgroud-ai-darkblue flex flex-col sm:flex-row justify-around p-[5%] items-center">
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">6+</h1>
        <p className="sm:text-xl mt-2">AI Workshops</p>
        </div>
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">150+</h1>
        <p className="sm:text-xl mt-2">Speakers</p>
        </div>
        <div>
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">60%</h1>
        <p className="sm:text-xl mt-2 ">First time in region</p>
        </div>
      </section>


      <section className="p-[5%]">
        <h1 className="text-center center-blue-splictline text-xl sm:text-2xl md:text-4xl text-blue-900 font-bold relative">TOP SPEAKERS IN AI</h1>
      <div className="flex justify-around flex-wrap my-[5%]">

      {AiSpeakersArray.map((speaker)=>{
        return(
          <div className="w-[170px] h-[250px] md:h-[300px] sm:w-[220px] md:w-[230px] mb-4">
            <AiSpeakerCard speaker={speaker}/>
          </div>
        )
      })}
      
      </div>
      <div className="flex items-center justify-center w-full ">
            <button style={{width:'200px'}}  className="ai-header-btn  btn-border-ai">
              <div className="btn-top-half"></div>
              <h1 style={{width:'200px'}} className="btn-text">VIEW ALL SPEAKERS</h1>
              <div className="btn-bottom-half"></div>
            </button>
          </div>
      </section>

      <section className="w-full p-[5%]">
          <h1 className="text-center center-blue-splictline text-xl sm:text-2xl md:text-4xl text-blue-900 font-bold relative">THANK YOU TO OUR LEADING GLOBAL PARTNERS</h1>
      
          <div className="flex items-center justify-center w-full py-[5%] border-dotted border-b-4 ">
            <div className="w-[200px] sm:w-[300px]">
              <h1 className="text-center text-sm sm:text-base font-bold">TECHNOLOGY AND DIGITAL PARTNER</h1>
              <img src="https://www.ai-everything.com/images/logos/Tonomus-wordmark.png" alt="" />
            </div>
          </div>

          <div className="w-full border-dotted border-b-4 p-[5%]">
          <h1 className="text-center text-sm sm:text-base font-bold">TECHNOLOGY AND DIGITAL PARTNER</h1>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-around my-6">
            <img className="max-w-[200px] w-full max-h-[100px]" src="https://www.ai-everything.com/images/logos/e&white.jpg" alt="" />
            <img className="max-w-[200px] w-full max-h-[100px]" src="https://www.ai-everything.com/images/logos/Huawaie-Logo.png" alt="" />
            <img className="max-w-[200px] w-full max-h-[100px]" src="https://www.ai-everything.com/images/logos/Salesforce-logo.jpg" alt="" />
          </div>
          </div>

          <div className="flex items-center justify-center w-full mt-6">
            <button   className="ai-header-btn  btn-border-ai">
              <div className="btn-top-half"></div>
              <h1 className="btn-text">VIEW ALL</h1>
              <div className="btn-bottom-half"></div>
            </button>
          </div>

      </section>
    </>
  );
}

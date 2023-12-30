import "./SliderBase.css";
import wired from '../../assets/wired.png'
import huawei from '../../assets/huawei.png'
import forbes from '../../assets/forbes.png'
import Slider from "../Slider/Slider";
export default function SliderBase(): React.ReactElement {
  return (
    <div className="">
      {/* top */}
      <div className="slider-top flex gap-6  w-full ">
        <div className="bottom-line"></div>
        <div
          className="ml-[-3%] h-[100px] md:h-[150px] flex items-end text-xl
            md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-blue-900 paragraph"
        >
          GITEX’s claim as the largest and best tech show unequivocally
          confirmed
        </div>
      </div>
      {/* top end */}

      {/* slider start */}
      <div className="slider bg-r d-300 h-[300px] md:h-[450px] overflow-hidden">
        {/* moving circle start*/}
        <div className="slider-background flex  items-center overflow-hidden ">
          <div className=" w-[900px] h-[900px] rounded-full moving-elem "></div>
        </div>
        {/* moving circle end*/}

        <Slider>
            <div className="w-full h-full px-[5%] ">
          <div className="w-full h-full md:w-1/2 flex justify-center items-center flex-col p-10 gap-10">
            <div className="text-xl md:text-2xl lg:text-4xl font-base flex gap-2">What <span><img className="w-[130px]" src={wired} alt="img" /></span>thinks about GITEX</div>
            <div className="text-2xl md:text-3xl lg:text-5xl">"The tech event only comes back <span className="text-red-600">bigger and better</span>"</div>
          </div>
        </div>
           
         <div className="w-full h-full px-[5%] ">
          <div className="w-full h-full md:w-1/2 flex justify-center items-center flex-col p-10 gap-10">
            <div className="text-xl md:text-2xl lg:text-4xl font-base flex gap-2">What <span><img className="w-[130px]" src={huawei} alt="img" /></span>thinks about GITEX</div>
            <div className="text-2xl md:text-3xl lg:text-5xl">"This is the <span className="text-red-600">place to be</span>"</div>
          </div>
        </div>
           
        
         <div className="w-full h-full px-[5%] ">
          <div className="w-full h-full md:w-1/2 flex justify-center items-center flex-col p-10 gap-10">
            <div className="text-xl md:text-2xl lg:text-4xl font-base flex gap-2">What <span><img className="w-[130px]" src={forbes} alt="img" /></span>thinks about GITEX</div>
            <div className="text-2xl md:text-3xl lg:text-5xl">"The most <span className="text-red-600">empowering curation</span>ever"</div>
          </div>
        </div>
        {/* <div className="w-full h-full px-[5%] ">
          <div className="w-full h-full md:w-1/2 flex justify-center items-center flex-col p-10 gap-10">
            <div className="text-xl md:text-2xl lg:text-4xl font-base flex gap-2">What <span><img className="w-[130px]" src={forbes} alt="img" /></span>thinks about GITEX</div>
            <div className="text-2xl md:text-3xl lg:text-5xl">"The most <span className="text-red-600">empowering curation</span>ever"</div>
          </div>
        </div> */}
           </Slider>

        
      </div>
        {/* slider end */}
 
    </div>
  );
}

import wired from '../../assets/wired.png'
import huawei from '../../assets/huawei.png'
import forbes from '../../assets/forbes.png'
import Slider from "../Slider/Slider";
export default function AISlider(): React.ReactElement {
  return (
    <div className="">
 

      {/* slider start */}
      <div className="slider bg-r d-300 h-[300px] md:h-[450px] overflow-hidden">

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

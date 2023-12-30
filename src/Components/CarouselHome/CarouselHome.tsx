import Carousel from '../Carousel/Carousel';
import img1 from '../../assets/sliderImg1.jpg'
import img2 from '../../assets/sliderImg2.jpg'
import img3 from '../../assets/sliderImg3.jpg'
import './CarouseHome.css'
import FixedHead from '../FixedHead/FixedHead';
// import TextSlider from '../TestSlider/TextSlider';
const CarouselHome: React.FC = () => {
    return (
      <>
      {/* <TopHome/> */}

      <FixedHead/>
      
     <div  className='flex justify-center items-center w-full h-[300px] sm:h-[450px] md:h-screen relative'>
        {/* <div className='w-full h-full relative'>
          <div className='w-full h-full absolute top-0 left-0 '>
          <TextSlider>
              <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>Image 1</div>
              <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>Image 1</div>
            </TextSlider>
          </div>
        <img src={img1} alt="img1" style={{width:'100%',height:"100%"}} />
        </div>



        <div className='w-full h-full relative'>
          <div className='w-full h-full absolute top-0 left-0 '>
            <TextSlider>
              <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>image2</div>
              <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>image2</div>
            </TextSlider>
          </div>
          <img src={img2} alt="img1" style={{width:'100%',height:"100%"}} />
        </div>

       
        <div className='w-full h-full relative'>
          <div className='w-full h-full absolute top-0 left-0 '>
            <TextSlider>
            <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>image3</div>
              <div className='w-full h-full flex items-center text-white  justify-start px-[5%]'>image3</div>
            </TextSlider>
            </div>
            <img src={img3} alt="img1" style={{width:'100%',height:"100%"}} />
          </div> */}
          <Carousel>
        <img src={img1} alt="img1" style={{width:'100%',height:"100%"}} />
        <img src={img2} alt="img1" style={{width:'100%',height:"100%"}} />
        <img src={img3} alt="img1" style={{width:'100%',height:"100%"}} />
        </Carousel>






              {/* bottom of slider */}
      <div className="bottom ml-[5%] flex gap-10 w-[50%] lg:w-[35%] ">
        <div className="line"></div>
        <div className="text-white break-word">
          <h1 className="text-2xl	font-semibold">Latest Updates</h1>
          <h4 className="text-xl	font-semibold">FOLLOW GITEX ON LINKEDIN</h4>
          <p>
            Stay up to date to latest unnouncements for all upcoming Gitex shows
            via our GITEX GLOBEL Linkedin account{" "}
            <span className="text-red-600">Follow page</span>
          </p>
        </div>
      </div>
     {/* bottom of slider */}
     </div>
      </>
    );
  };
  
  export default CarouselHome;
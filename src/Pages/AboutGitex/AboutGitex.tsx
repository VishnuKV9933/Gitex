import React, { useEffect } from "react";
import "./aboutgitex.css";
import InfiniteSlider from "../../Components/InfiniteSlider/InfiniteSlider";
import FixedHead from "../../Components/FixedHead/FixedHead";
import { useDispatch } from 'react-redux';
import { menuClose} from '../../Redux/Gitex';
import HorizontalScroll from "../../Components/HorizontalScroll/HorizontalScroll";
import ScrollComponent from "../../Components/ScrollComponent/Scrollcomponent";

export default function AboutGitex(): React.ReactElement {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(menuClose());
},[])
  return (
    <>
      <FixedHead />
      <div className="about-banner flex justify-center items-end pb-[4%]  text-white">
        <h1 className="text-2xl md:text-4xl font-bold">ABOUT GITEX</h1>
      </div>

      <section className="w-fuul p-[5%]">
        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 py-3 flex flex-col gap-4 text-sm sm:text-lg">
            <p>
              GITEX GLOBAL 2024,
              <span className="font-bold">marking its 44th edition</span> ,
              stands as the world's most established and iconic large-scale tech
              exhibition. For over four decades, it has been the premiere
              gateway for tech creators, investors, and enthusiasts to
              collaborate. This year, the event scales new heights, spanning
              across two mega venues - Dubai World Trade Centre & Dubai Harbour.
              It offers an{" "}
              <span className="font-bold">
                unprecedented 40+ halls of exhibition space,
              </span>{" "}
              showcasing tech giants and innovative startups in fields like AI,
              Cybersecurity, Mobility, Sustainable Tech, and more.{" "}
            </p>
            <p>
              Prepare for five exhilarating days filled with conferences,
              live-action workshops, matched concierge networking, and business
              partnerships. Discover the latest and unseen tech innovations that
              continue to shape our world.
            </p>
          </div>

          <img
            className="w-full md:w-1/2 max-h-[350px] mt-4 mb-4"
            src="https://gitex.com/Uploads/PageImages/da57759f-34f3-4bdb-884d-542d0ce33494.jpg"
            alt=""
          />
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2 max-h-[350px] mt-4 mb-4 overflow-hidden">
            <div className="animateimgblur"></div>
            <img
              className="animateImg w-full h-full"
              src="https://gitex.com/contents/Theme-3/images/aboutimg03.jpeg"
              alt=""
            />
          </div>

          <div className="w-full md:w-1/2 py-3 flex flex-col gap-4 text-sm text-stone-500">
            <p>
              The GITEX GLOBAL ecosystem{" "}
              <span className="font-bold">encompasses 9 co-located shows</span>:
              GITEX GLOBAL, AI Everything, GITEX Impact, Future Urbanism, GLOBAL
              Devslam, Expand North Star, Fintech Surge, Future Blockchain
              Summit, and Marketing Mania. Central to these shows are
              innovation, collaboration, and discovery. Attendees can explore
              real-world applications of AI and source cutting-edge innovations
              that reduce operating costs and enhance business efficiency.
            </p>
          </div>
        </div>
      </section>
      {/* slider start */}
      <>
        <div className="w-full bg-stone-200 p-[5%] flex flex-col justify-center items-center    text-center">
          <h1 className="happening-header mb-[30px] text-xl sm:text-2xl md:text-4xl text-blue-900 font-semibold  flex break-words relative">
            Latest News
          </h1>
        <ScrollComponent/>
        </div>
 
      </>
      {/* slider end */}
    </>
  );
}

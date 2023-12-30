import React, { useEffect, useRef, useState } from "react";
import "./presscenter.css";
import logo from "../../assets/logo.png";
import mk1 from "../../assets/mediakit1.png";
import mk2 from "../../assets/mediakit2.png";
import mk3 from "../../assets/mediakit3.png";
import social from "../../assets/presscentersocial.png";

import { MdArrowRightAlt } from "react-icons/md";
import PressCenterSlider from "./Sliders/PressCenterSlider/PressCenterSlider";
import IndustryInsitesSlider from "./Sliders/IndustryInsitesSlider/IndustryInsitesSlider";
import PhotoGallery from "./Sliders/PhotoGallery/PhotoGallery";
import { Link } from "react-router-dom";
import {
  gallery,
  pressRelease,
  industryInsights,
  pressReleasereverse,
} from "../../Constants/constants";

export default function PressCenter(): React.ReactElement {
  const [headerVisible, setHeaderVisible] = useState(false);
  const hedderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleIntersection(
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) {
      entries.map((entry) => {
        if (entry.isIntersecting) {
          setHeaderVisible(false);
          console.log("jdjdjdjdjdjdj");
        } else {
          setHeaderVisible(true);
        }
      });
    }

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.75,
    };
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    observer.observe(hedderRef?.current as Element);
  }, []);

  return (
    <>
      {/* banner start */}
      <section
        ref={hedderRef}
        className="presscenter-banner w-full h-[120px] sm:h-[190px] md:h-[250px] pt-[1%] relative"
      >
        <Link to={"/"}>
          <img className="w-[15%] ml-[5%] " src={logo} alt="logo" />
        </Link>
        <h1 className="w-full flex justify-center items-center text-white sm:text-2xl md:text-4xl font-semibold mt-5">
          PRESS CENTRE
        </h1>
      </section>

      {headerVisible && (
        <section className=" w-full h-[70px] md:h-[100px] bg-black flex items-center fixed top-0 left-0 z-10">
          <Link to={"/"}>
            <img className="w-[32%] ml-[20%]" src={logo} alt="logo" />
          </Link>
        </section>
      )}

      {/* banner end */}
      {/* top slider start*/}
      <section className="px-[4%] py-[4%] relative">
        <div className="flex justify-between mb-[1%]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            PRESS RELEASES
          </h1>
          <div className="flex items-center font-semibold text-sm cursor-pointer hover:text-red-600">
            VIEW ALL{" "}
            <span className="text-xl">
              {" "}
              <MdArrowRightAlt />{" "}
            </span>
          </div>
        </div>

        <PressCenterSlider press={true} items={pressRelease} />
      </section>
      {/* top slider end*/}
      {/* top slider start*/}
      <section className="p-[4%] relative darker-slider-background">
        <div className="flex justify-between mb-[1%]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            LATEST NEWS
          </h1>
          <div className="flex items-center font-semibold text-sm cursor-pointer hover:text-red-600">
            VIEW ALL{" "}
            <span className="text-xl">
              {" "}
              <MdArrowRightAlt />{" "}
            </span>
          </div>
        </div>

        <PressCenterSlider press={false} items={pressReleasereverse} />
      </section>
      {/* top slider start*/}
      <section className="p-[4%] relative">
        <div className="flex justify-between mb-[1%]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            INDUSTRY INSIGHTS
          </h1>
          <div className="flex items-center font-semibold text-sm cursor-pointer hover:text-red-600">
            VIEW ALL{" "}
            <span className="text-xl">
              {" "}
              <MdArrowRightAlt />{" "}
            </span>
          </div>
        </div>

        <IndustryInsitesSlider items={industryInsights} />
      </section>
      {/* top slider end*/}

      {/* PHOTO GALLERY start*/}
      <section className="p-[4%] relative darker-slider-background">
        <div className="flex justify-between mb-[1%]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            PHOTO GALLERY
          </h1>
          <div className="flex items-center font-semibold text-sm cursor-pointer hover:text-red-600">
            VIEW ALL{" "}
            <span className="text-xl">
              {" "}
              <MdArrowRightAlt />{" "}
            </span>
          </div>
        </div>

        <PhotoGallery items={gallery} />
      </section>
      {/* IPHOTO GALLERY end*/}

      {/* MEDIA KIT start*/}
      <section className="p-[4%] relative ">
        <div className="flex justify-between mb-[1%]">
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl">
            MEDIA KIT
          </h1>
        </div>

        <ul className=" w-full   flex gap-[2%] flex-wrap justify-center sm:justify-start items-center ">
          <li className="h-[80px] m-2 sm:h-[100px] w-[150px] sm:w-[180px] relative">
            <img className=" w-full h-full rounded-md" src={mk1} alt="img" />
            <div className="mediakitimg"></div>
          </li>

          <li className="h-[80px] m-2 sm:h-[100px] w-[150px] sm:w-[180px] relative">
            <img className=" w-full h-full rounded-md" src={mk2} alt="img" />
            <div className="mediakitimg"></div>
          </li>

          <li className="h-[80px] m-2 sm:h-[100px] w-[150px] sm:w-[180px] relative">
            <img className=" w-full h-full rounded-md" src={mk3} alt="img" />
            <div className="mediakitimg"></div>
          </li>
        </ul>
        <h1 className="w-full text-sm sm:text-xl md:text-2xl text-red-600 underline hover:no-underline flex justify-center mt-[2%] text-center hover:text-black cursor-pointer">
          GITEX GLOBAL BRAND GUIDELINES
        </h1>
      </section>
      {/* MEDIA KIT end*/}

      <section className="w-full flex justify-center items-center h-[200px] flex-col bg-black text-white py-[5%] gap-5">
        <h1 className="text-sm sm:text-xl md:text-2xl xl:text-3xl font-bold ">
          GET IN TOUCH
        </h1>
        <p className="text-sm sm:text-md text-center">
          Get in touch with GITEX Press Office at{" "}
          <span className="text-blue-400 cursor-pointer">press@dwtc.com</span>{" "}
          for media inquiries
        </p>
        <img className="md:w-[20%] cursor-pointer" src={social} alt="img" />
      </section>
      <div className="w-full h-[150px] bg-wihte flex justify-center items-center ">
        <Link to={"/"}>
          <button className="translate-btn rounded-md px-2">
            Back to Website
          </button>
        </Link>
      </div>
    </>
  );
}

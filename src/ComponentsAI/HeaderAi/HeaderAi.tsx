import React, { useEffect, useRef, useState } from "react";
import "./headerAi.css";
import MiniHeaderAI from "../MiniHeaderAI/MiniHeaderAI";
import { Link } from "react-router-dom";
export default function HeaderAi(): React.ReactElement {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.25,
    };
    const handleIntersection: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      });
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    if (elementRef.current) {
      observer.observe(elementRef?.current as Element);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <section
        ref={elementRef}
        className="large-index bg-black w-full h-[110px] px-[2%]  hidden lg:flex"
      >
        <div className="w-1/2 h-full flex items-center  ">
          <img
            className="h-[70%] "
            src="https://www.ai-everything.com/images/AIE-Logo_2024-White.png"
            alt=""
          />
        </div>
        <ul className="w-1/2 h-full flex justify-end gap-[2%]">
          <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
            EXHIBIT
          </li>
          <li className="visit text-white font-bold text-[14px] cursor-pointer h-full flex items-center relative">
            VISIT
            <ul className="visit-options">
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                WHY VISIT
              </li>
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                AGENDA
              </li>
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                EXHIBITORS
              </li>
            </ul>
          </li>
          <Link to={'/aispeakers'}>
          <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
            SPEAKERS
          </li>
          </Link>
          <li className="sectors text-white font-bold text-[14px] cursor-pointer h-full flex items-center relative">
            SECTORS
            <ul className="sectors-options">
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                CREATIVE ECONOMY
              </li>
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                GITEX YOUTHX
              </li>
              <Link to={'/aistartups'}>
              <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                STARTUPS
              </li>
              </Link>
            </ul>
          </li>
          <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
            ABOUT
          </li>
          <Link to={'/ainews'}>
          <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
            NEWS
          </li>
          </Link>
          <li className="flex items-center">
            <button className="ai-header-btn  btn-border-ai">
              <div className="btn-top-half"></div>
              <h1 className="btn-text">EXHIBIT 2024</h1>
              <div className="btn-bottom-half"></div>
            </button>
          </li>
        </ul>
      </section>
      {visible && (
        <section className="large-index bg-black w-full h-[110px] px-[2%]  hidden lg:flex fixed top-0 left-0">
          <div className="w-1/2 h-full flex items-center  ">
            <img
              className="h-[70%] "
              src="https://www.ai-everything.com/images/AIE-Logo_2024-White.png"
              alt=""
            />
          </div>
          <ul className="w-1/2 h-full flex justify-end gap-[2%]">
            <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
              EXHIBIT
            </li>
            <li className="visit text-white font-bold text-[14px] cursor-pointer h-full flex items-center relative">
              VISIT
              <ul className="visit-options">
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  WHY VISIT
                </li>
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  AGENDA
                </li>
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  EXHIBITORS
                </li>
              </ul>
            </li>
            <Link to={'/aispeakers'}>
            <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
              SPEAKERS
            </li>
            </Link>
            <li className="sectors text-white font-bold text-[14px] cursor-pointer h-full flex items-center relative">
              SECTORS
              <ul className="sectors-options">
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  CREATIVE ECONOMY
                </li>
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  GITEX YOUTHX
                </li>
                <Link to={'/aistartups'}>
                <li className="flex h-[40px] items-center pl-[10px] text-sm font-normal	border-b border-blue-300 text-stone-600">
                  STARTUPS
                </li>
                </Link>
              </ul>
            </li>
            <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
              ABOUT
            </li>
            <Link to={'/ainews'}>
            <li className="text-white font-bold text-[14px] cursor-pointer h-full flex items-center">
              NEWS
            </li>
            </Link>
            <li className="flex items-center">
              <button className="ai-header-btn  fixed-btn-border-ai">
                <div className="btn-top-half"></div>
                <h1 className="btn-text">EXHIBIT 2024</h1>
                <div className="btn-bottom-half"></div>
              </button>
            </li>
          </ul>
        </section>
      )}

      <MiniHeaderAI />
    </>
  );
}

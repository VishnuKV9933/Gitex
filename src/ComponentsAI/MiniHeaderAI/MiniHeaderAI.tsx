import React, { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./miniheaderai.css";
import AIToggle from "../AIToggle/AIToggle";
export default function MiniHeaderAI(): React.ReactElement {
  const [toggle, setToggleOpen] = useState(false);

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
        className="large-index bg-black h-[100px] w-full lg:hidden flex items-center px-[2%] justify-between"
      >
        <img
          className="h-[70%] max-h-[60px] w-[50%] max-w-[170px]"
          src="https://www.ai-everything.com/images/AIE-Logo_2024-White.png"
          alt="logo"
        />

        <div className="flex items-center gap-[20px]">
          <button className="ai-header-btn  btn-border-ai hidden sm:block">
            <div className="btn-top-half"></div>
            <h1 className="btn-text">EXHIBIT 2024</h1>
            <div className="btn-bottom-half"></div>
          </button>

          <div
            onClick={() => setToggleOpen(true)}
            className="w-[50px] h-[50px] border-2 border-white flex justify-center items-center text-white"
          >
            <div className="text-2xl">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </section>


      {/* fixed */}
     {visible && (<section
        ref={elementRef}
        className="large-index bg-black h-[100px] w-full lg:hidden flex items-center px-[2%] justify-between fixed top-0 left-0"
      >
        <img
          className="h-[70%] max-h-[60px] w-[50%] max-w-[170px]"
          src="https://www.ai-everything.com/images/AIE-Logo_2024-White.png"
          alt="logo"
        />

        <div className="flex items-center gap-[20px]">
          <button className="ai-header-btn fixed-btn-border-ai hidden sm:block">
            <div className="btn-top-half"></div>
            <h1 className="btn-text">EXHIBIT 2024</h1>
            <div className="btn-bottom-half"></div>
          </button>

          <div
            onClick={() => setToggleOpen(true)}
            className="w-[50px] h-[50px] border-2 border-white flex justify-center items-center text-white"
          >
            <div className="text-2xl">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
      </section>)}
      <AIToggle toggle={toggle} setToggleOpen={setToggleOpen} />
    </>
  );
}

// MouseMoveEffect.tsx

import React, { useState } from "react";
import "./MouseMoveEffect.css";

const MouseMoveEffect: React.FC = () => {
  const [transformValue, setTransformValue] = useState<string>("");

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    const rotationValue = 15;
    const newTransformValue = `rotateX(${y * rotationValue}deg) rotateY(${
      x * rotationValue
    }deg)`;

    setTransformValue(newTransformValue);
  };

  return (
    
    <div className="container-mousemove w-full" onMouseMove={handleMouseMove}>
      <div className="wrapper-mousemove h-[400px] sm:h-[300px] md:h-[350px] flex w-full   flex-col sm:flex-row">
        
      

        <div className="w-full h-[200px] sm:w-1/2  h-full bg-black text-white p-[5%] font-bold flex flex-col justify-center">
        <h1 className="sm:text-2xl md:text-3xl">AI IS HERE TO STAY...</h1>
          <p className="sm:text-3xl md:text-4xl mt-4 ">THE LARGEST AI</p>
          <p className="sm:text-3xl md:text-4xl mb-4">EVENT IN THE WORLD.</p>
          <div className="flex items-center">
            <button className="ai-header-btn  btn-border-ai">
              <div className="btn-top-half"></div>
              <h1 className="btn-text">EXHIBIT 2024</h1>
              <div className="btn-bottom-half"></div>
            </button>
          </div>
        </div>
        <div className="w-ful l h-[200px] sm:w-1/2  h-full bg-black">
        <img
            id="movingImage"
            className="w-full h-[200px] sm:h-full bg-black"
            src="https://www.ai-everything.com/images/MainBanner_.png"
            alt="Moving Image"
            style={{ transform: transformValue }}
          />
        </div>


      </div>
    </div>
  );
};

export default MouseMoveEffect;

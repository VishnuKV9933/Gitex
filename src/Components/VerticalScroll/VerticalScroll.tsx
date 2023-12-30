import React, { useRef, useState } from "react";
import "./VerticalScroll.css";
import { Person } from "../../Types";
import PersonCard from "../PersonCard/PersonCard";

interface VerticalScrollProp {
  persons: Person[];
}

export default function VerticalScroll({
  persons,
}: VerticalScrollProp): React.ReactElement {
  const elemRef = useRef<HTMLDivElement | null>(null);
  const [isMouseDawn, setMouseDown] = useState(false);
  const [startY, setStartY] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  function handleMouseDawn(e: React.MouseEvent<HTMLDivElement>) {
    console.log("mousedawn");

    setMouseDown(true);
    if (elemRef.current) {
      console.log((e.pageY - elemRef.current.offsetTop) as number, "setStartY");
      console.log(elemRef.current?.scrollWidth, "setScrollTop");
      setStartY((e.pageY - elemRef.current.offsetTop) as number);
      setScrollTop(elemRef.current?.scrollTop);
    }
  }

  function handleMouseLeave(
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) {
    setMouseDown(false);
  }

  function handleMouseUp() {
    setMouseDown(false);
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!isMouseDawn) return;
    e.preventDefault();
    if (elemRef.current) {
      const x = e.pageY - elemRef.current?.offsetTop;
      const walk = x - startY;
      elemRef.current.scrollTop = scrollTop - walk;
    }
  }

  return (
    <div
      onMouseDown={handleMouseDawn}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      ref={elemRef}
      className="vertical-scroll bg-blue-300 w-[140px] sm:w-[170px] md:w-[250px] h-[400px] sm:h-[600px]  md:h-[700px] overflow-y-auto "
    >
      {persons.map((elem, index) => {
        return (
          <div
            key={index}
            className=" bg-blue-300 mt-3"
            style={{ height: "fit-content" }}
          >
            <PersonCard person={elem} />
          </div>
        );
      })}
    </div>
  );
}

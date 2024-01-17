import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import "./VerticalScroll.css";
import { Person } from "../../Types";
import PersonCard from "../PersonCard/PersonCard";

interface VerticalScrollProp {
  persons: Person[];
}

export default function VerticalScroll({
  persons,
}: VerticalScrollProp): React.ReactElement {
  
  const carouselRef = useRef<HTMLUListElement | null>(null);
  const elemRef = useRef<HTMLLIElement | null>(null);
   const [isMouseDawn,setMouseDown]=useState(false)
      const [startY,setStartY]=useState(0)
      const [scrollTop,setScrollTop]=useState(0)

      const [cardPerView,setCardPerView] = useState(0)
      const [firstCardHeight,setFirstCardHeight] =  useState(0)
      const [carouselChildren, setCarouselChildren] = useState<Element[] | null>(null);
      useLayoutEffect(()=>{
        setCarouselChildren(
            () => {
                const children = carouselRef.current?.children;
                return children ? [...children] : [];}
        )
    },[])

    useLayoutEffect(()=>{
      if(elemRef.current){
        console.log(elemRef.current.offsetHeight,"elemRef.current.offsetWidth");
        
          setFirstCardHeight(elemRef.current.offsetHeight)
      }
  
  
  },[elemRef.current?.offsetWidth])

  useLayoutEffect(()=>{
    if(carouselRef.current){
        let cardView =Math.round(carouselRef?.current?.offsetWidth / firstCardHeight)
        // setCardPerView(cardView)
        setCardPerView(5)
    }
},[])


useEffect(()=>{

  function insetCopiesToTop(){

    // console.log("evidekeri",carouselChildren);
      if(carouselChildren){
        carouselChildren.slice(-cardPerView).reverse().forEach((elem)=>{
      
            
            carouselRef.current?.insertAdjacentHTML('afterbegin',elem.outerHTML)
        })
      }
      
      
  }

  function insetCopiesToEnd(){
      if(carouselChildren){

        carouselChildren.slice(0,cardPerView).forEach((elem)=>{
            
            carouselRef.current?.insertAdjacentHTML('beforeend',elem.outerHTML)

     
        })
      }
  }

  insetCopiesToTop()
  insetCopiesToEnd()
},[carouselChildren])


useEffect(()=>{
  carouselRef.current?.addEventListener('scroll',infinitescroll)
  return ()=>{
      carouselRef.current?.removeEventListener('scroll',infinitescroll)
  }
},[])

function infinitescroll(){
console.log("kerri");


console.log(carouselRef.current?.scrollTop,"carouselRef.current?.scrollTop");
  
 if(carouselRef.current&&elemRef?.current?.offsetTop){
        
        
      if(carouselRef.current?.scrollTop===0){
        console.log("top");
        
          carouselRef.current.classList.add('no-transition')
          carouselRef.current.scrollTop=(2*(carouselRef?.current?.offsetHeight)+(elemRef.current.offsetHeight))
     
       
          carouselRef.current.classList.remove('no-transition')
      }else if(carouselRef.current?.scrollTop ===
        carouselRef.current?.scrollHeight - carouselRef.current?.offsetHeight){

        console.log("bottom-end");
        
          carouselRef.current.classList.add('no-transition')
          carouselRef.current.scrollTop=((carouselRef?.current?.offsetHeight)+(elemRef.current.offsetHeight))
          carouselRef.current.classList.remove('no-transition')
      }
  }


}

    // mouse controll

    function handleMouseDawn(e: React.MouseEvent<HTMLUListElement>){
      setMouseDown(true)
      if (carouselRef.current) {
        carouselRef.current.classList.add("dragging")
          setStartY(e.pageY - carouselRef.current.offsetTop as number);
          setScrollTop(carouselRef.current?.scrollTop)
        }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLUListElement>|React.TouchEvent<HTMLUListElement>){
      setMouseDown(false)

  }

  function handleMouseUp(){
      setMouseDown(false)
      if(carouselRef.current){
        carouselRef.current.classList.remove('dragging')
      }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLUListElement>){
      if(!isMouseDawn) return
      e.preventDefault()
      if (carouselRef.current) {

          const y =e.pageY-carouselRef.current?.offsetTop;
          const walk = (y-startY)
          carouselRef.current.scrollTop=scrollTop-walk
      }

  }

  return (
    <div

      className="wrapper-v-slider w-[200px] h-[400px] sm:h-[450px] md:h-[500px] mt-3 "
    >
      <ul
      ref={carouselRef}
      onMouseDown={handleMouseDawn}
      onMouseLeave={handleMouseLeave}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
       className="carousel-v-slider h-full w-full">

        {/* <li
        ref={elemRef}
        className="card-v w-full bg-black"></li>
        <li className="card-v w-full bg-blue-300"></li>
        <li className="card-v w-full bg-green-400"></li>
        <li className="card-v w-full bg-yellow-400"></li>
        <li className="card-v w-full bg-red-600"></li> */}

      {persons.map((elem, index) => {
        return (
          <li
          ref={elemRef}
            key={index}
            className="card-v overflow-hidden  w-full"
            // style={{ height: "fit-content" }}
          >
            <PersonCard person={elem} />
          </li>
        );
      })}

       </ul>
    </div>
  );
}

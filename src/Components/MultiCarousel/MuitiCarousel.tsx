import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import './multicarousel.css'
export default function MuitiCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const elemRef = useRef<HTMLDivElement | null>(null);
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
        setCardPerView(2)
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
          carouselRef.current.scrollTop=(2*(carouselRef?.current?.offsetHeight))
     
       
          carouselRef.current.classList.remove('no-transition')
      }else if(carouselRef.current?.scrollTop ===
        carouselRef.current?.scrollHeight - carouselRef.current?.offsetHeight){

        console.log("bottom-end");
        
          carouselRef.current.classList.add('no-transition')
          carouselRef.current.scrollTop=((carouselRef?.current?.offsetHeight))
          carouselRef.current.classList.remove('no-transition')
      }
  }


}

    // mouse controll

    function handleMouseDawn(e: React.MouseEvent<HTMLDivElement>){
      setMouseDown(true)
      if (carouselRef.current) {
        carouselRef.current.classList.add("dragging")
          setStartY(e.pageY - carouselRef.current.offsetTop as number);
          setScrollTop(carouselRef.current?.scrollTop)
        }
  }

  function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>|React.TouchEvent<HTMLDivElement>){
      setMouseDown(false)

  }

  function handleMouseUp(){
      setMouseDown(false)
      if(carouselRef.current){
        carouselRef.current.classList.remove('dragging')
      }
  }

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>){
      if(!isMouseDawn) return
      e.preventDefault()
      if (carouselRef.current) {

          const y =e.pageY-carouselRef.current?.offsetTop;
          const walk = (y-startY)
          carouselRef.current.scrollTop=scrollTop-walk
      }

  }
  return (
    <section className='multic-container p-[5%] flex flex-col justify-around items-start relative'>
     
     <h1 className='font-bold text-white sm:text-xl md:text-2xl lg:text-4xl max-w-[70%]  relative '>Tackling 2024’s toughest tech challenges and controversies</h1>
    
    <div className='multi-wrapper w-full'>
      <div
        ref={carouselRef}
        onMouseDown={handleMouseDawn}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
       className='multi-carousel w-full h-[400px]  md:h-[350px] max-w-[90%] m-auto'>
        <div ref={elemRef}
         className="multi-card grid grid-cols-2 md:grid-cols-6 gap-4   w-full h-full p-[2%] border-l-2 border-white">
              <div className='card-item col-span-1 red-boxeffect text-center'> Future of mobility</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Generative AI</div>
              <div className='card-item col-span-1 red-boxeffect text-center' >Immersive reality technologies</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Industrialising machine learning</div>
              <div className='card-item col-span-1 red-boxeffect text-center'> Quantum technologies</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Web 3.0</div>
        </div>
        <div className="multi-card grid grid-cols-2 md:grid-cols-6 gap-4  w-full h-full p-[2%] border-l-2 border-white">
              <div className='card-item col-span-1 red-boxeffect text-center'>Advanced connectivity</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Cloud & edge computing</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Immersive reality technologies</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Industrialising machine learning</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Quantum technologies</div>
              <div className='card-item col-span-1 red-boxeffect text-center'>Electrification & renewables</div>
        </div>
      </div>
    </div>

    <div className="card-effect w-full h-full "></div>
    </section>
  )
}

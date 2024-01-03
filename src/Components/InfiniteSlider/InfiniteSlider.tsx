import React, { useEffect, useRef, useState } from 'react'
import './infiniteslider.css'
import { latestNews } from "../../Constants/constants";

export default function InfiniteSlider():React.ReactElement {
    const elemRef = useRef<HTMLDivElement | null>(null);
    const carouselRef = useRef<HTMLDivElement | null>(null);
    const [animation,setAnimation]=useState(false)
    const [isMouseDawn,setMouseDown]=useState(false)
    const [startX,setStartX]=useState(0)
    const [scrollLeft,setScrollLeft]=useState(0)
    const [cardPerView,setCardPerView] = useState(0)

    const [firstCardWidth,setFirstCardWidth] =  useState(0)
   
    const [carouselChildren, setCarouselChildren] = useState<Element[] | null>(null);

    useEffect(()=>{
        setCarouselChildren(
            () => {
                const children = carouselRef.current?.children;
                console.log(carouselRef.current,'children');
                
                return children ? [...children] : [];}
        )
    },[])

    useEffect(()=>{
        if(carouselRef.current){
            let cardView =Math.round(carouselRef?.current?.offsetWidth / firstCardWidth)
            setCardPerView(cardView)
        }
    },[])

    useEffect(()=>{
        function insetCopiesToBegining(){
            if(carouselChildren)
            carouselChildren.slice(-cardPerView).reverse().forEach((elem)=>{
                console.log("iii");
                
                carouselRef.current?.insertAdjacentHTML('afterbegin',elem.outerHTML)
            })
        }

        function insetCopiesToEnd(){
            if(carouselChildren)
            carouselChildren.slice(0,cardPerView).reverse().forEach((elem)=>{
                console.log("ooo");
                carouselRef.current?.insertAdjacentHTML('beforeend',elem.outerHTML)
            })
        }

        insetCopiesToBegining()
        insetCopiesToEnd()
    },[carouselChildren])

  
    

    useEffect(()=>{
            if(elemRef.current){
                setFirstCardWidth(elemRef.current.offsetWidth)
            }


    },[elemRef.current?.offsetWidth])


    useEffect(()=>{
        carouselRef.current?.addEventListener('scroll',infinitescroll)
        return ()=>{
            carouselRef.current?.removeEventListener('scroll',infinitescroll)
        }
    },[])

   function infinitescroll(){
       if(carouselRef.current){
       


            if(carouselRef.current?.scrollLeft===0){
                carouselRef.current.classList.add('no-transition')
                carouselRef.current.scrollLeft=(2*carouselRef?.current?.offsetWidth)
                carouselRef.current.classList.remove('no-transition')
            }else if(carouselRef.current?.scrollLeft=== carouselRef?.current?.scrollWidth-carouselRef?.current?.offsetWidth){
                carouselRef.current.classList.add('no-transition')
                carouselRef.current.scrollLeft=carouselRef?.current?.offsetWidth
                carouselRef.current.classList.remove('no-transition')
            }
        }

  
   }
    

    function handleMouseDawn(e: React.MouseEvent<HTMLDivElement>){
        setMouseDown(true)
        if (carouselRef.current) {
            
            setStartX(e.pageX - carouselRef.current.offsetLeft as number);
            setScrollLeft(carouselRef.current?.scrollLeft)
          }
    }

    function handleMouseLeave(e: React.MouseEvent<HTMLDivElement>|React.TouchEvent<HTMLDivElement>){
        setMouseDown(false)

    }

    function handleMouseUp(){
        setMouseDown(false)
    }

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>){
        if(!isMouseDawn) return
        e.preventDefault()
        if (carouselRef.current) {

            const x =e.pageX-carouselRef.current?.offsetLeft;
            const walk = (x-startX)
            // setWalk(x-startX)
            carouselRef.current.scrollLeft=scrollLeft-walk
        }

    }
    
  return (<>
<div
ref={carouselRef}
 onMouseDown={handleMouseDawn}
 onMouseLeave={handleMouseLeave}
 onMouseUp={handleMouseUp}
 onMouseMove={handleMouseMove}
className='horizontal-scroll-container h-[300px] sm:h-[400px] md:h-[500px]  pb-[5%]'>
    
  {latestNews.map((elem,index)=>{

    return(
        <div
        key={index}
        ref={elemRef}
        onMouseOver={()=>{setAnimation(true)}}
        onMouseLeave={()=>setAnimation(false)}
     className='ml-[ 2%] shadow-md relative scroll-element overflow-hidden rounded-2xl w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-full '>
      <div className='h-scroll-animation relative w-full h-[50%] flex justify-center items-center '>
                   {/* animation content start*/}
                    <div className={`${animation?'h-scroll-animation-elem-hover':'h-scroll-animation-elem'} `}> </div>
                     {/* animation content end*/}
      <img className='w-full h-full absolute' src={elem.img} alt="img" />
      </div>
        <div className='h-scroll-content'>{elem.content}</div>
        <div className='w-full h-[50%] p-[5%] bg-white flex flex-col justify-between'>
            <h1  className='h-scroll-discription text-blue-900 font-semibold text-sm'>{elem.discription}</h1>
            <button className='h-scroll-viewMore w-full text-stone-600 font-semibold bg-stone-200 hover:bg-stone-300 p-[2%]'>View More</button>
        </div>
    </div>
    )
  })}
</div>
  
  
  </>
  )
}

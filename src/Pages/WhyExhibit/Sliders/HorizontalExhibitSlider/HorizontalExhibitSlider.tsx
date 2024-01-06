
import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styles from './hscroll.module.css'
type TimerType = ReturnType<typeof setInterval> | null;
export default function HorizontalExhibitSlider({children}:any):React.ReactElement {
  
  const [autoRun,setAutoRun]=useState(true)
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervelRef =  useRef<TimerType>(null);
  const [current,setCurrent] = useState(1)
  const [translateX,setTranslateX] = useState(0)

  // mouser movement
  const [isMouseDawn,setMouseDown]=useState(false)
  const [startX,setStartX]=useState(0)
    const [scrollLeft,setScrollLeft]=useState(0)


    const actionHandler =useCallback((mode:string)=>{
   
        if (containerRef.current) {
            containerRef.current.style.transitionDuration='500ms'
        }

        if(mode==='prev'){
            if(current<=1){
                setTranslateX(0)
                setCurrent(children.length)
            }else{
                if (containerRef.current) {
                    setTranslateX(containerRef.current.clientWidth*(current-1))
                    setCurrent((prev)=> --prev);
                  
                  }
            }
        }else if(mode==='next'){
            if(current>=children.length){
                if (containerRef.current) {

                    setTranslateX(containerRef.current.clientWidth*(children.length+1))
                }
                setCurrent(1);
            }else{
                if (containerRef.current) {
                    setTranslateX(containerRef.current.clientWidth*(current+1))
                    setCurrent((prev)=> ++prev);
                  
                  }
            }
        }
    },[current,children])


      // for autoplay effect

      useEffect(()=>{

        if(autoRun){

            if(intervelRef.current){
                clearInterval(intervelRef.current)
            }
    
            intervelRef.current = setInterval(()=>{
                // actionHandler('next')
            },2000)
            return ()=>{
                if(intervelRef.current){
                    clearInterval(intervelRef.current)
                }
        
            }
        }

    },[actionHandler])



    //  this is for infinite scroll smooth effect
    useEffect(()=>{
        const transitionEnd=()=>{
if(current<=1){
    if (containerRef.current) {

        containerRef.current.style.transitionDuration='0ms'
        setTranslateX(containerRef.current?.clientWidth*current)
    }
}

if(current>=children.length){
    if (containerRef.current) {

        containerRef.current.style.transitionDuration='0ms'
        setTranslateX(containerRef.current?.clientWidth*children.length)
    }
}
        }
        document.addEventListener('transitionend',transitionEnd)

        return ()=>{
            document.removeEventListener('transitionend',transitionEnd)
        }

    },[current,children])


    const slides= useMemo(()=>{
        if(children!.length>1){

           
            let items = children.map((child:any,index:number)=>(
                <li key={index} className={styles.Slide}>
                    {child}
                </li> ));

                return [
                    <li key={children.length +1 } className={styles.Slide}>
                        {children[children.length -1]}
                    </li>,
                    ...items,
                    <li key={children.length +2 } className={styles.Slide}>
                        {children[0]}
                    </li>
                ]
        }

        return  <li  className={styles.Slide}> {children[0]} </li>

    },[children])



    useLayoutEffect(()=>{
        if (containerRef.current) {
            setTranslateX(containerRef.current.clientWidth*current)
          }
       
    },[])



  // mouse movement
  function handleMouseDawn(e: React.MouseEvent<HTMLDivElement>){
      
      setMouseDown(true)
      if (containerRef.current) {
          
          
        setStartX(e.pageX - containerRef.current.offsetLeft as number);
        
        
        setScrollLeft(containerRef.current?.scrollLeft)
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
  if (containerRef.current) {

      const x =e.pageX-containerRef.current?.offsetLeft;
      const walk = (x-startX)
      containerRef.current.scrollLeft=scrollLeft-walk

      
      
      
  }

}

  return (
    <section className={styles.Root}>
    <div
    
    //   onMouseDown={handleMouseDawn}
    //   onMouseLeave={handleMouseLeave}
    //   onMouseUp={handleMouseUp}
    //   onMouseMove={handleMouseMove}
    ref={containerRef}
    className={styles.Container}
// className='flex w-full h-full '
    style={{transform:`translate3d(${-translateX}px,0,0)`}}>
        {slides}
    </div>
        
</section>
  )
}

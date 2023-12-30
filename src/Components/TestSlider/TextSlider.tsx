import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import styles from './textSlider.module.css'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
type TimerType = ReturnType<typeof setInterval> | null;

export default function TextSlider({children}:any):React.ReactElement {
    const [autoRun,setAutoRun]=useState(true)
    const containerRef = useRef<HTMLUListElement | null>(null);
    const intervelRef =  useRef<TimerType>(null);
    const [current,setCurrent] = useState(1)
    const [translateX,setTranslateX] = useState(0)


    
    useEffect(()=>{
        console.log('0',current,"curr",translateX,'tr');
    },[])
    const actionHandler =useCallback((mode:string)=>{

   
        if (containerRef.current) {
            containerRef.current.style.transitionDuration='800ms'
        }

        if(mode==='next'){
            if(current<=1){
                console.log('1',current,"curr",translateX,'tr');
                
                setTranslateX(0)
                setCurrent(children.length)
                console.log('2',current,"curr",translateX,'tr');
            }else{
                console.log('3',current,"curr",translateX,'tr');
                if (containerRef.current) {
                    console.log(containerRef.current.clientWidth,'wd');
                    setTranslateX(containerRef.current.clientWidth*(current-1))
                    setCurrent((prev)=> --prev);
                    console.log('4',current,"curr",translateX,'tr');
                  }
            }
        }else if(mode==='prev'){
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

//  this is for infinite scroll smooth effect
    useEffect(()=>{
        const transitionEnd=()=>{
            console.log('transition end');
            
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

    // for autoplay effect

    useEffect(()=>{

        if(autoRun){

            if(intervelRef.current){
                clearInterval(intervelRef.current)
            }
    
            intervelRef.current = setInterval(()=>{
                actionHandler('next')
            },2000)
            return ()=>{
                if(intervelRef.current){
                    clearInterval(intervelRef.current)
                }
        
            }
        }

    },[actionHandler])

    const slides= useMemo(()=>{
        if(children!.length>1){

           
            let items = children.map((child:any,index:number)=>(
                <li key={index} className={styles.Slide}>
                    {child}
                </li> ));

                return [
                    <li style={{opacity:"o.2"}} key={children.length +1 } className={styles.Slide}>
                        {children[children.length -1]}
                    </li>,
                    ...items,
                    <li style={{opacity:"2"}} key={children.length +2 } className={styles.Slide}>
                        {children[0]}
                    </li>
                ]
        }

        return  <li  className={styles.Slide}> {children[0]} </li>

    },[children])

    //  position first element correctly & this will render only once 

    useLayoutEffect(()=>{
        if (containerRef.current) {
            setTranslateX(containerRef.current.clientWidth*current)
          }
       
    },[])



    return (
        <section className={styles.Root}>
        <ul
        ref={containerRef}
        className={styles.Container}
        style={{transform:`translate3d(${-translateX}px,0,0)`}}>
            {slides}
        </ul>
            <button onClick={() =>{
                 actionHandler('next')
               setAutoRun(false)
                 }} className={`${styles.Btn}  right-[150px]`}>
                    <FaArrowLeftLong/>
                    </button>
            <button onClick={() =>{
                 actionHandler('prev')
                 setAutoRun(false)
                 }} className={`${styles.Btn}  right-[50px]`}>
                    <FaArrowRightLong/>
                    </button>
    </section>
  )
}

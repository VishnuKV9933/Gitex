import React, { useEffect, useRef, useState } from 'react'
import './HorizontalScroll.css'
import HscrollElem from './HscrollElem';
import { latestNews } from "../../Constants/constants";
type Element = {
     img: string,
     content: string,
     discription: string,
     };
export default function HorizontalScroll():React.ReactElement {
    const elemRef = useRef<HTMLDivElement | null>(null);
    const [isMouseDawn,setMouseDown]=useState(false)
    const [startX,setStartX]=useState(0)
    const [scrollLeft,setScrollLeft]=useState(0)
    const [entry, setEntry] = useState<IntersectionObserverEntry[] | null>([]);
    const [scrollX,setScrollX]=useState(0)
    const [scrollDirection,setScrollDirection]=useState('')
    const [walk,setWalk]=useState(0)


    // const [moveleft]
    
  

  
    const [elemts,setElements]=useState(latestNews)

    function handleMouseDawn(e: React.MouseEvent<HTMLDivElement>){
        setMouseDown(true)
        if (elemRef.current) {
            
            setStartX(e.pageX - elemRef.current.offsetLeft as number);
            setScrollLeft(elemRef.current?.scrollLeft)
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
        if (elemRef.current) {

            const x =e.pageX-elemRef.current?.offsetLeft;
            // const walk = (x-startX)
            setWalk(x-startX)
            elemRef.current.scrollLeft=scrollLeft-walk


       
            
        }

    }
    
    let lastChild = elemRef.current?.children[elemRef.current?.children.length - 2]
    let firstChild = elemRef.current?.children[1]

// setting up scroll position approximate center
    useEffect(()=>{
        if (elemRef.current) {
            const elementWidth = elemRef.current.offsetWidth;
          
            // console.log('Element Width:', elementWidth,elemRef.current.scrollLeft);

            if(elementWidth>700){

                elemRef.current.scrollLeft=elementWidth/2
            }else if(elementWidth>350){
                elemRef.current.scrollLeft=elementWidth
            }else{
                elemRef.current.scrollLeft=2*elementWidth
            }
        }
    },[elemRef?.current?.offsetWidth])

useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };
       

    const handleIntersection: IntersectionObserverCallback = (entries) => {
        // console.log("hhhhh",entries);
        setEntry(entries)
        entries.forEach((entry,index) => {
            let previous
           
            const isFirstChild = entry.target === elemRef.current?.children[1];
            const isLastChild = entry.target === elemRef.current?.children[elemRef.current?.children.length - 2];      // Check if the entry is the first or last element in the array
            if (entry.isIntersecting) {
             

                if(isFirstChild){
                    setEele()
                }

                // setScrollX(elemRef.current?.scrollLeft ?? 0)

                // setEele()
                
              
            }else{
              
            }
                

        });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    // Observe the first and last elements
    if (elemRef.current) {
       
        // const childrenArray = [...elemRef.current.children];

        // childrenArray.forEach((child) => {
        //     observer.observe(child);
        //   });


       observer.observe(elemRef.current?.children[1]);
observer.observe(elemRef.current?.children[elemRef.current?.children.length - 2]!);

    }

    return () => {
        observer.disconnect();
    };
}, [lastChild,firstChild]); // Ensure this effect runs only once when the component mounts

useEffect(()=>{
  
   
    if(elemRef?.current?.scrollLeft){

        if(scrollX>elemRef?.current?.scrollLeft){
            setScrollDirection('left')
            scrollLeft()
           
        }else if(scrollX<elemRef?.current?.scrollLeft){
            setScrollDirection('right')
            scrollRight()
        }
    }
    function scrollLeft(){
        console.log("left");
        setElements((prev)=>{
            return[ {img:"https://gitex.com/Uploads// Posts/news/dubai-rts.jpg",
            content:"rrrrrr ",
            discription:" GITEX GLOBAL, Expand North Star 2023 centre worlds attention on booming AI economy "        
             },...prev]

            })
            if (elemRef.current) {
                // Get the current scrollLeft value
                const currentScrollLeft = elemRef.current.scrollLeft;
                // Add 500px to the current scrollLeft value
                const newScrollLeft = currentScrollLeft + (400);
                console.log(elemRef.current.scrollLeft,"elemRef.current.scrollLeft");
                
                // Set the updated scrollLeft value
                elemRef.current.scrollLeft = newScrollLeft;
                console.log(elemRef.current.scrollLeft,"elemRef.current.scrollLeft");
                // setWalk(prev=>prev-500)
                // setScrollLeft(prev=>prev-500)
              }
    }
    
    function scrollRight(){
        console.log("right");
       

    }
    
    
},[entry])


const setEele=()=>{


    setElements((prev)=>{
        
       
        
        return[ {img:"https://gitex.com/Uploads//Posts/news/dubai-rts.jpg",
        content:"Press ",
        discription:" GITEX GLOBAL, Expand North Star 2023 centre worlds attention on booming AI economy "        
         },...prev]
    })
    if (elemRef.current) {
        // Get the current scrollLeft value
        const currentScrollLeft = elemRef.current.scrollLeft;
  
        // Add 500px to the current scrollLeft value
        const newScrollLeft = currentScrollLeft + 500;
  
        // Set the updated scrollLeft value
        elemRef.current.scrollLeft = newScrollLeft;
      }
}


  return (
    <>

    <button onClick={setEele} className='bg-red-400'>fkdsfkdsfklj</button>

    <div
    onMouseDown={handleMouseDawn}
    onMouseLeave={handleMouseLeave}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
     ref={elemRef} className='horizontal-scroll-container h-[300px] sm:h-[400px] md:h-[500px]  pb-[5%]  '>
        
        {
            elemts.map((elem:Element,index)=>{
                return( 
                    <HscrollElem key={index} elem={elem }/>
                )
            })
        }
    </div>
    </>
  )
}

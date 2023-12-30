import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LATEXTNEWS } from "../../Types";
import { latestNews } from "../../Constants/constants";
import HscrollElem from "../HorizontalScroll/HscrollElem";



// interface HorizontalCarouselProps {
//     items: LATEXTNEWS[];
//   }
  


export default function MuitiCarousel ():React.ReactElement{


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 1500, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


 return(
    <Carousel 
    itemClass="bg-stone-200 mb-2 h-[280px] sm:h-[340px] md:h-[400px] flex gap-5"
    arrows={false} 
    infinite={true}
    responsive={responsive}>
       

    {latestNews.map((elem,index)=>{
        return(
            <HscrollElem key={index} elem={elem }/>
        )
    })}
       
  </Carousel>
 )
}

import { YoutubeVideo } from "../YoutubeVideo/YoutubeVideo";
export default function Gallery(): React.ReactElement {



  return (
    <>
      <div className="px-[5%] grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 text-base sm:text-lg md:text-xl font-semibold h-auto  text-stone-500">
          <p>
            <span className="font-bold text-stone-600">GITEX GLOBAL</span> 2023
            was a monumental success, creating a platform for the world to
            connect, innovate and forge lasting international partnerships.
          </p>
          <p>
            The world witnessed AI's full potential and strength, being
            harnessed{" "}
            <span className="font-bold text-stone-600">Expand North</span> by
            the startups in Star's new venue Dubai Harbour, to the world's
            largest companies utilizing AI today at GITEX GLOBAL.
          </p>
          <p>
            Now we look forward to the future,{" "}
            <span className="font-bold text-stone-600">
              {" "}
              building upon the global momentum{" "}
            </span>{" "}
            of co-located show GITEX AFRICA, 29 - 31 May 2024, and the mega
            announcement of GITEX EUROPE, 21 - 23 May 2025 - connecting global
            tech communities.
          </p>
          <p>
            GLOBAL returns on 14 - 18 October 2024, Dubai - bigger, better,
            bolder.
          </p>
        </div>
        
         <YoutubeVideo/>
   
      </div>


            <div  className="px-[5%] grid grid-cols-1 md:grid-cols-5 grid-rows-[200px,200px,200px,200px,200px,200px,200px] md:grid-rows-[150px,150px] gap-2 mt-6">
                
                <div className="col-span-1 md:col-span-2 md:row-span-2 row-span-1"><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/leftimg.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img06.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img01.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img02.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img03.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img04.jpg" alt="img" /></div>
                <div className="col-span-1 "><img className="w-full h-full" src="https://gitex.com/contents/Theme-3/images/gallery/G-img05.jpg" alt="img" /></div>

            </div>

    </>
  );
}

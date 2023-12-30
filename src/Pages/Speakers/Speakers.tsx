import React, {  useRef, useState } from 'react'
import banner from "../../assets/speakerbanner.png"
import './speakers.css'
import { IoSearch } from "react-icons/io5";
import { persons } from '../../Constants/constants';
import PersonCard from '../../Components/PersonCard/PersonCard';
import { Person } from '../../Types';
import FixedHead from '../../Components/FixedHead/FixedHead';

export default function Speakers():React.ReactElement {
  const [people,setPeople]= useState(persons)
  // const [containerWidth,setContainerWidth] = useState(0)
  // const [itemsGap,setItemsGap]=useState(0)
  // const [containerPaddingX,setContainerPaddingX]  = useState(0)
  const [searchData,setSearchData] =useState<string>('')
  const Letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',"All"];
  
  const containerRef=useRef<HTMLDivElement>(null);

  const setPersons=(letter:string)=>{

    if(letter==='All') return  setPeople(persons)
      

   let newPersons:Person[] =persons.filter((person)=>{
           return person.name[0].toUpperCase()===letter
    })
    setPeople(newPersons)
  }

  function searchPersons(): void {

     if(searchData.trim()!==""){

       const lowerCaseSearch = searchData.toLowerCase();
     let   newPeople:Person[]  = persons.filter((person) =>
           person.name.toLowerCase().includes(lowerCaseSearch) ||
           person.country.toLowerCase().includes(lowerCaseSearch) ||
           person.company.toLowerCase().includes(lowerCaseSearch)
       );
   
       setPeople(newPeople)
     }

  }

  // useEffect(()=>{

  //   if(containerRef.current){
  //     setContainerWidth(containerRef.current.clientWidth)
  //   }
  //   let itemsInRow:number; 
  //   let itemsInRowsecond:number; 
  //   let gap=20
  //   let totalGap
  //   const paddingCalculater=()=>{

  //      itemsInRow =Math.floor((containerWidth)/300)
       
       
  //      totalGap =(itemsInRow-1)*gap

  //     //  console.log(totalGap,"gap");
  //      itemsInRowsecond= Math.floor((containerWidth-totalGap)/300)

  //      if(itemsInRow===itemsInRowsecond){

  //       if(containerRef.current){
        
  //        let paddingx= containerRef.current.clientWidth-(itemsInRowsecond*300)-totalGap
  //        setcontainerPaddingX(paddingx)
  //        setItemsGap(gap)
  //       }
  //         return
  //      }else{
  //       setContainerWidth(containerWidth-totalGap)
  //       paddingCalculater()
  //      }
  //   }

  //   paddingCalculater()
    
  // },[containerWidth])




  return (
    <div className='relative speaker-container '>
           {/* <TopHome/> */}
           <FixedHead/>
           <img className='speaker-banner w-full h-[300px]' src={banner} alt="img" />
        <ul className='w-full flex gap-1 px-[2%] pt-[2%] pb-[3px] flex-wrap justify-center items-center  '>
          {
            Letters.map((elem,index)=>{
              return(
                <li onClick={(e) =>{
                  setPersons(elem)
                  e.stopPropagation()
                }
                  }  key={index} className='list-item cursor-pointer '>
                    {elem}
                </li>
              )
            })
          }
        </ul>
           {/* search start */}
           <div className='w-full flex justify-center items-center  h-[30px] md:h-[40px] mt-2'>
            <div className='flex bg-red-300 w-[80%] md:w-[40%] h-full rounded '>
              <input
              value={searchData}
              onChange={(e)=>{
                setSearchData(e.target.value)
              }}
              placeholder='Search by Name, Company Name, Country '
              className='search-input h-full  w-[80%]  ' type="text" />
              <div 
              onClick={()=>{
                searchPersons()
                setSearchData('')
              }}
              className='search-btn flex justify-center items-center w-[20%]'>
                <IoSearch/>
              </div>
            </div>
           </div>
           {/* search end */}

           <div
            // style={{paddingLeft:`${containerPaddingX}px`, gap:`20px`}} 
            ref={containerRef} className='w-full gap-[30px] flex  flex-wrap justify-center  px-[5%] py-[2%]  items-center mt-[5%]'>
            
   
            {people?.map((elem:Person,index)=>{
              return(
                <div className='w-[200px] h-[250px] relative sm:w-[300px] sm:h-[450px]'>
                  <PersonCard key={index}  person={elem}/>
                </div>
              )
            })}
   

           </div>
    </div>
  )
}

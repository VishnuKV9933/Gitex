import React, { useEffect, useState } from 'react'
import './exhibitinput.css'
interface exhibitFormInputProps {
    state: string;
    alert:boolean;
    setstate: React.Dispatch<React.SetStateAction<string>>;
    
  }

export default function ExhibitInput({alert ,state,setstate}: exhibitFormInputProps):React.ReactElement {

    const [touched, setTouched] = useState(false);

    const handleInputBlur = ():void => {
        setTouched(true);
      };
useEffect(()=>{

})
      const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
     
            setstate(event.target.value);
 
      };
    return (
    <> 
  <input
   onChange={handleInputChange} 
   onBlur={handleInputBlur}
   className="w-full form-input h-6 "  type="text" />

  <>
    {((touched && !state )||(alert  && !state) )&& (
      <div style={{ fontSize: '11px' }} className='text-red-500 font-semibold'>
        This field is required
      </div>
    )}
  </>

   
   </>
  )
}

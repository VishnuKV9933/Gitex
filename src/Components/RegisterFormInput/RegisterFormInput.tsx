import React, { useEffect, useState } from 'react'
import './registerFormInput.css'

interface RegisterFormInputProps {
    label: string;
    name: string;
    state: string;
    alert:boolean;
    setstate: React.Dispatch<React.SetStateAction<string>>;
    
  }
  

export default function RegisterFormInput({alert, label, name ,state,setstate}: RegisterFormInputProps) :React.ReactElement{
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
    <> <label className="text-sm mt-4">
    {label}<span className="text-red-600">*</span>
  </label>
  <input
   onChange={handleInputChange} 
   onBlur={handleInputBlur}
   className="w-full form-input h-6 " name={name} type="text" />

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

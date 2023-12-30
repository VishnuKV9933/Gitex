import React from 'react'
import './selectInput.css'

interface RegisterSelectInputProps{
    items:string[];
    state: string;
    alert:boolean;
    setstate: React.Dispatch<React.SetStateAction<string>>;
}

export default function SelectInput({items,alert,state,setstate}: RegisterSelectInputProps) :React.ReactElement {

    const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setstate(e.target.value);
      };

      

  return (
    <>
    <select
    onChange={handleCountryChange}
    value={state || ''}
    className="w-full form-input  text-justify flex justify-center items-center h-5">
     <option className="w-[200px] hidden" value="">-select-options-</option>
     {items.map((title: string, index: number) => {
       return (
         <option key={index} value={title}>
           {title}
         </option>
       );
     })}
   </select>

   <>
    {(alert  && !state )&& (
      <div style={{ fontSize: '11px' }} className='text-red-500 font-semibold'>
        This field is required
      </div>
    )}
  </>
    
    </>
  )
}

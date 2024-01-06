import React, { useEffect, useState } from "react";
import "./registerInterest.css";
import topimg from "../../assets/registertop.jpg";
import RegisterFormInput from "../../Components/RegisterFormInput/RegisterFormInput";
import Emailvalidater from "../../Components/Emailvalidater/Emailvalidater";
import { countries,nationalities } from "../../Constants/constants";
import SelectInput from "../../Components/SelectInput/SelectInput";
import footerimg from '../../assets/form-footerimg.png'
import socilalink from '../../assets/formfootersocila.png'
import submitimg from '../../assets/formimg.png'

import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';


export default function RegisterInterest(): React.ReactElement {
  const dispatch = useDispatch();
  const [firtName,setFirstName] = useState<string>('')
  const [lastName,setlastName] = useState<string>('')
  const [designation,setDesignation] = useState<string>('')
  const [company,setCompany] = useState<string>('')
  const [email,setEmail] = useState<string>('')
  const [confEmail,setConfirmEmal] = useState<string>('')
  const [selectedCountry,setSelectedCountry] = useState<string>('')
  const [title,setTitle] = useState<string>('')
  const [nationality,setNationality] = useState<string>('')
  const [alert,setAlert]=useState(false)
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [isValidMobile, setIsValidMobile] = useState<boolean>(false);
  const [mobileinputTouche,setMobileinPuttouched]=useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [submit, setSubmit] = useState<boolean>(false);
  

  const titleArray: string[] = [
    "Adm.",
    "Amb.",
    "Brig Gen.",
    "Adm.",
    "Capt.",
    "Chef",
    "Sir,",
    "Mr.",
    "Mrs,",
  ];

  useEffect(()=>{
    dispatch(menuClose());
    },[])
  
  const handleSubmit=(e: React.FormEvent)=>{
    e.preventDefault()
      setAlert(true)
      if((!isValidMobile||!mobileNumber||!firtName||!company||!lastName||!email||!isChecked||!title||!nationality||!selectedCountry||!designation)){
          console.log("form not submited");
          
      }else{
       console.log("form submited");
       setSubmit(true)
      }
  }

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


  const handleMobileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setMobileNumber(inputValue);

    const isValid = /^[0-9]{10}$/.test(inputValue);
    setIsValidMobile(isValid);
  };
  const handleInputBlur = ():void => {
    setMobileinPuttouched(true);
  };

 

  return (
    <div className="register-container flex justify-center items-center">
      <div className="register-content h-full w-full   ">
        <img
          className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[250px] xl:h-[300px]"
          src={topimg}
          alt=""
        />
        <h1 className="my-[2%] w-full flex justify-center items-center break-words text-center	 font-bold text-md text-md  md:text-2xl">
          Register Your Interest to Visit GITEX GLOBAL 2024
        </h1>


        {
          !submit?
        <form onSubmit={handleSubmit} className="w-full px-[5%] flex flex-col pb-[5%]">
          <>
            <label className="text-sm">
              Title<span className="text-red-600">*</span>
            </label>
            <SelectInput items={titleArray}  alert={alert} state={title} setstate={setTitle} />

            <RegisterFormInput alert={alert}  label={'First Name'} name={"firstname"} state={firtName} setstate={setFirstName}/>
            <RegisterFormInput alert={alert}  label={'Last Name'} name={"lastname"} state={lastName} setstate={setlastName}/>
            <RegisterFormInput alert={alert}  label={'Designation'} name={"designation"} state={designation} setstate={setDesignation}/>
            <RegisterFormInput alert={alert}  label={'Company'} name={"company"} state={company} setstate={setCompany}/>
     

            <Emailvalidater alert={alert} email={email} confirmEmail={confEmail} setEmail={setEmail}  setConEmail={setConfirmEmal}/>



            <label className="text-sm mt-4 ">
            Mobile Phone<span className="text-red-600">*</span>
            </label>
            <input
            onBlur={handleInputBlur}
             value={mobileNumber} onChange={handleMobileChange}
            className="w-full form-input h-6 " name="" type="text" />
            <>
              {((mobileinputTouche && !mobileNumber )||(alert  && !mobileNumber) )&& (
                <div style={{ fontSize: '11px' }} className='text-red-500 font-semibold'>
                  This field is required
                </div>
              )
            }
            </>
            {(mobileNumber&& !isValidMobile)&& <div style={{ fontSize: '11px' }} className='text-red-500  font-semibold'>Mobile no is not valid </div> }
            
            <label className="text-sm mt-4">
            Nationality<span className="text-red-600">*</span>
            </label>
            <SelectInput items={nationalities}  alert={alert} state={nationality} setstate={setNationality}  />

            <label className="text-sm mt-4">
            Country of Residence<span className="text-red-600">*</span>
            </label>
            <SelectInput items={countries}  alert={alert} state={selectedCountry} setstate={setSelectedCountry}  />


                <div className="flex gap-2 text-sm mt-4">

            <input
             type="checkbox"
             checked={isChecked}
             onChange={handleCheckboxChange}
             />
            <div >I consent to the processing of my personal data for marketing purposes.<span className="text-red-600">*</span></div>
                </div>
                {(alert&&!isChecked )&& (
                <div style={{ fontSize: '11px' }} className='text-red-500 font-semibold'>
                  This field is required
                </div>
              )}
              <div className="flex justify-end mt-4">
              <button  className=" rounded h-[40px] w-[100px] submit-btn text-stone-700 "  type="submit">Submit</button>
              </div>



          </>




        </form>

        :


          <>
          <div className="h-[600px] flex flex-col justify-center ml-[5%]">
          <div className="text-lg font-semibold">Thank you for your interest in Registering at GITEX GLOBAL in 2024.</div>
          <div className="text-sm ">Your request has been sent across to the GITEX GLOBAL team and you will be contacted shortly.</div>
          <div>Email: <span className="cursor-pointer text-blue-700">GitexSales@dwtc.com</span></div>
          <img className="w-[40%] mt-10 ml-5" src={submitimg} alt="" />

          </div>
          </>


        }



        <div className='form-footer w-full bg-black pb-[5%] px-[5%] flex flex-wrap'>
    <div className='w-full md:w-1/2 flex justify-center items-center flex-col gap-1 mt-4'>
        <div className='  text-center text-white font-bold text-md text-md '>ORGANISED BY</div>
        <img src={footerimg} alt="img" />
    </div>

    <div className='w-full md:w-1/2 flex justify-start items-center flex-col gap-1 mt-4'>
        <div className='  text-center text-white font-bold text-md text-md '>CONNECT WITH US:</div>
        <img className='w-[20%] md:w-[40%]' src={socilalink} alt="img" />
    </div>
 </div>

      </div>
    </div>
  );
}

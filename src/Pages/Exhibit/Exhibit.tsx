import React, { useEffect, useState } from 'react'
import './exhibit.css'
import topimg from "../../assets/registertop.jpg";
import SelectInput from '../../Components/SelectInput/SelectInput';
import ExhibitInput from '../../Components/ExhibitInput/ExhibitInput';
import ExhibitEmailValidate from '../../Components/ExhibitEmailIValidate/ExhibitEmailValidate';
import { countries } from "../../Constants/constants";
import footerimg from '../../assets/form-footerimg.png'
import socilalink from '../../assets/formfootersocila.png'
import submitimg from '../../assets/formimg.png'
import { useDispatch } from 'react-redux';
import { menuClose } from '../../Redux/Gitex';


export default function Exhibit():React.ReactElement {
const dispatch = useDispatch();

    const [alert,setAlert]=useState(false)

    const [exhibit,setExhibit]=useState<string>('')
    const [goal,setGoal]=useState<string>('')
    const [sector,setSector]=useState<string>('')
    const [title,setTitle] = useState<string>('')
    const [firtName,setFirstName] = useState<string>('')
    const [lastName,setlastName] = useState<string>('')
    const [designation,setDesignation] = useState<string>('')
    const [company,setCompany] = useState<string>('')
    const [companyWeb,setCompanyWeb] = useState<string>('')
    const [email,setEmail] = useState<string>('')
    const [confEmail,setConfirmEmal] = useState<string>('')
    const [selectedCountry,setSelectedCountry] = useState<string>('')
    const [startUp,setStartUp] = useState<string>('')
    const [radio,setRadio] = useState<boolean>(false)
    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [isValidMobile, setIsValidMobile] = useState<boolean>(false);
    const [mobileinputTouche,setMobileinPuttouched]=useState<boolean>(false)
    const [submit, setSubmit] = useState<boolean>(false);




    const intrestarray:string[]=["Exhibiting",'Sponsering','Organizing a trainig/workshop']
    const goalsArray:string[]=['Launch a Product','Generate Leads','Evaluate my brand','Couduct meeting','Get media coverage']
    const sectorArray:string[]=['AR & VR','Artificial Inteligence','Block Chain','Cloud and Bigdata','Consumer Technologines','Globel smart cities','IOT','Network and Securiety']
    const titleArray: string[] = ["Adm.","Amb.","Brig Gen.","Adm.","Capt.","Chef","Sir,","Mr.","Mrs,", ];
    
    useEffect(()=>{
        dispatch(menuClose());
        
    },[])

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault()
        setAlert(true)
        if((!isValidMobile||!mobileNumber||!firtName||!company||!lastName||!email||!radio||!title||!companyWeb||!selectedCountry||!designation||!startUp)){
            console.log("form not submited");
            
        }else{
         console.log("form submited");
         setSubmit(true)
        }
   
      }

      const handleRadioChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setStartUp(event.target.value);
        setRadio(true)
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
        GET INVOLVED IN GITEX GLOBAL 2024
        </h1>


            {
              !submit ?  
        <form onSubmit={handleSubmit} className="w-full px-[5%] flex flex-col pb-[5%]">


            <div className='flex flex-wrap justify-between'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            I'm interested in<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <SelectInput items={intrestarray} alert={alert} state={exhibit} setstate={setExhibit}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Select the goal you would like to achieve<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <SelectInput items={goalsArray} alert={alert} state={goal} setstate={setGoal}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className="w-full md:w-[225px] ">
            Select one exhibiting sector that best represents your business<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <SelectInput items={sectorArray} alert={alert} state={sector} setstate={setSector}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Is your organization a startup?
            </label>
                <div className='w-full flex flex-col items-start gap-1  md:w-[480px]'>
                    <div className='flex gap-2'>
                       <input
                       onChange={handleRadioChange}
                        name='radio' type='radio' value={'Yes'} ></input><span style={{fontSize:'11px'}}>Yes</span>
                    </div>

                    <div className='flex gap-2'>
                       <input
                        onChange={handleRadioChange}
                        name='radio' type='radio' value={'No'} ></input><span style={{fontSize:'11px'}}>No</span>
                    </div>
                    {(alert&&!radio )&& (
                <div style={{ fontSize: '11px' }} className='text-red-500 font-semibold'>
                  This field is required
                </div>
              )}
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Title<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <SelectInput items={titleArray} alert={alert} state={title} setstate={setTitle}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            First Name<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <ExhibitInput alert={alert} state={firtName} setstate={setFirstName}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Last Name<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <ExhibitInput alert={alert} state={lastName} setstate={setlastName}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Designation<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <ExhibitInput alert={alert} state={designation} setstate={setDesignation}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Company<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <ExhibitInput alert={alert} state={company} setstate={setCompany}/>
                </div>
            </div>

            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Company Website<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <ExhibitInput alert={alert} state={companyWeb} setstate={setCompanyWeb}/>
                </div>
            </div>

            <ExhibitEmailValidate alert={alert} email={email} confirmEmail={confEmail} setEmail={setEmail}  setConEmail={setConfirmEmal}/>


            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Mobile Phone<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
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
                </div>
            </div>


            <div className='flex flex-wrap justify-between mt-4'>
            <label style={{fontSize:'11px'}} className=" w-[225px] ">
            Country of Residence<span className="text-red-600">*</span>
            </label>
                <div className='w-full   md:w-[480px]'>
                    <SelectInput items={countries} alert={alert} state={selectedCountry} setstate={setSelectedCountry}/>
                </div>
            </div>

            <div className="flex justify-end mt-4">
              <button  className=" rounded h-[40px] w-[100px] submit-btn text-stone-700 "  type="submit">Submit</button>
              </div>

        </form>
        :
        <>
          <div className="h-[600px] flex flex-col justify-center ml-[5%]">
          <div className="text-lg font-semibold">Thank you for your interest in Exhibit at GITEX GLOBAL in 2024.</div>
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
  )
}

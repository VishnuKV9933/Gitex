import React, { useEffect, useState } from "react";

interface RegisterFormInputProps {
  email: string;
  confirmEmail: string;
  alert: boolean;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setConEmail: React.Dispatch<React.SetStateAction<string>>;
}

export default function ExhibitEmailValidate({
  email,
  confirmEmail,
  alert,
  setConEmail,
  setEmail,
}: RegisterFormInputProps): React.ReactElement {
  const [touchedEmal, setEmalTouched] = useState(false);
  const [touchedConfirmEmal, setComfirmEmalTouched] = useState(false);
  const [emailvalid, setValid] = useState(true);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    if (touchedEmal && email) {
      let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      setValid(regex.test(email));
    }
  }, [email, touchedEmal, emailvalid]);

  useEffect(() => {
    if (touchedConfirmEmal && confirmEmail && email !== confirmEmail) {
      setMatch(false);
    } else {
      setMatch(true);
    }
  }, [touchedConfirmEmal, confirmEmail, match, email]);

  const emalhandleInputBlur = (): void => {
    setEmalTouched(true);
  };

  const confirmEmalhandleInputBlur = (): void => {
    setComfirmEmalTouched(true);
  };

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setEmail(event.target.value);
  };

  const handleConEmailChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setConEmail(event.target.value);
  };
  return (
    <>
    
      <div className="flex flex-wrap justify-between mt-4">
        <label style={{ fontSize: "11px" }} className=" w-[225px] ">
          Email<span className="text-red-600">*</span>
        </label>
        <div className="w-full   md:w-[480px]">
          <input
            onChange={handleEmailChange}
            onBlur={emalhandleInputBlur}
            className="w-full form-input h-6 "
            name="email"
            type="text"
          />
      <>
        {!emailvalid && email && (
          <div
            style={{ fontSize: "11px" }}
            className="text-red-500 font-semibold"
          >
            Email not valid
          </div>
        )}
        {((touchedEmal && !email) || (alert && !email)) && (
          <div
            style={{ fontSize: "11px" }}
            className="text-red-500 font-semibold"
          >
            This field is required
          </div>
        )}
      </>
        </div>
      </div>


      <div className="flex flex-wrap justify-between mt-4">
        <label style={{ fontSize: "11px" }} className=" w-[225px] ">
          Confirm Email<span className="text-red-600">*</span>
        </label>
        <div className="w-full   md:w-[480px]">
          <input
            onChange={handleConEmailChange}
            onBlur={confirmEmalhandleInputBlur}
            className="w-full form-input h-6 "
            name="email"
            type="text"
          />
      {!match && (
        <div
          style={{ fontSize: "11px" }}
          className="text-red-500 font-semibold"
        >
          {" "}
          Email addresses do not match
        </div>
      )}

      <>
        {((touchedConfirmEmal && !confirmEmail) ||
          (alert && !confirmEmail)) && (
          <div
            style={{ fontSize: "11px" }}
            className="text-red-500 font-semibold"
          >
            This field is required
          </div>
        )}
      </>
        </div>
      </div>

    </>
  );
}

// "use client";

// import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
// import { Button } from "@/components/ui/button";
// import Picture from "@/components/ui/picture";
// import toast from "react-hot-toast";
// import { useRouter } from "next/navigation";

// const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

// const ForgetPasscode = () => {
//   const router = useRouter();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [loading, setLoading] = useState(false);
//   const [step, setStep] = useState(1);
//   const [phone, setPhone] = useState("");
//   const [otp, setOtp] = useState("");
//   const [otpValues, setOtpValues] = useState(["", "", "", ""]);
//   const [newPassValues, setNewPassValues] = useState(["", "", "", ""]);
//   const [confirmPassValues, setConfirmPassValues] = useState(["", "", "", ""]);

//   const inputRefs = useRef([]);
//   const passRefs = useRef([]);
//   const confirmRefs = useRef([]);

//   const handleSendOtp = async (data) => {
//     setLoading(true);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1000));

//       if (data.phone === "0000000000") {
//         toast.error("Please provide a registered mobile number");
//       } else {
//         const newOtp = generateOtp();
//         setOtp(newOtp);
//         setPhone(data.phone);
//         setStep(2);
//         toast.success("OTP sent successfully to " + data.phone);
//       }
//     } catch (error) {
//       toast.error("Failed to send OTP. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleOtpChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newOtpValues = [...otpValues];
//     newOtpValues[index] = value;
//     setOtpValues(newOtpValues);

//     if (value && index < 3) {
//       inputRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otpValues[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleVerifyOtp = () => {
//     const enteredOtp = otpValues.join("");
//     if (enteredOtp === otp) {
//       toast.success("OTP verified successfully!");
//       setStep(3);
//     } else {
//       toast.error("Invalid OTP. Please try again.");
//     }
//   };

//   const handleResendOtp = () => {
//     const newOtp = generateOtp();
//     setOtp(newOtp);
//     setOtpValues(["", "", "", ""]);
//     toast.success("OTP resent successfully");
//     inputRefs.current[0]?.focus();
//   };

//   const handlePassChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newPass = [...newPassValues];
//     newPass[index] = value;
//     setNewPassValues(newPass);

//     if (value && index < 3) {
//       passRefs.current[index + 1]?.focus();
//     }
//   };

//   const handlePassKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !newPassValues[index] && index > 0) {
//       passRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmitNewPass = () => {
//     const newPassword = newPassValues.join("");
//     if (newPassword.length === 4) {
//       setStep(4);
//     } else {
//       toast.error("Please enter a 4-digit passcode");
//     }
//   };

//   const handleConfirmPassChange = (index, value) => {
//     if (!/^[0-9]?$/.test(value)) return;

//     const newConfirm = [...confirmPassValues];
//     newConfirm[index] = value;
//     setConfirmPassValues(newConfirm);

//     if (value && index < 3) {
//       confirmRefs.current[index + 1]?.focus();
//     }
//   };

//   const handleConfirmKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !confirmPassValues[index] && index > 0) {
//       confirmRefs.current[index - 1]?.focus();
//     }
//   };

//   const handleSubmitConfirmPass = () => {
//     const confirmPass = confirmPassValues.join("");
//     const newPass = newPassValues.join("");

//     if (confirmPass.length !== 4) {
//       toast.error("Please enter a 4-digit confirm passcode");
//       return;
//     }

//     if (confirmPass !== newPass) {
//       toast.error("Passcodes do not match");
//       return;
//     }

//     toast.success("Passcode changed successfully!");
//     router.push("/login");
//   };

//   return (
//     <div className="min-h-[80vh] flex items-center justify-center px-4 py-8 bg-gray-100">
//       <div className="relative w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
//         {/* Back Arrow (visible from step 2 onward) */}
//         {step > 1 && (
//           <button
//             onClick={() => setStep(step - 1)}
//             className="absolute text-xl font-bold text-gray-700 top-4 left-4 hover:text-black"
//             aria-label="Go back"
//           >
//            <i className="fa-solid fa-arrow-left"></i>
//           </button>
//         )}

//         <h2 className="text-2xl font-bold text-start text-[#25324B]">
//           {step === 1
//             ? "Forget your Passcode"
//             : step === 2
//             ? "Verify your mobile"
//             : step === 3
//             ? " "
//             : " "}
//         </h2>

//         {/* Step 1: Enter Mobile Number */}
//         {step === 1 && (
//           <>
//             <p className="text-sm text-gray-600 text-start">
//               Enter your mobile number below and we will send you a verification
//               code
//             </p>

//             <form onSubmit={handleSubmit(handleSendOtp)} className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="phone"
//                   className="block text-sm font-medium text-black"
//                 >
//                   Mobile Number
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   maxLength={10}
//                   {...register("phone", {
//                     required: "Mobile number is required",
//                     minLength: { value: 10, message: "Enter valid number" },
//                   })}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636060]"
//                   placeholder="Type here..."
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-sm text-red-500">
//                     {errors.phone.message}
//                   </p>
//                 )}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-[#000000] hover:bg-[#3d3d3d] text-white py-2 rounded-lg text-sm font-medium"
//                 disabled={loading}
//               >
//                 {loading ? "Sending..." : "Send"}
//               </Button>
//             </form>
//           </>
//         )}

//         {/* Step 2: Enter OTP */}
//         {step === 2 && (
//           <>
//             <div className="text-center">
//               <p className="mb-2 text-sm text-gray-600 text-start">
//                 Please type 4-digit code that we have sent to your mobile{" "}
//                 <strong className="text-green-600">{phone}</strong>
//               </p>
//               <p className="text-lg font-medium text-[#000000]">OTP: {otp}</p>
//             </div>

//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleVerifyOtp();
//               }}
//               className="mt-4 space-y-4"
//             >
//               <div className="flex justify-between gap-2">
//                 {otpValues.map((value, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (inputRefs.current[index] = el)}
//                     type="text"
//                     maxLength={1}
//                     value={value}
//                     onChange={(e) => handleOtpChange(index, e.target.value)}
//                     onKeyDown={(e) => handleKeyDown(index, e)}
//                     className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636060]"
//                   />
//                 ))}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
//               >
//                 Verify
//               </Button>

//               <p
//                 onClick={handleResendOtp}
//                 className="text-center text-sm text-[#000000] font-medium cursor-pointer hover:underline"
//               >
//                 Resend OTP
//               </p>
//             </form>
//           </>
//         )}

//         {/* Step 3: New Passcode */}
//         {step === 3 && (
//           <>
//             <Picture
//               src={"/static/images/passcodeimage.png"}
//               alt="logo"
//               width={100}
//               height={100}
//               className="mx-auto"
//             />
//             <div className="mt-2 text-lg font-medium text-center text-black">
//               New Passcode
//             </div>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSubmitNewPass();
//               }}
//               className="mt-4 space-y-4"
//             >
//               <div className="flex justify-between gap-2">
//                 {newPassValues.map((value, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (passRefs.current[index] = el)}
//                     type="password"
//                     maxLength={1}
//                     value={value}
//                     onChange={(e) => handlePassChange(index, e.target.value)}
//                     onKeyDown={(e) => handlePassKeyDown(index, e)}
//                     className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC342A]"
//                   />
//                 ))}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </form>
//           </>
//         )}

//         {/* Step 4: Confirm Passcode */}
//         {step === 4 && (
//           <>
//             <Picture
//               src={"/static/images/passcodeimage.png"}
//               alt="logo"
//               width={100}
//               height={100}
//               className="mx-auto"
//             />
//             <div className="mt-2 text-lg font-medium text-center text-black">
//               Confirm Passcode
//             </div>
//             <form
//               onSubmit={(e) => {
//                 e.preventDefault();
//                 handleSubmitConfirmPass();
//               }}
//               className="mt-4 space-y-4"
//             >
//               <div className="flex justify-between gap-2">
//                 {confirmPassValues.map((value, index) => (
//                   <input
//                     key={index}
//                     ref={(el) => (confirmRefs.current[index] = el)}
//                     type="password"
//                     maxLength={1}
//                     value={value}
//                     onChange={(e) =>
//                       handleConfirmPassChange(index, e.target.value)
//                     }
//                     onKeyDown={(e) => handleConfirmKeyDown(index, e)}
//                     className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC342A]"
//                   />
//                 ))}
//               </div>

//               <Button
//                 type="submit"
//                 className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
//               >
//                 Continue
//               </Button>
//             </form>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgetPasscode;

"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { handleResetPasscode } from "@/redux/AuthSlice";

const generateOtp = () => Math.floor(1000 + Math.random() * 9000).toString();

const ForgetPasscode = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpValues, setOtpValues] = useState(["", "", "", ""]);
  const [newPassValues, setNewPassValues] = useState(["", "", "", ""]);
  const [confirmPassValues, setConfirmPassValues] = useState(["", "", "", ""]);
  const dispatch = useDispatch()

  const inputRefs = useRef([]);
  const passRefs = useRef([]);
  const confirmRefs = useRef([]);

  const handleSendOtp = async (data) => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (data.phone === "0000000000") {
        toast.error("Please provide a registered mobile number");
      } else {
        const newOtp = generateOtp();
        setOtp(newOtp);
        setPhone(data.phone);
        setStep(2);
        toast.success("OTP sent successfully to " + data.phone);
      }
    } catch (error) {
      toast.error("Failed to send OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    if (value && index < 3) inputRefs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otpValues[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyOtp = () => {
    const enteredOtp = otpValues.join("");
    if (enteredOtp === otp) {
      toast.success("OTP verified successfully!");
      setStep(3);
    } else {
      toast.error("Invalid OTP. Please try again.");
    }
  };

  const handleResendOtp = () => {
    const newOtp = generateOtp();
    setOtp(newOtp);
    setOtpValues(["", "", "", ""]);
    toast.success("OTP resent successfully");
    inputRefs.current[0]?.focus();
  };

  const handlePassChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newPass = [...newPassValues];
    newPass[index] = value;
    setNewPassValues(newPass);
    if (value && index < 3) passRefs.current[index + 1]?.focus();
  };

  const handlePassKeyDown = (index, e) => {
    if (e.key === "Backspace" && !newPassValues[index] && index > 0) {
      passRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmitNewPass = () => {
    const newPassword = newPassValues.join("");
    if (newPassword.length === 4) {
      setStep(4);
    } else {
      toast.error("Please enter a 4-digit passcode");
    }
  };

  const handleConfirmPassChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const newConfirm = [...confirmPassValues];
    newConfirm[index] = value;
    setConfirmPassValues(newConfirm);
    if (value && index < 3) confirmRefs.current[index + 1]?.focus();
  };

  const handleConfirmKeyDown = (index, e) => {
    if (e.key === "Backspace" && !confirmPassValues[index] && index > 0) {
      confirmRefs.current[index - 1]?.focus();
    }
  };

  // const handleSubmitConfirmPass = () => {
  //   const confirmPass = confirmPassValues.join("");
  //   const newPass = newPassValues.join("");

  //   if (confirmPass.length !== 4) {
  //     toast.error("Please enter a 4-digit confirm passcode");
  //     return;
  //   }

  //   if (confirmPass !== newPass) {
  //     toast.error("Passcodes do not match");
  //     return;
  //   }

  //   toast.success("Passcode changed successfully!");
  //   router.push("/login");
  // };

  const handleSubmitConfirmPass = async () => {
    const confirmPass = confirmPassValues.join("");
    const newPass = newPassValues.join("");
  
    if (confirmPass.length !== 4) {
      toast.error("Please enter a 4-digit confirm passcode");
      return;
    }
  
    if (confirmPass !== newPass) {
      toast.error("Passcodes do not match");
      return;
    }
  
    try {
      const result = await dispatch(
        handleResetPasscode({
          mobileNumber: phone,
          newPasscode: confirmPass,
        })
      );
  
      if (handleResetPasscode.fulfilled.match(result)) {
        toast.success("Passcode changed successfully!");
        router.push("/login");
      }
    } catch (error) {
      console.error("Reset error", error);
    }
  };
  

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Image Section */}
      <div className="hidden md:block relative w-full h-full min-h-screen bg-[url('/static/images/signin.png')] bg-cover bg-center">

        <Link
          href="/"
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
        >
          <Picture
            src={"/static/images/logo1.png"}
            alt="logo"
            className="mx-auto w-[150px] h-auto"
            width={150}
            height={150}
          />
        </Link>
      </div>

      {/* Right Form Section */}
      <div className="flex items-center justify-center px-4 py-8 bg-gray-100">
        <div className="relative w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-2xl">
          {step > 1 && (
            <button
              onClick={() => setStep(step - 1)}
              className="absolute text-xl font-bold text-gray-700 top-4 left-4 hover:text-black"
              aria-label="Go back"
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
          )}

          <h2 className="text-2xl font-bold text-start text-[#25324B]">
            {step === 1
              ? "Forget your Passcode"
              : step === 2
              ? "Verify your mobile"
              : step === 3
              ? " "
              : " "}
          </h2>

          {/* Step 1: Mobile Number */}
          {step === 1 && (
            <>
              <p className="text-sm text-gray-600 text-start">
                Enter your mobile number below and we will send you a
                verification code
              </p>
              <form
                onSubmit={handleSubmit(handleSendOtp)}
                className="space-y-4"
              >
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-black"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    maxLength={10}
                    {...register("phone", {
                      required: "Mobile number is required",
                      minLength: { value: 10, message: "Enter valid number" },
                    })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636060]"
                    placeholder="Type here..."
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#000000] hover:bg-[#3d3d3d] text-white py-2 rounded-lg text-sm font-medium"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send"}
                </Button>
              </form>
            </>
          )}

          {/* Step 2: OTP */}
          {step === 2 && (
            <>
              <div className="text-center">
                <p className="mb-2 text-sm text-gray-600 text-start">
                  Please type 4-digit code that we have sent to your mobile{" "}
                  <strong className="text-green-600">{phone}</strong>
                </p>
                <p className="text-lg font-medium text-[#000000]">OTP: {otp}</p>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleVerifyOtp();
                }}
                className="mt-4 space-y-4"
              >
                <div className="flex justify-between gap-2">
                  {otpValues.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handleOtpChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#636060]"
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
                >
                  Verify
                </Button>
                <p
                  onClick={handleResendOtp}
                  className="text-center text-sm text-[#000000] font-medium cursor-pointer hover:underline"
                >
                  Resend OTP
                </p>
              </form>
            </>
          )}

          {/* Step 3: New Passcode */}
          {step === 3 && (
            <>
              <Picture
                src={"/static/images/passcodeimage.png"}
                alt="logo"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="mt-2 text-lg font-medium text-center text-black">
                New Passcode
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitNewPass();
                }}
                className="mt-4 space-y-4"
              >
                <div className="flex justify-between gap-2">
                  {newPassValues.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (passRefs.current[index] = el)}
                      type="password"
                      maxLength={1}
                      value={value}
                      onChange={(e) => handlePassChange(index, e.target.value)}
                      onKeyDown={(e) => handlePassKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC342A]"
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
                >
                  Continue
                </Button>
              </form>
            </>
          )}

          {/* Step 4: Confirm Passcode */}
          {step === 4 && (
            <>
              <Picture
                src={"/static/images/passcodeimage.png"}
                alt="logo"
                width={100}
                height={100}
                className="mx-auto"
              />
              <div className="mt-2 text-lg font-medium text-center text-black">
                Confirm Passcode
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmitConfirmPass();
                }}
                className="mt-4 space-y-4"
              >
                <div className="flex justify-between gap-2">
                  {confirmPassValues.map((value, index) => (
                    <input
                      key={index}
                      ref={(el) => (confirmRefs.current[index] = el)}
                      type="password"
                      maxLength={1}
                      value={value}
                      onChange={(e) =>
                        handleConfirmPassChange(index, e.target.value)
                      }
                      onKeyDown={(e) => handleConfirmKeyDown(index, e)}
                      className="w-12 h-12 text-center text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FC342A]"
                    />
                  ))}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#000000] text-white py-2 rounded-lg text-sm font-medium"
                >
                  Continue
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgetPasscode;

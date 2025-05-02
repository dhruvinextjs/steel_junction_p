// // // // // // // // // // import React from "react";

// // // // // // // // // // import {
// // // // // // // // // //   InputOTP,
// // // // // // // // // //   InputOTPGroup,
// // // // // // // // // //   InputOTPSlot,
// // // // // // // // // // } from "@/components/ui/input-otp";
// // // // // // // // // // import Label from "@/components/ui/form/label";
// // // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // // const ChangePassCode = () => {
// // // // // // // // // //   const [value, setValue] = React.useState("");
// // // // // // // // // //   return (
// // // // // // // // // //     <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
// // // // // // // // // //       <p className="text-xl text-[#25324B] font-semibold">Change PassCode</p>
// // // // // // // // // //       <div className="space-y-4">
// // // // // // // // // //         <div className="space-y-2">
// // // // // // // // // //           <label htmlFor="Current" className="label_text">
// // // // // // // // // //             Current passcode
// // // // // // // // // //           </label>
// // // // // // // // // //           <InputOTP
// // // // // // // // // //             maxLength={4}
// // // // // // // // // //             value={value}
// // // // // // // // // //             onChange={(value) => setValue(value)}
// // // // // // // // // //           >
// // // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // // //               <InputOTPSlot index={0} />
// // // // // // // // // //               <InputOTPSlot index={1} />
// // // // // // // // // //               <InputOTPSlot index={2} />
// // // // // // // // // //               <InputOTPSlot index={3} />
// // // // // // // // // //             </InputOTPGroup>
// // // // // // // // // //           </InputOTP>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="space-y-2">
// // // // // // // // // //           <label htmlFor="new" className="label_text">
// // // // // // // // // //             New passcode
// // // // // // // // // //           </label>
// // // // // // // // // //           <InputOTP
// // // // // // // // // //             maxLength={4}
// // // // // // // // // //             // value={value}
// // // // // // // // // //             // onChange={(value) => setValue(value)}
// // // // // // // // // //           >
// // // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // // //               <InputOTPSlot index={0} />
// // // // // // // // // //               <InputOTPSlot index={1} />
// // // // // // // // // //               <InputOTPSlot index={2} />
// // // // // // // // // //               <InputOTPSlot index={3} />
// // // // // // // // // //             </InputOTPGroup>
// // // // // // // // // //           </InputOTP>
// // // // // // // // // //         </div>
// // // // // // // // // //         <div className="space-y-2">
// // // // // // // // // //           <label htmlFor="Confirm" className="label_text">
// // // // // // // // // //             Confirm passcode
// // // // // // // // // //           </label>
// // // // // // // // // //           <InputOTP
// // // // // // // // // //             maxLength={4}
// // // // // // // // // //             // value={value}
// // // // // // // // // //             // onChange={(value) => setValue(value)}
// // // // // // // // // //           >
// // // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // // //               <InputOTPSlot index={0} />
// // // // // // // // // //               <InputOTPSlot index={1} />
// // // // // // // // // //               <InputOTPSlot index={2} />
// // // // // // // // // //               <InputOTPSlot index={3} />
// // // // // // // // // //             </InputOTPGroup>
// // // // // // // // // //           </InputOTP>
// // // // // // // // // //         </div>
// // // // // // // // // //         <Button variant="primary" className="w-auto">
// // // // // // // // // //           Update
// // // // // // // // // //         </Button>
// // // // // // // // // //       </div>
// // // // // // // // // //     </div>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default ChangePassCode;

// // // // // // // // // "use client";

// // // // // // // // // import React from "react";
// // // // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // // // import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
// // // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // // import { handleChangePasscode , checkCurrentPasscode } from "@/redux/AuthSlice";
// // // // // // // // // import { toast } from "react-hot-toast";

// // // // // // // // // const ChangePassCode = () => {
// // // // // // // // //   const dispatch = useDispatch();
// // // // // // // // //   const { loading } = useSelector((state) => state.auth);

// // // // // // // // //   const [currentPasscode, setCurrentPasscode] = React.useState("");
// // // // // // // // //   const [newPasscode, setNewPasscode] = React.useState("");
// // // // // // // // //   const [confirmPasscode, setConfirmPasscode] = React.useState("");

// // // // // // // // //   const handleSubmit = async () => {
// // // // // // // // //     if (!currentPasscode || !newPasscode || !confirmPasscode) {
// // // // // // // // //       toast.error("Please fill in all passcode fields.");
// // // // // // // // //       return;
// // // // // // // // //     }
  
// // // // // // // // //     if (newPasscode !== confirmPasscode) {
// // // // // // // // //       toast.error("New and Confirm passcodes must match.");
// // // // // // // // //       return;
// // // // // // // // //     }
  
// // // // // // // // //     if (currentPasscode === newPasscode) {
// // // // // // // // //       toast.error("Please choose a unique new passcode.");
// // // // // // // // //       return;
// // // // // // // // //     }
  
// // // // // // // // //     // Check if current passcode is valid before changing
// // // // // // // // //     try {
// // // // // // // // //       const isValid = await checkCurrentPasscode(currentPasscode);
// // // // // // // // //       console.log("Is current passcode valid?", isValid); // Check the result
  
// // // // // // // // //       if (!isValid) {
// // // // // // // // //         toast.error("Invalid current passcode.");
// // // // // // // // //         return;
// // // // // // // // //       }
  
// // // // // // // // //       dispatch(handleChangePasscode({ currentPasscode, newPasscode }));
// // // // // // // // //     } catch (err) {
// // // // // // // // //       toast.error("Failed to verify current passcode.");
// // // // // // // // //       console.error(err);
// // // // // // // // //     }
// // // // // // // // //   };
  
  
  
// // // // // // // // //   return (
// // // // // // // // //     <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
// // // // // // // // //       <p className="text-xl text-[#25324B] font-semibold">Change PassCode</p>
// // // // // // // // //       <div className="space-y-4">
// // // // // // // // //         {/* Current Passcode */}
// // // // // // // // //         <div className="space-y-2">
// // // // // // // // //           <label className="label_text">Current passcode</label>
// // // // // // // // //           <InputOTP maxLength={4} value={currentPasscode} onChange={setCurrentPasscode}>
// // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // // //               ))}
// // // // // // // // //             </InputOTPGroup>
// // // // // // // // //           </InputOTP>
// // // // // // // // //         </div>

// // // // // // // // //         {/* New Passcode */}
// // // // // // // // //         <div className="space-y-2">
// // // // // // // // //           <label className="label_text">New passcode</label>
// // // // // // // // //           <InputOTP maxLength={4} value={newPasscode} onChange={setNewPasscode}>
// // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // // //               ))}
// // // // // // // // //             </InputOTPGroup>
// // // // // // // // //           </InputOTP>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Confirm Passcode */}
// // // // // // // // //         <div className="space-y-2">
// // // // // // // // //           <label className="label_text">Confirm passcode</label>
// // // // // // // // //           <InputOTP maxLength={4} value={confirmPasscode} onChange={setConfirmPasscode}>
// // // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // // //               ))}
// // // // // // // // //             </InputOTPGroup>
// // // // // // // // //           </InputOTP>
// // // // // // // // //         </div>

// // // // // // // // //         <Button onClick={handleSubmit} disabled={loading} variant="primary" className="w-auto">
// // // // // // // // //           {loading ? "Updating..." : "Update"}
// // // // // // // // //         </Button>
// // // // // // // // //       </div>
// // // // // // // // //     </div>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default ChangePassCode;

// // // // // // // // "use client";

// // // // // // // // import React from "react";
// // // // // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // // // // import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
// // // // // // // // import { Button } from "@/components/ui/button";
// // // // // // // // import { handleChangePasscode, checkCurrentPasscode } from "@/redux/AuthSlice";
// // // // // // // // import { toast } from "react-hot-toast";

// // // // // // // // const ChangePassCode = () => {
// // // // // // // //   const dispatch = useDispatch();
// // // // // // // //   const { loading, error } = useSelector((state) => state.auth);

// // // // // // // //   const [currentPasscode, setCurrentPasscode] = React.useState("");
// // // // // // // //   const [newPasscode, setNewPasscode] = React.useState("");
// // // // // // // //   const [confirmPasscode, setConfirmPasscode] = React.useState("");
// // // // // // // //   const handleSubmit = async () => {
// // // // // // // //     if (!currentPasscode || !newPasscode || !confirmPasscode) {
// // // // // // // //       toast.error("Please fill in all passcode fields.");
// // // // // // // //       return;
// // // // // // // //     }
  
// // // // // // // //     if (newPasscode !== confirmPasscode) {
// // // // // // // //       toast.error("New and Confirm passcodes must match.");
// // // // // // // //       return;
// // // // // // // //     }
  
// // // // // // // //     if (currentPasscode === newPasscode) {
// // // // // // // //       toast.error("Please choose a unique new passcode.");
// // // // // // // //       return;
// // // // // // // //     }
  
// // // // // // // //     try {
// // // // // // // //       // Step 1: Check current passcode
// // // // // // // //       const verifyResult = await dispatch(checkCurrentPasscode(currentPasscode)).unwrap();
  
// // // // // // // //       if (!verifyResult?.success) {
// // // // // // // //         toast.error("Incorrect current passcode.");
// // // // // // // //         return;
// // // // // // // //       }
  
// // // // // // // //       // Step 2: If verified, update passcode
// // // // // // // //       await dispatch(handleChangePasscode({ currentPasscode, newPasscode })).unwrap();
  
// // // // // // // //       toast.success("Passcode updated successfully.");
// // // // // // // //     } catch (err) {
// // // // // // // //       toast.error(err?.message || "Failed to update passcode.");
// // // // // // // //     }
// // // // // // // //   };
  
  
  
// // // // // // // //   return (
// // // // // // // //     <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
// // // // // // // //       <p className="text-xl text-[#25324B] font-semibold">Change PassCode</p>
// // // // // // // //       <div className="space-y-4">
// // // // // // // //         {/* Current Passcode */}
// // // // // // // //         <div className="space-y-2">
// // // // // // // //           <label className="label_text">Current passcode</label>
// // // // // // // //           <InputOTP maxLength={4} value={currentPasscode} onChange={setCurrentPasscode}>
// // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // //               ))}
// // // // // // // //             </InputOTPGroup>
// // // // // // // //           </InputOTP>
// // // // // // // //         </div>

// // // // // // // //         {/* New Passcode */}
// // // // // // // //         <div className="space-y-2">
// // // // // // // //           <label className="label_text">New passcode</label>
// // // // // // // //           <InputOTP maxLength={4} value={newPasscode} onChange={setNewPasscode}>
// // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // //               ))}
// // // // // // // //             </InputOTPGroup>
// // // // // // // //           </InputOTP>
// // // // // // // //         </div>

// // // // // // // //         {/* Confirm Passcode */}
// // // // // // // //         <div className="space-y-2">
// // // // // // // //           <label className="label_text">Confirm passcode</label>
// // // // // // // //           <InputOTP maxLength={4} value={confirmPasscode} onChange={setConfirmPasscode}>
// // // // // // // //             <InputOTPGroup className="gap-2">
// // // // // // // //               {[0, 1, 2, 3].map((index) => (
// // // // // // // //                 <InputOTPSlot key={index} index={index} />
// // // // // // // //               ))}
// // // // // // // //             </InputOTPGroup>
// // // // // // // //           </InputOTP>
// // // // // // // //         </div>

// // // // // // // //         <Button onClick={handleSubmit} disabled={loading} variant="primary" className="w-auto">
// // // // // // // //           {loading ? "Updating..." : "Update"}
// // // // // // // //         </Button>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default ChangePassCode;
// // // // // // // "use client"
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { useDispatch } from 'react-redux';
// // // // // // // import { toast } from 'react-toastify';
// // // // // // // import { checkCurrentPasscode, handleChangePasscode } from '@/redux/AuthSlice';


// // // // // // // const PasscodeChangeForm = () => {
// // // // // // //   const dispatch = useDispatch();

// // // // // // //   const [step, setStep] = useState(1);  // Step management: 1 -> current passcode, 2 -> new passcode
// // // // // // //   const [currentPasscode, setCurrentPasscode] = useState('');
// // // // // // //   const [newPasscode, setNewPasscode] = useState('');
// // // // // // //   const [confirmPasscode, setConfirmPasscode] = useState('');

// // // // // // //   // Step 1: Check current passcode
// // // // // // //   const handleCheckCurrentPasscode = async () => {
// // // // // // //     if (!currentPasscode) {
// // // // // // //       toast.error("Please enter your current passcode.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       const result = await dispatch(checkCurrentPasscode(currentPasscode)).unwrap();

// // // // // // //       if (result?.success) {
// // // // // // //         // If success, move to Step 2
// // // // // // //         setStep(2);
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       toast.error(err || "Incorrect current passcode.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Step 2: Submit new passcode
// // // // // // //   const handleSubmitNewPasscode = async () => {
// // // // // // //     if (!newPasscode || !confirmPasscode) {
// // // // // // //       toast.error("Please fill in all fields.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (newPasscode !== confirmPasscode) {
// // // // // // //       toast.error("New and Confirm passcodes must match.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     if (currentPasscode === newPasscode) {
// // // // // // //       toast.error("Please choose a different new passcode.");
// // // // // // //       return;
// // // // // // //     }

// // // // // // //     try {
// // // // // // //       await dispatch(handleChangePasscode({ currentPasscode, newPasscode })).unwrap();
// // // // // // //       toast.success("Passcode updated successfully.");
// // // // // // //       // Optionally reset form or navigate
// // // // // // //     } catch (err) {
// // // // // // //       toast.error(err || "Failed to update passcode.");
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <div>
// // // // // // //       {/* Step 1: Check Current Passcode */}
// // // // // // //       {step === 1 && (
// // // // // // //         <div>
// // // // // // //           <label>Current Passcode</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             value={currentPasscode}
// // // // // // //             onChange={(e) => setCurrentPasscode(e.target.value)}
// // // // // // //           />
// // // // // // //           <button onClick={handleCheckCurrentPasscode}>Verify Current Passcode</button>
// // // // // // //         </div>
// // // // // // //       )}

// // // // // // //       {/* Step 2: New Passcode */}
// // // // // // //       {step === 2 && (
// // // // // // //         <div>
// // // // // // //           <label>New Passcode</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             value={newPasscode}
// // // // // // //             onChange={(e) => setNewPasscode(e.target.value)}
// // // // // // //           />
// // // // // // //           <label>Confirm Passcode</label>
// // // // // // //           <input
// // // // // // //             type="password"
// // // // // // //             value={confirmPasscode}
// // // // // // //             onChange={(e) => setConfirmPasscode(e.target.value)}
// // // // // // //           />
// // // // // // //           <button onClick={handleSubmitNewPasscode}>Submit New Passcode</button>
// // // // // // //         </div>
// // // // // // //       )}
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PasscodeChangeForm;

// // // // // // "use client"
// // // // // // import React, { useState } from 'react';
// // // // // // import { useDispatch } from 'react-redux';
// // // // // // import { toast } from 'react-toastify';
// // // // // // import { checkCurrentPasscode, handleChangePasscode } from '@/redux/AuthSlice';

// // // // // // const PasscodeChangeForm = () => {
// // // // // //   const dispatch = useDispatch();

// // // // // //   const [step, setStep] = useState(1);  // Step management: 1 -> current passcode, 2 -> new passcode, 3 -> confirm passcode
// // // // // //   const [currentPasscode, setCurrentPasscode] = useState('');
// // // // // //   const [newPasscode, setNewPasscode] = useState('');
// // // // // //   const [confirmPasscode, setConfirmPasscode] = useState('');

// // // // // //   // Step 1: Check current passcode
// // // // // //   const handleCheckCurrentPasscode = async () => {
// // // // // //     if (!currentPasscode) {
// // // // // //       toast.error("Please enter your current passcode.");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       const result = await dispatch(checkCurrentPasscode(currentPasscode)).unwrap();
// // // // // //       console.log("Result of current passcode check:", result);

// // // // // //       if (result?.success) {
// // // // // //         // If success, move to Step 2
// // // // // //         setStep(2);
// // // // // //       } else {
// // // // // //         toast.error("Incorrect current passcode.");
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       toast.error(err?.message || "Error verifying current passcode.");
// // // // // //     }
// // // // // //   };

// // // // // //   // Step 2: Submit new passcode
// // // // // //   const handleSubmitNewPasscode = () => {
// // // // // //     if (!newPasscode || newPasscode.length !== 4) {
// // // // // //       toast.error("Please enter a new passcode of exactly 4 digits.");
// // // // // //       return;
// // // // // //     }

// // // // // //     console.log("New passcode entered:", newPasscode);
// // // // // //     // Move to Step 3 after new passcode input
// // // // // //     setStep(3);
// // // // // //   };

// // // // // //   // Step 3: Confirm new passcode and update
// // // // // //   const handleConfirmNewPasscode = async () => {
// // // // // //     if (!confirmPasscode || confirmPasscode.length !== 4) {
// // // // // //       toast.error("Please confirm the new passcode with exactly 4 digits.");
// // // // // //       return;
// // // // // //     }

// // // // // //     if (newPasscode !== confirmPasscode) {
// // // // // //       toast.error("New and Confirm passcodes must match.");
// // // // // //       return;
// // // // // //     }

// // // // // //     if (currentPasscode === newPasscode) {
// // // // // //       toast.error("Please choose a different new passcode.");
// // // // // //       return;
// // // // // //     }

// // // // // //     try {
// // // // // //       // Proceed to update the passcode
// // // // // //       await dispatch(handleChangePasscode({ currentPasscode, newPasscode })).unwrap();
// // // // // //       toast.success("Passcode updated successfully.");
// // // // // //       setStep(1); // Reset back to step 1 (or navigate to login)
// // // // // //       // Reset form values
// // // // // //       setCurrentPasscode('');
// // // // // //       setNewPasscode('');
// // // // // //       setConfirmPasscode('');
// // // // // //     } catch (err) {
// // // // // //       toast.error(err?.message || "Failed to update passcode.");
// // // // // //     }
// // // // // //   };

// // // // // //   // Handler to manage input change for 4 digits
// // // // // //   const handleInputChange = (e, setter) => {
// // // // // //     const value = e.target.value;
// // // // // //     if (value.length <= 4 && /^\d*$/.test(value)) { // Only allow digits and max 4 digits
// // // // // //       setter(value);
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <div>
// // // // // //       {/* Step 1: Check Current Passcode */}
// // // // // //       {step === 1 && (
// // // // // //         <div>
// // // // // //           <label>Current Passcode</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             value={currentPasscode}
// // // // // //             onChange={(e) => handleInputChange(e, setCurrentPasscode)}
// // // // // //             maxLength="4"
// // // // // //           />
// // // // // //           <button onClick={handleCheckCurrentPasscode}>Verify Current Passcode</button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Step 2: New Passcode */}
// // // // // //       {step === 2 && (
// // // // // //         <div>
// // // // // //           <label>New Passcode (4 digits)</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             value={newPasscode}
// // // // // //             onChange={(e) => handleInputChange(e, setNewPasscode)}
// // // // // //             maxLength="4"
// // // // // //           />
// // // // // //           <button onClick={handleSubmitNewPasscode}>Continue to Confirm</button>
// // // // // //         </div>
// // // // // //       )}

// // // // // //       {/* Step 3: Confirm New Passcode */}
// // // // // //       {step === 3 && (
// // // // // //         <div>
// // // // // //           <label>Confirm New Passcode (4 digits)</label>
// // // // // //           <input
// // // // // //             type="password"
// // // // // //             value={confirmPasscode}
// // // // // //             onChange={(e) => handleInputChange(e, setConfirmPasscode)}
// // // // // //             maxLength="4"
// // // // // //           />
// // // // // //           <button onClick={handleConfirmNewPasscode}>Submit New Passcode</button>
// // // // // //         </div>
// // // // // //       )}
// // // // // //     </div>
// // // // // //   );
// // // // // // };

// // // // // // export default PasscodeChangeForm;

// // // // // "use client";
// // // // // import React, { useState, useRef } from "react";
// // // // // import { useDispatch } from "react-redux";
// // // // // import { toast } from "react-toastify";
// // // // // import {
// // // // //   checkCurrentPasscode,
// // // // //   handleChangePasscode,
// // // // // } from "@/redux/AuthSlice";

// // // // // const PasscodeChangeForm = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const [step, setStep] = useState(1);
// // // // //   const [currentPasscode, setCurrentPasscode] = useState(["", "", "", ""]);
// // // // //   const [newPasscode, setNewPasscode] = useState(["", "", "", ""]);
// // // // //   const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", ""]);

// // // // //   const inputRefs = useRef([]);

// // // // //   // Helper to focus next input
// // // // //   const handleChange = (e, index, setter, values) => {
// // // // //     const value = e.target.value;
// // // // //     const newValues = [...values];
  
// // // // //     if (/^\d$/.test(value)) {
// // // // //       newValues[index] = value;
// // // // //       setter(newValues);
  
// // // // //       // Move forward
// // // // //       if (index < 3) {
// // // // //         inputRefs.current[index + 1]?.focus();
// // // // //       }
// // // // //     } else if (value === "") {
// // // // //       newValues[index] = "";
// // // // //       setter(newValues);
// // // // //     }
// // // // //   };
  
// // // // //   // Handle Backspace key
// // // // //   const handleKeyDown = (e, index) => {
// // // // //     if (e.key === "Backspace" && !e.target.value && index > 0) {
// // // // //       inputRefs.current[index - 1]?.focus();
// // // // //     }
// // // // //   };

// // // // //   const getPasscodeString = (arr) => arr.join("");

// // // // //   const handleCheckCurrentPasscode = async () => {
// // // // //     const passcode = getPasscodeString(currentPasscode);
// // // // //     if (passcode.length !== 4) {
// // // // //       toast.error("Please enter your current 4-digit passcode.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       const result = await dispatch(checkCurrentPasscode(passcode)).unwrap();
// // // // //       if (result?.success) {
// // // // //         setStep(2);
// // // // //       } else {
// // // // //         toast.error("Incorrect current passcode.");
// // // // //       }
// // // // //     } catch (err) {
// // // // //       toast.error(err?.message || "Error verifying current passcode.");
// // // // //     }
// // // // //   };

// // // // //   const handleSubmitNewPasscode = () => {
// // // // //     const passcode = getPasscodeString(newPasscode);
// // // // //     if (passcode.length !== 4) {
// // // // //       toast.error("Enter a new passcode of 4 digits.");
// // // // //       return;
// // // // //     }
// // // // //     setStep(3);
// // // // //   };

// // // // //   const handleConfirmNewPasscode = async () => {
// // // // //     const current = getPasscodeString(currentPasscode);
// // // // //     const newCode = getPasscodeString(newPasscode);
// // // // //     const confirm = getPasscodeString(confirmPasscode);

// // // // //     if (confirm.length !== 4) {
// // // // //       toast.error("Confirm passcode with 4 digits.");
// // // // //       return;
// // // // //     }

// // // // //     if (newCode !== confirm) {
// // // // //       toast.error("New and confirm passcodes must match.");
// // // // //       return;
// // // // //     }

// // // // //     if (newCode === current) {
// // // // //       toast.error("New passcode must be different.");
// // // // //       return;
// // // // //     }

// // // // //     try {
// // // // //       await dispatch(
// // // // //         handleChangePasscode({ currentPasscode: current, newPasscode: newCode })
// // // // //       ).unwrap();
// // // // //       toast.success("Passcode updated successfully.");
// // // // //       // Reset everything
// // // // //       setCurrentPasscode(["", "", "", ""]);
// // // // //       setNewPasscode(["", "", "", ""]);
// // // // //       setConfirmPasscode(["", "", "", ""]);
// // // // //       setStep(1);
// // // // //     } catch (err) {
// // // // //       toast.error(err?.message || "Failed to update passcode.");
// // // // //     }
// // // // //   };

// // // // //   // Reusable Input Group
// // // // //   const renderPasscodeInputs = (values, setter) => (
// // // // //     <div className="flex justify-center gap-3 mt-4 mb-6">
// // // // //       {values.map((val, idx) => (
// // // // //        <input
// // // // //        key={idx}
// // // // //        ref={(el) => (inputRefs.current[idx] = el)}
// // // // //        type="text"
// // // // //        inputMode="numeric"
// // // // //        maxLength={1}
// // // // //        value={val}
// // // // //        onChange={(e) => handleChange(e, idx, setter, values)}
// // // // //        onKeyDown={(e) => handleKeyDown(e, idx)}
// // // // //        className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // // //      />
// // // // //       ))}
// // // // //     </div>
// // // // //   );

// // // // //   // Determine step content
// // // // //   const getStepContent = () => {
// // // // //     switch (step) {
// // // // //       case 1:
// // // // //         return (
// // // // //           <>
// // // // //             <h2 className="mt-4 text-lg font-medium text-center">
// // // // //               Current Passcode
// // // // //             </h2>
// // // // //             {renderPasscodeInputs(currentPasscode, setCurrentPasscode)}
// // // // //             <button
// // // // //               onClick={handleCheckCurrentPasscode}
// // // // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // // // //             >
// // // // //               Continue
// // // // //             </button>
// // // // //           </>
// // // // //         );
// // // // //       case 2:
// // // // //         return (
// // // // //           <>
// // // // //             <h2 className="mt-4 text-lg font-medium text-center">
// // // // //               New Passcode
// // // // //             </h2>
// // // // //             {renderPasscodeInputs(newPasscode, setNewPasscode)}
// // // // //             <button
// // // // //               onClick={handleSubmitNewPasscode}
// // // // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // // // //             >
// // // // //               Continue
// // // // //             </button>
// // // // //           </>
// // // // //         );
// // // // //       case 3:
// // // // //         return (
// // // // //           <>
// // // // //             <h2 className="mt-4 text-lg font-medium text-center">
// // // // //               Confirm Passcode
// // // // //             </h2>
// // // // //             {renderPasscodeInputs(confirmPasscode, setConfirmPasscode)}
// // // // //             <button
// // // // //               onClick={handleConfirmNewPasscode}
// // // // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // // // //             >
// // // // //               Continue
// // // // //             </button>
// // // // //           </>
// // // // //         );
// // // // //       default:
// // // // //         return null;
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
// // // // //       <div className="w-full max-w-sm p-6 text-center bg-white shadow-lg rounded-xl">
// // // // //         <div className="flex justify-center mb-2">
// // // // //           <img
// // // // //             src="/lock-icon.png"
// // // // //             alt="Lock Icon"
// // // // //             className="w-16 h-16"
// // // // //           />
// // // // //         </div>
// // // // //         {getStepContent()}
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default PasscodeChangeForm;

// // // // "use client"
// // // // import React, { useRef, useState } from 'react';
// // // // import { useDispatch } from 'react-redux';
// // // // import { toast } from 'react-toastify';
// // // // import { checkCurrentPasscode, handleChangePasscode } from '@/redux/AuthSlice';

// // // // const PasscodeChangeForm = () => {
// // // //   const dispatch = useDispatch();

// // // //   const [step, setStep] = useState(1);
// // // //   const [currentPasscode, setCurrentPasscode] = useState(['', '', '', '']);
// // // //   const [newPasscode, setNewPasscode] = useState(['', '', '', '']);
// // // //   const [confirmPasscode, setConfirmPasscode] = useState(['', '', '', '']);

// // // //   const currentRefs = useRef([]);
// // // //   const newRefs = useRef([]);
// // // //   const confirmRefs = useRef([]);

// // // //   const getPasscodeString = (arr) => arr.join('');

// // // //   // Input handlers
// // // //   const handleChange = (e, index, setter, values, refs) => {
// // // //     const value = e.target.value;
// // // //     if (/^\d?$/.test(value)) {
// // // //       const updated = [...values];
// // // //       updated[index] = value;
// // // //       setter(updated);

// // // //       if (value && index < 3) {
// // // //         refs.current[index + 1]?.focus();
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleKeyDown = (e, index, refs) => {
// // // //     if (e.key === 'Backspace' && index > 0 && !e.target.value) {
// // // //       refs.current[index - 1]?.focus();
// // // //     }
// // // //   };

// // // //   // Step 1
// // // //   const handleCheckCurrentPasscode = async () => {
// // // //     const passcode = getPasscodeString(currentPasscode);
// // // //     if (passcode.length !== 4) {
// // // //       toast.error("Enter your current 4-digit passcode.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       const result = await dispatch(checkCurrentPasscode(passcode)).unwrap();
// // // //       if (result?.success) {
// // // //         setStep(2);
// // // //       } else {
// // // //         toast.error("Incorrect current passcode.");
// // // //       }
// // // //     } catch (err) {
// // // //       toast.error(err?.message || "Error verifying current passcode.");
// // // //     }
// // // //   };

// // // //   // Step 2
// // // //   const handleSubmitNewPasscode = () => {
// // // //     const newCode = getPasscodeString(newPasscode);
// // // //     if (newCode.length !== 4) {
// // // //       toast.error("Enter a new 4-digit passcode.");
// // // //       return;
// // // //     }
// // // //     setStep(3);
// // // //   };

// // // //   // Step 3
// // // //   const handleConfirmNewPasscode = async () => {
// // // //     const oldPass = getPasscodeString(currentPasscode);
// // // //     const newCode = getPasscodeString(newPasscode);
// // // //     const confirmCode = getPasscodeString(confirmPasscode);

// // // //     if (confirmCode.length !== 4) {
// // // //       toast.error("Confirm the 4-digit passcode.");
// // // //       return;
// // // //     }

// // // //     if (newCode !== confirmCode) {
// // // //       toast.error("New and confirm passcodes do not match.");
// // // //       return;
// // // //     }

// // // //     if (oldPass === newCode) {
// // // //       toast.error("New passcode must be different from the current one.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       await dispatch(handleChangePasscode({ currentPasscode: oldPass, newPasscode: newCode })).unwrap();
// // // //       toast.success("Passcode updated successfully.");
// // // //       setStep(1);
// // // //       setCurrentPasscode(['', '', '', '']);
// // // //       setNewPasscode(['', '', '', '']);
// // // //       setConfirmPasscode(['', '', '', '']);
// // // //     } catch (err) {
// // // //       toast.error(err?.message || "Failed to update passcode.");
// // // //     }
// // // //   };

// // // //   const renderPasscodeInputs = (values, setter, refs) => (
// // // //     <div className="flex justify-center gap-2 mt-4 mb-4">
// // // //       {values.map((val, idx) => (
// // // //         <input
// // // //           key={idx}
// // // //           ref={(el) => (refs.current[idx] = el)}
// // // //           type="text"
// // // //           inputMode="numeric"
// // // //           maxLength={1}
// // // //           value={val}
// // // //           onChange={(e) => handleChange(e, idx, setter, values, refs)}
// // // //           onKeyDown={(e) => handleKeyDown(e, idx, refs)}
// // // //           className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
// // // //         />
// // // //       ))}
// // // //     </div>
// // // //   );

// // // //   return (
// // // //     <div className="max-w-xs p-6 mx-auto mt-10 bg-white shadow-md rounded-xl">
// // // //       <div className="flex flex-col items-center">
// // // //         <img src="/lock.png" alt="Lock" className="w-16 mb-4" />
// // // //         <h2 className="mb-2 font-semibold text-center">
// // // //           {step === 1 && "Current Passcode"}
// // // //           {step === 2 && "New Passcode"}
// // // //           {step === 3 && "Confirm Passcode"}
// // // //         </h2>

// // // //         {/* Step inputs */}
// // // //         {step === 1 && renderPasscodeInputs(currentPasscode, setCurrentPasscode, currentRefs)}
// // // //         {step === 2 && renderPasscodeInputs(newPasscode, setNewPasscode, newRefs)}
// // // //         {step === 3 && renderPasscodeInputs(confirmPasscode, setConfirmPasscode, confirmRefs)}

// // // //         {/* Buttons */}
// // // //         {step === 1 && (
// // // //           <button onClick={handleCheckCurrentPasscode} className="w-full py-2 mt-2 text-white bg-black rounded">
// // // //             Continue
// // // //           </button>
// // // //         )}
// // // //         {step === 2 && (
// // // //           <button onClick={handleSubmitNewPasscode} className="w-full py-2 mt-2 text-white bg-black rounded">
// // // //             Continue
// // // //           </button>
// // // //         )}
// // // //         {step === 3 && (
// // // //           <button onClick={handleConfirmNewPasscode} className="w-full py-2 mt-2 text-white bg-black rounded">
// // // //             Submit
// // // //           </button>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default PasscodeChangeForm;

// // // "use client";
// // // import React, { useState, useRef } from "react";
// // // import { useDispatch } from "react-redux";
// // // import { toast } from "react-toastify";
// // // import {
// // //   checkCurrentPasscode,
// // //   handleChangePasscode,
// // // } from "@/redux/AuthSlice";

// // // const PasscodeChangeForm = () => {
// // //   const dispatch = useDispatch();
// // //   const [step, setStep] = useState(1);
// // //   const [currentPasscode, setCurrentPasscode] = useState(["", "", "", ""]);
// // //   const [newPasscode, setNewPasscode] = useState(["", "", "", ""]);
// // //   const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", ""]);
// // //   const [loading, setLoading] = useState(false);
// // //   const inputRefs = useRef([]);

// // //   // Helper to focus next input
// // //   const handleChange = (e, index, setter, values) => {
// // //     const value = e.target.value;
// // //     const newValues = [...values];

// // //     if (/^\d$/.test(value)) {
// // //       newValues[index] = value;
// // //       setter(newValues);

// // //       // Move forward
// // //       if (index < 3) {
// // //         inputRefs.current[index + 1]?.focus();
// // //       }
// // //     } else if (value === "") {
// // //       newValues[index] = "";
// // //       setter(newValues);
// // //     }
// // //   };

// // //   // Handle Backspace key
// // //   const handleKeyDown = (e, index) => {
// // //     if (e.key === "Backspace" && !e.target.value && index > 0) {
// // //       inputRefs.current[index - 1]?.focus();
// // //     }
// // //   };

// // //   const getPasscodeString = (arr) => arr.join("");

// // //   const handleCheckCurrentPasscode = async () => {
// // //     const passcode = getPasscodeString(currentPasscode);
// // //     if (passcode.length !== 4) {
// // //       toast.error("Please enter your current 4-digit passcode.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       const result = await dispatch(checkCurrentPasscode(passcode)).unwrap();
// // //       if (result?.success) {
// // //         setStep(2);
// // //         // Focus on the first input of the new passcode
// // //         inputRefs.current[0]?.focus();
// // //       } else {
// // //         toast.error("Incorrect current passcode.");
// // //       }
// // //     } catch (err) {
// // //       toast.error(err?.message || "Error verifying current passcode.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleSubmitNewPasscode = () => {
// // //     const passcode = getPasscodeString(newPasscode);
// // //     if (passcode.length !== 4) {
// // //       toast.error("Enter a new passcode of 4 digits.");
// // //       return;
// // //     }
// // //     setStep(3);
// // //     // Focus on the first input of the confirm passcode
// // //     inputRefs.current[0]?.focus();
// // //   };

// // //   const handleConfirmNewPasscode = async () => {
// // //     const current = getPasscodeString(currentPasscode);
// // //     const newCode = getPasscodeString(newPasscode);
// // //     const confirm = getPasscodeString(confirmPasscode);

// // //     if (confirm.length !== 4) {
// // //       toast.error("Confirm passcode with 4 digits.");
// // //       return;
// // //     }

// // //     if (newCode !== confirm) {
// // //       toast.error("New and confirm passcodes must match.");
// // //       return;
// // //     }

// // //     if (newCode === current) {
// // //       toast.error("New passcode must be different.");
// // //       return;
// // //     }

// // //     setLoading(true);
// // //     try {
// // //       await dispatch(
// // //         handleChangePasscode({ currentPasscode: current, newPasscode: newCode })
// // //       ).unwrap();
// // //       toast.success("Passcode updated successfully.");
// // //       // Reset everything
// // //       setCurrentPasscode(["", "", "", ""]);
// // //       setNewPasscode(["", "", "", ""]);
// // //       setConfirmPasscode(["", "", "", ""]);
// // //       setStep(1);
// // //       // Focus on the first input of the current passcode
// // //       inputRefs.current[0]?.focus();
// // //     } catch (err) {
// // //       toast.error(err?.message || "Failed to update passcode.");
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   // Reusable Input Group
// // //   const renderPasscodeInputs = (values, setter) => (
// // //     <div className="flex justify-center gap-3 mt-4 mb-6">
// // //       {values.map((val, idx) => (
// // //         <input
// // //           key={idx}
// // //           ref={(el) => (inputRefs.current[idx] = el)}
// // //           type="text"
// // //           inputMode="numeric"
// // //           maxLength={1}
// // //           value={val}
// // //           onChange={(e) => handleChange(e, idx, setter, values)}
// // //           onKeyDown={(e) => handleKeyDown(e, idx)}
// // //           className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
// // //         />
// // //       ))}
// // //     </div>
// // //   );

// // //   // Determine step content
// // //   const getStepContent = () => {
// // //     switch (step) {
// // //       case 1:
// // //         return (
// // //           <>
// // //             <h2 className="mt-4 text-lg font-medium text-center">
// // //               Current Passcode
// // //             </h2>
// // //             {renderPasscodeInputs(currentPasscode, setCurrentPasscode)}
// // //             <button
// // //               onClick={handleCheckCurrentPasscode}
// // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // //               disabled={loading}
// // //             >
// // //               {loading ? "Verifying..." : "Continue"}
// // //             </button>
// // //           </>
// // //         );
// // //       case 2:
// // //         return (
// // //           <>
// // //             <h2 className="mt-4 text-lg font-medium text-center">
// // //               New Passcode
// // //             </h2>
// // //             {renderPasscodeInputs(newPasscode, setNewPasscode)}
// // //             <button
// // //               onClick={handleSubmitNewPasscode}
// // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // //             >
// // //               Continue
// // //             </button>
// // //           </>
// // //         );
// // //       case 3:
// // //         return (
// // //           <>
// // //             <h2 className="mt-4 text-lg font-medium text-center">
// // //               Confirm Passcode
// // //             </h2>
// // //             {renderPasscodeInputs(confirmPasscode, setConfirmPasscode)}
// // //             <button
// // //               onClick={handleConfirmNewPasscode}
// // //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// // //               disabled={loading}
// // //             >
// // //               {loading ? "Updating..." : "Submit"}
// // //             </button>
// // //           </>
// // //         );
// // //       default:
// // //         return null;
// // //     }
// // //   };

// // //   return (
// // //     <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
// // //       <div className="w-full max-w-sm p-6 text-center bg-white shadow-lg rounded-xl">
// // //         <div className="flex justify-center mb-2">
// // //           <img
// // //             src="/lock-icon.png"
// // //             alt="Lock Icon"
// // //             className="w-16 h-16"
// // //           />
// // //         </div>
// // //         {getStepContent()}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default PasscodeChangeForm;

// // "use client";
// // import React, { useState, useRef, useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import { toast } from "react-toastify";
// // import {
// //   checkCurrentPasscode,
// //   handleChangePasscode,
// // } from "@/redux/AuthSlice";

// // const PasscodeChangeForm = () => {
// //   const dispatch = useDispatch();
// //   const [step, setStep] = useState(1);
// //   const [currentPasscode, setCurrentPasscode] = useState(["", "", "", ""]);
// //   const [newPasscode, setNewPasscode] = useState(["", "", "", ""]);
// //   const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", ""]);
// //   const [loading, setLoading] = useState(false);
// //   const inputRefs = useRef([]);
// //   const currentRefs = useRef([]);
// // const newRefs = useRef([]);
// // const confirmRefs = useRef([]);


// //   const getPasscodeString = (arr) => arr.join("");

// //   useEffect(() => {
// //     if (step === 1) currentRefs.current[0]?.focus();
// //     if (step === 2) newRefs.current[0]?.focus();
// //     if (step === 3) confirmRefs.current[0]?.focus();
// //   }, [step]);
  

// //   const handleChange = (e, index, setter, values) => {
// //     const value = e.target.value;
// //     const newValues = [...values];

// //     if (/^\d$/.test(value)) {
// //       newValues[index] = value;
// //       setter(newValues);
// //       if (index < 3) {
// //         inputRefs.current[index + 1]?.focus();
// //       }
// //     } else if (value === "") {
// //       newValues[index] = "";
// //       setter(newValues);
// //     }
// //   };

// //   const handleKeyDown = (e, index, refs) => {
// //     if (e.key === "Backspace" && !e.target.value && index > 0) {
// //       refs.current[index - 1]?.focus();
// //     }
// //   };
  

// //   const handleCheckCurrentPasscode = async () => {
// //     const passcode = getPasscodeString(currentPasscode);
// //     if (passcode.length !== 4) {
// //       toast.error("Please enter your current 4-digit passcode.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       const result = await dispatch(checkCurrentPasscode(passcode)).unwrap();
// //       if (result?.success) {
// //         setStep(2);
// //         // Reset focus for the new passcode inputs
// //         inputRefs.current[0]?.focus();
// //       } else {
// //         toast.error("Incorrect current passcode.");
// //       }
// //     } catch (err) {
// //       toast.error(err?.message || "Error verifying current passcode.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const handleGoToNewPasscode = () => {
// //     const passcode = getPasscodeString(newPasscode);
// //     if (passcode.length !== 4) {
// //       toast.error("Enter a new passcode of 4 digits.");
// //       return;
// //     }
// //     setStep(3);
// //     // Reset focus for the confirm passcode inputs
// //     inputRefs.current[0]?.focus();
// //   };

// //   const handleUpdatePasscode = async () => {
// //     const current = getPasscodeString(currentPasscode);
// //     const newCode = getPasscodeString(newPasscode);
// //     const confirm = getPasscodeString(confirmPasscode);

// //     if (confirm.length !== 4) {
// //       toast.error("Confirm passcode with 4 digits.");
// //       return;
// //     }

// //     if (newCode !== confirm) {
// //       toast.error("New and confirm passcodes must match.");
// //       return;
// //     }

// //     if (newCode === current) {
// //       toast.error("New passcode must be different.");
// //       return;
// //     }

// //     setLoading(true);
// //     try {
// //       await dispatch(
// //         handleChangePasscode({ currentPasscode: current, newPasscode: newCode })
// //       ).unwrap();
// //       toast.success("Passcode updated successfully.");
// //       setCurrentPasscode(["", "", "", ""]);
// //       setNewPasscode(["", "", "", ""]);
// //       setConfirmPasscode(["", "", "", ""]);
// //       setStep(1);
// //       inputRefs.current[0]?.focus();
// //     } catch (err) {
// //       toast.error(err?.message || "Failed to update passcode.");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const renderPasscodeInputs = (values, setter, refs) => (
// //     <div className="flex justify-center gap-3 mt-4 mb-6">
// //       {values.map((val, idx) => (
// //         <input
// //           key={idx}
// //           ref={(el) => (refs.current[idx] = el)}
// //           type="text"
// //           inputMode="numeric"
// //           maxLength={1}
// //           value={val}
// //           onChange={(e) => handleChange(e, idx, setter, values)}
// //           onKeyDown={(e) => handleKeyDown(e, idx, refs)}
// //           className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //       ))}
// //     </div>
// //   );
  

// //   const getStepContent = () => {
// //     switch (step) {
// //       case 1:
// //         return (
// //           <>
// //             <h2 className="mt-4 text-lg font-medium text-center">
// //               Current Passcode
// //             </h2>
// //             {renderPasscodeInputs(currentPasscode, setCurrentPasscode, currentRefs)}
// //             <button
// //               onClick={handleCheckCurrentPasscode}
// //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// //               // disabled={loading}
// //               disabled={loading || currentPasscode.some((val) => val === "")}
// //             >
// //               {loading ? "Verifying..." : "Continue"}
// //             </button>
// //           </>
// //         );
// //       case 2:
// //         return (
// //           <>
// //             <h2 className="mt-4 text-lg font-medium text-center">
// //               New Passcode
// //             </h2>
// //             {renderPasscodeInputs(newPasscode, setNewPasscode, newRefs)}
// //             <button
// //               onClick={handleGoToNewPasscode}
// //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// //             >
// //               Continue
// //             </button>
// //           </>
// //         );
// //       case 3:
// //         return (
// //           <>
// //             <h2 className="mt-4 text-lg font-medium text-center">
// //               Confirm Passcode
// //             </h2>
// //             {renderPasscodeInputs(confirmPasscode, setConfirmPasscode, confirmRefs)}
// //             <button
// //               onClick={handleUpdatePasscode}
// //               className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
// //               disabled={loading}
// //             >
// //               {loading ? "Updating..." : "Submit"}
// //             </button>
// //           </>
// //         );
// //       default:
// //         return null;
// //     }
// //   };

// //   return (
// //     <div className="flex px-4 h-[420px] items-top justify-left">
// //       <div className="w-[350px] max-w-sm p-6 mt-4 text-center bg-white shadow-lg h-[380px] rounded-xl">
// //         <div className="flex justify-center mb-2">
// //           <img
// //             src="/static/images/lock.png"
// //             alt="Lock Icon"
// //             className="w-32 h-32"
// //           />
// //         </div>
// //         {getStepContent()}
// //       </div>
// //     </div>
// //   );
// // };

// // export default PasscodeChangeForm;

// "use client";
// import React, { useState, useRef, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "react-hot-toast";
// import {
//   checkCurrentPasscode,
//   handleChangePasscode,
// } from "@/redux/AuthSlice";

// const PasscodeChangeForm = () => {
//   const dispatch = useDispatch();
//   const [step, setStep] = useState(1);
//   const [currentPasscode, setCurrentPasscode] = useState(["", "", "", ""]);
//   const [newPasscode, setNewPasscode] = useState(["", "", "", ""]);
//   const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", ""]);
//   const [loading, setLoading] = useState(false);

//   const currentRefs = useRef([]);
//   const newRefs = useRef([]);
//   const confirmRefs = useRef([]);

//   useEffect(() => {
//     if (step === 1) currentRefs.current[0]?.focus();
//     if (step === 2) newRefs.current[0]?.focus();
//     if (step === 3) confirmRefs.current[0]?.focus();
//   }, [step]);

//   const getPasscodeString = (arr) => arr.join("");

//   const handleInputChange = (e, index, values, setValues, refs) => {
//     const value = e.target.value;
//     if (/^\d$/.test(value)) {
//       const updated = [...values];
//       updated[index] = value;
//       setValues(updated);
//       if (index < 3) refs.current[index + 1]?.focus();
//     } else if (value === "") {
//       const updated = [...values];
//       updated[index] = "";
//       setValues(updated);
//     }
//   };

//   const handleKeyDown = (e, index, refs) => {
//     if (e.key === "Backspace" && !e.target.value && index > 0) {
//       refs.current[index - 1]?.focus();
//     }
//   };

//   const renderInputs = (values, setValues, refs) => (
//     <div className="flex justify-center gap-3 mt-4 mb-6">
//       {values.map((val, idx) => (
//         <input
//           key={idx}
//           ref={(el) => (refs.current[idx] = el)}
//           type="text"
//           inputMode="numeric"
//           maxLength={1}
//           value={val}
//           onChange={(e) =>
//             handleInputChange(e, idx, values, setValues, refs)
//           }
//           onKeyDown={(e) => handleKeyDown(e, idx, refs)}
//           className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       ))}
//     </div>
//   );

//   const handleCheckCurrent = async () => {
//     const pass = getPasscodeString(currentPasscode);
//     if (pass.length !== 4) {
//       toast.error("Enter 4-digit current passcode.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await dispatch(checkCurrentPasscode(pass)).unwrap();
//       if (res?.success) {
//         setStep(2);
//       } else {
//         toast.error("Wrong current passcode.");
//       }
//     } catch (err) {
//       // toast.error(err?.message || "Error verifying passcode.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleGoToConfirm = () => {
//     const newPass = getPasscodeString(newPasscode);
//     if (newPass.length !== 4) {
//       toast.error("Enter 4-digit new passcode.");
//       return;
//     }
//     setStep(3);
//   };

//   const handleUpdatePasscode = async () => {
//     const current = getPasscodeString(currentPasscode);
//     const newCode = getPasscodeString(newPasscode);
//     const confirm = getPasscodeString(confirmPasscode);

//     if (confirm.length !== 4) {
//       toast.error("Enter 4-digit confirm passcode.");
//       return;
//     }

//     if (newCode !== confirm) {
//       toast.error("New and confirm passcode must match.");
//       return;
//     }

//     if (newCode === current) {
//       toast.error("New passcode must be different.");
//       return;
//     }

//     setLoading(true);
//     try {
//       await dispatch(
//         handleChangePasscode({ currentPasscode: current, newPasscode: newCode })
//       ).unwrap();
//       // toast.success("Passcode updated successfully.");
//       // reset
//       setCurrentPasscode(["", "", "", ""]);
//       setNewPasscode(["", "", "", ""]);
//       setConfirmPasscode(["", "", "", ""]);
//       setStep(1);
//     } catch (err) {
//       toast.error(err?.message || "Failed to update passcode.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getStepUI = () => {
//     if (step === 1)
//       return (
//         <>
//           <h2 className="mt-4 text-lg font-medium text-center">
//             Current Passcode
//           </h2>
//           {renderInputs(currentPasscode, setCurrentPasscode, currentRefs)}
//           <button
//             onClick={handleCheckCurrent}
//             className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
//             disabled={loading}
//           >
//             {loading ? "Verifying..." : "Continue"}
//           </button>
//         </>
//       );
//     if (step === 2)
//       return (
//         <>
//           <h2 className="mt-4 text-lg font-medium text-center">New Passcode</h2>
//           {renderInputs(newPasscode, setNewPasscode, newRefs)}
//           <button
//             onClick={handleGoToConfirm}
//             className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
//           >
//             Continue
//           </button>
//         </>
//       );
//     if (step === 3)
//       return (
//         <>
//           <h2 className="mt-4 text-lg font-medium text-center">
//             Confirm Passcode
//           </h2>
//           {renderInputs(confirmPasscode, setConfirmPasscode, confirmRefs)}
//           <button
//             onClick={handleUpdatePasscode}
//             className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
//             disabled={loading}
//           >
//             {loading ? "Updating..." : "Submit"}
//           </button>
//         </>
//       );
//   };

//   return (
//     <div className="flex px-4 h-[420px] items-top justify-left">
//       <div className="w-[350px] max-w-sm p-6 mt-4 text-center bg-white shadow-lg h-[380px] rounded-xl">
//         <div className="flex justify-center mb-2">
//           <img
//             src="/static/images/lock.png"
//             alt="Lock Icon"
//             className="w-32 h-32"
//           />
//         </div>
//         {getStepUI()}
//       </div>
//     </div>
//   );
// };

// export default PasscodeChangeForm;


"use client";
import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import {
  checkCurrentPasscode,
  handleChangePasscode,
} from "@/redux/AuthSlice";
import { useRouter } from "next/navigation";
 
const PasscodeChangeForm = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [currentPasscode, setCurrentPasscode] = useState(["", "", "", ""]);
  const [newPasscode, setNewPasscode] = useState(["", "", "", ""]);
  const [confirmPasscode, setConfirmPasscode] = useState(["", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // NEW STATE
 
  const currentRefs = useRef([]);
  const newRefs = useRef([]);
  const confirmRefs = useRef([]);
  const router = useRouter()
 
  useEffect(() => {
    if (step === 1) currentRefs.current[0]?.focus();
    if (step === 2) newRefs.current[0]?.focus();
    if (step === 3) confirmRefs.current[0]?.focus();
  }, [step]);
 
  const getPasscodeString = (arr) => arr.join("");
 
  const handleInputChange = (e, index, values, setValues, refs) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const updated = [...values];
      updated[index] = value;
      setValues(updated);
      if (index < 3) refs.current[index + 1]?.focus();
    } else if (value === "") {
      const updated = [...values];
      updated[index] = "";
      setValues(updated);
    }
  };
 
  const handleKeyDown = (e, index, refs) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      refs.current[index - 1]?.focus();
    }
  };
 
  const renderInputs = (values, setValues, refs) => (
    <div className="flex justify-center gap-3 mt-4 mb-6">
      {values.map((val, idx) => (
        <input
          key={idx}
          ref={(el) => (refs.current[idx] = el)}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={val}
          onChange={(e) => handleInputChange(e, idx, values, setValues, refs)}
          onKeyDown={(e) => handleKeyDown(e, idx, refs)}
          className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  );
 
  const handleCheckCurrent = async () => {
    const pass = getPasscodeString(currentPasscode);
    if (pass.length !== 4) {
      toast.error("Enter 4-digit current passcode.");
      return;
    }
 
    setLoading(true);
    try {
      const res = await dispatch(checkCurrentPasscode(pass)).unwrap();
      if (res?.success) {
        setStep(2);
      } else {
        toast.error("Wrong current passcode.");
      }
    } catch (err) {
      // toast.error(err?.message || "Error verifying passcode.");
    } finally {
      setLoading(false);
    }
  };
 
  const handleGoToConfirm = () => {
    const newPass = getPasscodeString(newPasscode);
    if (newPass.length !== 4) {
      toast.error("Enter 4-digit new passcode.");
      return;
    }
    setStep(3);
  };
 
  const handleUpdatePasscode = async () => {
    const current = getPasscodeString(currentPasscode);
    const newCode = getPasscodeString(newPasscode);
    const confirm = getPasscodeString(confirmPasscode);
 
    if (confirm.length !== 4) {
      toast.error("Enter 4-digit confirm passcode.");
      return;
    }
 
    if (newCode !== confirm) {
      toast.error("New and confirm passcode must match.");
      return;
    }
 
    if (newCode === current) {
      toast.error("New passcode must be different.");
      return;
    }
 
    setLoading(true);
    try {
      await dispatch(
        handleChangePasscode({ currentPasscode: current, newPasscode: newCode })
      ).unwrap();
 
      // toast.success("Passcode updated successfully.");
      setShowSuccessPopup(true); // Show the popup on success
    } catch (err) {
      toast.error(err?.message || "Failed to update passcode.");
    } finally {
      setLoading(false);
    }
  };
 
  const handlePopupClose = () => {
    // Reset everything after closing the popup
    setShowSuccessPopup(false);
    setCurrentPasscode(["", "", "", ""]);
    setNewPasscode(["", "", "", ""]);
    setConfirmPasscode(["", "", "", ""]);
    setStep(1);
   
    router.push("/my-account")
  };
 
  const getStepUI = () => {
    if (step === 1)
      return (
        <>
          <h2 className="mt-4 text-lg font-medium text-center">
            Current Passcode
          </h2>
          {renderInputs(currentPasscode, setCurrentPasscode, currentRefs)}
          <button
            onClick={handleCheckCurrent}
            className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Verifying..." : "Continue"}
          </button>
        </>
      );
    if (step === 2)
      return (
        <>
          <h2 className="mt-4 text-lg font-medium text-center">New Passcode</h2>
          {renderInputs(newPasscode, setNewPasscode, newRefs)}
          <button
            onClick={handleGoToConfirm}
            className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
          >
            Continue
          </button>
        </>
      );
    if (step === 3)
      return (
        <>
          <h2 className="mt-4 text-lg font-medium text-center">
            Confirm Passcode
          </h2>
          {renderInputs(confirmPasscode, setConfirmPasscode, confirmRefs)}
          <button
            onClick={handleUpdatePasscode}
            className="w-full py-2 text-white bg-black rounded-md hover:opacity-90"
            disabled={loading}
          >
            {loading ? "Updating..." : "Submit"}
          </button>
        </>
      );
  };
 
  return (
    <div className="flex px-4 h-[420px] items-top justify-left relative">
      {/* Form */}
      <div className="w-[350px] max-w-sm p-6 mt-4 text-center bg-white shadow-lg h-[380px] rounded-xl">
        <div className="flex justify-center mb-2">
          <img
            src="/static/images/lock.png"
            alt="Lock Icon"
            className="w-32 h-32"
          />
        </div>
        {getStepUI()}
      </div>
 
      {/* Success Popup */}
      {showSuccessPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-xl p-8 w-[350px] text-center shadow-lg">
            <div className="flex justify-center mb-4">
              <img
                src="/static/images/success.png"
                alt="Success"
                className="w-16 h-16"
              />
            </div>
            <h2 className="text-xl font-semibold text-black">
              Passcode Changed!
            </h2>
            <p className="mt-2 text-xs text-gray-600">
              Your passcode has been changed successfully.
            </p>
            <button
              onClick={handlePopupClose}
              className="px-6 py-2 mt-4 text-white bg-black rounded-full hover:opacity-90"
            >
              Let&apos;s Go
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default PasscodeChangeForm;
 
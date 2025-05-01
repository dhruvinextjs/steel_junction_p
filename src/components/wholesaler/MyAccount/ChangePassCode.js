// import React from "react";

// import {
//   InputOTP,
//   InputOTPGroup,
//   InputOTPSlot,
// } from "@/components/ui/input-otp";
// import Label from "@/components/ui/form/label";
// import { Button } from "@/components/ui/button";
// const ChangePassCode = () => {
//   const [value, setValue] = React.useState("");
//   return (
//     <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
//       <p className="text-xl text-[#25324B] font-semibold">Change PassCode</p>
//       <div className="space-y-4">
//         <div className="space-y-2">
//           <label htmlFor="Current" className="label_text">
//             Current passcode
//           </label>
//           <InputOTP
//             maxLength={4}
//             value={value}
//             onChange={(value) => setValue(value)}
//           >
//             <InputOTPGroup className="gap-2">
//               <InputOTPSlot index={0} />
//               <InputOTPSlot index={1} />
//               <InputOTPSlot index={2} />
//               <InputOTPSlot index={3} />
//             </InputOTPGroup>
//           </InputOTP>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="new" className="label_text">
//             New passcode
//           </label>
//           <InputOTP
//             maxLength={4}
//             // value={value}
//             // onChange={(value) => setValue(value)}
//           >
//             <InputOTPGroup className="gap-2">
//               <InputOTPSlot index={0} />
//               <InputOTPSlot index={1} />
//               <InputOTPSlot index={2} />
//               <InputOTPSlot index={3} />
//             </InputOTPGroup>
//           </InputOTP>
//         </div>
//         <div className="space-y-2">
//           <label htmlFor="Confirm" className="label_text">
//             Confirm passcode
//           </label>
//           <InputOTP
//             maxLength={4}
//             // value={value}
//             // onChange={(value) => setValue(value)}
//           >
//             <InputOTPGroup className="gap-2">
//               <InputOTPSlot index={0} />
//               <InputOTPSlot index={1} />
//               <InputOTPSlot index={2} />
//               <InputOTPSlot index={3} />
//             </InputOTPGroup>
//           </InputOTP>
//         </div>
//         <Button variant="primary" className="w-auto">
//           Update
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default ChangePassCode;

"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Button } from "@/components/ui/button";
import { handleChangePasscode } from "@/redux/AuthSlice";
import { toast } from "react-hot-toast";

const ChangePassCode = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [currentPasscode, setCurrentPasscode] = React.useState("");
  const [newPasscode, setNewPasscode] = React.useState("");
  const [confirmPasscode, setConfirmPasscode] = React.useState("");

  const handleSubmit = () => {
    if (!currentPasscode || !newPasscode || !confirmPasscode) {
      toast.error("Please fill in all passcode fields.");
      return;
    }
  
    if (newPasscode !== confirmPasscode) {
      toast.error("New and Confirm passcodes must match.");
      return;
    }
  
    if (currentPasscode === newPasscode) {
      toast.error("Please choose a unique new passcode.");
      return;
    }
  
    dispatch(handleChangePasscode({ currentPasscode, newPasscode }));
  };

  return (
    <div className="p-3 space-y-4 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold">Change PassCode</p>
      <div className="space-y-4">
        {/* Current Passcode */}
        <div className="space-y-2">
          <label className="label_text">Current passcode</label>
          <InputOTP maxLength={4} value={currentPasscode} onChange={setCurrentPasscode}>
            <InputOTPGroup className="gap-2">
              {[0, 1, 2, 3].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* New Passcode */}
        <div className="space-y-2">
          <label className="label_text">New passcode</label>
          <InputOTP maxLength={4} value={newPasscode} onChange={setNewPasscode}>
            <InputOTPGroup className="gap-2">
              {[0, 1, 2, 3].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Confirm Passcode */}
        <div className="space-y-2">
          <label className="label_text">Confirm passcode</label>
          <InputOTP maxLength={4} value={confirmPasscode} onChange={setConfirmPasscode}>
            <InputOTPGroup className="gap-2">
              {[0, 1, 2, 3].map((index) => (
                <InputOTPSlot key={index} index={index} />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button onClick={handleSubmit} disabled={loading} variant="primary" className="w-auto">
          {loading ? "Updating..." : "Update"}
        </Button>
      </div>
    </div>
  );
};

export default ChangePassCode;

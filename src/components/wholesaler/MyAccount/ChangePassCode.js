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
 
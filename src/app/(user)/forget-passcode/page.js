"use client";
 
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
 
import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import {
  handleForgotPasscode,
  handleVerifyOtp,
  handleResetPasscode,
} from "@/redux/AuthSlice";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
 
// OTP Input Component
const OTPInput = ({ name, control, errors }) => (
  <Controller
    name={name}
    control={control}
    rules={{
      required: `${name} is required`,
      minLength: { value: 4, message: `${name} must be 4 digits` },
    }}
    render={({ field }) => (
      <InputOTP
        maxLength={4}
        value={field.value}
        onChange={(value) => field.onChange(value)}
      >
        <InputOTPGroup className="gap-2">
          {Array.from({ length: 4 }).map((_, index) => (
            <InputOTPSlot key={index} index={index} />
          ))}
        </InputOTPGroup>
      </InputOTP>
    )}
  />
);
 
const ForgotPasscodePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { loading } = useSelector((state) => state.auth);
  const [step, setStep] = useState(1);
  const [visibleOtp, setVisibleOtp] = useState("");
  const [otpTimer, setOtpTimer] = useState(0); // Timer for OTP resend
 
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      otp: "",
      newPasscode: "",
      confirmPasscode: "",
    },
  });
 
  const onSubmit = async (data) => {
    try {
      switch (step) {
        case 1:
          if (data.phone.length !== 10) {
            toast.error("Enter valid mobile number");
            return;
          }
          const otpResponse = await dispatch(
            handleForgotPasscode({ mobileNumber: data.phone })
          ).unwrap();
 
          if (otpResponse.otp) setVisibleOtp(otpResponse.otp);
          // toast.success("OTP sent to your mobile");
          setStep(2);
          break;
 
        case 2:
          if (data.otp.length !== 4) {
            toast.error("OTP must be 4 digits");
            return;
          }
          await dispatch(
            handleVerifyOtp({ mobileNumber: data.phone, otp: data.otp })
          ).unwrap();
          toast.success("OTP verified successfully");
          setStep(3);
          break;
 
        case 3:
          if (data.newPasscode.length !== 4) {
            toast.error("Passcode must be 4 digits");
            return;
          }
          setStep(4);
          break;
 
        case 4:
          if (data.newPasscode !== data.confirmPasscode) {
            toast.error("Passcodes do not match");
            return;
          }
 
          await dispatch(
            handleResetPasscode({
              mobileNumber: data.phone,
              newPasscode: data.newPasscode,
            })
          ).unwrap();
          // toast.success("Passcode reset successfully");
          setStep(5);
          break;
 
        default:
          break;
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    }
  };
 
  const handleResendOtp = async (phone) => {
    // Call the API to resend the OTP
    try {
      const otpResponse = await dispatch(
        handleForgotPasscode({ mobileNumber: phone })
      ).unwrap();
      if (otpResponse.otp) {
        setVisibleOtp(otpResponse.otp);
        toast.success("OTP resent successfully");
        setOtpTimer(30); // Set timer for OTP resend cooldown
        const timer = setInterval(() => {
          setOtpTimer((prev) => {
            if (prev === 0) clearInterval(timer);
            return prev - 1;
          });
        }, 1000);
      }
    } catch (error) {
      toast.error("Error resending OTP");
    }
  };
 
  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden relative lg:block bg-[url('/static/images/signin.png')] bg-cover">
        <div className="absolute z-10 -translate-x-1/2 top-1/2 left-1/2 -translate-y-2/2">
          <Picture
            src={"/static/images/logo1.png"}
            alt="logo"
            className="mx-auto"
            width={150}
            height={150}
          />
        </div>
      </div>
 
      <div className="flex items-center justify-center min-h-screen bg-[#FAFAFA] p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-sm p-4 space-y-4 bg-white rounded-lg shadow-md md:p-6"
        >
          {/* Back Button for steps > 1 */}
          {step > 1 && step < 5 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 mb-2 text-sm text-gray-600 hover:text-black"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
 
          {/* Step 1: Enter Phone */}
          {step === 1 && (
            <>
              <h2 className="text-lg font-semibold">Forgot Passcode</h2>
              <p className="text-sm text-gray-400">
                Enter your mobile number below and we will send you a
                verification code
              </p>
              <div className="space-y-2">
                <label className="label_text">Mobile Number</label>
                <input
                  type="tel"
                  maxLength={10}
                  placeholder="Type here..."
                  {...register("phone", {
                    required: "Mobile number is required",
                    minLength: {
                      value: 10,
                      message: "Mobile number must be 10 digits",
                    },
                    maxLength: {
                      value: 10,
                      message: "Mobile number must be 10 digits",
                    },
                  })}
                  className="input_field"
                />
                {errors.phone && (
                  <p className="text-sm text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <Button type="submit" className="w-full text-white">
                {loading ? "Sending OTP..." : "Send"}
              </Button>
            </>
          )}
 
          {/* Step 2: Verify OTP */}
          {step === 2 && (
            <>
              <h2 className="text-lg font-semibold text-start">
                Verify Your Mobile
              </h2>
              <p className="text-sm text-gray-400 w-50">
                Please type 4-digit code that we have sent to your mobile.
              </p>
              <span className="text-sm text-green-600">{watch("phone")}</span>
              {visibleOtp && (
                <p className="text-center text-primary_color">
                  OTP: {visibleOtp}
                </p>
              )}
              <div className="flex justify-center">
                <OTPInput name="otp" control={control} errors={errors} />
              </div>
              {errors.otp && (
                <p className="text-sm text-center text-red-500">
                  {errors.otp.message}
                </p>
              )}
              <Button type="submit" className="w-full text-white">
                {loading ? "Verifying..." : "Verify"}
              </Button>
              <div className="flex justify-center mt-2">
                {otpTimer === 0 ? (
                  <span
                    className="text-sm text-gray-500 cursor-pointer"
                    onClick={() => handleResendOtp(watch("phone"))}
                  >
                    Resend OTP
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">
                    Resend OTP in {otpTimer}s
                  </span>
                )}
              </div>
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
              <h2 className="font-semibold text-center text-md">
                New Passcode
              </h2>
              <div className="flex justify-center">
                <OTPInput
                  name="newPasscode"
                  control={control}
                  errors={errors}
                />
              </div>
              <Button type="submit" className="w-full text-white">
                {loading ? "Processing..." : "Continue"}
              </Button>
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
              <h2 className="font-semibold text-center text-md">
                Confirm Passcode
              </h2>
              <div className="flex justify-center">
                <OTPInput
                  name="confirmPasscode"
                  control={control}
                  errors={errors}
                />
              </div>
              <Button type="submit" className="w-full text-white">
                {loading ? "Processing..." : "Reset Passcode"}
              </Button>
            </>
          )}
          {step === 5 && (
            // <div className="flex items-center justify-center px-4 py-12 bg-black" style={{ minHeight: '300px' }}>
            <div className="w-full max-w-md space-y-6 text-center border border-gray-200 rounded-lg shadow-md">
              {/* Success Tick Image */}
              <div className="mt-6">
                <Image
                  src="/static/images/success.png"
                  alt="Success"
                  width={100}
                  height={100}
                  className="mx-auto"
                />
              </div>
 
              {/* Title */}
              <h2 className="text-2xl font-semibold text-[#323232] mb-2">
                Passcode Changed!
              </h2>
 
              {/* Description */}
              <p className="text-[#7D7D7D] text-base font-medium px-4">
                Your passcode has been changed successfully.
              </p>
 
              {/* Let’s Go Button */}
              <button
                onClick={() => router.push("/login")}
                style={{marginBottom:"20px"}}
                className="w-auto px-8 py-3 text-base font-medium text-white transition-colors duration-200 bg-black rounded-full hover:bg-black"
              >
                Let’s Go
              </button>
            </div>
            // </div>
          )}
 
          {/* Step 5: Done */}
          {/* {step === 5 && (
            <p className="font-medium text-center text-black">
              Passcode Updated. Try Login in
            </p>
          )} */}
        </form>
      </div>
    </div>
  );
};
 
export default ForgotPasscodePage;
 
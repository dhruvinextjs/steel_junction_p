"use client";
import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import Link from "next/link";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { BsShop } from "react-icons/bs";
import { PiTrolleyFill } from "react-icons/pi";
import toast from "react-hot-toast";
import {
  handleResendOtp,
  handleSendOtp,
  handleSignup,
  handleVerifyOtp,
} from "@/redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "nextjs-toploader/app";

// Centralized error handler
const handleErrors = (error) => {
  // console.error(error);
  toast.remove();
  toast.error(error?.message || "Something went wrong. Please try again.");
};

// Reusable OTP Input Component
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

const validatePhoneNumber = (phone) => {
  return phone.length >= 10;
};

const SignupForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [role, setRole] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const [visibleOtp, setVisibleOtp] = useState("");
  const {
    control,
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      otp: "",
      passcode: "",
      confirmPasscode: "",
      // role: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      switch (step) {
        case 1: // Send OTP
          if (!validatePhoneNumber(data.phone)) {
            toast.error("Please enter a valid mobile number.");
            return;
          }
          // await dispatch(handleSendOtp({ mobileNumber: data.phone })).unwrap();
          const otpResponse = await dispatch(
            handleSendOtp({ mobileNumber: data.phone })
          ).unwrap();

          if (otpResponse.otp) {
            setVisibleOtp(otpResponse.otp); // Store OTP in state to display
          }

          toast.success("OTP sent to your mobile number.");
          setStep(2);
          break;

        case 2: // Verify OTP
          if (data.otp.length !== 4) {
            toast.error("OTP must be exactly 4 digits.");
            return;
          }
          await dispatch(
            handleVerifyOtp({ mobileNumber: data.phone, otp: data.otp })
          ).unwrap();
          toast.success("OTP verified successfully!");
          setStep(3);
          break;

        case 3: // Create Passcode
          if (data.passcode.length !== 4) {
            toast.error("Passcode must be exactly 4 digits.");
            return;
          }
          setStep(4);
          break;

        case 4: // Confirm Passcode
          if (data.passcode !== data.confirmPasscode) {
            toast.error("Passcodes do not match!");
            return;
          }
          toast.success("Your passcode has been created successfully!");
          setStep(5);
          break;

        case 5: // Role Selection and Signup
          if (!role) {
            toast.error("Please select a role.");
            return;
          }
          await dispatch(
            handleSignup({
              mobileNumber: data.phone,
              passcode: data.passcode,
              role,
            })
          ).unwrap();
          toast.success("Signup successful!");
          router.push(`/${role}`);
          break;

        default:
          break;
      }
    } catch (error) {
      handleErrors(error);
    }
  };

  return (
    <div className="grid w-screen lg:grid-cols-2">
      <div className="hidden relative lg:block bg-[url('/static/images/signin.png')] bg-cover">
        <Link
          href="/"
          className="absolute z-10 space-y-4 -translate-x-1/2 -translate-y-2/2 top-1/2 left-1/2"
        >
          <Picture
            src={"/static/images/logo1.png"}
            alt="logo"
            className="mx-auto"
            width={150}
            height={150}
          />
        </Link>
      </div>
      <div className="lg:w-full bg-[rgb(250,250,250)] relative z-0 min-h-screen">
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <Link href="/" className="block lg:hidden">
            <Picture
              src={"/static/images/logo1.png"}
              alt="logo"
              className="mx-auto"
              width={150}
              height={150}
            />
          </Link>
          <div className="flex items-center justify-center md:p-10 p-5 min-w-[60%] mx-auto bg-white rounded-lg shadow-sm ring-1 ring-neutral-300/40">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full space-y-6"
            >
              {step === 1 && (
                <div className="space-y-4 text-left">
                  <p className="text-lg font-semibold">Sign Up</p>

                  <div className="space-y-1">
                    <label htmlFor="phone" className="label_text">
                      Mobile Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your Phone number"
                      maxLength={10}
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
                      <p className="text-sm text-red-500">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="w-full">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-full"
                    >
                      {loading ? "sending otp..." : "Send Otp"}
                    </Button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="text-left space-y-7">
                  <p className="text-lg font-semibold">Verify Your Mobile</p>
                  <div className="space-y-4">
                    <p className="text-sm text-[#d4d4d4]">
                      Please type 4-digit code that we have sent the <br />
                      verification code to your mobile.
                    </p>
                    {visibleOtp && (
                      <div className="font-semibold text-center text-primary_color">
                        Your OTP: {visibleOtp}
                      </div>
                    )}
                    <div className="flex items-center justify-center">
                      <OTPInput name="otp" control={control} errors={errors} />
                    </div>
                    {errors.otp && (
                      <p className="text-sm text-center text-red-500">
                        {errors.otp.message}
                      </p>
                    )}
                    <div className="w-full">
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? "Verify otp..." : "Verify"}
                      </Button>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      onClick={() =>
                        dispatch(handleResendOtp({ phone: watch("phone") }))
                      }
                      className="text-center text-[#878787]"
                    >
                      Resend OTP
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <>
                  <div className="text-center space-y-7">
                    <Picture
                      src={"/static/images/passcodeimage.png"}
                      alt="logo"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                    <p className="text-lg font-semibold">Create Passcode</p>
                    <div className="flex items-center justify-center">
                      <OTPInput
                        name="passcode"
                        control={control}
                        errors={errors}
                      />
                    </div>
                    {errors.passcode && (
                      <p className="text-sm text-center text-red-500">
                        {errors.passcode.message}
                      </p>
                    )}
                    <div className="w-full">
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-full"
                        disabled={loading}
                      >
                        {loading ? "Processing..." : "Continue"}
                      </Button>
                    </div>
                  </div>
                </>
              )}
              {step === 4 && (
                <div className="text-center space-y-7">
                  <Picture
                    src={"/static/images/passcodeimage.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="text-lg font-semibold">Confirm Passcode</p>
                  <div className="flex items-center justify-center">
                    <OTPInput
                      name="confirmPasscode"
                      control={control}
                      errors={errors}
                    />
                  </div>
                  {errors.confirmPasscode && (
                    <p className="text-sm text-center text-red-500">
                      {errors.confirmPasscode.message}
                    </p>
                  )}
                  <div className="w-full">
                    <Button
                      variant="primary"
                      type="submit"
                      className="w-full"
                      disabled={loading}
                    >
                      {loading ? "Processing..." : "Continue"}
                    </Button>
                  </div>
                </div>
              )}

              {step === 5 && (
                <div className="w-full space-y-3 text-left">
                  <p className="text-lg font-semibold">
                    Choose Your Business Type,
                  </p>
                  <div className="w-full">
                    <button
                      className={`bg-[#373333] w-full cursor-pointer active:scale-90 transition text-white  p-4 rounded-lg ${
                        role === "Retailer" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => setRole("retailer")}
                    >
                      <div className="flex items-center gap-3 text-left">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                          <BsShop className="text-3xl text-black" />
                        </div>
                        <div className="space-y-1">
                          <p className="uppercase">Retailor</p>
                          <p className="text-sm">
                            Sells products to consumers in <br /> smaller
                            quantities.
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="w-full">
                    <button
                      className={`bg-[#373333] w-full cursor-pointer active:scale-90 transition text-white p-4 rounded-lg ${
                        role === "Wholesaler" ? "bg-blue-500 text-white" : ""
                      }`}
                      onClick={() => setRole("wholesaler")}
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
                          <PiTrolleyFill className="text-3xl text-black" />
                        </div>
                        <div className="space-y-1">
                          <p className="text-left uppercase">Wholesaler</p>
                          <p className="text-sm text-left">
                            Sells bulk goods to consumers or <br /> businesses.
                          </p>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              )}

              {step === 1 && (
                <p className="text-center">
                  Already have an account?
                  <Link href="/login">
                    <span className="font-semibold text-[#FC342A]">
                      {" "}
                      Sign In
                    </span>
                  </Link>
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
"use client";
import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import { handleCheckLoginPasscode, handleSignin } from "@/redux/AuthSlice";
import Link from "next/link";
import { useRouter } from "nextjs-toploader/app";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { loading } = useSelector((state) => state.auth);

  const {
    control,
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      passcode: "",
    },
  });

  const onSubmit = async (data) => {
    switch (step) {
      case 1:
        if (!data.phone) {
          toast.remove();
          toast.error("Please enter a valid mobile number.");
          return;
        }
        try {
          const payload = {
            mobileNumber: data.phone,
          };
          await dispatch(handleSignin(payload)).unwrap();
          setStep(2);
        } catch (error) {
          toast.remove();
          toast.error(error?.message || "Failed to verify mobile number.");
        }
        break;

      case 2:
        if (!data.passcode) {
          toast.remove();
          toast.error("Please enter a valid passcode.");
          return;
        }
        try {
          const payload = {
            mobileNumber: data.phone,
            passcode: data.passcode,
          };
          await dispatch(handleCheckLoginPasscode(payload)).unwrap();
          toast.success("Login successful!");

          // Redirect based on role
          if (typeof window !== "undefined") {
            let role = localStorage.getItem("selectedRole");

            // Default to wholesaler if role is not set
            if (!role) {
              role = "wholesaler";
              localStorage.setItem("selectedRole", role);
            }

            // Redirect to appropriate dashboard
            if (role === "retailer") {
              router.push("/retailer");
            } else {
              router.push("/wholesaler");
            }
          }
        } catch (error) {
          toast.error(error?.message || "Invalid passcode.");
        }
        break;

      default:
        break;
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
            <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
              {step === 1 && (
                <>
                  <p className="text-lg font-semibold">Sign In</p>
                  <div className="space-y-1 text-left">
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
                      })}
                      className="input_field"
                    />
                  </div>
                </>
              )}

              {step === 2 && (
                <div className="w-full space-y-4 text-center">
                  <Picture
                    src={"/static/images/passcodeimage.png"}
                    alt="logo"
                    width={100}
                    height={100}
                    className="mx-auto"
                  />
                  <p className="text-lg font-semibold">Passcode</p>
                  <div className="flex items-center justify-center space-y-1">
                    <Controller
                      name="passcode"
                      control={control}
                      rules={{
                        required: "Passcode is required",
                        minLength: {
                          value: 4,
                          message: "Passcode must be 4 digits",
                        },
                      }}
                      render={({ field }) => (
                        <InputOTP
                          maxLength={4}
                          value={field.value}
                          onChange={(value) => field.onChange(value)}
                        >
                          <InputOTPGroup className="gap-3">
                            {Array.from({ length: 4 }).map((_, index) => (
                              <InputOTPSlot key={index} index={index} />
                            ))}
                          </InputOTPGroup>
                        </InputOTP>
                      )}
                    />
                  </div>
                </div>
              )}

              <div className="w-full">
                <Button
                  variant="primary"
                  type="submit"
                  className="w-full"
                >
                  {step === 1 ? "Sign In" : "Continue"}
                </Button>
              </div>

              {step === 1 && (
                <p className="text-center">
                  Don’t have an account?
                  <Link href="/signup">
                    <span className="font-semibold text-[#FC342A]">
                      {" "}Sign Up
                    </span>
                  </Link>
                </p>
              )}
              {step === 2 && (
                <p className="text-center">
                  <Link href="/forget-passcode">
                    <span className="text-[#878787]">Forgot Your Passcode?</span>
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

export default LoginForm;

import Label from "@/components/ui/form/label";
import { handleSendEnquiry } from "@/redux/AuthSlice";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

const EnquiryModalPage = ({ productId, setEnquiry }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = localStorage.getItem("token");

  const onSubmit = (data) => {
    const { name, email, contactNo, enquiry, image } = data;

    const formData = new FormData();
    formData.append("productId", productId); // Include productId
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("enquiry", enquiry);
    if (image && image[0]) {
      formData.append("image", image[0]); // Attach image file
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    };

    dispatch(handleSendEnquiry(formData, config ))
      .unwrap()
      .then(() => {
        setEnquiry(false); // Close the modal on success
      })
      .catch((error) => {
        console.error("Failed to send enquiry:", error);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="first_name" text="Your Name" />
        <input
          type="text"
          className="input_field"
          placeholder="Enter First Name"
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="phone" text="Mobile Number" />
        <input
          type="tel"
          name="phone"
          className="input_field"
          placeholder="type here"
          maxLength={10}
          {...register("phone", {
            required: "Mobile number is required",
            minLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
          })}
        />
        {errors.contactNo && (
          <p className="text-red-500">{errors.contactNo.message}</p>
        )}
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="email" text="Email Address" />
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input_field"
          placeholder="type here"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="email" text="Enquiry" />
        <textarea
          rows={4}
          {...register("enquiry", { required: "Enquiry details are required" })}
          className="input_field"
          placeholder="Enter your enquiry"
        />
        {errors.enquiry && (
          <p className="text-red-500">{errors.enquiry.message}</p>
        )}
      </div>
      <div className="flex items-center justify-between w-full p-2 bg-gray-100 border border-gray-200 rounded-md">
        <Label htmlFor="image" text="Upload Photo (optional)" />
        <input
          type="file"
          {...register("image")}
          accept="image/*"
          className="input_field"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 text-white bg-[#FC342A] rounded-full hover:bg-red-600"
        disabled={loading}
      >
        {loading ? "Submitting..." : "Submit Enquiry"}
      </button>
    </form>
  );
};

export default EnquiryModalPage;

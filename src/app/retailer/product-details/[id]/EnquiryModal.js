"use client";
import Label from "@/components/ui/form/label";
import { handleSendEnquiry } from "@/redux/AuthSlice";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchEnquiries } from "@/redux/EnquirySlice"; // <-- ADD THIS


const EnquiryModalPage = ({ productId, setEnquiry }) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, phone, enquiry, image } = data;
    const formData = new FormData();
    const token = localStorage.getItem("token");
  
    formData.append("productId", productId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contactNo", phone);
    formData.append("enquiry", enquiry);
    if (image && image[0]) {
      formData.append("image", image[0]);
    }
  
    // Optimistic Update
    const newEnquiry = {
      productId,
      name,
      email,
      contactNo: phone,
      enquiry,
      image: image ? image[0] : null,
    };
  
    dispatch(handleSendEnquiry({ formData, token }))
      .unwrap()
      .then(() => {
        setEnquiry(false); // Close modal
        // Add the new enquiry to the state optimistically
        dispatch(fetchEnquiries(token)); // This fetches the latest data
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
          className="input_field"
          placeholder="Type here"
          maxLength={10}
          {...register("phone", {
            required: "Mobile number is required",
            minLength: {
              value: 10,
              message: "Mobile number must be 10 digits",
            },
          })}
        />
        {errors.phone && (
          <p className="text-red-500">{errors.phone.message}</p>
        )}
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="email" text="Email Address" />
        <input
          type="email"
          {...register("email", { required: "Email is required" })}
          className="input_field"
          placeholder="Type here"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="enquiry" text="Enquiry" />
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

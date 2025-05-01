"use client";

import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdModeEditOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { handleEditProfile } from "@/redux/AuthSlice";
import { getToken } from "@/utils/auth";
import axios from "axios";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    businessName: "", // Changed firmName to businessName
    email: "",
    photo: null,
    city: "",
    state: "",
  });

  // Fetch user details from API
  const fetchUserDetails = async () => {
    const token = getToken();
    try {
      const response = await axios.get(
        "https://steel-junction.onrender.com/api/auth/userDetail",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("User details fetched from API:", response.data); // Check the full response

      if (response.data.success) {
        // Pre-fill the form fields with fetched data
        setFormData({
          name: response.data.data.name || "",
          businessName: response.data.data.businessName || "", // Ensure it's set here
          email: response.data.data.email || "",
          photo: response.data.data.photo || null,
          city: response.data.data.city || "",
          state: response.data.data.state || "",
        });
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      toast.error("Failed to fetch user details.");
    }
  };

  useEffect(() => {
    // Fetch initial user details if available
    if (user) {
      setFormData({
        name: user?.name || "",
        businessName: user?.businessName || "", // Changed firmName to businessName
        email: user?.email || "",
        photo: user?.photo || null,
        city: user?.city || "",
        state: user?.state || "",
      });
    }

    // Fetch updated user details after profile update
    fetchUserDetails();
  }, [user]); // Re-run when user details change

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value || "",
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.size > 5 * 1024 * 1024 ||
        !["image/jpeg", "image/png"].includes(file.type))
    ) {
      toast.error("Please upload a valid image (JPEG/PNG) under 5MB.");
      return;
    }
    setFormData((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      toast.error("User data is unavailable.");
      return;
    }

    const isFormUnchanged =
      formData.name === user.name &&
      formData.businessName === user.businessName && // Changed firmName to businessName
      formData.email === user.email &&
      formData.city === user.city &&
      formData.state === user.state;

    if (isFormUnchanged && !formData.photo) {
      toast.remove();
      toast.error("No changes detected.");
      return;
    }

    const token = getToken();
    if (!token) {
      toast.error("Authentication token is missing.");
      return;
    }

    const updateData = new FormData();
    updateData.append("userId", user?._id);
    updateData.append("name", formData.name);
    updateData.append("businessName", formData.businessName); // Changed firmName to businessName
    updateData.append("email", formData.email);
    updateData.append("city", formData.city);
    updateData.append("state", formData.state);

    if (formData.photo) {
      updateData.append("photo", formData.photo);
    }

    try {
      const response = await axios.put(
        "https://steel-junction.onrender.com/api/auth/editProfile",
        updateData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        toast.success("Profile updated successfully.");

        // Fetch updated user details after profile update
        fetchUserDetails();

        dispatch(handleEditProfile(response.data.data)); // Update Redux store with new data
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      toast.error("Failed to update profile. Please try again.");
    }
  };

  if (!user) {
    return <div>Loading...</div>; // Display loading state while user data is not available
  }

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <p className="text-xl text-[#25324B] font-semibold">Profile</p>

        <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
          <img
            src={
              formData.photo
                ? formData.photo instanceof File
                  ? URL.createObjectURL(formData.photo)
                  : `https://steel-junction.onrender.com/uploads/${formData.photo}`
                : user?.photo
                  ? `https://steel-junction.onrender.com/uploads/${user.photo}`
                  : "/default-avatar.png"
            }
            alt="Profile"
            className="-mt-1 rounded-full w-[3.5rem] h-[3.5rem] object-cover"
          />

          <input
            type="file"
            className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
            name="photo"
            onChange={handleFileChange}
          />
          <MdModeEditOutline className="absolute right-0 p-[4px] text-xl text-white rounded-full cursor-pointer bg-primary bottom-0" />
        </div>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="name" className="label_text">
              First Name
            </label>
            <input
              type="text"
              name="name"
              className="input_field"
              placeholder="Enter First Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="businessName" className="label_text"> {/* Changed firmName to businessName */}
              Business Name
            </label>
            <input
              type="text"
              name="businessName" // Changed firmName to businessName
              className="input_field"
              placeholder="Enter Business Name"
              value={formData.businessName} // Use fallback if businessName is missing
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="email" className="label_text">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="input_field"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="phone" className="label_text">
              Phone Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              className="input_field"
              placeholder="Enter your Phone Number"
              value={user?.mobileNumber || ""}
              disabled
            />
          </div>
        </div>

        <div className="flex flex-col w-full gap-3 lg:flex-row">
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="city" className="label_text">
              City
            </label>
            <input
              type="text"
              name="city"
              className="input_field"
              placeholder="Enter your city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="w-full space-y-1 text-left lg:w-1/2">
            <label htmlFor="state" className="label_text">
              State
            </label>
            <input
              type="text"
              name="state"
              className="input_field"
              placeholder="Enter your State"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button type="submit" variant="primary" className="w-50">
          {loading ? "Updating..." : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default Profile;

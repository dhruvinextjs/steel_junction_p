// // import { Button } from "@/components/ui/button";
// // import Picture from "@/components/ui/picture";
// // import { handleEditProfile } from "@/redux/AuthSlice";
// // import React, { useEffect, useState } from "react";
// // import toast from "react-hot-toast";
// // import { MdModeEditOutline } from "react-icons/md";
// // import { useDispatch, useSelector } from "react-redux";

// // const Profile = () => {
// //   const dispatch = useDispatch();
// //   const { user, loading } = useSelector((state) => state.auth);

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     businessName: "",
// //     email: "",
// //     photo: null,
// //     city: "",
// //     state: "",
// //   });

// //   // Populate the form data when the user data is available
// //   useEffect(() => {
// //     if (user) {
// //       setFormData({
// //         name: user?.name || "",
// //         businessName: user?.businessName || "",
// //         email: user?.email || "",
// //         photo: null, // Images handled separately
// //         city: user?.city || "",
// //         state: user?.state || "",
// //       });
// //     }
// //   }, [user]);

// //   // Handle input changes
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({
// //       ...prev,
// //       [name]: value || "", // Fallback to an empty string
// //     }));
// //   };

// //   // Handle file upload
// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     if (
// //       file &&
// //       (file.size > 5 * 1024 * 1024 ||
// //         !["image/jpeg", "image/png"].includes(file.type))
// //     ) {
// //       toast.error("Please upload a valid image (JPEG/PNG) under 5MB.");
// //       return;
// //     }
// //     setFormData((prev) => ({
// //       ...prev,
// //       photo: file,
// //     }));
// //   };

// //   // Handle form submission
// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // Check if any changes were made (excluding the photo upload)
// //     const isFormUnchanged =
// //       formData.name === user?.name &&
// //       formData.businessName === user?.businessName &&
// //       formData.email === user?.email &&
// //       formData.city === user?.city &&
// //       formData.state === user?.state;

// //     // Check if no changes were made at all, including no file upload
// //     if (isFormUnchanged && !formData.photo) {
// //       toast.remove();
// //       toast.error("No changes detected.");
// //       return;
// //     }

// //     // Check if only the photo was uploaded
// //     if (isFormUnchanged && formData.photo) {
// //       toast.remove();
// //       toast.error("No changes detected");
// //       return;
// //     }

// //     // Prepare data for API
// //     const updateData = new FormData();
// //     updateData.append("name", formData.name);
// //     updateData.append("businessName", formData.businessName);
// //     updateData.append("email", formData.email);
// //     updateData.append("city", formData.city);
// //     updateData.append("state", formData.state);
// //     if (formData.photo) updateData.append("photo", formData.photo);

// //     // Dispatch the API call
// //     dispatch(handleEditProfile(updateData))
// //       .then((res) => {
// //         if (!res.error) {
// //           toast.success("Profile updated successfully!");
// //         } else {
// //           throw new Error("Update failed.");
// //         }
// //       })
// //       .catch((error) => {
// //         toast.error(error.message || "Error updating profile.");
// //       });
// //   };
// //   return (
// //     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
// //       <form className="space-y-4" onSubmit={handleSubmit}>
// //         <p className="text-xl text-[#25324B] font-semibold">Profile</p>
// //         <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
// //           <Picture
// //             src={
// //               formData.photo
// //                 ? URL.createObjectURL(formData.photo)
// //                 : user?.photoUrl || "/default-avatar.png"
// //             }
// //             alt="Profile"
// //             className="rounded-full w-[3.5rem] h-[3.5rem]"
// //           />
// //           <input
// //             type="file"
// //             className="absolute top-0 bottom-0 left-0 right-0 mt-2 cursor-pointer rounded-full max-w-[3.5rem] mx-auto opacity-0 z-2"
// //             name="photo"
// //             onChange={handleFileChange}
// //           />
// //           <MdModeEditOutline className="absolute right-0 p-[4px] text-xl text-white rounded-full cursor-pointer bg-primary bottom-0" />
// //         </div>
// //         <div className="flex flex-col w-full gap-3 lg:flex-row">
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             <label htmlFor="name" className="label_text">
// //               First Name
// //             </label>
// //             <input
// //               type="text"
// //               name="name"
// //               className="input_field"
// //               placeholder="Enter First Name"
// //               value={formData.name || ""} // Fallback to empty string if undefined
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             <label htmlFor="businessName" className="label_text">
// //               Business Name
// //             </label>
// //             <input
// //               type="text"
// //               name="businessName"
// //               className="input_field"
// //               placeholder="Enter Business Name"
// //               value={formData.businessName || ""}
// //               onChange={handleChange}
// //             />
// //           </div>
// //         </div>

// //         <div className="flex flex-col w-full gap-3 lg:flex-row">
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             {/* <label className="label_text" htmlFor="email" text="Email" /> */}
// //             <label htmlFor="email" className="label_text">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               name="email"
// //               className="input_field"
// //               placeholder="Enter your email"
// //               value={formData.email || ""}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             <label htmlFor="phone" className="label_text">
// //               Phone Number
// //             </label>
// //             <input
// //               type="text"
// //               name="mobileNumber"
// //               className="input_field"
// //               placeholder="Enter your Phone Number"
// //               value={user?.mobileNumber || ""}
// //               disabled
// //             />
// //           </div>
// //         </div>
// //         <div className="flex flex-col w-full gap-3 lg:flex-row">
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             <label htmlFor="city" className="label_text">
// //               City
// //             </label>
// //             <input
// //               type="text"
// //               name="city"
// //               className="input_field"
// //               placeholder="Enter your city"
// //               value={formData.city || ""}
// //               onChange={handleChange}
// //             />
// //           </div>
// //           <div className="w-full space-y-1 text-left lg:w-1/2">
// //             <label htmlFor="state" className="label_text">
// //               State
// //             </label>
// //             <input
// //               type="text"
// //               name="state"
// //               className="input_field"
// //               placeholder="Enter your State"
// //               value={formData.state || ""}
// //               onChange={handleChange}
// //             />
// //           </div>
// //         </div>
// //         <div></div>
// //         <Button
// //           type="submit"
// //           variant="primary"
// //           className="w-auto"
// //           disabled={loading}
// //         >
// //           {loading ? "Updating..." : "Update"}
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Profile;

"use client";

import { PutUrl } from "@/utils/axiosInstance";
import { Button } from "@/components/ui/button";
import Picture from "@/components/ui/picture";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdModeEditOutline } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { handleEditProfile } from "@/redux/AuthSlice";
import { getToken } from "@/utils/auth";

const Profile = () => {
  const { user, loading } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    firmName: "",
    email: "",
    photo: null,
    city: "",
    state: "",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user?.name || "",
        firmName: user?.firmName || "",
        email: user?.email || "",
        photo: null,
        city: user?.city || "",
        state: user?.state || "",
      });
    }
  }, [user]);

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
  
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   // Check if there are changes in the form
  //   const isFormUnchanged =
  //     formData.name === user?.name &&
  //     formData.firmName === user?.firmName &&
  //     formData.email === user?.email &&
  //     formData.city === user?.city &&
  //     formData.state === user?.state;
  
  //   if (isFormUnchanged && !formData.photo) {
  //     toast.remove();
  //     toast.error("No changes detected.");
  //     return;
  //   }
  
  //   // Create a FormData object to send data
  //   const updateData = new FormData();
  //   updateData.append("name", formData.name);
  //   updateData.append("firmName", formData.firmName);
  //   updateData.append("email", formData.email);
  //   updateData.append("city", formData.city);
  //   updateData.append("state", formData.state);
  
  //   // Append the photo if it's changed
  //   if (formData.photo) {
  //     updateData.append("photo", formData.photo);
  //   }
  
  //   // Retrieve token from localStorage
  //   const token = localStorage.getItem("token");
  
  //   // Log token to the console to check if it's being fetched
  //   console.log("Token from localStorage:", token);
  
  //   if (!token) {
  //     toast.error("Please provide an authentication token.");
  //     return;
  //   }
  
  //   try {
  //     const { data } = await PutUrl("/auth/editProfile", updateData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  
  //     if (data && data.user) {
  //       dispatch(handleEditProfile({ formData: data.user, token }));
  //       toast.success("Profile updated successfully.");
  //     } else {
  //       toast.error("No user data returned.");
  //     }
  //   } catch (error) {
  //     console.error("Error during profile update:", error);
  //     toast.error(error?.response?.data?.message || "Profile update failed");
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if there are changes in the form
    const isFormUnchanged =
      formData.name === user?.name &&
      formData.firmName === user?.firmName &&
      formData.email === user?.email &&
      formData.city === user?.city &&
      formData.state === user?.state;
  
    if (isFormUnchanged && !formData.photo) {
      toast.remove();
      toast.error("No changes detected.");
      return;
    }
  
    // Create a FormData object to send data
    const updateData = new FormData();
    updateData.append("name", formData.name);
    updateData.append("firmName", formData.firmName);
    updateData.append("email", formData.email);
    updateData.append("city", formData.city);
    updateData.append("state", formData.state);
  
    // Append the photo if it's changed
    if (formData.photo) {
      updateData.append("photo", formData.photo);
    }
  
    // Retrieve token from localStorage
    const token = getToken(); // Use the modified getToken function
  
    if (!token) {
      toast.error("Authentication token is missing.");
      return;
    }
  
    try {
      const { data } = await PutUrl("/auth/editProfile", updateData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (data && data.user) {
        dispatch(handleEditProfile({ formData: data.user, token }));
        toast.success("Profile updated successfully.");
      } else {
        toast.error("No user data returned.");
      }
    } catch (error) {
      console.error("Error during profile update:", error);
      toast.error(error?.response?.data?.message || "Profile update failed.");
    }
  };
  
  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <p className="text-xl text-[#25324B] font-semibold">Profile</p>
        <div className="border relative border-1 border-[#0AADA4] rounded-full p-1 w-[3.5rem] h-[3.5rem] mb-2">
          <img
            src={
              formData.photo
                ? URL.createObjectURL(formData.photo)
                : user?.photoUrl || "/default-avatar.png"
            }
            alt="Profile"
            className="rounded-full w-[3.5rem] h-[3.5rem] object-cover"
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
            <label htmlFor="firmName" className="label_text">
              Business Name
            </label>
            <input
              type="text"
              name="firmName"
              className="input_field"
              placeholder="Enter Business Name"
              value={formData.firmName}
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

        <Button type="submit" variant="primary" className="w-auto" disabled={loading}>
          {loading ? "Updating..." : "Update"}
        </Button>
      </form>
    </div>
  );
};

export default Profile;
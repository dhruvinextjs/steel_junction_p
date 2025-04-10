// import toast from "react-hot-toast";

// // utils/auth.js
// export const getToken = () => {
//   if (typeof window === "undefined") return null;
//   const token = localStorage.getItem("token");
//   console.log(localStorage.getItem("token")); // Verify token is set
//   if (!token) {
//     toast.error("Authentication token not found. Please log in again.");
//     return null;
//   }
//   return token;
// };

import toast from "react-hot-toast";

// Get token from localStorage (client-side only)
export const getToken = () => {
  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("token");

  if (!token) {
    toast.error("Authentication token not found. Please log in again.");
    return null;
  }

  return token;
};

// import toast from "react-hot-toast";

// export const getToken = () => {
//   if (typeof window === "undefined") return null;

//   let token = localStorage.getItem("token");

//   // 🔥 Log the token to verify it's being retrieved
//   console.log("Token retrieved from localStorage:", token);

//   // Remove wrapping quotes if accidentally stored with JSON.stringify
//   if (token?.startsWith('"') && token?.endsWith('"')) {
//     token = token.slice(1, -1);
//   }

//   if (!token || token === 'null' || token.trim() === '') {
//     toast.error("Authentication token is missing or invalid. Please log in again.");
//     return null;
//   }

//   return token;
// };

import toast from "react-hot-toast";

export const getToken = (showToast = true) => {
  if (typeof window === "undefined") return null;

  let token = localStorage.getItem("token");

  // Clean quotes if needed
  if (token?.startsWith('"') && token?.endsWith('"')) {
    token = token.slice(1, -1);
  }

  if (!token || token === 'null' || token.trim() === '') {
    if (showToast) {
      toast.error("Authentication token is missing or invalid. Please log in again.");
    }
    return null;
  }

  return token;
};

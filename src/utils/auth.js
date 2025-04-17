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

// import toast from "react-hot-toast";

// // Get token from localStorage (client-side only)
// export const getToken = () => {
//   if (typeof window === "undefined") return null;

//   const token = localStorage.getItem("token");

//   if (!token) {
//     toast.error("Authentication token not found. Please log in again.");
//     return null;
//   }

//   return token;
// };


// export const getToken = () => {
//   if (typeof window === "undefined") return null;

//   let token = localStorage.getItem("token");

//   // 🔥 Remove wrapping quotes if accidentally stored with JSON.stringify
//   if (token?.startsWith('"') && token?.endsWith('"')) {
//     token = token.slice(1, -1);
//   }

//   if (!token) {
//     toast.error("Authentication token not found. Please log in again.");
//     return null;
//   }

//   return token;
// };

// export const getToken = () => {
//   if (typeof window === "undefined") return null;

//   let token = localStorage.getItem("token");

//   // 🔥 Log the token to verify it's being retrieved
//   console.log("Token retrieved from localStorage:", token);

//   // Remove wrapping quotes if accidentally stored with JSON.stringify
//   if (token?.startsWith('"') && token?.endsWith('"')) {
//     token = token.slice(1, -1);
//   }

//   if (!token) {
//     toast.error("Authentication token not found. Please log in again.");
//     return null;
//   }

//   return token;
// };

export const getToken = () => {
  if (typeof window === "undefined") return null;

  let token = localStorage.getItem("token");

  // 🔥 Log the token to verify it's being retrieved
  console.log("Token retrieved from localStorage:", token);

  // Remove wrapping quotes if accidentally stored with JSON.stringify
  if (token?.startsWith('"') && token?.endsWith('"')) {
    token = token.slice(1, -1);
  }

  if (!token || token === 'null' || token.trim() === '') {
    toast.error("Authentication token is missing or invalid. Please log in again.");
    return null;
  }

  return token;
};
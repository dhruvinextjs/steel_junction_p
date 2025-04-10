import axios from "axios";

// const language = JSON.parse(window.localStorage.getItem("lang"));

const getLanguage = () => {
  if (typeof window !== "undefined") {
    return JSON.parse(window.localStorage.getItem("lang")) || "en"; // Default language fallback
  }
  return "en";
};
// https://steel-junction.onrender.com/uploads/${item?.image}
export default axios.defaults.baseURL = "https://steel-junction.onrender.com";

export const PostUrl = axios.create({
  baseURL: `https://steel-junction.onrender.com/api`,
  method: "POST",
  headers: {
    "Accept-Language": getLanguage(),
  },
});

export const GetUrl = axios.create({
  baseURL: "https://steel-junction.onrender.com/api",
  method: "GET",
  headers: {
    "Accept-Language": getLanguage(),
  },
});
export const DeleteUrl = axios.create({
  baseURL: "https://steel-junction.onrender.com/api",
  method: "DELETE",
  headers: {
    "Accept-Language": getLanguage(),
  },
});

// PUT instance
export const PutUrl = axios.create({
  baseURL: "https://steel-junction.onrender.com/api",
  method: "PUT",
  headers: {
    "Accept-Language": getLanguage(),
  },
});

// import axios from "axios";

// // Utility function to fetch language from localStorage
// const getLanguage = () => {
//   if (typeof window !== "undefined") {
//     return JSON.parse(window.localStorage.getItem("lang")) || "en"; // Default language fallback
//   }
//   return "en";
// };

// // Base URL for the API
// const BASE_URL = "https://steel-junction.onrender.com/api";

// // Shared configuration for axios instances
// const config = {
//   baseURL: BASE_URL,
//   headers: {
//     "Accept-Language": getLanguage(),
//   },
// };

// // Axios instances for different HTTP methods
// export const PostUrl = axios.create({ ...config, method: "POST" });
// export const GetUrl = axios.create({ ...config, method: "GET" });
// export const DeleteUrl = axios.create({ ...config, method: "DELETE" });
// export const PutUrl = axios.create({ ...config, method: "PUT" });

// // Add interceptors for centralized error handling and dynamic headers
// const addInterceptors = (instance) => {
//   instance.interceptors.request.use((config) => {
//     // Update the Accept-Language header dynamically
//     config.headers["Accept-Language"] = getLanguage();
//     return config;
//   });

//   instance.interceptors.response.use(
//     (response) => response,
//     (error) => {
//       console.error("Error in request:", error.response?.data || error.message);
//       return Promise.reject(error);
//     }
//   );
// };

// // Apply interceptors to all instances
// [PostUrl, GetUrl, DeleteUrl, PutUrl].forEach(addInterceptors);

// export default axios.defaults.baseURL = "https://steel-junction.onrender.com";

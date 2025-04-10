import axios from "axios";

const baseURL = "https://steel-junction.onrender.com";

const instance = axios.create({
  baseURL,
});

// Auto attach token from localStorage
instance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export const GetUrl = instance.get;
export const PostUrl = instance.post;
export const PutUrl = instance.put;
export const DeleteUrl = instance.delete;

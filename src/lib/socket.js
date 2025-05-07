// // lib/socket.js
// import { io } from "socket.io-client";

// let socket;

// export const initiateSocket = () => {
//   if (!socket) {
//     // socket = io("http://localhost:3000"); // 🔁 Replace with your actual server URL
//     const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "https://steel-junction.onrender.com";
//     console.log("Socket connected");
//   }
// };

// export const getSocket = () => {
//   if (!socket) {
//     console.warn("Socket not initiated yet!");
//   }
//   return socket;
// };

// export const disconnectSocket = () => {
//   if (socket) {
//     socket.disconnect();
//     console.log("Socket disconnected");
//     socket = null;
//   }
// };
// utils/socket.js
// utils/socket.js
import { io } from "socket.io-client";

let socket;

const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || "https://steel-junction.onrender.com";

export const initiateSocket = () => {
  if (!socket) {
    socket = io(SOCKET_URL, {
      transports: ["polling"], // fallback to polling
      withCredentials: true,
    });
    console.log("✅ Socket initialized using polling:", SOCKET_URL);
  }
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    console.log("❌ Socket disconnected");
    socket = null;
  }
};

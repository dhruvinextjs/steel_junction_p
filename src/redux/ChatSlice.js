// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { GetUrl } from "@/app/api/BaseUrl";
// import toast from "react-hot-toast";

// // Initial State
// const initialState = {
//   chatHistory: {}, // Map with enquiryId as key
//   loading: false,
//   error: null,
// };

// // 📥 Fetch Chat History Thunk
// export const fetchChatHistory = createAsyncThunk(
//   "chat/fetchChatHistory",
//   async (enquiryId, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token"); // Or use your getToken() util
//       const response = await GetUrl.get(`/order/chatHistory/${enquiryId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return { enquiryId, data: response.data?.data || [] };
//     } catch (error) {
//       const msg = error?.response?.data?.message || error.message;
//       toast.error(`Failed to fetch chat: ${msg}`);
//       return rejectWithValue(msg);
//     }
//   }
// );

// // 💬 Slice
// const chatSlice = createSlice({
//   name: "chat",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChatHistory.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchChatHistory.fulfilled, (state, action) => {
//         const { enquiryId, data } = action.payload;
//         state.loading = false;
//         state.chatHistory[enquiryId] = data;
//       })
//       .addCase(fetchChatHistory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || "Failed to load chat history";
//       });
//   },
// });

// export default chatSlice.reducer;


// ChatSlice.js (or wherever you defined it)

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUrl } from '@/utils/axiosInstance';

export const fetchChatHistory = createAsyncThunk(
  'chat/fetchChatHistory',
  async (enquiryId, thunkAPI) => {
    const response = await GetUrl(`/order/chatHistory/${enquiryId}`);
    return { enquiryId, chat: response.data.data.chat }; // chat is inside response.data.data
  }
);

const chatSlice = createSlice({
  name: 'getContent',
  initialState: {
    chatHistory: {}, // structure: { [enquiryId]: chat[] }
    loading: false,
    error: null,
  },
//   reducers: {},
reducers: {
    addMessage: (state, action) => {
      const { chatId, newMsg } = action.payload;
      if (!state.chatHistory[chatId]) {
        state.chatHistory[chatId] = [];
      }
      state.chatHistory[chatId].push(newMsg);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChatHistory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchChatHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.chatHistory[action.payload.enquiryId] = action.payload.chat;
      })
      .addCase(fetchChatHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default chatSlice.reducer;

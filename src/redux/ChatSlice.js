// // // import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// // // import { GetUrl } from '@/utils/axiosInstance';

// // // export const fetchChatHistory = createAsyncThunk(
// // //   'chat/fetchChatHistory',
// // //   async (enquiryId, thunkAPI) => {
// // //     const response = await GetUrl(`/order/chatHistory/${enquiryId}`);
// // //     return { enquiryId, chat: response.data.data.chat }; // chat is inside response.data.data
// // //   }
// // // );

// // // const chatSlice = createSlice({
// // //   name: 'getContent',
// // //   initialState: {
// // //     chatHistory: {}, // structure: { [enquiryId]: chat[] }
// // //     loading: false,
// // //     error: null,
// // //   },
// // //   reducers: {
// // //     addMessage: (state, action) => {
// // //       const { chatId, newMsg } = action.payload;

// // //       // Ensure the chatId exists in chatHistory, if not, create an empty array
// // //       if (!state.chatHistory[chatId]) {
// // //         state.chatHistory[chatId] = [];
// // //       }

// // //       // Push the new message to the existing array
// // //       state.chatHistory[chatId].push(newMsg);
// // //     },
// // //   },
// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(fetchChatHistory.pending, (state) => {
// // //         state.loading = true;
// // //       })
// // //       .addCase(fetchChatHistory.fulfilled, (state, action) => {
// // //         state.loading = false;
// // //         state.chatHistory[action.payload.enquiryId] = action.payload.chat;
// // //       })
// // //       .addCase(fetchChatHistory.rejected, (state, action) => {
// // //         state.loading = false;
// // //         state.error = action.error.message;
// // //       });
// // //   },
// // // });

// // // export const { addMessage } = chatSlice.actions;
// // // export default chatSlice.reducer;

// // import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// // import { GetUrl } from '@/utils/axiosInstance';

// // export const fetchChatHistory = createAsyncThunk(
// //   'chat/fetchChatHistory',
// //   async (enquiryId, thunkAPI) => {
// //     const response = await GetUrl(`/order/chatHistory/${enquiryId}`);
// //     return { enquiryId, chat: response.data.data.chat }; // chat is inside response.data.data
// //   }
// // );

// // const chatSlice = createSlice({
// //   name: 'getContent',
// //   initialState: {
// //     chatHistory: {}, // structure: { [enquiryId]: chat[] }
// //     loading: false,
// //     error: null,
// //   },
// //   reducers: {
// //     addMessage: (state, action) => {
// //       const { chatId, newMsg } = action.payload;
// //       if (!state.chatHistory[chatId]) {
// //         state.chatHistory[chatId] = [];
// //       }
// //       state.chatHistory[chatId].push(newMsg);
// //     },
    
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(fetchChatHistory.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(fetchChatHistory.fulfilled, (state, action) => {
// //         state.loading = false;
// //         state.chatHistory[action.payload.enquiryId] = action.payload.chat;
// //       })
// //       .addCase(fetchChatHistory.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.error.message;
// //       });
// //   },
// // });

// // export const { addMessage } = chatSlice.actions;
// // export default chatSlice.reducer;


// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { GetUrl } from '@/utils/axiosInstance';

// export const fetchChatHistory = createAsyncThunk(
//   'chat/fetchChatHistory',
//   async (enquiryId, thunkAPI) => {
//     const response = await GetUrl(`/order/chatHistory/${enquiryId}`);
//     return { enquiryId, chat: response.data.data.chat };
//   }
// );

// const chatSlice = createSlice({
//   name: 'getContent',
//   initialState: {
//     chatHistory: {}, // structure: { [enquiryId]: chat[] }
//     loading: false,
//     error: null,
//   },
//  reducers: {
//     addMessage: (state, action) => {
//       const { chatId, newMsg } = action.payload;
//       if (state.chatHistory[chatId]) {
//         state.chatHistory[chatId].push(newMsg);
//       } else {
//         state.chatHistory[chatId] = [newMsg];
//       }
//     },
//     setChatHistory: (state, action) => {
//       const { chatId, messages } = action.payload;
//       state.chatHistory[chatId] = messages;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchChatHistory.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchChatHistory.fulfilled, (state, action) => {
//         state.loading = false;
//         state.chatHistory[action.payload.enquiryId] = action.payload.chat;
//       })
//       .addCase(fetchChatHistory.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addMessage } = chatSlice.actions;
// export default chatSlice.reducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { GetUrl } from '@/utils/axiosInstance';

export const fetchChatHistory = createAsyncThunk(
  'chat/fetchChatHistory',
  async (enquiryId, thunkAPI) => {
    try {
      const response = await GetUrl(`/order/chatHistory/${enquiryId}`);
      return { enquiryId, chat: response.data.data.chat };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatHistory: {}, // { enquiryId: [messages] }
    loading: false,
    error: null,
  },
  reducers: {
    addMessage: (state, action) => {
      const { chatId, newMsg } = action.payload;
      if (state.chatHistory[chatId]) {
        state.chatHistory[chatId].push(newMsg);
      } else {
        state.chatHistory[chatId] = [newMsg];
      }
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
        state.error = action.payload || action.error.message;
      });
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;

// // // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // // import { PostUrl } from '@/app/api/BaseUrl';

// // // export const sendSMS = createAsyncThunk(
// // //   'sms/sendSMS',
// // //   async (payload, { rejectWithValue }) => {
// // //     try {
// // //       const response = await PostUrl.post(
// // //         'https://qdemgq.api.infobip.com/sms/2/text/advanced',
// // //         payload,
// // //         {
// // //           headers: {
// // //             Authorization: 'App e5f2f253094329027bd168dc6116f9d2-2bd38026-7a67-4cbb-a390-ca6331eb5927',
// // //           },
// // //         }
// // //       );
// // //       return response.data;
// // //     } catch (error) {
// // //       return rejectWithValue(error.response.data);
// // //     }
// // //   }
// // // );

// // // const smsSlice = createSlice({
// // //   name: 'sms',
// // //   initialState: {
// // //     loading: false,
// // //     success: false,
// // //     error: null,
// // //   },
// // //   reducers: {},
// // //   extraReducers: (builder) => {
// // //     builder
// // //       .addCase(sendSMS.pending, (state) => {
// // //         state.loading = true;
// // //       })
// // //       .addCase(sendSMS.fulfilled, (state) => {
// // //         state.loading = false;
// // //         state.success = true;
// // //       })
// // //       .addCase(sendSMS.rejected, (state, action) => {
// // //         state.loading = false;
// // //         state.error = action.payload;
// // //       });
// // //   },
// // // });

// // // export default smsSlice.reducer;

// // import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// // import { PostUrl } from '@/app/api/BaseUrl'; 
// // import { getToken } from '@/utils/auth';

// // // Modified sendSMS async thunk to use the local API
// // export const sendSMS = createAsyncThunk(
// //     'sms/sendSMS',
// //     async ({ id, msg }, { rejectWithValue }) => {
// //       console.log('Sending message:', { id, msg });
      
// //       try {
// //         // Construct dynamic URL with the provided ID
// //         const url = `/order/sendMsg/${id}`;
        
// //         // Send POST request with dynamic msg and headers containing the dynamic token
// //         const response = await PostUrl.post(url, 
// //           { msg },  // Request body with dynamic message
// //           {
// //             headers: {
// //               Authorization: `Bearer ${getToken()}`, // Dynamically fetched token from getToken
// //             },
// //           }
// //         );
  
// //         // Check if response is valid and return data
// //         if (response && response.data) {
// //           return response.data;  // Safely accessing `data`
// //         } else {
// //           throw new Error('Response data is undefined');
// //         }
// //       } catch (error) {
// //         console.error('Error in sendSMS:', error);
// //         // Return the error message or any other useful info
// //         return rejectWithValue(error.response?.data || error.message || 'An unknown error occurred');
// //       }
// //     }
// //   );
  

// // const smsSlice = createSlice({
// //   name: 'sms',
// //   initialState: {
// //     loading: false,
// //     success: false,
// //     error: null,
// //   },
// //   reducers: {},
// //   extraReducers: (builder) => {
// //     builder
// //       .addCase(sendSMS.pending, (state) => {
// //         state.loading = true;
// //       })
// //       .addCase(sendSMS.fulfilled, (state) => {
// //         state.loading = false;
// //         state.success = true;
// //       })
// //       .addCase(sendSMS.rejected, (state, action) => {
// //         state.loading = false;
// //         state.error = action.payload;
// //       });
// //   },
// // });

// // export default smsSlice.reducer;

// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { PostUrl } from '@/app/api/BaseUrl';
// import { getToken } from '@/utils/auth';

// // Async thunk to send SMS
// export const sendSMS = createAsyncThunk(
//   'sms/sendSMS',
//   async ({ id, msg }, { rejectWithValue }) => {
//     console.log('Sending message:', { id, msg });

//     try {
//       const url = `/order/sendMsg/${id}`;
//       const response = await PostUrl.post(
//         url,
//         { msg },
//         {
//           headers: {
//             Authorization: `Bearer ${getToken()}`,
//           },
//         }
//       );

//       if (response && response.data) {
//         return { id, msg }; // Return message object
//       } else {
//         throw new Error('Response data is undefined');
//       }
//     } catch (error) {
//       console.error('Error in sendSMS:', error);
//       return rejectWithValue(error.response?.data || error.message || 'Unknown error');
//     }
//   }
// );

// const smsSlice = createSlice({
//   name: 'sms',
//   initialState: {
//     loading: false,
//     success: false,
//     error: null,
//     messages: [], // ✅ store messages here
//     chatHistory: {},
//   },
//   reducers: {
//     addMessage: (state, action) => {
//         const { chatId, newMsg } = action.payload;
//         if (state.chatHistory[chatId]) {
//           state.chatHistory[chatId].push(newMsg); // Add the new message to the chat history
//         } else {
//           state.chatHistory[chatId] = [newMsg]; // If no history, create a new one
//         }
//       },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(sendSMS.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(sendSMS.fulfilled, (state, action) => {
//         state.loading = false;
//         state.success = true;
//         state.messages.push(action.payload); // ✅ append message
//       })
//       .addCase(sendSMS.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // ✅ Export action if you want to manually dispatch it
// export const { addMessage } = smsSlice.actions;

// // ✅ Export selector to use in Chat UI
// export const selectMessages = (state) => state.sms.messages;

// export default smsSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { PostUrl } from '@/app/api/BaseUrl';
import { getToken } from '@/utils/auth';

// Async thunk to send SMS
export const sendSMS = createAsyncThunk(
  'sms/sendSMS',
  async ({ id, msg }, { rejectWithValue }) => {
    console.log('Sending message:', { id, msg });

    try {
      const url = `/order/sendMsg/${id}`;
      const response = await PostUrl.post(
        url,
        { msg },
        {
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        }
      );

      if (response && response.data) {
        return { id, msg }; // Return message object
      } else {
        throw new Error('Response data is undefined');
      }
    } catch (error) {
      console.error('Error in sendSMS:', error);
      return rejectWithValue(error.response?.data || error.message || 'Unknown error');
    }
  }
);

const smsSlice = createSlice({
  name: 'sms',
  initialState: {
    loading: false,
    success: false,
    error: null,
    messages: [], // Store messages here
    chatHistory: {},
  },
  reducers: {
    addMessage: (state, action) => {
        const { chatId, newMsg } = action.payload;
        if (state.chatHistory[chatId]) {
          state.chatHistory[chatId].push(newMsg); // Add the new message to the chat history
        } else {
          state.chatHistory[chatId] = [newMsg]; // If no history, create a new one
        }
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendSMS.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendSMS.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        // Update chat history with sent message
        const { id, msg } = action.payload;
        if (state.chatHistory[id]) {
          state.chatHistory[id].push({ sender: "U", msg, created: new Date().toISOString() });
        }
      })
      .addCase(sendSMS.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addMessage } = smsSlice.actions;
export const selectMessages = (state) => state.sms.messages;
export default smsSlice.reducer;

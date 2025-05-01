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
        // const { id, msg } = action.payload;
        // if (state.chatHistory[id]) {
        //   state.chatHistory[id].push({ sender: "U", msg, created: new Date().toISOString() });
        // }
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

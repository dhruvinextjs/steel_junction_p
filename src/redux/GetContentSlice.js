import { GetUrl, PostUrl } from "@/app/api/BaseUrl";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const handleGetBanners = createAsyncThunk(
  "getContent/handleGetBanners",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetUrl(`/banners`);
      return response.data;
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to fetch banners");
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const handleGetCategories = createAsyncThunk(
  "getContent/handleGetCategories",
  async () => {
    try {
      const { data } = await GetUrl("/category");
      // console.log("API Response: ", data); // Add this to log the data
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);

export const handleGetAllProductretail = createAsyncThunk(
  "getContent/handleGetAllProductretail",
  async () => {
    try {
      const { data } = await GetUrl("/retailerCategory");
      console.log("API Response: ", data); // Add this to log the data
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message);
      throw error;
    }
  }
);

export const handleGetContactUs = createAsyncThunk(
  "getContent/handleGetContactUs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetUrl(`/cms/contactUs`);
      return response.data;
    } catch (err) {
      toast.error(
        err?.response?.data?.message || "Failed to fetch contact us data"
      );
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const handleGetChatList = createAsyncThunk(
  "getContent/handleGetChatList",
  async (_, { rejectWithValue }) => {
    try {
      const response = await GetUrl("/order/enquiryList");
      return response.data.data; // Returning only the `data` array
    } catch (err) {
      toast.error(err?.response?.data?.message || "Failed to fetch enquiries");
      return rejectWithValue(err?.response?.data);
    }
  }
);

// Fetch Chat History by Enquiry ID
export const handleGetChatHistory = createAsyncThunk(
  "getContent/handleGetChatHistory",
  async (enquiryId, { rejectWithValue }) => {
    try {
      const response = await GetUrl(`/order/chatHistory/${enquiryId}`);

      console.log("API Response:", response.data);

      if (!Array.isArray(response.data.data)) {
        throw new Error("Invalid chat data format");
      }

      return { enquiryId, messages: response.data.data };
    } catch (err) {
      return rejectWithValue(
        err?.response?.data || { message: "Error fetching chat" }
      );
    }
  }
);

// Send Message
export const handleSendMessage = createAsyncThunk(
  "getContent/handleSendMessage",
  async ({ enquiryId, message }, { rejectWithValue }) => {
    try {
      const response = await PostUrl(`/order/sendMsg/${enquiryId}`, {
        msg: message,
        type: "text",
      });

      console.log("Send Message API Response:", response.data); // Debugging

      if (!response.data.data || typeof response.data.data !== "object") {
        throw new Error("Unexpected API response format");
      }

      return {
        enquiryId,
        message: response.data.data.msg || "Message sent",
      };
    } catch (err) {
      toast.error(err?.response?.data?.message || "Message failed to send");
      return rejectWithValue(err?.response?.data);
    }
  }
);

export const handleGetFaqs = createAsyncThunk("content/handleGetFaqs", async (_, thunkAPI) => {
  try {
    const response = await GetUrl("cms/faq");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.response?.data?.message || "Something went wrong");
  }
});


const initialState = {
  loading: false,
  success: false,
  error: null,
  contactUs: {}, // To store contact us data
  banner: [],
  categories: [],
  product: [],
  enquiries: [],
  chatHistory: {},
};
const GetContentSlice = createSlice({
  name: "getContent",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetContactUs.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.contactUs = {};
    });
    builder.addCase(handleGetContactUs.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.success = true;
      state.contactUs = payload?.data[0] || {};
    });
    builder.addCase(handleGetContactUs.rejected, (state, { payload }) => {
      state.loading = false;
      state.success = false;
      state.error = payload || "An error occurred";
      state.contactUs = {};
    });
    // get banners
    builder.addCase(handleGetBanners.pending, (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
      state.banner = [];
    });
    builder.addCase(handleGetBanners.fulfilled, (state, { payload }) => {
      // console.log("Payload received:", payload); // Debug log
      state.loading = false;
      state.success = true;
      state.banner = payload?.data || [];
      state.error = payload?.status === "fail" ? payload.message : null;
    });
    builder
      .addCase(handleGetBanners.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An error occurred";
        state.banner = [];
      })
      // get category home
      .addCase(handleGetCategories.pending, (state, { payload }) => {
        state.categoryLoading = true;
      })
      .addCase(handleGetCategories.fulfilled, (state, { payload }) => {
        state.categoryLoading = false;
        state.categories = payload?.data ?? [];
        state.error = null;
      })
      .addCase(handleGetCategories.rejected, (state, { error }) => {
        state.categoryLoading = false;
        state.categories = [];
        state.error = error.message;
        // console.error("API Error: ", error);
      })
      .addCase(handleGetAllProductretail.pending, (state, { payload }) => {
        state.productLoading = true;
      })
      .addCase(handleGetAllProductretail.fulfilled, (state, { payload }) => {
        state.productLoading = false;
        state.product = payload?.data ?? [];
        state.error = null;
      })
      .addCase(handleGetAllProductretail.rejected, (state, { error }) => {
        state.productLoading = false;
        state.product = [];
        state.error = error.message;
        // console.error("API Error: ", error);
      });
    // Enquiry List
    builder.addCase(handleGetChatList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleGetChatList.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.enquiries = payload;
    });
    builder.addCase(handleGetChatList.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Chat History
    builder.addCase(handleGetChatHistory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleGetChatHistory.fulfilled, (state, action) => {
      state.loading = false;
      state.chatHistory[action.payload.enquiryId] = action.payload.messages;
    });
    builder.addCase(handleGetChatHistory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload?.message || "Failed to load chat history";
    });

     // FAQs fetch
     builder.addCase(handleGetFaqs.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleGetFaqs.fulfilled, (state, action) => {
      state.loading = false;
      state.faqs = action.payload?.data ?? []; // only store the array
    })
    .addCase(handleGetFaqs.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    // Send Message
    builder.addCase(handleSendMessage.fulfilled, (state, { payload }) => {
      if (!payload || !payload.enquiryId || !payload.message) {
        return; // Prevent invalid payload from breaking state
      }
   
      const newMessage = {
        _id: new Date().toISOString(), // Generate unique ID
        msg: payload.message.msg || "Message sent", // Ensure correct format
        sender: "U", // Assuming "U" is the user
      };
   
      // Ensure this part updates correctly
      state.chatHistory[payload.enquiryId] = [
        ...(state.chatHistory[payload.enquiryId] || []),
        newMessage,
      ];
   });
   
  },
});

// export const {} = GetContentSlice.actions;

export default GetContentSlice.reducer;

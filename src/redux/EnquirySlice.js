import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "@/app/api/BaseUrl";  // Assuming GetUrl is your API helper
import toast from "react-hot-toast";
 
// Initial State
const initialState = {
  enquiries: [],
  isLoading: false,
  error: null,
};
 
// 🔄 Async Thunks
 
// Fetch Enquiries (Retailer)
export const fetchEnquiries = createAsyncThunk(
  "enquiry/fetchEnquiries",
  async (token, { rejectWithValue }) => {
    try {
      const response = await GetUrl.get("/order/enquiryList", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
 
      if (response.data && response.data.data) {
        return response.data.data; // Assuming backend returns { data: [...] }
      } else {
        throw new Error("Unexpected response structure");
      }
    } catch (error) {
      // Log detailed error message
      console.error("Error fetching enquiries:", error);
 
      // If the error has a response object (API error), display that
      const errorMessage = error?.response?.data?.message || error.message || "Something went wrong";
 
      toast.error(`Failed to fetch enquiries: ${errorMessage}`);
     
      return rejectWithValue(errorMessage);
    }
  }
);
 
 
// 🧠 Enquiry Slice
const enquirySlice = createSlice({
  name: "enquiry",
  initialState,
  reducers: {
    // You can add reducers here if needed (e.g., clearing the list)
    clearEnquiries: (state) => {
      state.enquiries = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch Enquiries
      .addCase(fetchEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.enquiries = action.payload || []; // ✅ FIXED HERE
      })
      .addCase(fetchEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});
 
// Exports
export const { clearEnquiries } = enquirySlice.actions;
export default enquirySlice.reducer;
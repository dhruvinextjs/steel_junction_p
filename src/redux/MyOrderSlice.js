import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../utils/auth";
import { GetUrl } from "@/app/api/BaseUrl";
 
export const fetchOrders = createAsyncThunk(
    "myOrders/fetchOrders",
    async (_, { rejectWithValue }) => {
      try {
        const token = getToken();
        if (!token) return rejectWithValue("No token found");
  
        const response = await GetUrl.get("/order/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("Raw order API response:", response.data);
  
        return response.data?.data || [];
      } catch (error) {
        toast.error("Error fetching orders. Please try again.");
        return rejectWithValue(error.response?.data?.message || error.message);
      }
    }
  );
 
const myOrderSlice = createSlice({
  name: "myOrders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch orders";
      });
  },
});
 
export default myOrderSlice.reducer;
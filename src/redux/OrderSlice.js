// src/redux/orderSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { getToken } from "../utils/auth"; // Assuming the getToken function is in a utils file

// Async thunk to fetch order summary
export const fetchOrderSummary = createAsyncThunk(
  "order/fetchOrderSummary",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue("No token found");
      }

      const response = await axios.get("https://steel-junction.onrender.com/api/order/summary", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data; // Returning the data object from the API response
    } catch (error) {
      toast.error("Error fetching order summary. Please try again.");
      return rejectWithValue(error.message || "Failed to fetch order summary");
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState: {
    totalQty: 0,
    subTotal: 0,
    gstAmount: 0,
    loadingCharge: 0,
    insurance: 0,
    tcsAmount: 0,
    orderTotal: 0,
    roundOff: 0,
    grossTotal: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrderSummary.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset previous errors if any
      })
      .addCase(fetchOrderSummary.fulfilled, (state, action) => {
        state.loading = false;
        const {
          totalQty,
          subTotal,
          gstAmount,
          loadingCharge,
          insurance,
          tcsAmount,
          orderTotal,
          roundOff,
          grossTotal,
        } = action.payload;
        state.totalQty = totalQty;
        state.subTotal = subTotal;
        state.gstAmount = gstAmount;
        state.loadingCharge = loadingCharge;
        state.insurance = insurance;
        state.tcsAmount = tcsAmount;
        state.orderTotal = orderTotal;
        state.roundOff = roundOff;
        state.grossTotal = grossTotal;
      })
      .addCase(fetchOrderSummary.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch order summary";
      });
  },
});

export default orderSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { GetUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";

// Get order detail by ID
export const getOrderDetail = createAsyncThunk(
  "orderDetail/getOrderDetail",
  async (orderId, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) return rejectWithValue("No token found");

      const response = await GetUrl.get(`/order/${orderId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to fetch order");
    }
  }
);


// Post paid invoice one
export const payInvoiceOne = createAsyncThunk(
  "orderDetail/payInvoiceOne",
  async (orderId, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) return rejectWithValue("No token found");

      const response = await GetUrl.post(`/order/payInvoiceOne/${orderId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to pay invoice one");
    }
  }
);

// Post paid invoice two
export const payInvoiceTwo = createAsyncThunk(
  "orderDetail/payInvoiceTwo",
  async (orderId, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) return rejectWithValue("No token found");

      const response = await GetUrl.post(`/order/payInvoiceTwo/${orderId}`, {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Failed to pay invoice two");
    }
  }
);

const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState: {
    order: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrderDetail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getOrderDetail.fulfilled, (state, action) => {
        console.log("Fetched Order Detail:", action.payload);

        // Update based on actual response structure
        state.loading = false;
        state.order = action.payload?.data || action.payload;
      })
      .addCase(getOrderDetail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

      builder
      .addCase(payInvoiceOne.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(payInvoiceOne.fulfilled, (state, action) => {
        console.log("Invoice One Paid:", action.payload);
        state.loading = false;
      })
      .addCase(payInvoiceOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(payInvoiceTwo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(payInvoiceTwo.fulfilled, (state, action) => {
        console.log("Invoice Two Paid:", action.payload);
        state.loading = false;
      })
      .addCase(payInvoiceTwo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default orderDetailSlice.reducer;

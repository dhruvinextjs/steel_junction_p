import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getToken } from "../utils/auth"; // Assuming the getToken function is in a utils file
import { GetUrl , PostUrl} from "@/app/api/BaseUrl";

// Async thunk to fetch order summary
export const fetchOrderSummary = createAsyncThunk(
  "order/fetchOrderSummary",
  async (_, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue("No token found");
      }

      const response = await GetUrl.get("order/summary", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Order Summary API Response", response.data);

      // validate structure
      return response.data?.data || {};
    } catch (error) {
      toast.error("Error fetching order summary. Please try again.");
      return rejectWithValue(error.message || "Failed to fetch order summary");
    }
  }
);
export const createOrder = createAsyncThunk(
  "order/createOrder",
  async (orderData, { rejectWithValue }) => {
    try {
      const token = getToken();
      if (!token) {
        return rejectWithValue("No token found");
      }

      const response = await GetUrl.post("order/createOrder", orderData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Create Order API Response:", response);
      // toast.success("Order placed successfully!");
      return response.data;
    } catch (error) {
      toast.error("Error placing order. Please try again.");
      return rejectWithValue(error.message || "Failed to create order");
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
      })

      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null; // Reset previous errors if any
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload; // Store the created order details
      
        // Check if message exists in the response
        if (action.payload.message) {
          toast.success(action.payload.message); // Show success message from backend
        } else {
          toast.success("Order placed successfully!");
        }
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to place order";
        toast.error("Error placing order. Please try again.");
      });
  },
});

export default orderSlice.reducer;

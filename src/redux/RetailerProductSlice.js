import { GetUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const handleGetRetailerProductById = createAsyncThunk(
  "getReailerProduct/handleGetRetailerProductById",
  async (id, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      const errorMessage =
        "Authentication token not found. Please log in again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }

    try {
      const { data } = await GetUrl(`/product/retailer/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response:", data);
      return data?.data || null;
    } catch (error) {
      console.error("API Error:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch product details.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// export const handleGetAllRetailerProducts = createAsyncThunk(
//   "getRetailerProduct/handleGetAllRetailerProducts",
//   async (categoryId, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) {
//       const errorMessage =
//         "Authentication token not found. Please log in again.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }

//     try {
//       const url = categoryId
//         ? `/product/list/retailer?categoryId=${categoryId}`
//         : `/product/list/retailer`;

//       const { data } = await GetUrl(url, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log("API Response:", data);
//       return data?.data || [];
//     } catch (error) {
//       console.error("API Error:", error);
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch retailer products.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );


export const handleGetAllRetailerProducts = createAsyncThunk(
  "getRetailerProduct/handleGetAllRetailerProducts",
  async (_, { rejectWithValue }) => { // Removed categoryId argument
    const token = getToken();
    if (!token) {
      const errorMessage =
        "Authentication token not found. Please log in again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }

    try {
      const { data } = await GetUrl(`/product/all/retailer`, { // Corrected URL
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response (all):", data);
      return data?.data || []; // Expect an array of all products
    } catch (error) {
      console.error("API Error (all):", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch all retailer products.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

const initialState = {
  loading: false,
  success: false,
  error: null,
  productDetails: null,
  products: [],
};

const GetRetailerProductSlice = createSlice({
  name: "getRetailerProduct",
  initialState,
  reducers: {
    handleClearProductName: (state, { payload }) => {
      state.productName = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetRetailerProductById.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(handleGetRetailerProductById.fulfilled, (state, { payload }) => {
        state.productDetails = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(handleGetRetailerProductById.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
      })
      // .addCase(handleGetAllRetailerProducts.pending, (state) => {
      //   state.loading = true;
      //   state.success = false;
      //   state.error = null;
      // })
      // .addCase(handleGetAllRetailerProducts.fulfilled, (state, { payload }) => {
      //   state.products = payload;
      //   state.loading = false;
      //   state.success = true;
      //   state.error = null;
      // })
      // .addCase(handleGetAllRetailerProducts.rejected, (state, { payload }) => {
      //   state.loading = false;
      //   state.success = false;
      //   state.error = payload || "An unexpected error occurred.";
      // });

      builder
      .addCase(handleGetAllRetailerProducts.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
        state.products = []; // Clear previous products
      })
      .addCase(handleGetAllRetailerProducts.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(handleGetAllRetailerProducts.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
        state.products = [];
      });
  },
});

export const { handleClearProductName } = GetRetailerProductSlice.actions;

export default GetRetailerProductSlice.reducer;

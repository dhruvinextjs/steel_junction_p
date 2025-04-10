import { GetUrl,DeleteUrl  } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const handleGetProduct = createAsyncThunk(
  "getProduct/handleGetProduct",
  async (categoryId = [], { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      const errorMessage =
        "Authentication token not found. Please log in again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }

    try {
      const queryParam = categoryId?.length
        ? `?categoryId=${categoryId.join(",")}`
        : "";
      const { data } = await GetUrl(`/product${queryParam}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("API Response:", data); // Debug log
      return data?.data || []; // Adjusted to match the response structure
    } catch (error) {
      console.error("API Error:", error); // Debug log
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch products.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const handleGetProductById = createAsyncThunk(
  "getProduct/handleGetProductById",
  async (id, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      const errorMessage =
        "Authentication token not found. Please log in again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }

    try {
      const { data } = await GetUrl(`/product/${id}`, {
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

export const handleSearchProduct = createAsyncThunk(
  "getProduct/handleSearchProduct",
  async (searchQuery, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      const errorMessage =
        "Authentication token not found. Please log in again.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }

    try {
      const { data } = await GetUrl(`/product?search=${searchQuery}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("Search API Response:", data); // Debug log
      return data?.data || []; // Adjusted to match the response structure
    } catch (error) {
      console.error("Search API Error:", error); // Debug log
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to search products.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const handleGetRetailerProductById = createAsyncThunk(
  "getProduct/handleGetRetailerProductById",
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

      console.log("Retailer Product API Response:", data);
      return data?.data || null;
    } catch (error) {
      console.error("Retailer API Error:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "Failed to fetch retailer product details.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// export const handleDeleteProduct = createAsyncThunk(
//   "getProduct/handleDeleteProduct",
//   async (productId, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) {
//       const errorMessage =
//         "Authentication token not found. Please log in again.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }

//     try {
//       const { data } = await DeleteUrl.delete(`/product/${productId}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log("Delete API Response:", data);
//       return productId; // Returning the product ID so you can remove it from state
//     } catch (error) {
//       console.error("Delete API Error:", error);
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to delete product.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );


const initialState = {
  loading: false,
  success: false,
  error: null,
  products: [], // Track if products are loaded
  productDetails: null, // Add product details state
  searchResults: {
    name: "",
  },
  productName: [], // Add search results state
  retailerProductDetails: null, // Add retailer-specific details state
};
const GetProductSlice = createSlice({
  name: "getProduct",
  initialState,
  reducers: {
    handleClearProductName: (state, { payload }) => {
      state.productName = payload;
    },
    handleChangeSearchParams: (state, { payload }) => {
      let params = {};
      for (const key in state.searchResults) {
        if (Object.keys(payload).includes(key)) {
          params[key] = payload[key];
        } else {
          params[key] = state.searchResults[key];
        }
      }
      state.searchResults = params;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetProduct.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(handleGetProduct.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(handleGetProduct.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
      })
      .addCase(handleGetProductById.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(handleGetProductById.fulfilled, (state, { payload }) => {
        state.productDetails = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(handleGetProductById.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
      })
      .addCase(handleSearchProduct.pending, (state) => {
        toast.remove();
        toast.loading("Searching products...");
        state.loading = true;
      })
      .addCase(handleSearchProduct.fulfilled, (state, { payload }) => {
        toast.dismiss(); // Remove "loading" toast
        state.searchResults = payload;
        state.loading = false;
      })
      .addCase(handleSearchProduct.rejected, (state, { payload }) => {
        // toast.dismiss();
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
      })
      // Retailer Product By ID
      .addCase(handleGetRetailerProductById.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(handleGetRetailerProductById.fulfilled, (state, { payload }) => {
        state.productDetails  = payload;
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(handleGetRetailerProductById.rejected, (state, { payload }) => {
        state.loading = false;
        state.success = false;
        state.error = payload || "An unexpected error occurred.";
      });
      // .addCase(handleDeleteProduct.fulfilled, (state, { payload }) => {
      //   state.products = state.products.filter(product => product.id !== payload);
      //   state.loading = false;
      //   state.success = true;
      //   state.error = null;
      // });
  },
});

export const { handleClearProductName, handleChangeSearchParams } =
  GetProductSlice.actions;

export default GetProductSlice.reducer;

import { DeleteUrl, GetUrl, PostUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
// import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// export const handleGetFavs = createAsyncThunk(
//   "favorites/handleGetFavs",
//   async ({ signal, token }, { rejectWithValue }) => {
//     signal.current = new AbortController();

//     try {
//       const response = await GetUrl(`/favourite`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return response.data.data.flatMap((fav) => fav.productDetails); // Flatten productDetails into favorites
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message || "Failed to fetch favorites.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );
export const handleGetFavs = createAsyncThunk(
  "favorites/handleGetFavs",
  async ({ signal }, { rejectWithValue }) => {
    signal.current = new AbortController();
    const token = getToken();
    if (!token) {
      toast.error("User not authenticated. Please log in.");
      return rejectWithValue("Authentication token not found.");
    }
    try {
      const response = await GetUrl(`/favourite`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "data 🤷‍♂️🤷‍♂️👍👍");
      toast.remove();
      toast.success(response.data.message);
      return response.data.data.flatMap((fav) => fav.productDetails);
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update favorites.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const handleAddFavRemove = createAsyncThunk(
  "favorites/handleAddFavRemove",
  async ({ id }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) {
      toast.error("User not authenticated. Please log in.");
      return rejectWithValue("Authentication token not found.");
    }
    try {
      const response = await GetUrl(`/favourite/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "🤷‍♂️🤷‍♂️👍👍");
      toast.success(response.data.message);
      return response.data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to update favorites.";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

// const initialState = {
//   loading: false,
//   favorites: [], // Track favorite products
//   error: null,
//   favAddLoading: false,
//   favRemoveLoading: false,
// };

const GetFavoriteSlice = createSlice({
  name: "getfavorites",
  initialState: {
    loading: false,
    favorites: [], // Track favorite products
    error: null,
    // user: null,
    // token: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetFavs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleGetFavs.fulfilled, (state, { payload }) => {
      state.favorites = payload;
      state.token = payload.token;
      state.loading = false;
    });
    builder.addCase(handleGetFavs.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(handleAddFavRemove.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(handleAddFavRemove.fulfilled, (state, { payload }) => {
      state.loading = false;
      // toast.success("Favorite updated successfully!");
    });
    builder.addCase(handleAddFavRemove.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;

      if (payload === "Authentication token not found.") {
        toast.error("Authentication token not found. Please log in.");
      } else if (payload === "Please provide an authentication token.") {
        toast.error("Please provide an authentication token.");
      } else {
        toast.error("Failed to update favorites. Please try again.");
      }
    });
  },
});

export default GetFavoriteSlice.reducer;

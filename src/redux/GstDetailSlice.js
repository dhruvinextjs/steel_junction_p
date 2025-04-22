// import { PostUrl, PutUrl } from "@/app/api/BaseUrl";
// import { getToken } from "@/utils/auth";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";
 
// // Add GST Detail
// export const handleAddGstDetail = createAsyncThunk(
//   "gst/handleAddGstDetail",
//   async ({ gstNumber, certificate }, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) return rejectWithValue("Authentication token not found.");
 
//     const formData = new FormData();
//     formData.append("gstNumber", gstNumber);
//     if (certificate) {
//       formData.append("certificate", certificate);
//     }
 
//     try {
//       const { data } = await PostUrl("/auth/addGstDetail", {
//         method: "POST",
//         data: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       toast.success("GST Details added successfully.");
//       return data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Failed to add GST details.");
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

// //get 
// export const getGstDetails = createAsyncThunk(
//   "gst/getGstDetails",
//   async (_, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) return rejectWithValue("Authentication token not found.");
    
//     try {
//       const { data } = await GetUrl.get("/auth/getGstDetails", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       return data; // Assuming the response contains the GST details
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Failed to fetch GST details.");
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

 
// // Update GST Detail
// export const handleUpdateGstDetail = createAsyncThunk(
//   "gst/handleUpdateGstDetail",
//   async ({ gstNumber, certificate }, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) return rejectWithValue("Authentication token not found.");
 
//     const formData = new FormData();
//     formData.append("gstNumber", gstNumber);
//     if (certificate) {
//       formData.append("certificate", certificate);
//     }
 
//     try {
//       const { data } = await PutUrl("/auth/updateGstDetail", {
//         method: "PUT",
//         data: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       toast.success("GST Details updated successfully.");
//       return data;
//     } catch (error) {
//       toast.error(error?.response?.data?.message || "Failed to update GST details.");
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );
 
// // Initial State
// const initialState = {
//   loading: false,
//   error: null,
//   gstDetails: null,
// };
 
// // GST Slice
// const GstDetailSlice = createSlice({
//   name: "gstDetail",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // Add GST
//     builder.addCase(handleAddGstDetail.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(handleAddGstDetail.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.gstDetails = payload.gstDetails;
//     });
//     builder.addCase(handleAddGstDetail.rejected, (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     });
 
//     // Update GST
//     builder.addCase(handleUpdateGstDetail.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(handleUpdateGstDetail.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.gstDetails = payload.gstDetails;
//     });
//     builder.addCase(handleUpdateGstDetail.rejected, (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     });

//     builder.addCase(getGstDetails.pending, (state) => {
//       state.loading = true;
//       state.error = null;
//     });
//     builder.addCase(getGstDetails.fulfilled, (state, { payload }) => {
//       state.loading = false;
//       state.gstDetails = payload.gstDetails; // Assuming this contains your GST data
//     });
//     builder.addCase(getGstDetails.rejected, (state, { payload }) => {
//       state.loading = false;
//       state.error = payload;
//     });
    
//   },
// });
 
// export default GstDetailSlice.reducer;

import { PostUrl, PutUrl, GetUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

// Add GST Detail
export const handleAddGstDetail = createAsyncThunk(
  "gst/handleAddGstDetail",
  async ({ gstNumber, certificate }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");

    const formData = new FormData();
    formData.append("gstNumber", gstNumber);
    if (certificate) {
      formData.append("certificate", certificate);
    }

    try {
      const { data } = await PostUrl("/auth/addGstDetail", {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("GST Details added successfully.");
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to add GST details.");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Get GST Details
export const getGstDetails = createAsyncThunk(
  "gst/getGstDetails",
  async (_, { rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");

    try {
      const { data } = await GetUrl.get("/auth/getGstDetails", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to fetch GST details.");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Update GST Detail
export const handleUpdateGstDetail = createAsyncThunk(
  "gst/handleUpdateGstDetail",
  async ({ gstNumber, certificate }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");

    const formData = new FormData();
    formData.append("gstNumber", gstNumber);
    if (certificate) {
      formData.append("certificate", certificate);
    }

    try {
      const { data } = await PutUrl("/auth/userDetail", {
        method: "PUT",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("GST Details updated successfully.");
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to update GST details.");
      return rejectWithValue(error?.response?.data);
    }
  }
);

// In GstDetailSlice.js
export const setGstDetailsFromStorage = (details) => {
  return {
    type: "SET_GST_DETAILS",
    payload: details,
  };
};


// Initial State
const initialState = {
  loading: false,
  error: null,
  gstDetails: null,
};

// Slice
const GstDetailSlice = createSlice({
  name: "gstDetail",
  initialState,
  // reducers: {},
  reducers: {
    setGstDetailsFromStorage: (state, action) => {
      state.gstDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add
    builder.addCase(handleAddGstDetail.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(handleAddGstDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.gstDetails = action.payload?.gstDetails || null;
    })
    builder.addCase(handleAddGstDetail.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })

    // Update
    builder.addCase(handleUpdateGstDetail.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleUpdateGstDetail.fulfilled, (state, action) => {
      state.gstDetails = action.payload?.gstDetails || null;
    });
    builder.addCase(handleUpdateGstDetail.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Get
    builder.addCase(getGstDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getGstDetails.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.gstDetails = payload.gstDetails;
    });
    builder.addCase(getGstDetails.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export default GstDetailSlice.reducer;

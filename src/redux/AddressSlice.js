import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import toast from "react-hot-toast";
import axios from 'axios';

 
// ADD ADDRESS
export const addAddress = createAsyncThunk(
  "address/addAddress",
  async (formData, { rejectWithValue }) => {
    const token = getToken();

    if (!token) {
      toast.error("Authentication token is missing.");
      return rejectWithValue("Token missing");
    }

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };

    try {
      const res = await PostUrl.post("/address/add", formData, { headers });
      const data = res?.data;

      // ✅ Only toast on success
      if (data?.success) {
        toast.success(data?.message || "Address added successfully!");
        return data; // Return only when successful
      } else {
        // ✅ Handle edge case where API returns unexpected structure
        const errorMessage = data?.message || "Failed to add address.";
        toast.error(errorMessage);
        return rejectWithValue(errorMessage);
      }
    } catch (err) {
      // ✅ Only toast on real error
      const errorMessage =
        err?.response?.data?.message || err?.message || "Failed to add address";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
  
  
// ADDRESS LIST
// ✅ CORRECTED VERSION
export const getAddressList = createAsyncThunk(
    "address/getAddressList",
    async (_, { rejectWithValue }) => {
      const token = getToken(); // Get token here
      
      if (!token) {
        toast.error("Authentication token is missing.");
        return rejectWithValue("Token missing");
      }
  
      try {
        const res = await GetUrl.get("/address", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        console.log("Fetched Address List:", res.data); // Log the fetched address data
  
        // Return the 'address' field directly as this seems to be the correct data
        return res.data.address; // Update this to return 'address' directly
      } catch (err) {
        console.error("Error fetching addresses:", err);
        toast.error(err?.response?.data?.message || "Failed to fetch addresses");
        return rejectWithValue(err?.response?.data || err.message);
      }
    }
  );
 
  export const updateAddress = createAsyncThunk(
    "address/updateAddress",
    async ({ id, formData, token }, { rejectWithValue }) => {
      try {
        const res = await PutUrl.put(  // Use PutUrl instance for the PUT request
          `/address/edit/${id}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log("Update address response:", res.data);
        toast.success("Address updated successfully!");
        return res.data;
      } catch (err) {
        console.error("Error updating address:", err);
        toast.error(err?.response?.data?.message || "Failed to update address");
        return rejectWithValue(err.response?.data || err.message);
      }
    }
  );
 
export const deleteAddress = createAsyncThunk(
    "address/deleteAddress",
    async ({ id, token }, { rejectWithValue }) => {
      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };
        
        // Pass the headers correctly within the config object
        await DeleteUrl(`/address/delete/${id}`, { headers });
        
        toast.success("Address deleted successfully!");
        return id;  // Returning the deleted address id
      } catch (err) {
        console.error("Error deleting address:", err);
        toast.error(err?.response?.data?.message || "Failed to delete address");
        return rejectWithValue(err?.response?.data || err?.message);
      }
    }
  );

  export const setDefaultAddress = createAsyncThunk(
    "address/setDefault",
    async (payload, { rejectWithValue }) => {
      try {
        const response = await axios.put(
          `https://steel-junction.onrender.com/api/address/makeDefault/${payload.selectedId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${payload.token}`,
            },
          }
        );
        return response.data;
      } catch (error) {
        console.error("❌ Error setting default address:", error);
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  
  

// SLICE
const addressSlice = createSlice({
  name: "address",
  initialState: {
    addresses: [],
    loading: false,
    error: null,
    defaultAddressId: null,
    defaultAddress: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Add Address
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.addresses.push(action.payload.address);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
 
      // Address List
      .addCase(getAddressList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAddressList.fulfilled, (state, action) => {
        state.loading = false;
        if (Array.isArray(action.payload)) {
          state.addresses = action.payload;  // Directly assign the array to state.addresses
          const defaultAddr = action.payload.find((addr) => addr.isDefault);
          state.defaultAddressId = defaultAddr?._id || null;
        } else {
          console.error("No valid address data found in the response");
          state.addresses = [];  // Ensure you handle the empty state properly
        }
      })
      .addCase(getAddressList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
 
      // Update Address
      .addCase(updateAddress.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateAddress.fulfilled, (state, action) => {
        console.log("Address Update Payload:", action.payload); // Check the response payload
        if (action.payload && action.payload.address) {  // Changed from updatedAddress to address
          const updatedAddress = action.payload.address;  // Use address from response
          const index = state.addresses.findIndex(addr => addr._id === updatedAddress._id);
          if (index !== -1) {
            state.addresses[index] = updatedAddress;
          }
          if (updatedAddress.isDefault) {
            state.defaultAddressId = updatedAddress._id;
          }
        } else {
          console.error("No address found in payload.");
        }
        state.loading = false;
      })
      .addCase(updateAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
 
      // Delete Address
      .addCase(deleteAddress.fulfilled, (state, action) => {
        state.addresses = state.addresses.filter(
          (address) => address._id !== action.payload
        );

        if (state.defaultAddressId === action.payload) {
          state.defaultAddressId = null;
        }
      })
 
      // Set Default
        // Set Default Address
        .addCase(setDefaultAddress.pending, (state) => {
          state.loading = true;
        })
        .addCase(setDefaultAddress.fulfilled, (state, action) => {
          state.defaultAddressId = action.payload.defaultAddressId;
        })
        .addCase(setDefaultAddress.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
  },
});
 
export default addressSlice.reducer;
// In GstDetailSlice.js
import { PostUrl, PutUrl, GetUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const getInitialGstDetails = () => {
    if (typeof window !== 'undefined') {
        const storedGstDetails = localStorage.getItem('gstDetails');
        if (storedGstDetails) {
            try {
                return JSON.parse(storedGstDetails);
            } catch (error) {
                console.error("Error parsing GST details from localStorage:", error);
                return null;
            }
        }
    }
    return null;
};

// Add GST Detail
export const handleAddGstDetail = createAsyncThunk(
    "gst/handleAddGstDetail",
    async ({ gstNumber, certificate }, { rejectWithValue, dispatch }) => {
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

            if (data?.user) {
                const { gstNumber, gstCertificate } = data.user;
                const gstDetails = { gstNumber, certificateUrl: gstCertificate };
                localStorage.setItem('gstDetails', JSON.stringify(gstDetails));
                dispatch(setGstDetailsFromStorage(gstDetails));
            }
            return { user: data.user };
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to add GST details.");
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Get User Details (which includes GST details)
export const getUserDetails = createAsyncThunk(
    "gst/getUserDetails",
    async (_, { rejectWithValue, dispatch }) => {
        const token = getToken();
        if (!token) return rejectWithValue("Authentication token not found.");

        try {
            const { data } = await GetUrl.get("/auth/userDetail", { // <--- UPDATE THIS URL
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (data?.data) { // Access the 'data' object as per your sample
                const { gstNumber, gstCertificate } = data.data;
                const gstDetails = { gstNumber, certificateUrl: gstCertificate };
                localStorage.setItem('gstDetails', JSON.stringify(gstDetails));
                dispatch(setGstDetailsFromStorage(gstDetails));
                return data.data; // Return the user data
            }
            return data;
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to fetch user details.");
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Update GST Detail
export const handleUpdateGstDetail = createAsyncThunk(
    "gst/handleUpdateGstDetail",
    async ({ gstNumber, certificate }, { rejectWithValue, dispatch }) => {
        const token = getToken();
        if (!token) return rejectWithValue("Authentication token not found.");

        const formData = new FormData();
        formData.append("gstNumber", gstNumber);
        if (certificate) {
            formData.append("certificate", certificate);
        }

        try {
            const { data } = await PutUrl("/auth/updateGstDetail", { // <--- UPDATE THIS URL
                method: "PUT",
                data: formData,
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            });
            toast.success("GST Details updated successfully.");

            if (data?.user) {
                const { gstNumber, gstCertificate } = data.user;
                const gstDetails = { gstNumber, certificateUrl: gstCertificate };
                localStorage.setItem('gstDetails', JSON.stringify(gstDetails));
                dispatch(setGstDetailsFromStorage(gstDetails));
            }
            return { user: data.user };
        } catch (error) {
            toast.error(error?.response?.data?.message || "Failed to update GST details.");
            return rejectWithValue(error?.response?.data);
        }
    }
);

// Initial State
const initialState = {
    loading: false,
    error: null,
    gstDetails: getInitialGstDetails(),
};

// Slice
const GstDetailSlice = createSlice({
    name: "gstDetail",
    initialState,
    reducers: {
        setGstDetailsFromStorage: (state, action) => {
            state.gstDetails = action.payload;
        },
        clearGstDetails: (state) => {
            state.gstDetails = null;
            if (typeof window !== 'undefined') {
                localStorage.removeItem('gstDetails');
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(handleAddGstDetail.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(handleAddGstDetail.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(handleAddGstDetail.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(handleUpdateGstDetail.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(handleUpdateGstDetail.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(handleUpdateGstDetail.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        builder.addCase(getUserDetails.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserDetails.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            // The reducer will be updated via the dispatch(setGstDetailsFromStorage) in the thunk
        });
        builder.addCase(getUserDetails.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
});

export const { setGstDetailsFromStorage, clearGstDetails } = GstDetailSlice.actions;
export default GstDetailSlice.reducer;
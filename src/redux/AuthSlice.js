import { PostUrl, PutUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";


const persistToLocalStorage = (key, value) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value);
  }
};

const removeFromLocalStorage = (key) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key);
  }
};

const clearLocalStorage = () => {
  if (typeof window !== "undefined") {
    localStorage.clear();
  }
};

// Send OTP
export const handleSendOtp = createAsyncThunk(
  "auth/handleSendOtp",
  async ({ mobileNumber }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("mobileNumber", mobileNumber);
 
    try {
      const { data } = await PostUrl("/auth/sendOtp", {
        method: "POST",
        data: formData, // Send JSON directly
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        console.log(error, "error");

        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Verify OTP
export const handleVerifyOtp = createAsyncThunk(
  "auth/handleVerifyOtp",
  async ({ mobileNumber, otp }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/verifyOtp", {
        data: { mobileNumber, otp },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Resend OTP
export const handleResendOtp = createAsyncThunk(
  "auth/handleResendOtp",
  async ({ mobileNumber }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/resendOtp", {
        data: { mobileNumber },
        headers: {
          "Content-Type": "application/json",
        },
      });
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

// Sign Up (with passcode and role)
export const handleSignup = createAsyncThunk(
  "auth/handleSignup",
  async ({name, mobileNumber, passcode, role }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/signup", {
        data: {name, mobileNumber, passcode, role },
        headers: {
          "Content-Type": "application/json",
        },
      });
      persistToLocalStorage("selectedRole", role);
      persistToLocalStorage("user", JSON.stringify(data.user));
      persistToLocalStorage("token", data.token);
      // if (typeof window !== "undefined") {
      //   localStorage.setItem("selectedRole", role); // Persist role
      // }
      return data;
    } catch (error) {
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      }
      return rejectWithValue(error?.response?.data);
    }
  }
);

// handleSignin action with token storage
export const handleSignin = createAsyncThunk(
  "auth/handleSignin",
  async ({ mobileNumber }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/login", {
        data: { mobileNumber },
        headers: {
          "Content-Type": "application/json", // Adjusted content-type to application/json
        },
      });

      if (data.success) {
        // Store the token in localStorage
        localStorage.setItem("token", data.token);

        // Optional: Store user data as well if needed
        localStorage.setItem("user", JSON.stringify(data.user));

        toast.success("Login successful.");
        return data; // Return the data to be used in the reducer
      } else {
        toast.error(data.message);
        return rejectWithValue(data.message); // Return the error message
      }
    } catch (error) {
      console.error(error);
      if (error?.response?.data?.message) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Login failed. Please try again.");
      }
      return rejectWithValue(error?.response?.data); // Return error response to handle in the reducer
    }
  }
);


export const handleCheckLoginPasscode = createAsyncThunk(
  "auth/handleCheckLoginPasscode",
  async ({ mobileNumber, passcode }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/checkLoginPasscode", {
        data: { mobileNumber, passcode },
        headers: {
          "Content-Type": "application/json",
        },
      });
      // persistToLocalStorage("token", data.token);
           // Persist token and user data in localStorage
           persistToLocalStorage("token", data.token);
           persistToLocalStorage("user", JSON.stringify(data.user));
      console.log(data);

      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleEditProfile = createAsyncThunk(
  "auth/handleEditProfile",
  async ({ formData, token }, { dispatch, rejectWithValue }) => {
    try {
      if (!token) {
        toast.error("Authentication token is missing.");
        return rejectWithValue("Token missing");
      }

      // ✅ Ensure businessName is not missing
      if (!formData.has("businessName") || !formData.get("businessName")) {
        toast.error("Firm Name is required.");
        return rejectWithValue("Business Name missing");
      }

      // Set headers
      PutUrl.defaults.headers["Authorization"] = `Bearer ${token}`;
      PutUrl.defaults.headers["Content-Type"] = "multipart/form-data";

      const { data } = await PutUrl("/auth/editProfile", formData);

      // ✅ Only show success if API returns success
      if (data.success) {
        toast.success(data.message || "Profile updated successfully!");
        await dispatch(fetchProfileDetails());
      } else {
        toast.error(data.message || "Profile update failed!");
        return rejectWithValue(data.message || "Unknown error");
      }

      return data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || "Profile update failed!";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);


export const handleSendEnquiry = createAsyncThunk(
  "auth/handleSendEnquiry",
  async ({ formData, token }, { dispatch, rejectWithValue }) => { // Access dispatch
    try {
      const response = await PostUrl.post("/order/sendEnquiry", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Enquiry sent successfully!");

      // Assuming the backend returns the newly sent message in the response
      if (response.data && response.data.newMessage) {
        dispatch(
          addMessage({
            chatId: formData.get("productId"), // Or the relevant enquiryId
            newMsg: response.data.newMessage,
          })
        );
      }

      return response.data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send enquiry");
      return rejectWithValue(error.response.data);
    }
  }
);

// Forgot Passcode - Send OTP
export const handleForgotPasscode = createAsyncThunk(
  "auth/handleForgotPasscode",
  async ({ mobileNumber }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("mobileNumber", mobileNumber);

    try {
      const { data } = await PostUrl("/auth/forgotPasscode", {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success(data.message || "OTP sent successfully!");
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send OTP.");
      return rejectWithValue(error?.response?.data);
    }
  }
);
// Forgot Passcode - Reset
export const handleResetPasscode = createAsyncThunk(
  "auth/handleResetPasscode",
  async ({ mobileNumber, newPasscode }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/resetPasscode", {
        data: { mobileNumber, passcode: newPasscode },
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Passcode reset successfully");
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Reset failed");
      return rejectWithValue(error?.response?.data);
    }
  }
);


export const checkCurrentPasscode = createAsyncThunk(
  'auth/checkCurrentPasscode',
  async (passcode, { rejectWithValue }) => {
    const token = localStorage.getItem('token');  // Replace with your token retrieval method
    if (!token) return rejectWithValue("Authentication token not found");

    try {
      const response = await PostUrl.post(
        '/auth/checkCurrentPasscode',
        { passcode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        return response.data;
      } else {
        return rejectWithValue("Incorrect passcode");
      }
    } catch (error) {
      return rejectWithValue(
        error?.response?.data?.message || "Error verifying passcode"
      );
    }
  }
);

export const handleChangePasscode = createAsyncThunk(
  "auth/handleChangePasscode",
  async ({ currentPasscode, newPasscode }, { dispatch, rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");

    try {
      // Verify the current passcode
      const verifyRes = await PostUrl.post(
        "/auth/checkCurrentPasscode",
        { passcode: currentPasscode },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // Ensure that the response contains `success` or valid status
      if (!verifyRes.data.success) {
        toast.error("Incorrect current passcode.");
        return rejectWithValue("Incorrect current passcode.");
      }

      // Proceed to change the passcode
      const formData = new FormData();
      formData.append("currentPasscode", currentPasscode);
      formData.append("newPasscode", newPasscode);

      const { data } = await PostUrl.post("/auth/changePasscode", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Passcode changed successfully!");
      return data;
    } catch (error) {
      const errorMessage =
        error?.response?.data?.message || "Failed to change passcode";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);


// Create Auth Slice
const initialState = {
  loading: false,
  error: null,
  user: null,
  token: null,
  // user: typeof window !== "undefined" ? JSON.parse(localStorage.getItem("user")) : null,
  // token: typeof window !== "undefined" ? localStorage.getItem("token") : null,
  role: "guest", // Persist role
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleLogout: (state) => {
      // clearLocalStorage();
      state.user = null;
      state.token = null;
      state.role = null;

    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem('role',  action.payload.role); 
    },
  },
  extraReducers: (builder) => {
    //change-passcode
    builder.addCase(handleChangePasscode.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleChangePasscode.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleChangePasscode.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(checkCurrentPasscode.fulfilled, (state, action) => {
      // If current passcode is verified
      toast.success("Current passcode verified.");
      state.loading = false;
    })
    .addCase(checkCurrentPasscode.rejected, (state, action) => {
      // If passcode is incorrect, display error
      state.loading = false;
      state.error = action.payload;
      toast.error(action.payload || "Failed to verify current passcode.");
    });
    

    // Handle Reset Passcode
    builder.addCase(handleResetPasscode.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleResetPasscode.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleResetPasscode.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Resend OTP
    builder.addCase(handleResendOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleResendOtp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleResendOtp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Signup with passcode and role
    builder.addCase(handleSignup.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleSignup.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.token = payload.token;
      state.role = payload.role;
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(payload.user));
        localStorage.setItem("token", payload.token);
        localStorage.setItem("role", payload.role);
        localStorage.setItem("selectedRole", payload.role);
      }
      console.log("Role after signup:", payload.user?.role);
    });
    builder.addCase(handleSignup.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Handle OTP Sending
    builder.addCase(handleSendOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleSendOtp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleSendOtp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    // Handle OTP Verification
    builder.addCase(handleVerifyOtp.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleVerifyOtp.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.token = payload.token;
      state.role = payload.role; // Set role
      if (typeof window !== "undefined") {
        localStorage.setItem("token", payload.token);
        localStorage.setItem("role", payload.role);
      }
    });
    builder.addCase(handleVerifyOtp.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Signin
    builder.addCase(handleSignin.pending, (state, { payload }) => {
      state.loading = true;
    });
    builder.addCase(handleSignin.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.user = payload?.user ?? null;
      // state.token = payload?.token ?? null;
      state.error = null;
    });
    builder.addCase(handleSignin.rejected, (state, { payload }) => {
      state.loading = false;
      state.user = null;
      // state.token = null;
      state.error = payload ?? null;
    });

    // handle CheckLogin Passcode
    builder.addCase(handleCheckLoginPasscode.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(
      handleCheckLoginPasscode.fulfilled,
      (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.passcode = payload.passcode;
        if (typeof window !== "undefined") {
          localStorage.setItem("token", payload.token);
          localStorage.setItem("passcode", payload.passcode);
        }
      }
    );
    builder.addCase(handleCheckLoginPasscode.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });

    // Edit Profile
    builder.addCase(handleEditProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleEditProfile.fulfilled, (state, action) => {
      state.loading = false;
      if (action.payload && action.payload.user) {
        state.user = action.payload.user;  // Make sure the payload is not undefined
      } else {
        state.error = "User data not available.";
      }
    })
    .addCase(handleEditProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || "Profile update failed";
    });
    // Extra Reducer for Enquiry API
    builder
    .addCase(handleSendEnquiry.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(handleSendEnquiry.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    })
    .addCase(handleSendEnquiry.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  
  },
});

export const { handleLogout,setCredentials  } = AuthSlice.actions;

export default AuthSlice.reducer;

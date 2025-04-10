import { PostUrl, PutUrl } from "@/app/api/BaseUrl";
import { getToken } from "@/utils/auth";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

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
  async ({ mobileNumber, passcode, role }, { rejectWithValue }) => {
    try {
      const { data } = await PostUrl("/auth/signup", {
        data: { mobileNumber, passcode, role },
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

// // signin
// export const handleSignin = createAsyncThunk(
//   "auth/handleSignin",
//   async ({ mobileNumber }, { rejectWithValue }) => {
//     try {
//       const { data } = await PostUrl("/auth/login", {
//         data: { mobileNumber },
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });
//       return data;
//     } catch (error) {
//       if (error?.response?.data?.message) {
//         toast.error(error?.response?.data?.message);
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

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

// Edit Profile
// export const handleEditProfile = createAsyncThunk(
//   "auth/handleEditProfile",
//   async (formData, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) return rejectWithValue("Authentication token not found.");

//     try {
//       const { data } = await PutUrl("/auth/editProfile", {
//         data: formData,
//         headers: {
//           "Content-Type": "multipart/form-data",
//           Authorization: `Bearer ${token}`, // Fixed syntax
//         },
//       });
//       persistToLocalStorage("user", JSON.stringify(data.user));
//       // Update the user state after successful profile update
//       if (typeof window !== "undefined") {
//         localStorage.setItem("user", JSON.stringify(data.user)); // Update localStorage
//       }

//       return { user: data.user };
//     } catch (error) {
//       if (error?.response?.data?.message) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("An error occurred while updating the profile.");
//       }
//       return rejectWithValue(error?.response?.data);
//     }
//   }
// );

export const handleEditProfile = createAsyncThunk(
  "auth/handleEditProfile",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await PutUrl("/auth/update-profile", formData); // Endpoint adjust karo
      return response.data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message || "Profile update failed");
    }
  }
);

export const handleSendEnquiry = createAsyncThunk(
  "auth/handleSendEnquiry",
  async ({ name, email, contactNo, enquiry, image }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");
    const formData = new FormData();
    // formData.append("productId", productId);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("contactNo", contactNo);
    formData.append("enquiry", enquiry);
    if (image) formData.append("image", image); // Add image if present

    try {
      const { data } = await PostUrl("/order/sendEnquiry", {
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success(data.message || "Enquiry sent successfully!");
      console.log(data, "enquiry");
      persistToLocalStorage("token", data.token);
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Failed to send enquiry.");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleResetPasscode = createAsyncThunk(
  "auth/handleResetPasscode",
  async ({ mobileNumber, newPasscode }, { rejectWithValue }) => {
    try {
      const { data } = await PutUrl("/auth/resetPasscode", {
        data: { mobileNumber, newPasscode },
        headers: {
          "Content-Type": "application/json",
        },
      });

      toast.success("Passcode reset successfully");
      return data;
    } catch (error) {
      toast.error(error?.response?.data?.message || "Reset failed");
      return rejectWithValue(error?.response?.data);
    }
  }
);

export const handleChangePasscode = createAsyncThunk(
  "auth/handleChangePasscode",
  async ({ currentPasscode, newPasscode }, { rejectWithValue }) => {
    const token = getToken();
    if (!token) return rejectWithValue("Authentication token not found.");

    try {
      const { data } = await PutUrl("/auth/changePasscode", {
        data: { currentPasscode, newPasscode },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success("Passcode changed successfully!");
      return data;
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Failed to change passcode"
      );
      return rejectWithValue(error?.response?.data);
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
      clearLocalStorage();
      state.user = null;
      state.token = null;
      state.role = null;
    },
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
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
    });
    builder.addCase(handleEditProfile.fulfilled, (state, { payload }) => {
      state.loading = false;
      // state.user = payload.user; // Update user data
      state.user = {
        ...state.user,
        ...action.payload.user,
      };

    });
    builder.addCase(handleEditProfile.rejected, (state, { payload }) => {
      console.log(payload, "profile payload");

      // state.loading = false;
      // state.error = payload;
      state.loading = false;
      state.error = action.payload;
    });
    // Extra Reducer for Enquiry API
    builder.addCase(handleSendEnquiry.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(handleSendEnquiry.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(handleSendEnquiry.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
  },
});

export const { handleLogout,setCredentials } = AuthSlice.actions;

export default AuthSlice.reducer;

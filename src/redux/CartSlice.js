// import { GetUrl, PostUrl } from "@/app/api/BaseUrl";
// import { getToken } from "@/utils/auth";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import toast from "react-hot-toast";

// export const handleAddToCart = createAsyncThunk(
//   "cart/handleAddToCart",
//   async ({ productId, quantity }, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) {
//       const errorMessage = "Authentication token not found. Please log in.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }

//     try {
//       const response = await PostUrl(
//         "/cart",
//         {
//           productId,
//           quantity,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success("Product added to cart!");
//       return response?.data;
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to add product to cart.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// // Thunk for fetching cart items
// export const handleGetCart = createAsyncThunk(
//   "cart/handleGetCart",
//   async (_, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) {
//       const errorMessage = "Authentication token not found. Please log in.";
//       toast.remove()
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }

//     try {
//       const response = await GetUrl("/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response?.data?.data || [];
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch cart items.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// const initialState = {
//   cartItems: [],
//   loading: false,
//   error: null,
//   success: false,
// };

// const GetCartSlice = createSlice({
//   name: "getCart",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(handleAddToCart.pending, (state) => {
//         state.loading = true;
//         state.success = false;
//         state.error = null;
//       })
//       .addCase(handleAddToCart.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.success = true;
//         state.error = null;
//         state.cartItems = payload.cartItems;
//       })
//       .addCase(handleAddToCart.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.success = false;
//         state.error = payload || "An unexpected error occurred.";
//       })
//       .addCase(handleGetCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(handleGetCart.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.cartItems = payload;
//       })
//       .addCase(handleGetCart.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload || "An unexpected error occurred.";
//       });
//   },
// });

// export const {} = GetCartSlice.actions;

// export default GetCartSlice.reducer;



// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { GetUrl, PostUrl } from "@/app/api/BaseUrl";
// import { getToken } from "@/utils/auth";
// import toast from "react-hot-toast";

// // Action to add item to the cart
// export const handleAddToCart = createAsyncThunk(
//   "cart/handleAddToCart",
//   async ({ productId, quantity }, { rejectWithValue }) => {
//     const token = getToken(); // Fetch token from the local storage or state
//     if (!token) {
//       const errorMessage = "Authentication token not found. Please log in.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage); // Reject if no token is found
//     }

//     try {
//       // Sending post request to add product to the cart
//       const response = await PostUrl(
//         "/cart", // Your cart endpoint
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`, // Attach token to the request headers
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       toast.success("Product added to cart!"); // Success message
//       return response?.data; // Return the data (cart items) received from the server
//     } catch (error) {
//       // Handle errors if the request fails
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to add product to cart.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage); // Reject with error message
//     }
//   }
// );

// // Action to fetch cart items
// export const handleGetCart = createAsyncThunk(
//   "cart/handleGetCart",
//   async (_, { rejectWithValue }) => {
//     const token = getToken(); // Fetch token
//     if (!token) {
//       const errorMessage = "Authentication token not found. Please log in.";
//       toast.remove(); // Remove any existing toast notifications
//       toast.error(errorMessage); // Show error toast
//       return rejectWithValue(errorMessage); // Reject if no token is found
//     }

//     try {
//       // Fetch cart items
//       const response = await GetUrl("/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`, // Attach token to the request headers
//         },
//       });

//       return response?.data?.data || []; // Return cart items from response
//     } catch (error) {
//       // Handle errors if the request fails
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch cart items.";
//       toast.error(errorMessage); // Show error message
//       return rejectWithValue(errorMessage); // Reject with error message
//     }
//   }
// );

// // Initial state of the cart slice
// const initialState = {
//   cartItems: [], // Empty cart items
//   loading: false, // Loading state
//   error: null, // Error state
//   success: false, // Success state
// };

// const cartSlice = createSlice({
//   name: "cart", // Slice name
//   initialState,
//   reducers: {}, // No additional reducers needed
//   extraReducers: (builder) => {
//     builder
//       .addCase(handleAddToCart.pending, (state) => {
//         state.loading = true; // Set loading to true when request starts
//         state.success = false; // Reset success
//         state.error = null; // Reset error
//       })
//       .addCase(handleAddToCart.fulfilled, (state, { payload }) => {
//         state.loading = false; // Set loading to false when request completes
//         state.success = true; // Set success to true
//         state.cartItems = payload.cartItems || []; // Update cart items
//       })
//       .addCase(handleAddToCart.rejected, (state, { payload }) => {
//         state.loading = false; // Set loading to false on error
//         state.success = false; // Set success to false
//         state.error = payload || "An unexpected error occurred."; // Update error state
//       })
//       .addCase(handleGetCart.pending, (state) => {
//         state.loading = true; // Set loading to true when fetching cart items
//       })
//       .addCase(handleGetCart.fulfilled, (state, { payload }) => {
//         state.loading = false; // Set loading to false when fetching completes
//         state.cartItems = payload; // Set cart items in the state
//       })
//       .addCase(handleGetCart.rejected, (state, { payload }) => {
//         state.loading = false; // Set loading to false on error
//         state.error = payload || "An unexpected error occurred."; // Update error state
//       });
//   },
// });

// // Export the reducer
// export default cartSlice.reducer;


// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { GetUrl, PostUrl } from "@/app/api/BaseUrl";
// import { getToken } from "@/utils/auth";
// import toast from "react-hot-toast";

// export const handleAddToCart = createAsyncThunk(
//   "cart/addToCart",
//   async ({ productId, quantity }, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await axios.post(
//         "https://steel-junction.onrender.com/api/cart",
//         { productId, quantity },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       console.log("Add to Cart Response:", response.data);

//       if (response.data.success) {
//         return response.data.data; // 👈 Only return the `data` part here
//       } else {
//         return rejectWithValue(response.data.message || "Something went wrong");
//       }
//     } catch (error) {
//       return rejectWithValue(
//         error?.response?.data?.message || "Failed to add item to cart"
//       );
//     }
//   }
// );


// // export const handleAddToCart = createAsyncThunk(
// //   "cart/addToCart",
// //   async ({ productId, quantity }, { rejectWithValue, getState }) => {
// //     try {
// //       const { auth } = getState();
// //       const token = auth?.user?.token;

// //       const response = await PostUrl("/cart/add", { productId, quantity }, token);

// //       if (response.data.success) {
// //         return response.data;
// //       } else {
// //         return rejectWithValue(response.data.message);
// //       }
// //     } catch (error) {
// //       return rejectWithValue(error?.response?.data?.message || "Something went wrong");
// //     }
// //   }
// // );

// // Get Cart Items
// export const handleGetCart = createAsyncThunk(
//   "cart/handleGetCart",
//   async (_, { rejectWithValue }) => {
//     const token = getToken();
//     if (!token) {
//       const errorMessage = "Authentication token not found. Please log in.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }

//     try {
//       const response = await GetUrl("/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response?.data?.data || [];
//     } catch (error) {
//       const errorMessage =
//         error?.response?.data?.message ||
//         error?.message ||
//         "Failed to fetch cart items.";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// const initialState = {
//   cartItems: [],
//   loading: false,
//   error: null,
//   success: false,
// };

// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     cart: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // .addCase(handleAddToCart.pending, (state) => {
//       //   state.loading = true;
//       //   state.success = false;
//       //   state.error = null;
//       // })
//       // .addCase(handleAddToCart.fulfilled, (state, { payload }) => {
//       //   state.loading = false;
//       //   state.success = true;
//       //   state.cartItems = payload?.cartItems || [];
//       //   toast.success("Product added to cart!");
//       // })
//       // .addCase(handleAddToCart.rejected, (state, { payload }) => {
//       //   state.loading = false;
//       //   state.success = false;
//       //   state.error = payload || "An unexpected error occurred.";
//       // })
//       .addCase(handleAddToCart.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(handleAddToCart.fulfilled, (state, action) => {
//         state.loading = false;
//         state.cart.push(action.payload); // or update cart list properly if needed
//       })
//       .addCase(handleAddToCart.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(handleGetCart.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(handleGetCart.fulfilled, (state, { payload }) => {
//         state.loading = false;
//         state.cartItems = payload;
//       })
//       .addCase(handleGetCart.rejected, (state, { payload }) => {
//         state.loading = false;
//         state.error = payload || "An unexpected error occurred.";
//       });
//   },
// });

// export default cartSlice.reducer;




// store/slices/CartSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
import toast from "react-hot-toast";

// Initial State
const initialState = {
  cart: [],
  isLoading: false,
  error: null,
};

// 🔄 Async Thunks

// 1. Add to Cart
export const handleAddToCart = createAsyncThunk(
  "cart/handleAddToCart",
  async ({ productId, quantity, token }, { rejectWithValue }) => {
    try {
      const response = await PostUrl("/cart", { productId, quantity }, token);
      toast.success("Item added to cart");
      return response.data.data;
    } catch (error) {git in
      toast.error("Failed to add item to cart");
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

// 2. Get Cart
export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (token, { rejectWithValue }) => {
    try {
      const response = await GetUrl("/api/cart", token);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
    }
  }
);

// 3. Update Quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ cartItemId, quantity, token }, { rejectWithValue }) => {
    try {
      const response = await PutUrl(`/api/cart/${cartItemId}`, { quantity }, token);
      toast.success("Cart updated");
      return response.data.data;
    } catch (error) {
      toast.error("Failed to update quantity");
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

// 4. Remove Item
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ cartItemId, token }, { rejectWithValue }) => {
    try {
      const response = await DeleteUrl(`/api/cart/${cartItemId}`, token);
      toast.success("Item removed from cart");
      return cartItemId;
    } catch (error) {
      toast.error("Failed to remove item");
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);

// 🧠 Cart Slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Add to cart
      .addCase(handleAddToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleAddToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart.push(action.payload);
      })
      .addCase(handleAddToCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Fetch Cart
      .addCase(fetchCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Update Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.cart.findIndex((item) => item._id === action.payload._id);
        if (index !== -1) {
          state.cart[index] = action.payload;
        }
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Remove Cart Item
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cart = state.cart.filter((item) => item._id !== action.payload);
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Exports
export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;

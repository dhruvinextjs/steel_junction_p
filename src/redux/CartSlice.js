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




// // store/slices/CartSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
// import toast from "react-hot-toast";
// import axios from "axios";

// // Initial State
// const initialState = {
//   cart: [],
//   isLoading: false,
//   error: null,
// };

// // 🔄 Async Thunks

// // 1. Add to Cart
// // export const handleAddToCart = createAsyncThunk(
// //   "cart/handleAddToCart",
// //   async ({ productId, quantity, token }, { rejectWithValue }) => {
// //     try {
// //       const response = await PostUrl("/cart", { productId, quantity }, token);
// //       toast.success("Item added to cart");
// //       return response.data.data;
// //     } catch (error) {
// //       toast.error("Failed to add item to cart");
// //       return rejectWithValue(error.response?.data?.message || "Something went wrong");
// //     }
// //   }
// // );
// // Handle Add to Cart (Updated)
// export const handleAddToCart = createAsyncThunk(
//   "cart/handleAddToCart",
//   async ({ productId, quantity, token, name, image, variant, price }, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         "/cart",
//         {
//           productId,
//           quantity,
//           name,
//           image,
//           variant,
//           price,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (response.data.success) {
//         toast.success("Item added to cart!");
//         return response.data.cartItem;
//       } else {
//         return rejectWithValue(response.data.message || "Failed to add to cart.");
//       }
//     } catch (error) {
//       return rejectWithValue(error.response?.data?.message || "Error adding to cart.");
//     }
//   }
// );

// // 2. Get Cart
// // export const fetchCartItems = createAsyncThunk(
// //   "cart/fetchCartItems",
// //   async (token, { rejectWithValue }) => {
// //     try {
// //       const response = await GetUrl("/cart", token);
// //       return response.data.data;
// //     } catch (error) {
// //       return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
// //     }
// //   }
// // );
// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchItems",
//   async (token, { rejectWithValue }) => {
//     try {
//       const response = await GetUrl("/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       console.log("Fetched cart response:", response.data);
//       return response.data.data;
//     } catch (error) {
//       console.error("Fetch cart error:", error);
//       return rejectWithValue(error.response?.data?.message || "Something went wrong");
//     }
//   }
// );

// // 3. Update Quantity
// export const updateCartQuantity = createAsyncThunk(
//   "cart/updateCartQuantity",
//   async ({ cartItemId, quantity, token }, { rejectWithValue }) => {
//     try {
//       const response = await PutUrl(`/cart/${cartItemId}`, { quantity }, token);
//       toast.success("Cart updated");
//       return response.data.data;
//     } catch (error) {
//       toast.error("Failed to update quantity");
//       return rejectWithValue(error.response?.data?.message || "Something went wrong");
//     }
//   }
// );

// // 4. Remove Item
// export const removeCartItem = createAsyncThunk(
//   "cart/removeCartItem",
//   async ({ cartItemId, token }, { rejectWithValue }) => {
//     try {
//       const response = await DeleteUrl(`/cart/${cartItemId}`, token);
//       toast.success("Item removed from cart");
//       return cartItemId;
//     } catch (error) {
//       toast.error("Failed to remove item");
//       return rejectWithValue(error.response?.data?.message || "Something went wrong");
//     }
//   }
// );

// // 🧠 Cart Slice
// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.cart = [];
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       // // Add to cart
//       // .addCase(handleAddToCart.pending, (state) => {
//       //   state.isLoading = true;
//       // })
//       // .addCase(handleAddToCart.fulfilled, (state, action) => {
//       //   state.isLoading = false;
//       //   state.cart.push(action.payload);
//       // })
//       // .addCase(handleAddToCart.rejected, (state, action) => {
//       //   state.isLoading = false;
//       //   state.error = action.payload;
//       // })

//       .addCase(handleAddToCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(handleAddToCart.fulfilled, (state, action) => {
//         state.isLoading = false;
  
//         // Assuming response returns updated cart, we merge it
//         const updatedCart = action.payload;
//         state.cart = updatedCart; // Optionally, you could merge new item into existing cart
//       })
//       .addCase(handleAddToCart.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       // Fetch Cart
//       .addCase(fetchCartItems.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(fetchCartItems.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cart = action.payload;
//         console.log("Cart items updated in state:", action.payload);
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Update Quantity
//       .addCase(updateCartQuantity.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(updateCartQuantity.fulfilled, (state, action) => {
//         state.isLoading = false;
//         const index = state.cart.findIndex((item) => item._id === action.payload._id);
//         if (index !== -1) {
//           state.cart[index] = action.payload;
//         }
//       })
//       .addCase(updateCartQuantity.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })

//       // Remove Cart Item
//       .addCase(removeCartItem.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(removeCartItem.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.cart = state.cart.filter((item) => item._id !== action.payload);
//       })
//       .addCase(removeCartItem.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// // Exports
// export const { clearCart } = cartSlice.actions;
// export default cartSlice.reducer;



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
import toast from "react-hot-toast";
import axios from 'axios';


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
  async ({ productId, variants, token }, { rejectWithValue }) => {
    try {
      console.log("🛒 Raw payload received in thunk:", { productId, variants, token });

      const formData = new FormData();
      formData.append("productId", productId);
      formData.append("variants", JSON.stringify(variants));

      const response = await axios.post(
        "https://steel-junction.onrender.com/api/cart",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("📦 API Response in thunk:", response?.data);

      if (response.data?.success) {
        toast.success("Item added to cart");
        return response.data?.data || []; // ✅ fallback
      } else {
        toast.error("Something went wrong.");
        return rejectWithValue(response.data?.message || "Add to cart failed");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
      toast.error(errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("token");
      const response = await GetUrl.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data.data; // assuming backend returns { data: [...] }
    } catch (error) {
      toast.error("Failed to fetch cart.");
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);
// 3. Update Cart Quantity

// export const updateCartQuantity = createAsyncThunk(
//   "cart/updateCartQuantity",
//   async ({ productId, variants }, { rejectWithValue }) => {
//     try {
//       let token = localStorage.getItem("token")?.replace(/^"(.*)"$/, '$1'); // Sanitize token

//       if (!token) {
//         toast.error("No token found, please login again.");
//         return rejectWithValue({ message: "No token found" });
//       }

//       const formData = new FormData();
//       formData.append("productId", productId);
//       formData.append("variants", JSON.stringify(variants));

//       const response = await PostUrl.post("/cart", formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log('Response from server:', response);

//       // Handle both 200 and 201 as success
//       if (response.status === 200 || response.status === 201) {
//         // Log the response data for debugging
//         console.log('Cart Update Response:', response.data);
//         return response.data;
//       } else {
//         console.error("Unexpected response status:", response.status);
//         toast.error("Something went wrong, please try again.");
//         return rejectWithValue({ message: "Unexpected response from server" });
//       }
//     } catch (error) {
//       console.error('Error during cart update:', error);
//       const errData = error.response?.data || { message: "Something went wrong" };
//       toast.error(errData.message);
//       return rejectWithValue(errData);
//     }
//   }
// );
export const updateCartQuantity = createAsyncThunk(
  'cart/updateCartQuantity',
  async ({ productId, variants }, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append('productId', productId);
    formData.append('variants', JSON.stringify(variants.map(v => ({
      variantId: v.variantId,
      qty: String(v.qty),
    }))));

    try {
      const response = await axios.post(
        'https://steel-junction.onrender.com/api/cart',
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      console.log("✅ Cart Update Success:", response.data);
      return response.data;
    } catch (error) {
      console.error('❌ Cart update error:', error.response?.data || error.message);
      return rejectWithValue(error.response?.data || 'An unknown error occurred');
    }
  }
);




// 4. Remove Cart Item
export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ cartItemId }, { rejectWithValue }) => {
    try {
      await DeleteUrl.delete(`/cart/${cartItemId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Item removed from cart");
      return cartItemId; // return ID to filter from state
    } catch (error) {
      toast.error("Failed to remove item.");
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
      // Add to Cart
      .addCase(handleAddToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(handleAddToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("🛒 Add to Cart Reducer Payload:", action.payload);
      
        // Check if payload is an array (multiple products)
        if (Array.isArray(action.payload)) {
          action.payload.forEach((newProduct) => {
            // Find index of the product in the cart
            const existingIndex = state.cart.findIndex(
              (item) => item.productId === newProduct.productId
            );
      
            if (existingIndex !== -1) {
              // If product exists, update its variants (append new ones)
              state.cart[existingIndex] = {
                ...state.cart[existingIndex],
                variants: [
                  ...state.cart[existingIndex].variants,
                  ...newProduct.variants, // Append new variants
                ],
              };
            } else {
              // If product doesn't exist, add it
              state.cart.push(newProduct);
            }
          });
        } else if (action.payload && action.payload.productId) {
          // Check if it's a single product (non-array)
          const newProduct = action.payload;
      
          const existingIndex = state.cart.findIndex(
            (item) => item.productId === newProduct.productId
          );
      
          if (existingIndex !== -1) {
            // If product exists, update its variants (append new ones)
            state.cart[existingIndex] = {
              ...state.cart[existingIndex],
              variants: [
                ...state.cart[existingIndex].variants,
                ...newProduct.variants, // Append new variants
              ],
            };
          } else {
            // If product doesn't exist, add it
            state.cart.push(newProduct);
          }
        } else {
          console.error("❌ Invalid payload:", action.payload);
        }
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
        state.cart = action.payload || []; // ✅ FIXED HERE
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })

      // Update Quantity
      // Update Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;  // Reset the error state while the request is in progress
      })
      // .addCase(updateCartQuantity.fulfilled, (state, action) => {
      //   state.isLoading = false;
      
      //   // ✅ Check if actual data exists
      //   if (action.payload && Array.isArray(action.payload)) {
      //     state.cart = action.payload;
      
      //     // Optional: recalculate totals
      //     state.totalQty = state.cart.reduce((sum, item) => sum + item.totalQty, 0);
      //     state.subtotal = state.cart.reduce((sum, item) => sum + item.totalPrice, 0);
      //   } else {
      //     // ✅ Just show toast or log if no cart data received
      //     console.log("✅ No cart data returned from server:", action.payload);
      //     toast.success(action.payload?.message || "Cart updated successfully");
      //   }
      // })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        console.log("🛒 Add to Cart Reducer Payload:", action.payload);
  
        // ✅ If payload contains cart data like updatedCart
        if (action.payload && action.payload.updatedCart) {
          state.cartItems = action.payload.updatedCart;
        }
  
        // ✅ Or if it's just the cart array directly
        else if (Array.isArray(action.payload)) {
          state.cartItems = action.payload;
        }
  
        // ❌ If response doesn't return cart array, you may need to refetch cart
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
          // Log the full error payload for debugging
          console.error("Error payload:", action.payload);
          toast.error(action.payload.message || "Something went wrong.");
        } else {
          toast.error("An unknown error occurred.");
        }
        state.error = action.payload || { message: "Something went wrong" };
      })
       
      // Remove Item
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

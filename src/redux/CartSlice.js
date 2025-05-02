// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// // import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
// // import toast from "react-hot-toast";
// // import axios from 'axios';


// // // Initial State
// // const initialState = {
// //   cart: [],
// //   isLoading: false,
// //   error: null,
// // };

// // // 🔄 Async Thunks

// // // 1. Add to Cart
// // export const handleAddToCart = createAsyncThunk(
// //   "cart/handleAddToCart",
// //   async ({ productId, variants, token }, { rejectWithValue }) => {
// //     try {
// //       console.log("🛒 Raw payload received in thunk:", { productId, variants, token });

// //       const formData = new FormData();
// //       formData.append("productId", productId);
// //       formData.append("variants", JSON.stringify(variants));

// //       const response = await axios.post(
// //         "https://steel-junction.onrender.com/api/cart",
// //         formData,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${token}`,
// //             "Content-Type": "multipart/form-data",
// //           },
// //         }
// //       );

// //       console.log("📦 API Response in thunk:", response?.data);

// //       if (response.data?.success) {
// //         toast.success("Item added to cart");
// //         return response.data?.data || []; // ✅ fallback
// //       } else {
// //         toast.error("Something went wrong.");
// //         return rejectWithValue(response.data?.message || "Add to cart failed");
// //       }
// //     } catch (error) {
// //       const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
// //       toast.error(errorMessage);
// //       return rejectWithValue(errorMessage);
// //     }
// //   }
// // );

// // export const fetchCartItems = createAsyncThunk(
// //   "cart/fetchCartItems",
// //   async (_, { rejectWithValue }) => {
// //     try {
// //       const token = localStorage.getItem("token");
// //       const response = await GetUrl.get("/cart", {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });

// //       return response.data.data; // assuming backend returns { data: [...] }
// //     } catch (error) {
// //       toast.error("Failed to fetch cart.");
// //       return rejectWithValue(error.response?.data?.message || "Something went wrong");
// //     }
// //   }
// // );

// // export const updateCartQuantity = createAsyncThunk(
// //   'cart/updateCartQuantity',
// //   async ({ productId, variants }, { rejectWithValue }) => {
// //     const formData = new FormData();
// //     formData.append('productId', productId);
// //     formData.append('variants', JSON.stringify(variants.map(v => ({
// //       variantId: v.variantId,
// //       qty: String(v.qty),
// //     }))));

// //     try {
// //       const response = await axios.post(
// //         'https://steel-junction.onrender.com/api/cart',
// //         formData,
// //         {
// //           headers: {
// //             Authorization: `Bearer ${localStorage.getItem('token')}`,
// //             'Content-Type': 'multipart/form-data',
// //           },
// //         }
// //       );

// //       console.log("✅ Cart Update Success:", response.data);
// //       return response.data;
// //     } catch (error) {
// //       console.error('❌ Cart update error:', error.response?.data || error.message);
// //       return rejectWithValue(error.response?.data || 'An unknown error occurred');
// //     }
// //   }
// // );




// // // 4. Remove Cart Item
// // export const removeCartItem = createAsyncThunk(
// //   "cart/removeCartItem",
// //   async ({ cartItemId }, { rejectWithValue }) => {
// //     try {
// //       await DeleteUrl.delete(`/cart/${cartItemId}`, {
// //         headers: {
// //           Authorization: `Bearer ${localStorage.getItem("token")}`,
// //         },
// //       });

// //       toast.success("Item removed from cart");
// //       return cartItemId; // return ID to filter from state
// //     } catch (error) {
// //       toast.error("Failed to remove item.");
// //       return rejectWithValue(error.response?.data?.message || "Something went wrong");
// //     }
// //   }
// // );

// // // 🧠 Cart Slice
// // const cartSlice = createSlice({
// //   name: "cart",
// //   initialState,
// //   reducers: {
// //     clearCart: (state) => {
// //       state.cart = [];
// //     },
// //   },
// //   extraReducers: (builder) => {
// //     builder
// //       // Add to Cart
// //       .addCase(handleAddToCart.pending, (state) => {
// //         state.isLoading = true;
// //       })
// //       .addCase(handleAddToCart.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         console.log("🛒 Add to Cart Reducer Payload:", action.payload);
      
// //         // Check if payload is an array (multiple products)
// //         if (Array.isArray(action.payload)) {
// //           action.payload.forEach((newProduct) => {
// //             // Find index of the product in the cart
// //             const existingIndex = state.cart.findIndex(
// //               (item) => item.productId === newProduct.productId
// //             );
      
// //             if (existingIndex !== -1) {
// //               // If product exists, update its variants (append new ones)
// //               state.cart[existingIndex] = {
// //                 ...state.cart[existingIndex],
// //                 variants: [
// //                   ...state.cart[existingIndex].variants,
// //                   ...newProduct.variants, // Append new variants
// //                 ],
// //               };
// //             } else {
// //               // If product doesn't exist, add it
// //               state.cart.push(newProduct);
// //             }
// //           });
// //         } else if (action.payload && action.payload.productId) {
// //           // Check if it's a single product (non-array)
// //           const newProduct = action.payload;
      
// //           const existingIndex = state.cart.findIndex(
// //             (item) => item.productId === newProduct.productId
// //           );
      
// //           if (existingIndex !== -1) {
// //             // If product exists, update its variants (append new ones)
// //             state.cart[existingIndex] = {
// //               ...state.cart[existingIndex],
// //               variants: [
// //                 ...state.cart[existingIndex].variants,
// //                 ...newProduct.variants, // Append new variants
// //               ],
// //             };
// //           } else {
// //             // If product doesn't exist, add it
// //             state.cart.push(newProduct);
// //           }
// //         } else {
// //           console.error("❌ Invalid payload:", action.payload);
// //         }
// //       })
// //       .addCase(handleAddToCart.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //       })

// //       // Fetch Cart
// //       .addCase(fetchCartItems.pending, (state) => {
// //         state.isLoading = true;
// //       })
// //       .addCase(fetchCartItems.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.cart = action.payload || []; // ✅ FIXED HERE
// //       })
// //       .addCase(fetchCartItems.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload || "Something went wrong";
// //       })

// //       // Update Quantity
// //       // Update Quantity
// //       .addCase(updateCartQuantity.pending, (state) => {
// //         state.isLoading = true;
// //         state.error = null;  // Reset the error state while the request is in progress
// //       })
// //       .addCase(updateCartQuantity.fulfilled, (state, action) => {
// //         console.log("🛒 Add to Cart Reducer Payload:", action.payload);
  
// //         // ✅ If payload contains cart data like updatedCart
// //         if (action.payload && action.payload.updatedCart) {
// //           state.cartItems = action.payload.updatedCart;
// //         }
  
// //         // ✅ Or if it's just the cart array directly
// //         else if (Array.isArray(action.payload)) {
// //           state.cartItems = action.payload;
// //         }
  
// //         // ❌ If response doesn't return cart array, you may need to refetch cart
// //       })
// //       .addCase(updateCartQuantity.rejected, (state, action) => {
// //         state.isLoading = false;
// //         if (action.payload) {
// //           // Log the full error payload for debugging
// //           console.error("Error payload:", action.payload);
// //           toast.error(action.payload.message || "Something went wrong.");
// //         } else {
// //           toast.error("An unknown error occurred.");
// //         }
// //         state.error = action.payload || { message: "Something went wrong" };
// //       })
       
// //       // Remove Item
// //       .addCase(removeCartItem.pending, (state) => {
// //         state.isLoading = true;
// //       })
// //       .addCase(removeCartItem.fulfilled, (state, action) => {
// //         state.isLoading = false;
// //         state.cart = state.cart.filter((item) => item._id !== action.payload);
// //       })
// //       .addCase(removeCartItem.rejected, (state, action) => {
// //         state.isLoading = false;
// //         state.error = action.payload;
// //       });
// //   },
// // });

// // // Exports
// // export const { clearCart } = cartSlice.actions;
// // export default cartSlice.reducer;

// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { PostUrl, GetUrl, PutUrl, DeleteUrl } from "@/app/api/BaseUrl";
// import toast from "react-hot-toast";
// import axios from 'axios';

// // Initial State
// const initialState = {
//   cart: [],
//   isLoading: false,
//   error: null,
// };

// // 🔄 Async Thunks

// // 1. Add to Cart
// export const handleAddToCart = createAsyncThunk(
//   "cart/handleAddToCart",
//   async ({ productId, variants, token }, { rejectWithValue }) => {
//     try {
//       console.log("🛒 Raw payload received in thunk:", { productId, variants, token });

//       const formData = new FormData();
//       formData.append("productId", productId);
//       formData.append("variants", JSON.stringify(variants));

//       const response = await axios.post(
//         "https://steel-junction.onrender.com/api/cart",
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );

//       console.log("📦 API Response in thunk:", response?.data);

//       if (response.data?.success) {
//         toast.success("Item added to cart");
//         return response.data?.data || []; // ✅ fallback
//       } else {
//         toast.error("Something went wrong.");
//         return rejectWithValue(response.data?.message || "Add to cart failed");
//       }
//     } catch (error) {
//       const errorMessage = error.response?.data?.message || error.message || "Something went wrong";
//       toast.error(errorMessage);
//       return rejectWithValue(errorMessage);
//     }
//   }
// );

// export const fetchCartItems = createAsyncThunk(
//   "cart/fetchCartItems",
//   async (_, { rejectWithValue }) => {
//     try {
//       const token = localStorage.getItem("token");
//       const response = await GetUrl.get("/cart", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       return response.data.data; // assuming backend returns { data: [...] }
//     } catch (error) {
//       toast.error("Failed to fetch cart.");
//       return rejectWithValue(error.response?.data?.message || "Something went wrong");
//     }
//   }
// );

// export const updateCartQuantity = createAsyncThunk(
//   'cart/updateCartQuantity',
//   async ({ productId, variants }, { rejectWithValue }) => {
//     const formData = new FormData();
//     formData.append('productId', productId);
//     formData.append('variants', JSON.stringify(variants.map(v => ({
//       variantId: v.variantId,
//       qty: String(v.qty),
//     }))));

//     try {
//       const response = await axios.post(
//         'https://steel-junction.onrender.com/api/cart',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem('token')}`,
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );

//       console.log("✅ Cart Update Success:", response.data);
//       return response.data;
//     } catch (error) {
//       console.error('❌ Cart update error:', error.response?.data || error.message);
//       return rejectWithValue(error.response?.data || 'An unknown error occurred');
//     }
//   }
// );

// // 4. Remove Cart Item
// export const removeCartItem = createAsyncThunk(
//   "cart/removeCartItem",
//   async ({ cartItemId }, { rejectWithValue }) => {
//     try {
//       await DeleteUrl.delete(`/cart/${cartItemId}`, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });

//       toast.success("Item removed from cart");
//       return cartItemId; // return ID to filter from state
//     } catch (error) {
//       toast.error("Failed to remove item.");
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
//       // Add to Cart
//       .addCase(handleAddToCart.pending, (state) => {
//         state.isLoading = true;
//       })
//       .addCase(handleAddToCart.fulfilled, (state, action) => {
//         state.isLoading = false;
//         console.log("🛒 Add to Cart Reducer Payload:", action.payload);

//         // Check if payload is an array (multiple products)
//         if (Array.isArray(action.payload)) {
//           action.payload.forEach((newProduct) => {
//             const existingIndex = state.cart.findIndex(
//               (item) => item.productId === newProduct.productId
//             );

//             if (existingIndex !== -1) {
//               // If product exists, update its variants (append new ones) and add quantity
//               state.cart[existingIndex] = {
//                 ...state.cart[existingIndex],
//                 variants: state.cart[existingIndex].variants.map((variant) => {
//                   const newVariant = newProduct.variants.find(v => v.variantId === variant.variantId);
//                   if (newVariant) {
//                     return {
//                       ...variant,
//                       qty: variant.qty + newVariant.qty, // Update quantity
//                     };
//                   }
//                   return variant;
//                 }),
//               };
//             } else {
//               // If product doesn't exist, add it
//               state.cart.push(newProduct);
//             }
//           });
//         } else if (action.payload && action.payload.productId) {
//           // Check if it's a single product (non-array)
//           const newProduct = action.payload;
//           const existingIndex = state.cart.findIndex(
//             (item) => item.productId === newProduct.productId
//           );

//           if (existingIndex !== -1) {
//             // If product exists, update its variants (append new ones) and add quantity
//             state.cart[existingIndex] = {
//               ...state.cart[existingIndex],
//               variants: state.cart[existingIndex].variants.map((variant) => {
//                 const newVariant = newProduct.variants.find(v => v.variantId === variant.variantId);
//                 if (newVariant) {
//                   return {
//                     ...variant,
//                     qty: variant.qty + newVariant.qty, // Update quantity
//                   };
//                 }
//                 return variant;
//               }),
//             };
//           } else {
//             // If product doesn't exist, add it
//             state.cart.push(newProduct);
//           }
//         } else {
//           console.error("❌ Invalid payload:", action.payload);
//         }
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
//         state.cart = action.payload || []; // ✅ FIXED HERE
//       })
//       .addCase(fetchCartItems.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload || "Something went wrong";
//       })

//       // Update Quantity
//       .addCase(updateCartQuantity.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;  // Reset the error state while the request is in progress
//       })
//       .addCase(updateCartQuantity.fulfilled, (state, action) => {
//         console.log("🛒 Add to Cart Reducer Payload:", action.payload);

//         // ✅ If payload contains cart data like updatedCart
//         if (action.payload && action.payload.updatedCart) {
//           state.cartItems = action.payload.updatedCart;
//         }

//         // ✅ Or if it's just the cart array directly
//         else if (Array.isArray(action.payload)) {
//           state.cartItems = action.payload;
//         }
//       })
//       .addCase(updateCartQuantity.rejected, (state, action) => {
//         state.isLoading = false;
//         if (action.payload) {
//           console.error("Error payload:", action.payload);
//           toast.error(action.payload.message || "Something went wrong.");
//         } else {
//           toast.error("An unknown error occurred.");
//         }
//         state.error = action.payload || { message: "Something went wrong" };
//       })

//       // Remove Item
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
 
      const response = await PostUrl.post(
        "/cart",
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
 
// 2. Fetch Cart Items
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
 
      return response.data.data;
    } catch (error) {
      toast.error("Failed to fetch cart.");
      return rejectWithValue(error.response?.data?.message || "Something went wrong");
    }
  }
);
 
// 3. Update Cart Quantity
export const updateCartQuantity = createAsyncThunk(
  "cart/updateCartQuantity",
  async ({ productId, variants }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append("productId", productId);
      formData.append(
        "variants",
        JSON.stringify(
          variants.map((v) => ({
            variantId: v.variantId,
            qty: String(v.qty),
          }))
        )
      );
 
      const response = await PostUrl.post("/cart", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      });
 
      console.log("✅ Cart Update Success:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Cart update error:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || "An unknown error occurred");
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
      return cartItemId;
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
 
        if (Array.isArray(action.payload)) {
          action.payload.forEach((newProduct) => {
            const existingIndex = state.cart.findIndex(
              (item) => item.productId === newProduct.productId
            );
 
            if (existingIndex !== -1) {
              state.cart[existingIndex] = {
                ...state.cart[existingIndex],
                variants: state.cart[existingIndex].variants.map((variant) => {
                  const newVariant = newProduct.variants.find(
                    (v) => v.variantId === variant.variantId
                  );
                  if (newVariant) {
                    return {
                      ...variant,
                      qty: variant.qty + newVariant.qty,
                    };
                  }
                  return variant;
                }),
              };
            } else {
              state.cart.push(newProduct);
            }
          });
        } else if (action.payload && action.payload.productId) {
          const newProduct = action.payload;
          const existingIndex = state.cart.findIndex(
            (item) => item.productId === newProduct.productId
          );
 
          if (existingIndex !== -1) {
            state.cart[existingIndex] = {
              ...state.cart[existingIndex],
              variants: state.cart[existingIndex].variants.map((variant) => {
                const newVariant = newProduct.variants.find(
                  (v) => v.variantId === variant.variantId
                );
                if (newVariant) {
                  return {
                    ...variant,
                    qty: variant.qty + newVariant.qty,
                  };
                }
                return variant;
              }),
            };
          } else {
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
        state.cart = action.payload || [];
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      })
 
      // Update Quantity
      .addCase(updateCartQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartQuantity.fulfilled, (state, action) => {
        console.log("🛒 Update Cart Reducer Payload:", action.payload);
 
        if (action.payload && action.payload.updatedCart) {
          state.cart = action.payload.updatedCart;
        } else if (Array.isArray(action.payload)) {
          state.cart = action.payload;
        }
        state.isLoading = false;
      })
      .addCase(updateCartQuantity.rejected, (state, action) => {
        state.isLoading = false;
        if (action.payload) {
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
 
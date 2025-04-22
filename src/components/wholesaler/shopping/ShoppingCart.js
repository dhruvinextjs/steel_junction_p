// // // // // "use client";

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useSelector, useDispatch } from "react-redux";
// // // // // import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
// // // // // import { toast } from "react-toastify";
// // // // // import Link from "next/link";

// // // // // const CartPage = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const { cart, isLoading } = useSelector((state) => state.getCart);
// // // // //   const [editableQty, setEditableQty] = useState({});

// // // // //   useEffect(() => {
// // // // //     dispatch(fetchCartItems());
// // // // //   }, [dispatch]);

// // // // //   const cartItems = Array.isArray(cart) ? cart : [];

// // // // //   const formatPrice = (price) => {
// // // // //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// // // // //   };

// // // // //   const calculateSubtotal = () => {
// // // // //     return cartItems.reduce((total, item) => {
// // // // //       if (Array.isArray(item.variants)) {
// // // // //         item.variants.forEach((variant) => {
// // // // //           total += parseFloat(variant.price || 0) * (variant.qty || 0);
// // // // //         });
// // // // //       }
// // // // //       return total;
// // // // //     }, 0);
// // // // //   };

// // // // //   const calculateTotalQty = () => {
// // // // //     return cartItems.reduce((total, item) => {
// // // // //       if (Array.isArray(item.variants)) {
// // // // //         return (
// // // // //           total +
// // // // //           item.variants.reduce(
// // // // //             (subQty, variant) => subQty + (variant.qty || 0),
// // // // //             0
// // // // //           )
// // // // //         );
// // // // //       }
// // // // //       return total;
// // // // //     }, 0);
// // // // //   };

// // // // //   const subtotal = calculateSubtotal();
// // // // //   const totalQty = calculateTotalQty();

// // // // //   const handleQuantityChange = async (productId, variantId, newQty) => {
// // // // //     if (newQty <= 0) return;

// // // // //     const cartItem = cart.find((item) => item.productId === productId);
// // // // //     if (!cartItem) return;

// // // // //     const updatedVariants = cartItem.variants.map((variant) => {
// // // // //       if (variant.variantId === variantId) {
// // // // //         return { ...variant, qty: newQty };
// // // // //       }
// // // // //       return variant;
// // // // //     });

// // // // //     const result = await dispatch(
// // // // //       updateCartQuantity({ productId, variants: updatedVariants })
// // // // //     );

// // // // //     if (updateCartQuantity.fulfilled.match(result)) {
// // // // //       console.log("🛒 Quantity Updated Successfully");
// // // // //       dispatch(fetchCartItems());
// // // // //     } else {
// // // // //       console.error("🚨 Update Failed:", result.payload || result.error);
// // // // //     }
// // // // //   };

// // // // //   const handleInputChange = (event, cartItemId, variantId) => {
// // // // //     const value = parseInt(event.target.value);
// // // // //     if (!isNaN(value) && value > 0) {
// // // // //       setEditableQty((prevState) => ({
// // // // //         ...prevState,
// // // // //         [variantId]: value,
// // // // //       }));
// // // // //       handleQuantityChange(cartItemId, variantId, value);
// // // // //     } else {
// // // // //       toast.error("Invalid quantity entered");
// // // // //     }
// // // // //   };

// // // // //   const handleProceedToBuy = () => {
// // // // //     if (totalQty < 25) {
// // // // //       toast.warning("Minimum order quantity is 25 MT.");
// // // // //       return;
// // // // //     }

// // // // //     const orderDetails = {
// // // // //       cartItems,
// // // // //       subtotal,
// // // // //       totalQty,
// // // // //     };

// // // // //     localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full space-y-5 md:space-y-10">
// // // // //       <div
// // // // //         className="relative bg-no-repeat md:h-60 h-60"
// // // // //         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
// // // // //       >
// // // // //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// // // // //           Shopping Cart
// // // // //         </h1>
// // // // //       </div>

// // // // //       <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
// // // // //         {/* Cart Items */}
// // // // //         <div className="w-full h-full bg-white border xl:w-9/12">
// // // // //           {isLoading ? (
// // // // //             <p className="p-4">Loading...</p>
// // // // //           ) : cartItems.length === 0 ? (
// // // // //             <p className="p-4 text-gray-600">Your cart is empty.</p>
// // // // //           ) : (
// // // // //             cartItems.map((item) => (
// // // // //               <div key={item.productId} className="p-4 border-b">
// // // // //                 <h2 className="pb-1 text-base font-semibold text-black border-b">
// // // // //                   {item.productName}
// // // // //                 </h2>

// // // // //                 {Array.isArray(item.variants) &&
// // // // //                   item.variants.map((variant) => (
// // // // //                     <div
// // // // //                       key={variant.variantId}
// // // // //                       className="flex flex-col sm:flex-row justify-between bg-[#F3F6FA] p-4 mt-3 rounded"
// // // // //                     >
// // // // //                       <div className="space-y-1 text-sm sm:w-1/2">
// // // // //                         {variant.section && (
// // // // //                           <p>
// // // // //                             <span>Section:</span> {variant.section}
// // // // //                           </p>
// // // // //                         )}
// // // // //                         {variant.length && (
// // // // //                           <p>
// // // // //                             <span>Length:</span> {variant.length}
// // // // //                           </p>
// // // // //                         )}
// // // // //                         {variant.gDiff && (
// // // // //                           <p>
// // // // //                             <span>Gauge Diff:</span> {variant.gDiff}
// // // // //                           </p>
// // // // //                         )}
// // // // //                       </div>

// // // // //                       <div className="flex flex-col mt-4 text-sm text-center sm:flex-row sm:items-center sm:justify-end sm:gap-10 sm:mt-0 sm:w-1/2 sm:text-right">
// // // // //                         <div>
// // // // //                           <p>₹ {formatPrice(variant.price)}</p>
// // // // //                         </div>

// // // // //                         <div>
// // // // //                           <div className="flex items-center justify-center gap-2 px-2 mx-auto border border-gray-300 rounded sm:justify-end w-fit sm:mx-0">
// // // // //                             <button
// // // // //                               className="p-1 hover:bg-gray-200"
// // // // //                               onClick={() =>
// // // // //                                 handleQuantityChange(
// // // // //                                   item.productId,
// // // // //                                   variant.variantId,
// // // // //                                   variant.qty - 1
// // // // //                                 )
// // // // //                               }
// // // // //                             >
// // // // //                               -
// // // // //                             </button>

// // // // //                             <input
// // // // //                               type="number"
// // // // //                               value={
// // // // //                                 editableQty[variant.variantId] ?? variant.qty
// // // // //                               }
// // // // //                               onChange={(e) =>
// // // // //                                 handleInputChange(
// // // // //                                   e,
// // // // //                                   item.productId,
// // // // //                                   variant.variantId
// // // // //                                 )
// // // // //                               }
// // // // //                               min="1"
// // // // //                               className="min-w-[30px] w-10 text-center border-0 focus:outline-none"
// // // // //                             />

// // // // //                             <button
// // // // //                               className="p-1 hover:bg-gray-200"
// // // // //                               onClick={() =>
// // // // //                                 handleQuantityChange(
// // // // //                                   item.productId,
// // // // //                                   variant.variantId,
// // // // //                                   variant.qty + 1
// // // // //                                 )
// // // // //                               }
// // // // //                             >
// // // // //                               +
// // // // //                             </button>
// // // // //                           </div>
// // // // //                         </div>

// // // // //                         <div>
// // // // //                           <p className="font-semibold">
// // // // //                             ₹ {formatPrice(variant.price * variant.qty)}
// // // // //                           </p>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //               </div>
// // // // //             ))
// // // // //           )}
// // // // //         </div>

// // // // //         {/* Order Summary */}
// // // // //         <div className="w-full space-y-4 bg-white border xl:w-3/12">
// // // // //           <div className="p-4 space-y-3">
// // // // //             <div className="flex items-center justify-between">
// // // // //               <h3 className="text-base font-semibold text-black">
// // // // //                 Order Summary
// // // // //               </h3>
// // // // //               {totalQty < 25 && (
// // // // //                 <p className="text-xs font-medium text-red-600">
// // // // //                   *Min order: 25 tons
// // // // //                 </p>
// // // // //               )}
// // // // //             </div>
// // // // //             <div className="flex justify-between text-sm">
// // // // //               <span>Total Qty</span>
// // // // //               <span>{totalQty.toFixed(1)} MT</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between text-sm">
// // // // //               <span>Subtotal</span>
// // // // //               <span>₹ {formatPrice(subtotal)}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between text-sm">
// // // // //               <span>GST (18%)</span>
// // // // //               <span>₹ {formatPrice(subtotal * 0.18)}</span>
// // // // //             </div>
// // // // //             <div className="flex justify-between text-sm font-bold">
// // // // //               <span>Order Total</span>
// // // // //               <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
// // // // //             </div>

// // // // //             <Link href={totalQty >= 25 ? "/CheckoutAdd" : "#"} passHref>
// // // // //               <button
// // // // //                 className={`w-full mt-5 px-4 py-2 text-white rounded ${
// // // // //                   totalQty >= 25 ? "bg-black" : "bg-gray-400 cursor-not-allowed"
// // // // //                 }`}
// // // // //                 onClick={handleProceedToBuy}
// // // // //                 disabled={totalQty < 25}
// // // // //               >
// // // // //                 Proceed to Buy
// // // // //               </button>
// // // // //             </Link>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CartPage;

// "use client";
 
// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
// import { toast } from "react-toastify";
// import CheckoutAdd from "@/app/CheckoutAdd/page";
// import CheckoutGst from "@/app/CheckoutGst/page";
 
// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { cart, isLoading } = useSelector((state) => state.getCart);
//   const [editableQty, setEditableQty] = useState({});
//   const [step, setStep] = useState("cart");
 
//   useEffect(() => {
//     dispatch(fetchCartItems());
//   }, [dispatch]);
 
//   const cartItems = Array.isArray(cart) ? cart : [];
 
//   const formatPrice = (price) => {
//     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
//   };
 
//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       if (Array.isArray(item.variants)) {
//         item.variants.forEach((variant) => {
//           total += parseFloat(variant.price || 0) * (variant.qty || 0);
//         });
//       }
//       return total;
//     }, 0);
//   };
 
//   const calculateTotalQty = () => {
//     return cartItems.reduce((total, item) => {
//       if (Array.isArray(item.variants)) {
//         return (
//           total +
//           item.variants.reduce(
//             (subQty, variant) => subQty + (variant.qty || 0),
//             0
//           )
//         );
//       }
//       return total;
//     }, 0);
//   };
 
//   const subtotal = calculateSubtotal();
//   const totalQty = calculateTotalQty();
 
//   const handleQuantityChange = async (productId, variantId, newQty) => {
//     if (newQty <= 0) return;
 
//     const cartItem = cart.find((item) => item.productId === productId);
//     if (!cartItem) return;
 
//     const updatedVariants = cartItem.variants.map((variant) => {
//       if (variant.variantId === variantId) {
//         return { ...variant, qty: newQty };
//       }
//       return variant;
//     });
 
//     const result = await dispatch(
//       updateCartQuantity({ productId, variants: updatedVariants })
//     );
 
//     if (updateCartQuantity.fulfilled.match(result)) {
//       dispatch(fetchCartItems());
//     } else {
//       toast.error("Failed to update quantity");
//     }
//   };
 
//   const handleInputChange = (event, cartItemId, variantId) => {
//     const value = parseInt(event.target.value);
//     if (!isNaN(value) && value > 0) {
//       setEditableQty((prevState) => ({
//         ...prevState,
//         [variantId]: value,
//       }));
//       handleQuantityChange(cartItemId, variantId, value);
//     } else {
//       toast.error("Invalid quantity entered");
//     }
//   };
 
//   const handleProceedToBuy = () => {
//     if (totalQty < 25) {
//       toast.warning("Minimum order quantity is 25 MT.");
//       return;
//     }
 
//     const orderDetails = {
//       cartItems,
//       subtotal,
//       totalQty,
//     };
 
//     localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
 
//     if (step === "cart") {
//       setStep("address");
//     } else if (step === "address") {
//       setStep("gst");
//     }
//   };
 
//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       <div
//         className="relative bg-no-repeat md:h-60 h-60"
//         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
//       >
//         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
//           Shopping Cart
//         </h1>
//       </div>
 
//       <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
//         {/* LEFT COLUMN */}
//         <div className="w-full h-full bg-white border xl:w-9/12">
//           {step === "cart" ? (
//             isLoading ? (
//               <p className="p-4">Loading...</p>
//             ) : cartItems.length === 0 ? (
//               <p className="p-4 text-gray-600">Your cart is empty.</p>
//             ) : (
//               <div className="overflow-x-auto">
//                 <table className="w-full min-w-[768px] text-sm">
//                   <thead className="text-white bg-black">
//                     <tr>
//                       <th className="p-3 text-left">Product</th>
//                       <th className="p-3 text-center">Rate PMT</th>
//                       <th className="p-3 text-center">Quantity</th>
//                       <th className="p-3 text-center">Subtotal</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map((item) => (
//                       <React.Fragment key={item.productId}>
//                         <tr className="bg-gray-100 ">
//                           <td colSpan="4" className="p-3 font-semibold">
//                             {item.productName}
//                           </td>
//                         </tr>
//                         {item.variants?.map((variant) => (
//                           <tr
//                             key={variant.variantId}
//                             className="border-b border-gray-200 bg-[#F3F6FA]"
//                           >
//                             <td className="p-3">
//                               <p>Section: {variant.section}</p>
//                               <p>Length: {variant.length}</p>
//                               <p>Gauge Diff: {variant.gDiff}</p>
//                             </td>
//                             <td className="p-3 text-center">
//                               ₹ {formatPrice(variant.price)}
//                             </td>
//                             <td className="p-3 text-center">
//                               <div className="inline-flex items-center border border-gray-300 rounded">
//                                 <button
//                                   className="px-2 py-1 hover:bg-gray-200"
//                                   onClick={() =>
//                                     handleQuantityChange(
//                                       item.productId,
//                                       variant.variantId,
//                                       variant.qty - 1
//                                     )
//                                   }
//                                 >
//                                   -
//                                 </button>
//                                 <input
//                                   type="number"
//                                   value={
//                                     editableQty[variant.variantId] ??
//                                     variant.qty
//                                   }
//                                   onChange={(e) =>
//                                     handleInputChange(
//                                       e,
//                                       item.productId,
//                                       variant.variantId
//                                     )
//                                   }
//                                   min="1"
//                                   className="w-12 text-center border-0 focus:outline-none"
//                                 />
//                                 <button
//                                   className="px-2 py-1 hover:bg-gray-200"
//                                   onClick={() =>
//                                     handleQuantityChange(
//                                       item.productId,
//                                       variant.variantId,
//                                       variant.qty + 1
//                                     )
//                                   }
//                                 >
//                                   +
//                                 </button>
//                               </div>
//                             </td>
//                             <td className="p-3 font-medium text-center">
//                               ₹ {formatPrice(variant.price * variant.qty)}
//                             </td>
//                           </tr>
//                         ))}
//                       </React.Fragment>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             )
//           ) : step === "address" ? (
//             <CheckoutAdd />
//           ) : (
//             <CheckoutGst />
//           )}
//         </div>
 
//         {/* RIGHT COLUMN */}
//         {step !== "gst" && (
//           <div className="w-full space-y-4 bg-white border xl:w-3/12">
//             <div className="p-4 space-y-3">
//               <div className="flex items-center justify-between">
//                 <h3 className="text-base font-semibold text-black">
//                   Order Summary
//                 </h3>
//                 {totalQty < 25 && step === "cart" && (
//                   <p className="text-xs font-medium text-red-600">
//                     *Min. order: 25 tons
//                   </p>
//                 )}
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Total Qty</span>
//                 <span>{totalQty.toFixed(1)} MT</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>Subtotal</span>
//                 <span>₹ {formatPrice(subtotal)}</span>
//               </div>
//               <div className="flex justify-between text-sm">
//                 <span>GST (18%)</span>
//                 <span>₹ {formatPrice(subtotal * 0.18)}</span>
//               </div>
//               <div className="flex justify-between text-sm font-bold">
//                 <span>Order Total</span>
//                 <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
//               </div>
//               <button
//                 className={`w-full mt-5 px-4 py-2 text-white rounded ${
//                   totalQty >= 25
//                     ? "bg-black hover:bg-gray-800"
//                     : "bg-gray-400 cursor-not-allowed"
//                 }`}
//                 onClick={handleProceedToBuy}
//                 disabled={totalQty < 25}
//               >
//                 Proceed to Buy
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };
 
// export default CartPage;

"use client";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isLoading } = useSelector((state) => state.getCart);
  const [editableQty, setEditableQty] = useState({});
  const router = useRouter()

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const cartItems = Array.isArray(cart) ? cart : [];

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      if (Array.isArray(item.variants)) {
        item.variants.forEach((variant) => {
          total += parseFloat(variant.price || 0) * (variant.qty || 0);
        });
      }
      return total;
    }, 0);
  };

  const calculateTotalQty = () => {
    return cartItems.reduce((total, item) => {
      if (Array.isArray(item.variants)) {
        return (
          total +
          item.variants.reduce(
            (subQty, variant) => subQty + (variant.qty || 0),
            0
          )
        );
      }
      return total;
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const totalQty = calculateTotalQty();

  const handleQuantityChange = async (productId, variantId, newQty) => {
    if (newQty <= 0) return;

    const cartItem = cart.find((item) => item.productId === productId);
    if (!cartItem) return;

    const updatedVariants = cartItem.variants.map((variant) => {
      if (variant.variantId === variantId) {
        return { ...variant, qty: newQty };
      }
      return variant;
    });

    const result = await dispatch(
      updateCartQuantity({ productId, variants: updatedVariants })
    );

    if (updateCartQuantity.fulfilled.match(result)) {
      dispatch(fetchCartItems());
    } else {
      toast.error("Failed to update quantity");
    }
  };

  const handleInputChange = (event, cartItemId, variantId) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      setEditableQty((prevState) => ({
        ...prevState,
        [variantId]: value,
      }));
      handleQuantityChange(cartItemId, variantId, value);
    } else {
      toast.error("Invalid quantity entered");
    }
  };

  const handleProceedToBuy = () => {
    if (totalQty < 25) {
      toast.warning("Minimum order quantity is 25 MT.");
      return;
    }

    const orderDetails = {
      cartItems,
      subtotal,
      totalQty,
    };

    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    toast.success("Order ready to proceed");

    router.push("/OrderSummary")
  };

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <div
        className="relative bg-no-repeat md:h-60 h-60"
        style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
      >
        <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
          Shopping Cart
        </h1>
      </div>

      <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
        {/* LEFT COLUMN */}
        <div className="w-full h-full bg-white border xl:w-9/12">
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : cartItems.length === 0 ? (
            <p className="p-4 text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[768px] text-sm">
                <thead className="text-white bg-black">
                  <tr>
                    <th className="p-3 text-left">Product</th>
                    <th className="p-3 text-center">Rate PMT</th>
                    <th className="p-3 text-center">Quantity</th>
                    <th className="p-3 text-center">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <React.Fragment key={item.productId}>
                      <tr className="bg-gray-100">
                        <td colSpan="4" className="p-3 font-semibold">
                          {item.productName}
                        </td>
                      </tr>
                      {item.variants?.map((variant) => (
                        <tr
                          key={variant.variantId}
                          className="border-b border-gray-200 bg-[#F3F6FA]"
                        >
                          <td className="p-3">
                            <p>Section: {variant.section}</p>
                            <p>Length: {variant.length}</p>
                            <p>Gauge Diff: {variant.gDiff}</p>
                          </td>
                          <td className="p-3 text-center">
                            ₹ {formatPrice(variant.price)}
                          </td>
                          <td className="p-3 text-center">
                            <div className="inline-flex items-center border border-gray-300 rounded">
                              <button
                                className="px-2 py-1 hover:bg-gray-200"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    variant.variantId,
                                    variant.qty - 1
                                  )
                                }
                              >
                                -
                              </button>
                              <input
                                type="number"
                                value={
                                  editableQty[variant.variantId] ??
                                  variant.qty
                                }
                                onChange={(e) =>
                                  handleInputChange(
                                    e,
                                    item.productId,
                                    variant.variantId
                                  )
                                }
                                min="1"
                                className="w-12 text-center border-0 focus:outline-none"
                              />
                              <button
                                className="px-2 py-1 hover:bg-gray-200"
                                onClick={() =>
                                  handleQuantityChange(
                                    item.productId,
                                    variant.variantId,
                                    variant.qty + 1
                                  )
                                }
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td className="p-3 font-medium text-center">
                            ₹ {formatPrice(variant.price * variant.qty)}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full space-y-4 bg-white border xl:w-3/12">
          <div className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-black">
                Order Summary
              </h3>
              {totalQty < 25 && (
                <p className="text-xs font-medium text-red-600">
                  *Min. order: 25 tons
                </p>
              )}
            </div>
            <div className="flex justify-between text-sm">
              <span>Total Qty</span>
              <span>{totalQty.toFixed(1)} MT</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span>₹ {formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>GST (18%)</span>
              <span>₹ {formatPrice(subtotal * 0.18)}</span>
            </div>
            <div className="flex justify-between text-sm font-bold">
              <span>Order Total</span>
              <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
            </div>
            <button
              className={`w-full mt-5 px-4 py-2 text-white rounded ${
                totalQty >= 25
                  ? "bg-black hover:bg-gray-800"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleProceedToBuy}
              disabled={totalQty < 25}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

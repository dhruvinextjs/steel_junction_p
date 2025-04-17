// // // // // "use client";
// // // // // import React, { useEffect } from "react";
// // // // // import {
// // // // //   Table,
// // // // //   TableBody,
// // // // //   TableCell,
// // // // //   TableFooter,
// // // // //   TableHead,
// // // // //   TableHeader,
// // // // //   TableRow,
// // // // // } from "@/components/ui/table";
// // // // // import { Button } from "@/components/ui/button";
// // // // // import { FaMinus, FaPlus } from "react-icons/fa6";
// // // // // import { useDispatch, useSelector } from "react-redux";
// // // // // import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice";
// // // // // import { getToken } from "@/utils/auth";

// // // // // const CartPage = () => {
// // // // //   const dispatch = useDispatch();
// // // // //   const { cart, isLoading } = useSelector((state) => state.getCart);

// // // // //   useEffect(() => {
// // // // //     const token = getToken();
// // // // //     if (token) {
// // // // //       dispatch(fetchCartItems(token));
// // // // //     }
// // // // //   }, [dispatch]);

// // // // //   const handleIncrement = (item) => {
// // // // //     const token = getToken();
// // // // //     dispatch(
// // // // //       updateCartQuantity({
// // // // //         cartItemId: item._id,
// // // // //         quantity: item.quantity + 0.1,
// // // // //         token,
// // // // //       })
// // // // //     );
// // // // //   };

// // // // //   const handleDecrement = (item) => {
// // // // //     const token = getToken();
// // // // //     const newQty = Math.max(item.quantity - 0.1, 0.1);
// // // // //     dispatch(
// // // // //       updateCartQuantity({ cartItemId: item._id, quantity: newQty, token })
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full space-y-5 md:space-y-10">
// // // // //       <div className="relative md:h-80 h-60 bg-primary_color">
// // // // //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// // // // //           Shopping Cart
// // // // //         </h1>
// // // // //       </div>

// // // // //       <div className="container flex flex-col items-start w-full h-full gap-3 mx-auto xl:flex-row">
// // // // //         {/* Cart Table */}
// // // // //         <div className="w-full h-full bg-white border xl:w-9/12">
// // // // //           <Table className="w-full space-y-2">
// // // // //             <TableHeader className="text-white bg-black">
// // // // //               <TableRow>
// // // // //                 <TableHead className="w-[100px]">Product</TableHead>
// // // // //                 <TableHead className="w-[250px]">Rate PMT </TableHead>
// // // // //                 <TableHead>Quantity</TableHead>
// // // // //                 <TableHead className="text-right">Subtotal</TableHead>
// // // // //               </TableRow>
// // // // //             </TableHeader>
// // // // //             <TableBody className="bg-[#F3F6FA]">
// // // // //               {!isLoading && cart?.length > 0 ? (
// // // // //                 cart.map((item) => (
// // // // //                   <TableRow key={item._id}>
// // // // //                     <TableCell className="w-[400px]">
// // // // //                       <p className="font-bold">{item.name}</p>
// // // // //                       {item.image && (
// // // // //                         <img
// // // // //                           src={item.image}
// // // // //                           alt={item.name}
// // // // //                           className="w-20 h-20 my-2 rounded-md"
// // // // //                         />
// // // // //                       )}
// // // // //                       <p>Section : {item.section}</p>
// // // // //                       <p>Length : {item.length}</p>
// // // // //                       <p>Gauge Diff : {item.gauge}</p>
// // // // //                       <p>Variant : {item.variant}</p>
// // // // //                     </TableCell>
// // // // //                     <TableCell>₹ {item.price.toLocaleString()}</TableCell>
// // // // //                     <TableCell>
// // // // //                       <div className="flex items-center justify-between border border-[#e3e3e3] rounded-md">
// // // // //                         <button
// // // // //                           onClick={() => handleDecrement(item)}
// // // // //                           className="hover:bg-[#d8d8d8] hover:text-black p-2"
// // // // //                         >
// // // // //                           <FaMinus className="text-[#A3A1A1] hover:text-black" />
// // // // //                         </button>
// // // // //                         <input
// // // // //                           type="number"
// // // // //                           value={item.quantity.toFixed(1)}
// // // // //                           className="w-10 text-center border-none outline-none"
// // // // //                           readOnly
// // // // //                         />
// // // // //                         <button
// // // // //                           onClick={() => handleIncrement(item)}
// // // // //                           className="hover:bg-[#d8d8d8] hover:text-black p-2"
// // // // //                         >
// // // // //                           <FaPlus className="text-[#A3A1A1] hover:text-black" />
// // // // //                         </button>
// // // // //                       </div>
// // // // //                     </TableCell>
// // // // //                     <TableCell className="text-right">
// // // // //                       ₹ {(item.price * item.quantity).toLocaleString()}
// // // // //                     </TableCell>
// // // // //                   </TableRow>
// // // // //                 ))
// // // // //               ) : (
// // // // //                 <TableRow>
// // // // //                   <TableCell colSpan={4} className="py-5 text-center">
// // // // //                     {isLoading ? "Loading..." : "No items in cart"}
// // // // //                   </TableCell>
// // // // //                 </TableRow>
// // // // //               )}
// // // // //             </TableBody>
// // // // //           </Table>
// // // // //         </div>

// // // // //         {/* Order Summary */}
// // // // //         <div className="w-full space-y-4 bg-white xl:w-3/12">
// // // // //           <div className="py-3 space-y-4 bg-white border">
// // // // //             <p className="px-3">Order Summary</p>
// // // // //             <Table>
// // // // //               <TableFooter>
// // // // //                 <TableRow>
// // // // //                   <TableCell colSpan={2}>Total Qty</TableCell>
// // // // //                   <TableCell className="text-right">
// // // // //                     {cart
// // // // //                       .reduce((total, item) => total + item.quantity, 0)
// // // // //                       .toFixed(1)}{" "}
// // // // //                     MT
// // // // //                   </TableCell>
// // // // //                 </TableRow>
// // // // //                 <TableRow>
// // // // //                   <TableCell colSpan={2}>Subtotal</TableCell>
// // // // //                   <TableCell className="text-right">
// // // // //                     ₹{" "}
// // // // //                     {cart
// // // // //                       .reduce(
// // // // //                         (total, item) => total + item.price * item.quantity,
// // // // //                         0
// // // // //                       )
// // // // //                       .toLocaleString()}
// // // // //                   </TableCell>
// // // // //                 </TableRow>
// // // // //                 <TableRow>
// // // // //                   <TableCell colSpan={2}>GST (18%)</TableCell>
// // // // //                   <TableCell className="text-right">
// // // // //                     ₹{" "}
// // // // //                     {(
// // // // //                       cart.reduce(
// // // // //                         (total, item) => total + item.price * item.quantity,
// // // // //                         0
// // // // //                       ) * 0.18
// // // // //                     ).toLocaleString()}
// // // // //                   </TableCell>
// // // // //                 </TableRow>
// // // // //                 <TableRow>
// // // // //                   <TableCell colSpan={2} className="font-semibold">
// // // // //                     Order Total
// // // // //                   </TableCell>
// // // // //                   <TableCell className="text-right">
// // // // //                     ₹{" "}
// // // // //                     {(
// // // // //                       cart.reduce(
// // // // //                         (total, item) => total + item.price * item.quantity,
// // // // //                         0
// // // // //                       ) * 1.18
// // // // //                     ).toLocaleString()}
// // // // //                   </TableCell>
// // // // //                 </TableRow>
// // // // //               </TableFooter>
// // // // //             </Table>
// // // // //             <div className="px-3">
// // // // //               <Button variant="primary" className="md:w-full">
// // // // //                 Proceed to Buy
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default CartPage;

// // // "use client";

// // // import React, { useEffect } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { fetchCartItems } from "@/redux/CartSlice"; // update path if different

// // // const CartPage = () => {
// // //   const dispatch = useDispatch();
// // //   const { cart, isLoading, error } = useSelector((state) => state.getCart);

// // //   useEffect(() => {
// // //     dispatch(fetchCartItems());
// // //   }, [dispatch]);

// // //   const cartItems = Array.isArray(cart) ? cart : [];

// // //   // Calculate Subtotal
// // //   const calculateSubtotal = () => {
// // //     return cartItems.reduce((total, item) => {
// // //       item.variants.forEach((variant) => {
// // //         total += parseFloat(variant.price) * variant.qty;
// // //       });
// // //       return total;
// // //     }, 0);
// // //   };

// // //   const subtotal = calculateSubtotal();

// // //   return (
// // //     <div className="p-4">
// // //       <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>

// // //       {isLoading ? (
// // //         <p className="text-gray-500">Loading...</p>
// // //       ) : error ? (
// // //         <p className="text-red-500">Error: {error}</p>
// // //       ) : cartItems.length === 0 ? (
// // //         <p className="text-gray-600">Your cart is empty.</p>
// // //       ) : (
// // //         <div className="space-y-6">
// // //           {cartItems.map((item) => (
// // //             <div
// // //               key={item.productId}
// // //               className="p-4 bg-white border rounded-lg shadow-sm"
// // //             >
// // //               <h2 className="mb-2 text-xl font-bold">
// // //                 {item.productName || "Unnamed Product"}
// // //               </h2>

// // //               {item.variants.map((variant) => (
// // //                 <div
// // //                   key={variant.variantId}
// // //                   className="p-3 ml-4 border-t border-gray-200"
// // //                 >
// // //                   <p className="text-sm">
// // //                     <span className="font-semibold">Section:</span>{" "}
// // //                     {variant.section}
// // //                   </p>
// // //                   <p className="text-sm">
// // //                     <span className="font-semibold">Length:</span>{" "}
// // //                     {variant.length}
// // //                   </p>
// // //                   <p className="text-sm">
// // //                     <span className="font-semibold">Qty:</span> {variant.qty}
// // //                   </p>
// // //                   <p className="text-sm">
// // //                     <span className="font-semibold">Price:</span> ₹
// // //                     {variant.price}
// // //                   </p>
// // //                   <p className="text-sm">
// // //                     <span className="font-semibold">Guage Diff:</span>{" "}
// // //                     {variant.gDiff}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           ))}

// // //           {/* Display Subtotal */}
// // //           <div className="p-4 mt-6 bg-gray-100 rounded-lg">
// // //             <h3 className="text-lg font-semibold">Subtotal: ₹{subtotal}</h3>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;

// // // "use client";

// // // import React, { useEffect } from "react";
// // // import { useSelector, useDispatch } from "react-redux";
// // // import { fetchCartItems } from "@/redux/CartSlice"; // update path if different

// // // const CartPage = () => {
// // //   const dispatch = useDispatch();
// // //   const { cart, isLoading, error } = useSelector((state) => state.getCart);

// // //   useEffect(() => {
// // //     dispatch(fetchCartItems());
// // //   }, [dispatch]);

// // //   const cartItems = Array.isArray(cart) ? cart : [];

// // //   // Calculate Subtotal
// // //   const calculateSubtotal = () => {
// // //     return cartItems.reduce((total, item) => {
// // //       item.variants.forEach((variant) => {
// // //         total += parseFloat(variant.price || 0) * variant.qty;
// // //       });
// // //       return total;
// // //     }, 0);
// // //   };

// // //   const subtotal = calculateSubtotal();

// // //   const formatPrice = (price) => {
// // //     return price && !isNaN(price) ? price.toLocaleString() : "0.00";
// // //   };

// // //   const formatQuantity = (quantity) => {
// // //     return quantity && !isNaN(quantity) ? quantity.toFixed(1) : "0.0";
// // //   };

// // //   return (
// // //     <div className="w-full space-y-5 md:space-y-10">
// // //       <div className="relative md:h-80 h-60 bg-primary_color">
// // //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// // //           Shopping Cart
// // //         </h1>
// // //       </div>

// // //       <div className="container flex flex-col items-start w-full h-full gap-3 mx-auto xl:flex-row">
// // //         {/* Cart Table */}
// // //         <div className="w-full h-full bg-white border xl:w-9/12">
// // //           <table className="w-full space-y-2">
// // //             <thead className="text-white bg-black">
// // //               <tr>
// // //                 <th className="w-[100px]">Product</th>
// // //                 <th className="w-[250px]">Rate PMT </th>
// // //                 <th>Quantity</th>
// // //                 <th className="text-right">Subtotal</th>
// // //               </tr>
// // //             </thead>
// // //             <tbody className="bg-[#F3F6FA]">
// // //               {isLoading ? (
// // //                 <tr>
// // //                   <td colSpan={4} className="py-5 text-center">
// // //                     Loading...
// // //                   </td>
// // //                 </tr>
// // //               ) : error ? (
// // //                 <tr>
// // //                   <td colSpan={4} className="py-5 text-center text-red-500">
// // //                     Error: {error}
// // //                   </td>
// // //                 </tr>
// // //               ) : cartItems.length === 0 ? (
// // //                 <tr>
// // //                   <td colSpan={4} className="py-5 text-center text-gray-600">
// // //                     Your cart is empty.
// // //                   </td>
// // //                 </tr>
// // //               ) : (
// // //                 cartItems.map((item) => (
// // //                   <tr key={item.productId}>
// // //                     <td className="w-[400px]">
// // //                       <p className="font-bold">{item.productName || "Unnamed Product"}</p>
// // //                       {item.variants.map((variant) => (
// // //                         <div key={variant.variantId} className="p-3 ml-4 border-t border-gray-200">
// // //                           <p className="text-sm">
// // //                             <span className="font-semibold">Section:</span> {variant.section}
// // //                           </p>
// // //                           <p className="text-sm">
// // //                             <span className="font-semibold">Length:</span> {variant.length}
// // //                           </p>
// // //                           <p className="text-sm">
// // //                             <span className="font-semibold">Qty:</span> {variant.qty}
// // //                           </p>
// // //                           <p className="text-sm">
// // //                             <span className="font-semibold">Price:</span> ₹{formatPrice(variant.price)}
// // //                           </p>
// // //                           <p className="text-sm">
// // //                             <span className="font-semibold">Guage Diff:</span> {variant.gDiff}
// // //                           </p>
// // //                         </div>
// // //                       ))}
// // //                     </td>
// // //                     <td>₹{formatPrice(item.price)}</td>
// // //                     <td>
// // //                       <div className="flex items-center justify-between border border-[#e3e3e3] rounded-md">
// // //                         <button
// // //                           // handleDecrement function
// // //                           className="hover:bg-[#d8d8d8] hover:text-black p-2"
// // //                         >
// // //                           {/* FaMinus */}
// // //                         </button>
// // //                         <input
// // //                           type="number"
// // //                           value={formatQuantity(item.quantity)}
// // //                           className="w-10 text-center border-none outline-none"
// // //                           readOnly
// // //                         />
// // //                         <button
// // //                           // handleIncrement function
// // //                           className="hover:bg-[#d8d8d8] hover:text-black p-2"
// // //                         >
// // //                           {/* FaPlus */}
// // //                         </button>
// // //                       </div>
// // //                     </td>
// // //                     <td className="text-right">
// // //                       ₹{formatPrice(item.price * item.quantity)}
// // //                     </td>
// // //                   </tr>
// // //                 ))
// // //               )}
// // //             </tbody>
// // //           </table>
// // //         </div>

// // //         {/* Order Summary */}
// // //         <div className="w-full space-y-4 bg-white xl:w-3/12">
// // //           <div className="py-3 space-y-4 bg-white border">
// // //             <p className="px-3">Order Summary</p>
// // //             <table>
// // //               <tfoot>
// // //                 <tr>
// // //                   <td colSpan={2}>Total Qty</td>
// // //                   <td className="text-right">
// // //                     {cartItems.reduce((total, item) => total + item.quantity, 0).toFixed(1)} MT
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td colSpan={2}>Subtotal</td>
// // //                   <td className="text-right">
// // //                     ₹{formatPrice(subtotal)}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td colSpan={2}>GST (18%)</td>
// // //                   <td className="text-right">
// // //                     ₹{formatPrice(subtotal * 0.18)}
// // //                   </td>
// // //                 </tr>
// // //                 <tr>
// // //                   <td colSpan={2} className="font-semibold">
// // //                     Order Total
// // //                   </td>
// // //                   <td className="text-right">
// // //                     ₹{formatPrice(subtotal * 1.18)}
// // //                   </td>
// // //                 </tr>
// // //               </tfoot>
// // //             </table>
// // //             <div className="px-3">
// // //               <button className="px-4 py-2 text-white rounded md:w-full bg-primary_color">
// // //                 Proceed to Buy
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default CartPage;

// // "use client";

// // import React, { useEffect } from "react";
// // import { useSelector, useDispatch } from "react-redux";
// // import { fetchCartItems } from "@/redux/CartSlice"; // Update path if needed

// // const CartPage = () => {
// //   const dispatch = useDispatch();
// //   const { cart, isLoading, error } = useSelector((state) => state.getCart);

// //   useEffect(() => {
// //     dispatch(fetchCartItems());
// //   }, [dispatch]);

// //   const cartItems = Array.isArray(cart) ? cart : [];

// //   const formatPrice = (price) => {
// //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// //   };

// //   const calculateSubtotal = () => {
// //     return cartItems.reduce((total, item) => {
// //       item.variants.forEach((variant) => {
// //         total += parseFloat(variant.price || 0) * variant.qty;
// //       });
// //       return total;
// //     }, 0);
// //   };

// //   const calculateTotalQty = () => {
// //     return cartItems.reduce((total, item) => {
// //       return (
// //         total +
// //         item.variants.reduce((subQty, variant) => subQty + variant.qty, 0)
// //       );
// //     }, 0);
// //   };

// //   const subtotal = calculateSubtotal();
// //   const totalQty = calculateTotalQty();

// //   return (
// //     <div className="w-full space-y-5 md:space-y-10">
// //       <div className="relative md:h-80 h-60 bg-primary_color">
// //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// //           Shopping Cart
// //         </h1>
// //       </div>

// //       <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
// //         {/* Cart Items */}
// //         <div className="w-full h-full bg-white border xl:w-9/12">
// //           {isLoading ? (
// //             <p className="p-4">Loading...</p>
// //           ) : error ? (
// //             <p className="p-4 text-red-500">Error: {error}</p>
// //           ) : cartItems.length === 0 ? (
// //             <p className="p-4 text-gray-600">Your cart is empty.</p>
// //           ) : (
// //             cartItems.map((item) => (
// //               <div key={item.productId} className="p-4 border-b">
// //                 <h2 className="pb-1 text-base font-semibold text-black border-b">
// //                   {item.productName}
// //                 </h2>
// //                 {item.variants.map((variant, index) => (
// //                   <div
// //                     key={variant.variantId || index}
// //                     className="flex flex-col sm:flex-row justify-between bg-[#F3F6FA] p-4 mt-3 rounded"
// //                   >
// //                     {/* Left: Section Info */}
// //                     <div className="space-y-1 text-sm sm:w-1/2">
// //                       {variant.section && (
// //                         <p>
// //                           <b>Section:</b> {variant.section}
// //                         </p>
// //                       )}
// //                       {variant.length && (
// //                         <p>
// //                           <b>Length:</b> {variant.length}
// //                         </p>
// //                       )}
// //                       {variant.gDiff && (
// //                         <p>
// //                           <b>Gauge Diff:</b> {variant.gDiff}
// //                         </p>
// //                       )}
// //                     </div>

// //                     {/* Right: Price, Quantity, Subtotal in a row */}
// //                     <div className="flex flex-col mt-4 text-sm text-center sm:flex-row sm:items-center sm:justify-end sm:gap-10 sm:mt-0 sm:w-1/2 sm:text-right">
// //                       {/* Price */}
// //                       <div>
// //                         <p>₹ {formatPrice(variant.price)}</p>
// //                       </div>

// //                       {/* Quantity */}
// //                       <div>
// //                         <div className="flex items-center justify-center gap-2 px-2 mx-auto border border-gray-300 rounded sm:justify-end w-fit sm:mx-0">
// //                           <button className="p-1 hover:bg-gray-200">-</button>
// //                           <span className="min-w-[30px] text-center">
// //                             {variant.qty}
// //                           </span>
// //                           <button className="p-1 hover:bg-gray-200">+</button>
// //                         </div>
// //                       </div>

// //                       {/* Subtotal */}
// //                       <div>
// //                         <p className="font-semibold">
// //                           ₹ {formatPrice(variant.price * variant.qty)}
// //                         </p>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             ))
// //           )}
// //         </div>

// //         {/* Order Summary */}
// //         <div className="w-full space-y-4 bg-white border xl:w-3/12">
// //           <div className="p-4 space-y-3">
// //             <h3 className="text-base font-semibold text-black">
// //               Order Summary
// //             </h3>
// //             <div className="flex justify-between text-sm">
// //               <span>Total Qty</span>
// //               <span>{totalQty.toFixed(1)} MT</span>
// //             </div>
// //             <div className="flex justify-between text-sm">
// //               <span>Subtotal</span>
// //               <span>₹ {formatPrice(subtotal)}</span>
// //             </div>
// //             <div className="flex justify-between text-sm">
// //               <span>GST (18%)</span>
// //               <span>₹ {formatPrice(subtotal * 0.18)}</span>
// //             </div>
// //             <div className="flex justify-between text-sm font-bold">
// //               <span>Order Total</span>
// //               <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
// //             </div>
// //             <button className="w-full px-4 py-2 text-white bg-black rounded">
// //               Proceed to Buy
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default CartPage;
"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice"; // Update path if needed

const CartPage = () => {
  const dispatch = useDispatch();
  const { cart, isLoading, error } = useSelector((state) => state.getCart);

  useEffect(() => {
    dispatch(fetchCartItems());
  }, [dispatch]);

  const cartItems = Array.isArray(cart) ? cart : [];

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      item.variants.forEach((variant) => {
        total += parseFloat(variant.price || 0) * variant.qty;
      });
      return total;
    }, 0);
  };

  const calculateTotalQty = () => {
    return cartItems.reduce((total, item) => {
      return (
        total +
        item.variants.reduce((subQty, variant) => subQty + variant.qty, 0)
      );
    }, 0);
  };

  const subtotal = calculateSubtotal();
  const totalQty = calculateTotalQty();

  const handleQuantityChange = (cartItemId, variantId, qty) => {
    if (qty <= 0) {
      return;
    }

    // Dispatch the action to update the cart
    dispatch(updateCartQuantity({ cartItemId, variantId, quantity: qty }));
  };

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <div className="relative md:h-80 h-60 bg-primary_color">
        <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
          Shopping Cart
        </h1>
      </div>

      <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
        {/* Cart Items */}
        <div className="w-full h-full bg-white border xl:w-9/12">
          {isLoading ? (
            <p className="p-4">Loading...</p>
          ) : error ? (
            <p className="p-4 text-red-500">Error: {error}</p>
          ) : cartItems.length === 0 ? (
            <p className="p-4 text-gray-600">Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.productId} className="p-4 border-b">
                <h2 className="pb-1 text-base font-semibold text-black border-b">
                  {item.productName}
                </h2>
                {item.variants.map((variant, index) => (
                  <div
                    key={variant.variantId || index}
                    className="flex flex-col sm:flex-row justify-between bg-[#F3F6FA] p-4 mt-3 rounded"
                  >
                    {/* Left: Section Info */}
                    <div className="space-y-1 text-sm sm:w-1/2">
                      {variant.section && (
                        <p>
                          <b>Section:</b> {variant.section}
                        </p>
                      )}
                      {variant.length && (
                        <p>
                          <b>Length:</b> {variant.length}
                        </p>
                      )}
                      {variant.gDiff && (
                        <p>
                          <b>Gauge Diff:</b> {variant.gDiff}
                        </p>
                      )}
                    </div>

                    {/* Right: Price, Quantity, Subtotal in a row */}
                    <div className="flex flex-col mt-4 text-sm text-center sm:flex-row sm:items-center sm:justify-end sm:gap-10 sm:mt-0 sm:w-1/2 sm:text-right">
                      {/* Price */}
                      <div>
                        <p>₹ {formatPrice(variant.price)}</p>
                      </div>

                      {/* Quantity */}
                      <div>
                        <div className="flex items-center justify-center gap-2 px-2 mx-auto border border-gray-300 rounded sm:justify-end w-fit sm:mx-0">
                          <button
                            className="p-1 hover:bg-gray-200"
                            onClick={() =>
                              handleQuantityChange(item.productId, variant.variantId, variant.qty - 1)
                            }
                          >
                            -
                          </button>
                          <span className="min-w-[30px] text-center">{variant.qty}</span>
                          <button
                            className="p-1 hover:bg-gray-200"
                            onClick={() =>
                              handleQuantityChange(item.productId, variant.variantId, variant.qty + 1)
                            }
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Subtotal */}
                      <div>
                        <p className="font-semibold">
                          ₹ {formatPrice(variant.price * variant.qty)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))
          )}
        </div>

        {/* Order Summary */}
        <div className="w-full space-y-4 bg-white border xl:w-3/12">
          <div className="p-4 space-y-3">
            <h3 className="text-base font-semibold text-black">
              Order Summary
            </h3>
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
            <button className="w-full px-4 py-2 text-white bg-black rounded">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

// "use client";

// import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchCartItems, updateCartQuantity } from "@/redux/CartSlice"; // Update path if needed
// import { toast } from "react-toastify";

// const CartPage = () => {
//   const dispatch = useDispatch();
//   const { cart, isLoading, error } = useSelector((state) => state.getCart);

//   useEffect(() => {
//     dispatch(fetchCartItems());
//   }, [dispatch]);

//   const cartItems = Array.isArray(cart) ? cart : [];

//   const formatPrice = (price) => {
//     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
//   };

//   const calculateSubtotal = () => {
//     return cartItems.reduce((total, item) => {
//       item.variants.forEach((variant) => {
//         total += parseFloat(variant.price || 0) * variant.qty;
//       });
//       return total;
//     }, 0);
//   };

//   const calculateTotalQty = () => {
//     return cartItems.reduce((total, item) => {
//       return (
//         total +
//         item.variants.reduce((subQty, variant) => subQty + variant.qty, 0)
//       );
//     }, 0);
//   };

//   const subtotal = calculateSubtotal();
//   const totalQty = calculateTotalQty();

//   // State to track the editable quantity
//   const [editableQty, setEditableQty] = useState({});

//   const handleQuantityChange = (cartItemId, variantId, qty) => {
//     if (qty <= 0) {
//       return;
//     }
//     // Dispatch the action to update the cart
//     dispatch(updateCartQuantity({ cartItemId, variantId, quantity: qty }));
//   };

//   const handleInputChange = (event, cartItemId, variantId) => {
//     const value = parseInt(event.target.value);
//     if (!isNaN(value) && value > 0) {
//       setEditableQty((prevState) => ({
//         ...prevState,
//         [variantId]: value,
//       }));
//       handleQuantityChange(cartItemId, variantId, value);
//     }
//   };

//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       <div className="relative md:h-80 h-60 bg-primary_color">
//         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
//           Shopping Cart
//         </h1>
//       </div>

//       <div className="container flex flex-col items-start w-full h-full gap-5 mx-auto xl:flex-row">
//         {/* Cart Items */}
//         <div className="w-full h-full bg-white border xl:w-9/12">
//           {isLoading ? (
//             <p className="p-4">Loading...</p>
//           ) : error ? (
//             <p className="p-4 text-red-500">Error: {error}</p>
//           ) : cartItems.length === 0 ? (
//             <p className="p-4 text-gray-600">Your cart is empty.</p>
//           ) : (
//             cartItems.map((item) => (
//               <div key={item.productId} className="p-4 border-b">
//                 <h2 className="pb-1 text-base font-semibold text-black border-b">
//                   {item.productName}
//                 </h2>
//                 {item.variants.map((variant, index) => (
//                   <div
//                     key={variant.variantId || index}
//                     className="flex flex-col sm:flex-row justify-between bg-[#F3F6FA] p-4 mt-3 rounded"
//                   >
//                     {/* Left: Section Info */}
//                     <div className="space-y-1 text-sm sm:w-1/2">
//                       {variant.section && (
//                         <p>
//                           <b>Section:</b> {variant.section}
//                         </p>
//                       )}
//                       {variant.length && (
//                         <p>
//                           <b>Length:</b> {variant.length}
//                         </p>
//                       )}
//                       {variant.gDiff && (
//                         <p>
//                           <b>Gauge Diff:</b> {variant.gDiff}
//                         </p>
//                       )}
//                     </div>

//                     {/* Right: Price, Quantity, Subtotal in a row */}
//                     <div className="flex flex-col mt-4 text-sm text-center sm:flex-row sm:items-center sm:justify-end sm:gap-10 sm:mt-0 sm:w-1/2 sm:text-right">
//                       {/* Price */}
//                       <div>
//                         <p>₹ {formatPrice(variant.price)}</p>
//                       </div>

//                       {/* Quantity */}
//                       <div>
//                         <div className="flex items-center justify-center gap-2 px-2 mx-auto border border-gray-300 rounded sm:justify-end w-fit sm:mx-0">
//                           <button
//                             className="p-1 hover:bg-gray-200"
//                             onClick={() =>
//                               handleQuantityChange(
//                                 item.productId,
//                                 variant.variantId,
//                                 variant.qty - 1
//                               )
//                             }
//                           >
//                             -
//                           </button>

//                           <input
//                             type="number"
//                             value={editableQty[variant.variantId] || variant.qty}
//                             onChange={(event) =>
//                               handleInputChange(event, item.productId, variant.variantId)
//                             }
//                             min="1"
//                             className="min-w-[30px] text-center border-0 focus:outline-none"
//                           />

//                           <button
//                             className="p-1 hover:bg-gray-200"
//                             onClick={() =>
//                               handleQuantityChange(
//                                 item.productId,
//                                 variant.variantId,
//                                 variant.qty + 1
//                               )
//                             }
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>

//                       {/* Subtotal */}
//                       <div>
//                         <p className="font-semibold">
//                           ₹ {formatPrice(variant.price * variant.qty)}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))
//           )}
//         </div>

//         {/* Order Summary */}
//         <div className="w-full space-y-4 bg-white border xl:w-3/12">
//           <div className="p-4 space-y-3">
//             <h3 className="text-base font-semibold text-black">
//               Order Summary
//             </h3>
//             <div className="flex justify-between text-sm">
//               <span>Total Qty</span>
//               <span>{totalQty.toFixed(1)} MT</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>Subtotal</span>
//               <span>₹ {formatPrice(subtotal)}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>GST (18%)</span>
//               <span>₹ {formatPrice(subtotal * 0.18)}</span>
//             </div>
//             <div className="flex justify-between text-sm font-bold">
//               <span>Order Total</span>
//               <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
//             </div>
//             <button className="w-full px-4 py-2 text-white bg-black rounded">
//               Proceed to Buy
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

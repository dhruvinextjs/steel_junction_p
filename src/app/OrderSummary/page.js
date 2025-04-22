// // // // // "use client";

// // // // // import { fetchOrderSummary } from "@/redux/OrderSlice";
// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useDispatch, useSelector } from "react-redux";

// // // // // const OrderSummary = () => {
// // // // //   const [orderDetails, setOrderDetails] = useState(null);
// // // // //   const [agreed, setAgreed] = useState(false);
// // // // //   // const {  loading, error } = useSelector((state) => state.order);
// // // // //   const { orderTotal, totalQty, subTotal, loadingCharge, insurance, tcsAmount, gstAmount, roundOff, grossTotal, loading, error } = useSelector((state) => state.order);
// // // // //   const dispatch = useDispatch();

// // // // //   useEffect(() => {
// // // // //     const storedOrderDetails = localStorage.getItem("orderDetails");
// // // // //     if (storedOrderDetails) {
// // // // //       setOrderDetails(JSON.parse(storedOrderDetails));
// // // // //     }
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     dispatch(fetchOrderSummary());
// // // // //   }, [dispatch]);

// // // // //   if (!orderDetails) {
// // // // //     return <p className="p-4">Loading order summary...</p>;
// // // // //   }

// // // // //   // Extracting cartItems from the stored order details
// // // // //   const { cartItems } = orderDetails;

// // // // //   const formatPrice = (price) => {
// // // // //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// // // // //   };

// // // // //   return (
// // // // //     <div className="w-full min-h-screen px-4 py-6">
// // // // //       <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
// // // // //         {/* Left Side - Cart Items Table */}
// // // // //         <div className="w-full p-4 rounded-md shadow lg:w-2/3">
// // // // //           <div className="space-y-6">
// // // // //             {/* Table Headers */}
// // // // //             <div className="hidden grid-cols-6 px-5 py-3 text-sm font-medium text-gray-600 bg-black md:grid">
// // // // //               <div className="text-white">Cart Items</div>
// // // // //             </div>

// // // // //             {cartItems.map((item, index) => (
// // // // //               <div key={item._id || `item-${index}`} className="pb-2 border-b">
// // // // //                 <h3 className="text-sm font-semibold text-black border-b">
// // // // //                   {item.productName}
// // // // //                 </h3>
// // // // //                 {item.variants.map((variant, vIndex) => (
// // // // //                   <div
// // // // //                     key={variant.variantId || `variant-${vIndex}`}
// // // // //                     className="bg-[#F3F6FA] mt-2 p-3 rounded text-sm"
// // // // //                   >
// // // // //                     <div className="flex flex-col md:flex-row md:justify-between md:items-center">
// // // // //                       {/* Left column - Section, Length, Gauge Diff */}
// // // // //                       <div className="w-full space-y-1 md:w-1/2">
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

// // // // //                       {/* Right column - Price, Quantity, Subtotal */}
// // // // //                       <div className="flex justify-between w-full mt-2 md:justify-end md:gap-10 md:w-1/2 md:mt-0">
// // // // //                         <div className="text-right">
// // // // //                           <p>₹ {formatPrice(variant.price)}</p>
// // // // //                         </div>
// // // // //                         <div className="text-right">
// // // // //                           <p>{variant.qty}</p>
// // // // //                         </div>
// // // // //                         <div className="text-right">
// // // // //                           <p>₹ {formatPrice(variant.price * variant.qty)}</p>
// // // // //                         </div>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 ))}
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Right Side - Order Summary */}
// // // // //         <div className="w-full lg:w-1/3">
// // // // //           <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
// // // // //             <h2 className="pb-2 text-lg font-semibold border-b">
// // // // //               Order Summary
// // // // //             </h2>

// // // // //             <div className="space-y-2 text-sm">
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Total Qty</span>
// // // // //                 <span>{totalQty} MT</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Subtotal</span>
// // // // //                 <span>₹ {formatPrice(subTotal)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Loading Charge (₹265 PMT)</span>
// // // // //                 <span>₹ {formatPrice(loadingCharge)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Insurance (₹30 PMT)</span>
// // // // //                 <span>₹ {formatPrice(insurance)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>GST (18%)</span>
// // // // //                 <span>₹ {formatPrice(gstAmount)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>TCS (0.1%)</span>
// // // // //                 <span>₹ {formatPrice(tcsAmount)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between font-semibold">
// // // // //                 <span>Order Total</span>
// // // // //                 <span>₹ {formatPrice(orderTotal)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between">
// // // // //                 <span>Round Off</span>
// // // // //                 <span>₹ {formatPrice(roundOff)}</span>
// // // // //               </div>
// // // // //               <div className="flex justify-between pt-1 text-base font-bold border-t">
// // // // //                 <span>Gross Total Amount</span>
// // // // //                 <span>₹ {formatPrice(grossTotal)}</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="flex items-start pt-3 space-x-2 text-xs">
// // // // //               <input
// // // // //                 type="checkbox"
// // // // //                 className="mt-1"
// // // // //                 checked={agreed}
// // // // //                 onChange={(e) => setAgreed(e.target.checked)}
// // // // //               />
// // // // //               <span>
// // // // //                 I agree to the terms and conditions and privacy policy
// // // // //               </span>
// // // // //             </div>

// // // // //             <button
// // // // //               className={`w-full px-4 py-2 text-white rounded ${agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"}`}
// // // // //               disabled={!agreed}
// // // // //             >
// // // // //               Proceed to Buy
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default OrderSummary;

// // // // "use client";

// // // // import React, { useEffect, useState } from "react";

// // // // const OrderSummary = () => {
// // // //   const [orderDetails, setOrderDetails] = useState(null);
// // // //   const [agreed, setAgreed] = useState(false);

// // // //   useEffect(() => {
// // // //     const storedOrderDetails = localStorage.getItem("orderDetails");
// // // //     if (storedOrderDetails) {
// // // //       setOrderDetails(JSON.parse(storedOrderDetails));
// // // //     }
// // // //   }, []);

// // // //   if (!orderDetails) {
// // // //     return <p className="p-4">Loading order summary...</p>;
// // // //   }

// // // //   const { cartItems, subtotal, totalQty } = orderDetails;

// // // //   const formatPrice = (price) => {
// // // //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// // // //   };

// // // //   return (
// // // //     <div className="w-full space-y-5 md:space-y-10">
// // // //     <div
// // // //       className="relative bg-no-repeat md:h-60 h-60"
// // // //       style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
// // // //     >
// // // //       <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// // // //         ORDER SUMMARY
// // // //       </h1>
// // // //     </div>
// // // //     <div className="w-full min-h-screen px-4 py-6">
// // // //       <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
// // // //         {/* Left Side - Cart Items Table */}
// // // //         <div className="w-full p-4 overflow-x-auto rounded-md shadow lg:w-2/3">
// // // //           <table className="w-full min-w-[768px] text-sm">
// // // //             <thead className="text-white bg-black">
// // // //               <tr>
// // // //                 <th className="p-3 text-left">Cart Items</th>
// // // //                 <th className="p-3 text-right">Rate PMT</th>
// // // //                 <th className="p-3 text-center">Quantity</th>
// // // //                 <th className="p-3 text-right">Subtotal</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody className="bg-white divide-y">
// // // //               {cartItems.map((item, index) => (
// // // //                 item.variants.map((variant, vIndex) => (
// // // //                   <tr
// // // //                     key={variant.variantId || `variant-${vIndex}`}
// // // //                     className="bg-[#F3F6FA]"
// // // //                   >
// // // //                     <td className="p-3">
// // // //                       <div className="font-semibold text-black">
// // // //                         {item.productName}
// // // //                       </div>
// // // //                       <div className="space-y-1 text-xs text-gray-600">
// // // //                         {variant.section && <p>Section: {variant.section}</p>}
// // // //                         {variant.length && <p>Length: {variant.length}</p>}
// // // //                         {variant.gDiff && <p>Gauge Diff: {variant.gDiff}</p>}
// // // //                       </div>
// // // //                     </td>
// // // //                     <td className="p-3 text-right">₹ {formatPrice(variant.price)}</td>
// // // //                     <td className="p-3 text-center">{variant.qty}</td>
// // // //                     <td className="p-3 text-right">
// // // //                       ₹ {formatPrice(variant.price * variant.qty)}
// // // //                     </td>
// // // //                   </tr>
// // // //                 ))
// // // //               ))}
// // // //             </tbody>
// // // //           </table>
// // // //         </div>

// // // //         {/* Right Side - Order Summary */}
// // // //         <div className="w-full lg:w-1/3">
// // // //           <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
// // // //             <h2 className="pb-2 text-lg font-semibold border-b">
// // // //               Order Summary
// // // //             </h2>

// // // //             <div className="space-y-2 text-sm">
// // // //               <div className="flex justify-between">
// // // //                 <span>Total Qty</span>
// // // //                 <span>{totalQty.toFixed(1)} MT</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Subtotal</span>
// // // //                 <span>₹ {formatPrice(subtotal)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Loading Charge (₹265 PMT)</span>
// // // //                 <span>₹ {formatPrice(265 * totalQty)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Insurance (₹30 PMT)</span>
// // // //                 <span>₹ {formatPrice(30 * totalQty)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>GST (18%)</span>
// // // //                 <span>₹ {formatPrice(subtotal * 0.18)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>TCS (0.1%)</span>
// // // //                 <span>₹ {formatPrice(subtotal * 0.001)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between font-semibold">
// // // //                 <span>Order Total</span>
// // // //                 <span>₹ {formatPrice(subtotal * 1.18)}</span>
// // // //               </div>
// // // //               <div className="flex justify-between">
// // // //                 <span>Round Off</span>
// // // //                 <span>₹ -0.73</span>
// // // //               </div>
// // // //               <div className="flex justify-between pt-1 text-base font-bold border-t">
// // // //                 <span>Gross Total Amount</span>
// // // //                 <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flex items-start pt-3 space-x-2 text-xs">
// // // //               <input
// // // //                 type="checkbox"
// // // //                 className="mt-1"
// // // //                 checked={agreed}
// // // //                 onChange={(e) => setAgreed(e.target.checked)}
// // // //               />
// // // //               <span>
// // // //                 I agree to the terms and conditions and privacy policy
// // // //               </span>
// // // //             </div>

// // // //             <button
// // // //               className={`w-full px-4 py-2 text-white rounded ${
// // // //                 agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
// // // //               }`}
// // // //               disabled={!agreed}
// // // //             >
// // // //               Proceed to Buy
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default OrderSummary;

// // // "use client";

// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { getGstDetails } from "@/redux/GstDetailSlice";
// // // import { getAddressList } from "@/redux/AddressSlice";
// // // import { MdOutlineModeEdit } from "react-icons/md";
// // // import { AiOutlineDelete } from "react-icons/ai";
// // // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // // import {
// // //   Dialog,
// // //   DialogContent,
// // //   DialogTitle,
// // //   DialogTrigger,
// // //   DialogDescription,
// // // } from "@/components/ui/dialog";
// // // import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
// // // import Link from "next/link";

// // // const OrderSummary = () => {
// // //   const [orderDetails, setOrderDetails] = useState(null);
// // //   const [agreed, setAgreed] = useState(false);
// // //     const { addresses,defaultAddressId } = useSelector((state) => state.address);
// // //   const { token } = useSelector((state) => state.auth);
// // //     const [selectedAddress, setSelectedAddress] = useState(null);
// // //       const [editNewAddress, setEditNewAddress] = useState(false);
// // //       const [editAddress, setEditAddress] = useState(false);
// // //         const [currentEditData, setCurrentEditData] = useState(null);

// // //   const dispatch = useDispatch();
// // //   const { gstDetails } = useSelector((state) => state.gstDetail);

// // //   useEffect(() => {
// // //     // Get Order Summary from localStorage
// // //     const storedOrderDetails = localStorage.getItem("orderDetails");
// // //     if (storedOrderDetails) {
// // //       setOrderDetails(JSON.parse(storedOrderDetails));
// // //     }

// // //     // Fetch GST details from backend
// // //     dispatch(getGstDetails());
// // //   }, [dispatch]);

// // //   useEffect(() => {
// // //       if (token) dispatch(getAddressList());
// // //     }, [token, dispatch]);

// // //       useEffect(() => {
// // //         setSelectedAddress(defaultAddressId);
// // //       }, [defaultAddressId])

// // //   if (!orderDetails) {
// // //     return <p className="p-4">Loading order summary...</p>;
// // //   }

// // //   const { cartItems, subtotal, totalQty } = orderDetails;

// // //   const formatPrice = (price) => {
// // //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// // //   };

// // //   return (
// // //     <div className="w-full space-y-5 md:space-y-10">
// // //       <div
// // //         className="relative bg-no-repeat md:h-60 h-60"
// // //         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
// // //       >
// // //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// // //           ORDER SUMMARY
// // //         </h1>
// // //       </div>

// // //       <div className="w-full min-h-screen px-4 py-6">
// // //         <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
// // //           {/* Left Side - Cart Items Table */}
// // //           <div className="w-full p-4 overflow-x-auto rounded-md shadow lg:w-2/3">
// // //             <table className="w-full min-w-[768px] text-sm">
// // //               <thead className="text-white bg-black">
// // //                 <tr>
// // //                   <th className="p-3 text-left">Cart Items</th>
// // //                   <th className="p-3 text-right">Rate PMT</th>
// // //                   <th className="p-3 text-center">Quantity</th>
// // //                   <th className="p-3 text-right">Subtotal</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody className="bg-white divide-y">
// // //                 {cartItems.map((item, index) =>
// // //                   item.variants.map((variant, vIndex) => (
// // //                     <tr
// // //                       key={variant.variantId || `variant-${vIndex}`}
// // //                       className="bg-[#F3F6FA]"
// // //                     >
// // //                       <td className="p-3">
// // //                         <div className="font-semibold text-black">
// // //                           {item.productName}
// // //                         </div>
// // //                         <div className="space-y-1 text-xs text-gray-600">
// // //                           {variant.section && <p>Section: {variant.section}</p>}
// // //                           {variant.length && <p>Length: {variant.length}</p>}
// // //                           {variant.gDiff && <p>Gauge Diff: {variant.gDiff}</p>}
// // //                         </div>
// // //                       </td>
// // //                       <td className="p-3 text-right">₹ {formatPrice(variant.price)}</td>
// // //                       <td className="p-3 text-center">{variant.qty}</td>
// // //                       <td className="p-3 text-right">
// // //                         ₹ {formatPrice(variant.price * variant.qty)}
// // //                       </td>
// // //                     </tr>
// // //                   ))
// // //                 )}
// // //               </tbody>
// // //             </table>
// // //           </div>

// // //           {/* Right Side - Order Summary */}
// // //           <div className="w-full lg:w-1/3">
// // //             <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
// // //               <h2 className="pb-2 text-lg font-semibold border-b">
// // //                 Order Summary
// // //               </h2>

// // //               {/* ✅ GST & Address Section */}
// // //               {gstDetails && (
// // //                 <div className="p-3 text-sm border rounded bg-gray-50">
// // //                   <p><strong>GST Number:</strong> {gstDetails.gstNumber || "N/A"}</p>
// // //                   <p><strong>Address:</strong> {gstDetails.address || "N/A"}</p>
// // //                 </div>
// // //               )}

// // //               <div className="space-y-2 text-sm">
// // //                 <div className="flex justify-between">
// // //                   <span>Total Qty</span>
// // //                   <span>{totalQty.toFixed(1)} MT</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>Subtotal</span>
// // //                   <span>₹ {formatPrice(subtotal)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>Loading Charge (₹265 PMT)</span>
// // //                   <span>₹ {formatPrice(265 * totalQty)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>Insurance (₹30 PMT)</span>
// // //                   <span>₹ {formatPrice(30 * totalQty)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>GST (18%)</span>
// // //                   <span>₹ {formatPrice(subtotal * 0.18)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>TCS (0.1%)</span>
// // //                   <span>₹ {formatPrice(subtotal * 0.001)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between font-semibold">
// // //                   <span>Order Total</span>
// // //                   <span>₹ {formatPrice(subtotal * 1.18)}</span>
// // //                 </div>
// // //                 <div className="flex justify-between">
// // //                   <span>Round Off</span>
// // //                   <span>₹ -0.73</span>
// // //                 </div>
// // //                 <div className="flex justify-between pt-1 text-base font-bold border-t">
// // //                   <span>Gross Total Amount</span>
// // //                   <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
// // //                 </div>
// // //               </div>

// // //               <div className="flex items-start pt-3 space-x-2 text-xs">
// // //                 <input
// // //                   type="checkbox"
// // //                   className="mt-1"
// // //                   checked={agreed}
// // //                   onChange={(e) => setAgreed(e.target.checked)}
// // //                 />
// // //                 <span>
// // //                   I agree to the terms and conditions and privacy policy
// // //                 </span>
// // //               </div>

// // //               <button
// // //                 className={`w-full px-4 py-2 text-white rounded ${
// // //                   agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
// // //                 }`}
// // //                 disabled={!agreed}
// // //               >
// // //                 Proceed to Buy
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {Array.isArray(addresses) && addresses.length > 0 ? (
// // //           <RadioGroup value={selectedAddress}>
// // //             {addresses.map((address) => (
// // //               <div
// // //                 key={address._id}
// // //                 className="border rounded-md border-[#E6E6E6] w-[60%] p-3"
// // //               >
// // //                 <div className="flex items-center justify-between">
// // //                   <div className="flex items-start gap-4">
// // //                     <RadioGroupItem
// // //                       value={address._id} // Use _id as the unique identifier
// // //                       id={address._id}
// // //                       checked={selectedAddress === address._id}
// // //                       onChange={() => handleSetDefault(address._id)}
// // //                     />
// // //                     <div className="w-[80%] font-medium text-sm space-y-1">
// // //                       <p className="font-semibold">{address.fullName}</p>
// // //                       <p className="whitespace-pre-line">
// // //                         {address.addressLine}
// // //                       </p>
// // //                       <p className="text-black">
// // //                         Phone: {address.mobileNumber}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                   <div className="flex items-center gap-2">
// // //                     <Dialog open={editAddress} onOpenChange={setEditAddress}>
// // //                       <DialogTrigger asChild>
// // //                         {/* <button
// // //                           onClick={() => {
// // //                             setEditAddress(true);
// // //                             setCurrentEditData(address);
// // //                           }}
// // //                         >
// // //                           <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
// // //                         </button> */}
// // //                       </DialogTrigger>
// // //                       <DialogContent className="sm:max-w-[450px]">
// // //                         <DialogTitle>Edit Address</DialogTitle>
// // //                         {/* <DialogDescription>
// // //                           Update your existing address information.
// // //                         </DialogDescription> */}
// // //                         <hr />
// // //                         <EditAddress
// // //                           setEditAddress={setEditAddress}
// // //                           address={currentEditData}
// // //                         />
// // //                       </DialogContent>
// // //                     </Dialog>
// // //                     {/* <AiOutlineDelete
// // //                       className="text-[#FE3000] text-xl cursor-pointer"
// // //                       onClick={() => handleDelete(address._id)}
// // //                     /> */}
// // //                   </div>
// // //                 <Link href={"/CheckoutAdd"}><i className="fa-solid fa-greater-than"></i></Link>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </RadioGroup>
// // //         ) : (
// // //           <p className="text-gray-500">No addresses found.</p>
// // //         )}
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default OrderSummary;

// // "use client";

// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getGstDetails } from "@/redux/GstDetailSlice";
// // import { getAddressList, setDefaultAddress } from "@/redux/AddressSlice";
// // import { MdOutlineModeEdit } from "react-icons/md";
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogTitle,
// //   DialogTrigger
// // } from "@/components/ui/dialog";
// // import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
// // import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// // import Link from "next/link";

// // const OrderSummary = () => {
// //   const dispatch = useDispatch();

// //   // Get order details from localStorage (cart data, totals, etc.)
// //   const [orderDetails, setOrderDetails] = useState(null);
// //   const [agreed, setAgreed] = useState(false);

// //   // Address information from Redux
// //   const { addresses, defaultAddressId } = useSelector((state) => state.address);
// //   const { token } = useSelector((state) => state.auth);
// //   const [selectedAddress, setSelectedAddress] = useState(null);
// //   const [editNewAddress, setEditNewAddress] = useState(false);
// //   const [editAddress, setEditAddress] = useState(false);
// //   const [currentEditData, setCurrentEditData] = useState(null);
// //   // const selectedAddress = addresses.find((address) => address._id === defaultAddressId);

// //   // GST details (if needed later)
// //   const { gstDetails } = useSelector((state) => state.gstDetail);

// //   // On component mount, load order details and fetch GST (if needed)
// //   useEffect(() => {
// //     const storedOrderDetails = localStorage.getItem("orderDetails");
// //     if (storedOrderDetails) {
// //       setOrderDetails(JSON.parse(storedOrderDetails));
// //     }
// //     dispatch(getGstDetails());
// //   }, [dispatch]);

// //   // Fetch addresses once token is available
// //   useEffect(() => {
// //     if (token) {
// //       dispatch(getAddressList());
// //     }
// //   }, [token, dispatch]);

// //   // Set the selected address to the default value (if present)
// //   useEffect(() => {
// //     if (defaultAddressId) {
// //       setSelectedAddress(defaultAddressId);
// //     }
// //   }, [defaultAddressId]);

// //   // If order details haven't loaded yet, show a loading text
// //   if (!orderDetails) {
// //     return <p className="p-4">Loading order summary...</p>;
// //   }

// //   const { cartItems, subtotal, totalQty } = orderDetails;

// //   const formatPrice = (price) => {
// //     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
// //   };

// //   // Find the selected address details from the addresses list
// //   const selectedAddressDetails = addresses?.find(
// //     (addr) => addr._id === selectedAddress
// //   );

// //   const handleAddressSelect = (id) => {
// //     setSelectedAddress(id);
// //     dispatch(setDefaultAddress({ id, token }));
// //   };

// //   return (
// //     <div className="w-full space-y-5 md:space-y-10">
// //       {/* Banner Section */}
// //       <div
// //         className="relative bg-no-repeat md:h-60 h-60"
// //         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
// //       >
// //         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
// //           ORDER SUMMARY
// //         </h1>
// //       </div>

// //       {/* Main Content */}
// //       <div className="w-full min-h-screen px-4 py-6">
// //         <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
// //           {/* Left Side - Cart Items Table */}
// //           <div className="w-full p-4 overflow-x-auto rounded-md shadow lg:w-2/3">
// //             <table className="w-full min-w-[768px] text-sm">
// //               <thead className="text-white bg-black">
// //                 <tr>
// //                   <th className="p-3 text-left">Cart Items</th>
// //                   <th className="p-3 text-right">Rate PMT</th>
// //                   <th className="p-3 text-center">Quantity</th>
// //                   <th className="p-3 text-right">Subtotal</th>
// //                 </tr>
// //               </thead>
// //               <tbody className="bg-white divide-y">
// //                 {cartItems.map((item, index) =>
// //                   item.variants.map((variant, vIndex) => (
// //                     <tr
// //                       key={variant.variantId || `variant-${vIndex}`}
// //                       className="bg-[#F3F6FA]"
// //                     >
// //                       <td className="p-3">
// //                         <div className="font-semibold text-black">
// //                           {item.productName}
// //                         </div>
// //                         <div className="space-y-1 text-xs text-gray-600">
// //                           {variant.section && <p>Section: {variant.section}</p>}
// //                           {variant.length && <p>Length: {variant.length}</p>}
// //                           {variant.gDiff && <p>Gauge Diff: {variant.gDiff}</p>}
// //                         </div>
// //                       </td>
// //                       <td className="p-3 text-right">
// //                         ₹ {formatPrice(variant.price)}
// //                       </td>
// //                       <td className="p-3 text-center">{variant.qty}</td>
// //                       <td className="p-3 text-right">
// //                         ₹ {formatPrice(variant.price * variant.qty)}
// //                       </td>
// //                     </tr>
// //                   ))
// //                 )}
// //               </tbody>
// //             </table>
// //           </div>

// //           {/* Right Side - Order Summary */}
// //           <div className="w-full lg:w-1/3">
// //             <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
// //               <h2 className="pb-2 text-lg font-semibold border-b">
// //                 Order Summary
// //               </h2>

// //               {/* Display only the selected address details */}
// //               {selectedAddressDetails ? (
// //                 <div className="p-3 text-sm border rounded bg-gray-50">
// //                   <p>
// //                     <strong>Name:</strong> {selectedAddressDetails.fullName}
// //                   </p>
// //                   <p>
// //                     <strong>Address:</strong>{" "}
// //                     {selectedAddressDetails.addressLine || "N/A"}
// //                   </p>
// //                   <p>
// //                     <strong>Phone:</strong>{" "}
// //                     {selectedAddressDetails.mobileNumber || "N/A"}
// //                   </p>
// //                 </div>
// //               ) : (
// //                 <p className="text-sm text-gray-500">Please select an address.</p>
// //               )}

// //               <div className="space-y-2 text-sm">
// //                 <div className="flex justify-between">
// //                   <span>Total Qty</span>
// //                   <span>{totalQty.toFixed(1)} MT</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Subtotal</span>
// //                   <span>₹ {formatPrice(subtotal)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Loading Charge (₹265 PMT)</span>
// //                   <span>₹ {formatPrice(265 * totalQty)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Insurance (₹30 PMT)</span>
// //                   <span>₹ {formatPrice(30 * totalQty)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>GST (18%)</span>
// //                   <span>₹ {formatPrice(subtotal * 0.18)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>TCS (0.1%)</span>
// //                   <span>₹ {formatPrice(subtotal * 0.001)}</span>
// //                 </div>
// //                 <div className="flex justify-between font-semibold">
// //                   <span>Order Total</span>
// //                   <span>₹ {formatPrice(subtotal * 1.18)}</span>
// //                 </div>
// //                 <div className="flex justify-between">
// //                   <span>Round Off</span>
// //                   <span>₹ -0.73</span>
// //                 </div>
// //                 <div className="flex justify-between pt-1 text-base font-bold border-t">
// //                   <span>Gross Total Amount</span>
// //                   <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
// //                 </div>
// //               </div>

// //               <div className="flex items-start pt-3 space-x-2 text-xs">
// //                 <input
// //                   type="checkbox"
// //                   className="mt-1"
// //                   checked={agreed}
// //                   onChange={(e) => setAgreed(e.target.checked)}
// //                 />
// //                 <span>
// //                   I agree to the terms and conditions and privacy policy
// //                 </span>
// //               </div>

// //               <button
// //                 className={`w-full px-4 py-2 text-white rounded ${
// //                   agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
// //                 }`}
// //                 disabled={!agreed}
// //               >
// //                 Proceed to Buy
// //               </button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Address Selection Section */}
// //         {selectedAddress ? (
// //         <div>
// //           <p><strong>{selectedAddress.fullName}</strong></p>
// //           <p>{selectedAddress.addressLine}</p>
// //           <p>Phone: {selectedAddress.mobileNumber}</p>
// //         </div>
// //       ) : (
// //         <p>No default address selected.</p>
// //       )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default OrderSummary;

// "use client";

// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getGstDetails } from "@/redux/GstDetailSlice";
// import { getAddressList, setDefaultAddress } from "@/redux/AddressSlice";
// import { MdOutlineModeEdit } from "react-icons/md";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
// import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// import Link from "next/link";

// const OrderSummary = () => {
//   const dispatch = useDispatch();

//   // Get order details from localStorage (cart data, totals, etc.)
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [agreed, setAgreed] = useState(false);

//   // Address information from Redux
//   const { addresses, defaultAddressId } = useSelector((state) => state.address);
//   const { token } = useSelector((state) => state.auth);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [editNewAddress, setEditNewAddress] = useState(false);
//   const [editAddress, setEditAddress] = useState(false);
//   const [currentEditData, setCurrentEditData] = useState(null);

//   // GST details (if needed later)
//   const { gstDetails } = useSelector((state) => state.gstDetail);

//   // On component mount, load order details and fetch GST (if needed)
//   useEffect(() => {
//     const storedOrderDetails = localStorage.getItem("orderDetails");
//     if (storedOrderDetails) {
//       setOrderDetails(JSON.parse(storedOrderDetails));
//     }
//     dispatch(getGstDetails());
//   }, [dispatch]);

//   // Fetch addresses once token is available
//   useEffect(() => {
//     if (token) {
//       dispatch(getAddressList());
//     }
//   }, [token, dispatch]);

//   // Set the selected address to the default value (if present)
//   useEffect(() => {
//     if (defaultAddressId) {
//       const selected = addresses.find(
//         (address) => address._id === defaultAddressId
//       );
//       setSelectedAddress(selected); // Update the state here
//     }
//   }, [defaultAddressId, addresses]);

//   // If order details haven't loaded yet, show a loading text
//   if (!orderDetails) {
//     return <p className="p-4">Loading order summary...</p>;
//   }

//   const { cartItems, subtotal, totalQty } = orderDetails;

//   const formatPrice = (price) => {
//     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
//   };

//   // Find the selected address details from the addresses list
//   const selectedAddressDetails = selectedAddress;

//   const handleAddressSelect = (id) => {
//     setSelectedAddress(id);
//     dispatch(setDefaultAddress({
//       selectedId: addressIdToMakeDefault,
//       allAddresses: addressList, // from Redux state or fetched list
//       token: yourAuthToken,
//     }));
//   };

//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       {/* Banner Section */}
//       <div
//         className="relative bg-no-repeat md:h-60 h-60"
//         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
//       >
//         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
//           ORDER SUMMARY
//         </h1>
//       </div>

//       {/* Main Content */}
//       <div className="w-full min-h-screen px-4 py-6">
//         <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
//           {/* Left Side - Cart Items Table */}
//           <div className="w-full p-4 overflow-x-auto rounded-md shadow lg:w-2/3">
//             <table className="w-full min-w-[768px] text-sm">
//               <thead className="text-white bg-black">
//                 <tr>
//                   <th className="p-3 text-left">Cart Items</th>
//                   <th className="p-3 text-right">Rate PMT</th>
//                   <th className="p-3 text-center">Quantity</th>
//                   <th className="p-3 text-right">Subtotal</th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y">
//                 {cartItems.map((item, index) =>
//                   item.variants.map((variant, vIndex) => (
//                     <tr
//                       key={variant.variantId || `variant-${vIndex}`}
//                       className="bg-[#F3F6FA]"
//                     >
//                       <td className="p-3">
//                         <div className="font-semibold text-black">
//                           {item.productName}
//                         </div>
//                         <div className="space-y-1 text-xs text-gray-600">
//                           {variant.section && <p>Section: {variant.section}</p>}
//                           {variant.length && <p>Length: {variant.length}</p>}
//                           {variant.gDiff && <p>Gauge Diff: {variant.gDiff}</p>}
//                         </div>
//                       </td>
//                       <td className="p-3 text-right">
//                         ₹ {formatPrice(variant.price)}
//                       </td>
//                       <td className="p-3 text-center">{variant.qty}</td>
//                       <td className="p-3 text-right">
//                         ₹ {formatPrice(variant.price * variant.qty)}
//                       </td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>

//           {/* Right Side - Order Summary */}
//           <div className="w-full lg:w-1/3">
//             <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
//               <h2 className="pb-2 text-lg font-semibold border-b">
//                 Order Summary
//               </h2>

//               <div className="space-y-2 text-sm">
//                 <div className="flex justify-between">
//                   <span>Total Qty</span>
//                   <span>{totalQty.toFixed(1)} MT</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Subtotal</span>
//                   <span>₹ {formatPrice(subtotal)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Loading Charge (₹265 PMT)</span>
//                   <span>₹ {formatPrice(265 * totalQty)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Insurance (₹30 PMT)</span>
//                   <span>₹ {formatPrice(30 * totalQty)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>GST (18%)</span>
//                   <span>₹ {formatPrice(subtotal * 0.18)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>TCS (0.1%)</span>
//                   <span>₹ {formatPrice(subtotal * 0.001)}</span>
//                 </div>
//                 <div className="flex justify-between font-semibold">
//                   <span>Order Total</span>
//                   <span>₹ {formatPrice(subtotal * 1.18)}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span>Round Off</span>
//                   <span>₹ -0.73</span>
//                 </div>
//                 <div className="flex justify-between pt-1 text-base font-bold border-t">
//                   <span>Gross Total Amount</span>
//                   <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
//                 </div>
//               </div>

//               <div>{/* Additional content */}</div>
//             </div>
//           </div>
//         </div>
//         {/* Display only the selected address details */}
//         {selectedAddressDetails ? (
//           <div className="flex">
//           <div className="p-3 text-sm border w-[60%] rounded bg-gray-50">
//             <p>
//               <strong>Name:</strong> {selectedAddressDetails.fullName}
//             </p>
//             <p>
//               <strong>Address:</strong>{" "}
//               {selectedAddressDetails.addressLine || "N/A"}
//             </p>
//             <p>
//               <strong>Phone:</strong>{" "}
//               {selectedAddressDetails.mobileNumber || "N/A"}
//             </p>
//           </div>
//             <Link href={"/CheckoutAdd"}><i className="fa-solid fa-greater-than"></i></Link>
//             </div>
//         ) : (
//           <p className="text-sm text-gray-500">Please select an address.</p>
//         )}

//       </div>
//     </div>
//   );
// };

// export default OrderSummary;

"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGstDetails } from "@/redux/GstDetailSlice";
import { getAddressList, setDefaultAddress } from "@/redux/AddressSlice";
import Link from "next/link";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const [orderDetails, setOrderDetails] = useState(null);
  const { addresses, defaultAddressId } = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.auth);
  const { gstDetails } = useSelector((state) => state.gstDetail);
  const [selectedAddress, setSelectedAddress] = useState(null);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }
    dispatch(getGstDetails());
  }, [dispatch]);

  useEffect(() => {
    if (token) {
      dispatch(getAddressList());
    }
  }, [token, dispatch]);

  // Sync selectedAddress whenever defaultAddressId or addresses changes
  useEffect(() => {
    if (defaultAddressId && addresses.length > 0) {
      const foundAddress = addresses.find(
        (address) => address._id === defaultAddressId
      );
      setSelectedAddress(foundAddress || null);
    }
  }, [defaultAddressId, addresses]);

  if (!orderDetails) {
    return <p className="p-4">Loading order summary...</p>;
  }

  const { cartItems, subtotal, totalQty } = orderDetails;

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  

  return (
    <div className="w-full space-y-5 md:space-y-10">
      {/* Banner Section */}
      <div
        className="relative bg-no-repeat md:h-60 h-60"
        style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
      >
        <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
          ORDER SUMMARY
        </h1>
      </div>

      <div className="w-full min-h-screen px-4 py-6">
        <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
          {/* Left Side - Cart Items Table */}
          <div className="w-full p-4 overflow-x-auto rounded-md shadow lg:w-2/3">
            <table className="w-full min-w-[768px] text-sm">
              <thead className="text-white bg-black">
                <tr>
                  <th className="p-3 text-left">Cart Items</th>
                  <th className="p-3 text-right">Rate PMT</th>
                  <th className="p-3 text-center">Quantity</th>
                  <th className="p-3 text-right">Subtotal</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y">
                {cartItems.map((item, index) =>
                  item.variants.map((variant, vIndex) => (
                    <tr
                      key={variant.variantId || `variant-${vIndex}`}
                      className="bg-[#F3F6FA]"
                    >
                      <td className="p-3">
                        <div className="font-semibold text-black">
                          {item.productName}
                        </div>
                        <div className="space-y-1 text-xs text-gray-600">
                          {variant.section && <p>Section: {variant.section}</p>}
                          {variant.length && <p>Length: {variant.length}</p>}
                          {variant.gDiff && <p>Gauge Diff: {variant.gDiff}</p>}
                        </div>
                      </td>
                      <td className="p-3 text-right">
                        ₹ {formatPrice(variant.price)}
                      </td>
                      <td className="p-3 text-center">{variant.qty}</td>
                      <td className="p-3 text-right">
                        ₹ {formatPrice(variant.price * variant.qty)}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
              <h2 className="pb-2 text-lg font-semibold border-b">
                Order Summary
              </h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Total Qty</span>
                  <span>{totalQty.toFixed(1)} MT</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loading Charge (₹265 PMT)</span>
                  <span>₹ {formatPrice(265 * totalQty)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance (₹30 PMT)</span>
                  <span>₹ {formatPrice(30 * totalQty)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹ {formatPrice(subtotal * 0.18)}</span>
                </div>
                <div className="flex justify-between">
                  <span>TCS (0.1%)</span>
                  <span>₹ {formatPrice(subtotal * 0.001)}</span>
                </div>
                <div className="flex justify-between font-semibold">
                  <span>Order Total</span>
                  <span>₹ {formatPrice(subtotal * 1.18)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Round Off</span>
                  <span>₹ -0.73</span>
                </div>
                <div className="flex justify-between pt-1 text-base font-bold border-t">
                  <span>Gross Total Amount</span>
                  <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Address Summary */}
        {selectedAddress ? (
          <div className="flex">
          <div className="p-4 border rounded-md w-[50%] shadow">
            <h3 className="mb-2 text-lg font-semibold">Shipping Address</h3>
            <p>
              <strong>Name:</strong> {selectedAddress.fullName}
            </p>
            <p>
              <strong>Mobile:</strong> {selectedAddress.mobileNumber}
            </p>
            <p>
              <strong>Address:</strong> {selectedAddress.addressLine}
            </p>
          </div>
            <Link href={"/CheckoutAdd"}><div className="top-44"><i className="fa-solid fa-greater-than"></i></div></Link>
          </div>
        ) : (
          <p className="text-red-500">No address selected!</p>
        )}


{gstDetails?.gstNumber && (
  <div className="p-4 mt-4 border rounded-md w-[50%] shadow">
    <h3 className="mb-2 text-lg font-semibold">GST Details</h3>
    <p>
      <strong>GST Number:</strong> {gstDetails.gstNumber}
    </p>
    {gstDetails.certificateUrl && (
      <div>
        <strong>Certificate:</strong>
        <img src={gstDetails.certificateUrl} alt="GST Certificate" />
      </div>
    )}
  </div>
)}

      </div>
    </div>
  );
};

export default OrderSummary;

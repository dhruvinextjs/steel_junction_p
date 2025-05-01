"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { getUserDetails } from "@/redux/GstDetailSlice";
import { getAddressList, setDefaultAddress } from "@/redux/AddressSlice";
import { createOrder, fetchOrderSummary } from "@/redux/OrderSlice";
import Link from "next/link";
import toast from "react-hot-toast";
import Image from "next/image";

const OrderSummary = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState(null);
  const { addresses, defaultAddressId } = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.auth);
  const { gstDetails } = useSelector((state) => state.gstDetail);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const {
    totalQty,
    subTotal,
    gstAmount,
    loadingCharge,
    insurance,
    tcsAmount,
    orderTotal,
    roundOff,
  } = useSelector((state) => state.order);
  const [agreed, setAgreed] = useState(false); // State for the checkbox
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }
    dispatch(getUserDetails());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    // Handle the input change logic, for example, updating state
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (token) {
      dispatch(getAddressList());
      dispatch(fetchOrderSummary());
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (addresses.length > 0) {
      const foundDefault =
        addresses.find((addr) => addr._id === defaultAddressId) ||
        addresses.find((addr) => addr.isDefault);
      setSelectedAddress(foundDefault || null);
    }
  }, [defaultAddressId, addresses]);

  if (!orderDetails) {
    return <p className="p-4">Loading order summary...</p>;
  }

  const { cartItems } = orderDetails;

  const formatPrice = (price) => {
    return price && !isNaN(price)
      ? price.toLocaleString("en-IN", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "0.00";
  };

  const handlePlaceOrder = async () => {
    if (!selectedAddress) {
      toast.error("Please select an address.");
      return;
    }

    if (!gstDetails?.gstNumber) {
      toast.error("Please add GST details.");
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms and conditions.");
      return;
    }

    const orderData = {
      addressId: selectedAddress._id,
      cartItems: cartItems,
    };

    try {
      const response = await dispatch(createOrder(orderData)).unwrap();

      if (response?.success) {
        // toast.success(response.message);
        if (agreed) setShowPopup(true);

        // setTimeout(() => {
        //   router.push("/myOrders");
        // }, 2500);
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong!");
    }
  };

  return (
    <div className="w-full space-y-5 md:space-y-6 lg:space-y-8">

            {/* Popup */}
            {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
            <Image
              src="/static/images/clock-loaders1.png" // use your clock loading image
              alt="Loading"
              width={140}
              height={140}
              className="mx-auto"
            />
            <h2 className="mb-2 text-lg font-bold">Confirmation Pending!!!</h2>
            <p className="text-[10px] text-gray-600 mb-4">
              Waiting for an order confirmation from an admin side.
            </p>
            <button
              onClick={() => {
                setShowPopup(false);
                window.location.href = "/myOrders"; // navigate to orders
              }}
              className="px-4 py-2 text-sm text-white bg-black rounded"
            >
              Go to Orders
            </button>
          </div>
        </div>

      )}
      {/* Banner Section */}
      <div
        className="relative bg-no-repeat bg-cover h-36 md:h-40 lg:h-60"
        style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
      >
        <h1 className="absolute text-xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-2xl lg:text-4xl top-1/2 left-1/2">
          ORDER SUMMARY
        </h1>
      </div>

      <div className="w-full px-3 py-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-4 mx-auto max-w-7xl lg:flex-row lg:gap-6">
          {/* Left Side - Cart Items and Details */}
          <div className="flex flex-col w-full gap-4 lg:w-2/3">
            {/* Cart Items Table */}
            <div
              className="overflow-x-auto bg-white rounded-md shadow md:p-4"
              style={{
                scrollbarWidth: "auto", // For Firefox
                WebkitScrollbar: {
                  height: "6px",
                },
                WebkitScrollbarTrack: {
                  background: "#f1f1f1",
                },
                WebkitScrollbarThumb: {
                  background: "#888",
                  borderRadius: "3px",
                },
                WebkitScrollbarThumbHover: {
                  // Note the camelCase here as well
                  background: "#555",
                },
              }}
            >
              <table className="w-full text-sm min-w-[768px]">
                <thead className="text-white bg-black">
                  <tr>
                    <th className="p-2 text-left md:p-3">Cart Items</th>
                    <th className="p-2 text-center md:p-3">Rate PMT</th>
                    <th className="p-2 text-center md:p-3">Quantity</th>
                    <th className="p-2 text-center md:p-3">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {cartItems.map((item, index) =>
                    item.variants.map((variant, vIndex) => (
                      <tr
                        key={variant.variantId || `variant-${vIndex}`}
                        className="bg-[#F3F6FA]"
                      >
                        <td className="p-2 md:p-3">
                          <div className="font-semibold text-black">
                            {item.productName}
                          </div>
                          <div className="space-y-0.5 text-xs text-gray-600">
                            {variant.section && (
                              <p>Section: {variant.section}</p>
                            )}
                            {variant.length && <p>Length: {variant.length}</p>}
                            {variant.gDiff && (
                              <p>Gauge Diff: {variant.gDiff}</p>
                            )}
                          </div>
                        </td>
                        {/* <td className="p-2 text-center md:p-3">₹ {formatPrice(variant.price)}</td> */}
                        <td className="p-2 text-center md:p-3">
                          ₹{variant.price}
                        </td>
                        <td className="text-center">{variant.qty}</td>
                        <td className="p-2 text-center md:p-3">
                          ₹ {formatPrice(variant.price * variant.qty)}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>

            {/* Selected Address Summary */}
            <div className="p-3 bg-white border rounded-md shadow md:p-4">
              {selectedAddress ? (
                <div className="flex items-center justify-between">
                  {" "}
                  {/* Make this a flex container */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold md:text-lg">
                      Deliver to
                    </h3>
                    <p className="text-xs text-gray-700 capitalize md:text-sm">
                      {selectedAddress.fullName}
                    </p>
                    <p className="text-xs text-gray-700 uppercase md:text-sm">
                      {selectedAddress.addressLine}
                    </p>
                    <p className="text-xs text-gray-700 md:text-sm">
                      <span>Phone:</span> {selectedAddress.mobileNumber}
                    </p>
                  </div>
                  <Link
                    href={"/CheckoutAdd"}
                    className="inline-flex items-center justify-center w-6 h-6 mt-2 text-gray-500 border rounded-md hover:bg-gray-100"
                  >
                    <i className="text-xs fa-solid fa-pen-to-square"></i>
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="mb-2 text-sm text-red-500 md:text-base">
                    No delivery address selected!
                  </p>
                  <button
                    className="px-3 py-2 text-xs text-white bg-black rounded-md hover:bg-gray-800 md:text-sm"
                    onClick={() => router.push("/CheckoutAdd")}
                  >
                    Add Delivery Address
                  </button>
                </div>
              )}
            </div>

            {/* GST Details */}
            <div className="p-3 bg-white border rounded-md shadow md:p-4">
              {gstDetails?.gstNumber ? (
                <div className="flex items-center justify-between">
                  {" "}
                  {/* Make this a flex container */}
                  <div>
                    <h3 className="mb-2 text-sm font-semibold md:text-lg">
                      GST Details
                    </h3>
                    <p className="text-xs text-gray-700 md:text-sm">
                      <span>GSTIN:</span> {gstDetails.gstNumber}
                    </p>
                    {gstDetails.businessName && (
                      <p className="text-xs text-gray-700 md:text-sm">
                        <span>Business Name:</span> {gstDetails.businessName}
                      </p>
                    )}
                  </div>
                  <Link
                    href={"/CheckoutGst"}
                    className="inline-flex items-center justify-center w-6 h-6 mt-2 text-gray-500 border rounded-md hover:bg-gray-100"
                  >
                    <i className="text-xs fa-solid fa-pen-to-square"></i>
                  </Link>
                </div>
              ) : (
                <div>
                  <p className="mb-2 text-sm text-red-500 md:text-base">
                    No GST details found!
                  </p>
                  <button
                    className="px-3 py-2 text-xs text-white bg-black rounded-md hover:bg-gray-800 md:text-sm"
                    onClick={() => router.push("/CheckoutGst")}
                  >
                    Add GST Info
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white border border-[#ddd] rounded-md shadow p-3 md:p-4">
              {/* ... Order Summary content ... */}
              <p className="pb-2 mb-3 text-sm font-semibold border-b md:text-md">
                Order Summary
              </p>
              <div className="space-y-1.5 text-xs text-[#333] md:space-y-2 md:text-sm">
                <div className="flex justify-between">
                  <span>Total Qty</span>
                  <span>{totalQty} MT</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹ {formatPrice(subTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Loading Charge(₹265 PMT)</span>
                  <span>₹ {formatPrice(loadingCharge)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Insurance (₹30 PMT)</span>
                  <span>₹ {formatPrice(insurance)}</span>
                </div>
                <div className="flex justify-between">
                  <span>GST ({gstAmount ? "18%" : "N/A"})</span>
                  <span>₹ {formatPrice(gstAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span>TCS ({tcsAmount ? "0.1%" : "N/A"})</span>
                  <span>₹ {formatPrice(tcsAmount)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span>Order Total</span>
                  <span>₹ {formatPrice(orderTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Round Off</span>
                  <span>₹ -{formatPrice(roundOff)}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total</span>
                  <span>₹ {formatPrice(orderTotal)}</span>
                </div>

                {/* Terms and Conditions Checkbox */}
                <div className="flex items-start pt-3 space-x-2 text-xs">
                  <input
                    type="checkbox"
                    className="mt-0.5 rounded focus:ring-black"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                  />
                  <span>
                    I agree to the{" "}
                    <Link href="/terms-conditions" className="text-blue-500">
                      terms and conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" className="text-blue-500">
                      privacy policy
                    </Link>
                  </span>
                </div>

                {/* Place Order Button */}
                <div className="mt-4">
                  {/* <button
                    onClick={handlePlaceOrder}
                    className={`w-full py-2.5 font-medium text-white bg-black rounded-md text-sm md:text-base ${
                      !agreed ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!agreed}
                  >
                    Proceed to Buy
                  </button> */}
                  <button
                    // onClick={() => {
                    //   if (agreed) setShowPopup(true);
                    // }}
                    onClick={handlePlaceOrder}
                    className={`w-full py-2.5 font-medium text-white bg-black rounded-md text-sm md:text-base ${
                      !agreed ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                    disabled={!agreed}
                    
                  >
                    Proceed to Buy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

// "use client";

// import React, { useEffect, useState } from "react";
// import Image from "next/image";

// const OrderSummary = () => {
//   const [orderDetails, setOrderDetails] = useState(null);
//   const [agreed, setAgreed] = useState(false);
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const storedOrderDetails = localStorage.getItem("orderDetails");
//     if (storedOrderDetails) {
//       setOrderDetails(JSON.parse(storedOrderDetails));
//     }
//   }, []);

//   if (!orderDetails) {
//     return <p className="p-4">Loading order summary...</p>;
//   }

//   const { cartItems, subtotal, totalQty } = orderDetails;

//   const formatPrice = (price) => {
//     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
//   };

//   return (
//     <div className="w-full space-y-5 md:space-y-10">
      // {/* Popup */}
      // {showPopup && (
      //   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      //     <div className="w-full max-w-xs p-6 text-center bg-white rounded-lg shadow-lg">
      //       <Image
      //         src="/static/images/clock-loaders1.png" // use your clock loading image
      //         alt="Loading"
      //         width={140}
      //         height={140}
      //         className="mx-auto"
      //       />
      //       <h2 className="mb-2 text-lg font-bold">Confirmation Pending!!!</h2>
      //       <p className="text-[10px] text-gray-600 mb-4">
      //         Waiting for an order confirmation from an admin side.
      //       </p>
      //       <button
      //         onClick={() => {
      //           setShowPopup(false);
      //           window.location.href = "/myOrders"; // navigate to orders
      //         }}
      //         className="px-4 py-2 text-sm text-white bg-black rounded"
      //       >
      //         Go to Orders
      //       </button>
      //     </div>
      //   </div>

      // )}

//       {/* Banner */}
//       <div
//         className="relative bg-no-repeat md:h-60 h-60"
//         style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
//       >
//         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
//           ORDER SUMMARY
//         </h1>
//       </div>

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
//               <h2 className="pb-2 text-lg font-semibold border-b">Order Summary</h2>

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

//               <div className="flex items-start pt-3 space-x-2 text-xs">
//                 <input
//                   type="checkbox"
//                   className="mt-1"
//                   checked={agreed}
//                   onChange={(e) => setAgreed(e.target.checked)}
//                 />
//                 <span>
//                   I agree to the terms and conditions and privacy policy
//                 </span>
//               </div>

//               <button
//                 className={`w-full px-4 py-2 text-white rounded ${agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
//                   }`}
//                 disabled={!agreed}
//                 onClick={() => {
//                   if (agreed) setShowPopup(true);
//                 }}
//               >
//                 Proceed to Buy
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OrderSummary;

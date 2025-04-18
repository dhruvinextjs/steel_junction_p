// "use client";

// import React, { useEffect, useState } from "react";

// const OrderSummary = () => {
//   const [orderDetails, setOrderDetails] = useState(null);

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
//     <div className="w-full px-4 py-6 bg-[#F5F5F5] min-h-screen">
//       <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
//         {/* Left Side - Cart Items Table (replace with your actual table) */}
//         <div className="w-full p-4 bg-white rounded-md shadow lg:w-2/3">
//           <h2 className="pb-2 mb-4 text-lg font-semibold border-b">Your Cart</h2>
//           <div className="space-y-6">
//             {cartItems.map((item, index) => (
//               <div key={item._id || `item-${index}`} className="pb-2 border-b">
//                 <h3 className="text-sm font-semibold text-black border-b">{item.productName}</h3>
//                 {item.variants.map((variant, vIndex) => (
//                   <div
//                     key={variant.variantId || `variant-${vIndex}`}
//                     className="bg-[#F3F6FA] mt-2 p-3 rounded text-sm flex justify-between items-center"
//                   >
//                     <div className="space-y-1">
//                       {variant.section && <p><b>Section:</b> {variant.section}</p>}
//                       {variant.length && <p><b>Length:</b> {variant.length}</p>}
//                       {variant.gDiff && <p><b>Gauge Diff:</b> {variant.gDiff}</p>}
//                     </div>
//                     <div className="text-right">
//                       <p>₹ {formatPrice(variant.price)}</p>
//                       <p>Qty: {variant.qty}</p>
//                       <p className="font-semibold">₹ {formatPrice(variant.price * variant.qty)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side - Order Summary Box */}
//         <div className="w-full lg:w-1/3">
//           <div className="w-full p-4 space-y-4 bg-white border rounded-md shadow">
//             <h2 className="pb-2 text-lg font-semibold border-b">Order Summary</h2>

//             <div className="space-y-2 text-sm">
//               <div className="flex justify-between">
//                 <span>Total Qty</span>
//                 <span>{totalQty.toFixed(1)} MT</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Subtotal</span>
//                 <span>₹ {formatPrice(subtotal)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Loading Charge (₹265 PMT)</span>
//                 <span>₹ {formatPrice(265 * totalQty)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Insurance (₹30 PMT)</span>
//                 <span>₹ {formatPrice(30 * totalQty)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>GST (18%)</span>
//                 <span>₹ {formatPrice(subtotal * 0.18)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>TCS (0.1%)</span>
//                 <span>₹ {formatPrice(subtotal * 0.001)}</span>
//               </div>
//               <div className="flex justify-between font-semibold">
//                 <span>Order Total</span>
//                 <span>₹ {formatPrice(subtotal * 1.18)}</span>
//               </div>
//               <div className="flex justify-between">
//                 <span>Round Off</span>
//                 <span>₹ -0.73</span>
//               </div>
//               <div className="flex justify-between pt-1 text-base font-bold border-t">
//                 <span>Gross Total Amount</span>
//                 <span>₹ {formatPrice(subtotal * 1.18 - 0.73)}</span>
//               </div>
//             </div>

//             <div className="flex items-start pt-3 space-x-2 text-xs">
//               <input type="checkbox" className="mt-1" />
//               <span>I agree to the terms and conditions and privacy policy</span>
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

// export default OrderSummary;

"use client";

import React, { useEffect, useState } from "react";

const OrderSummary = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    const storedOrderDetails = localStorage.getItem("orderDetails");
    if (storedOrderDetails) {
      setOrderDetails(JSON.parse(storedOrderDetails));
    }
  }, []);

  if (!orderDetails) {
    return <p className="p-4">Loading order summary...</p>;
  }

  const { cartItems, subtotal, totalQty } = orderDetails;

  const formatPrice = (price) => {
    return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
  };

  return (
    <div className="w-full min-h-screen px-4 py-6">
      <div className="flex flex-col gap-6 mx-auto max-w-7xl lg:flex-row">
        {/* Left Side - Cart Items Table */}
        <div className="w-full p-4 rounded-md shadow lg:w-2/3">
          {/* <h2 className="pb-2 mb-4 text-lg font-semibold border-b">
            Your Cart
          </h2> */}
          <div className="space-y-6">
            {/* Table Headers */}
            <div className="hidden grid-cols-6 px-5 py-3 text-sm font-medium text-gray-600 bg-black md:grid">
              <div className="text-white">Cart Items</div>
            </div>

            {cartItems.map((item, index) => (
              <div key={item._id || `item-${index}`} className="pb-2 border-b">
                <h3 className="text-sm font-semibold text-black border-b">
                  {item.productName}
                </h3>
                {item.variants.map((variant, vIndex) => (
                  <div
                    key={variant.variantId || `variant-${vIndex}`}
                    className="bg-[#F3F6FA] mt-2 p-3 rounded text-sm"
                  >
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      {/* Left column - Section, Length, Gauge Diff */}
                      <div className="w-full space-y-1 md:w-1/2">
                        {variant.section && (
                          <p>
                            <span>Section:</span> {variant.section}
                          </p>
                        )}
                        {variant.length && (
                          <p>
                            <span>Length:</span> {variant.length}
                          </p>
                        )}
                        {variant.gDiff && (
                          <p>
                            <span>Gauge Diff:</span> {variant.gDiff}
                          </p>
                        )}
                      </div>

                      {/* Right column - Price, Quantity, Subtotal */}
                      <div className="flex justify-between w-full mt-2 md:justify-end md:gap-10 md:w-1/2 md:mt-0">
                        <div className="text-right">
                          <p>₹ {formatPrice(variant.price)}</p>
                        </div>
                        <div className="text-right">
                          <p>{variant.qty}</p>
                        </div>
                        <div className="text-right">
                          <p>₹ {formatPrice(variant.price * variant.qty)}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
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
            
            <div className="flex items-start pt-3 space-x-2 text-xs">
              <input
                type="checkbox"
                className="mt-1"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span>
                I agree to the terms and conditions and privacy policy
              </span>
            </div>

            <button
              className={`w-full px-4 py-2 text-white rounded ${
                agreed ? "bg-black" : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!agreed}
            >
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
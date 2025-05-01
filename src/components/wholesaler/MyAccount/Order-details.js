// // // "use client";
// // // import { useEffect } from "react";
// // // import { useParams } from "next/navigation";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { getOrderDetail } from "@/redux/MyOrderDetailSlice";
// // // import Link from "next/link";
// // // import MainMenu from "@/components/wholesaler/MyAccount/MainMenu"; // Assuming MainMenu is in this path
 
// // // const OrderDetailPage = () => {
// // //   const { orderId } = useParams();
// // //   const dispatch = useDispatch();
 
// // //   const { loading, order, error } = useSelector((state) => state.orderDetail);
 
// // //   useEffect(() => {
// // //     if (orderId) {
// // //       dispatch(getOrderDetail(orderId));
// // //     }
// // //   }, [orderId, dispatch]);
 
// // //   if (loading) return <div>Loading...</div>;
// // //   if (error) return <div className="text-red-500">Error: {error}</div>;
 
// // //   return (
// // //     <div className="flex p-4 mx-auto space-x-4 max-w-7xl">
// // //       {/* Main Menu (Sidebar) */}
// // //       <div className="w-64">
// // //         <MainMenu tabMenu="order-details" onTabChange={() => {}} /> {/* Adjust props as needed */}
// // //       </div>
 
// // //       {/* Order Details Content */}
// // //       <div className="flex-grow p-6 bg-white rounded shadow">
// // //         <h1 className="mb-4 text-2xl font-bold">Order Details</h1>
 
// // //         {/* Basic Info */}
// // //         <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-3">
// // //           <div className="font-medium">Order Number</div>
// // //           <div className="font-semibold text-black">#{order?.orderNumber}</div>
 
// // //           <div className="font-medium">Order Date</div>
// // //           <div className="text-black">
// // //             {order?.createdAt &&
// // //               new Date(order.createdAt).toLocaleDateString("en-GB", {
// // //                 day: "2-digit",
// // //                 month: "short",
// // //                 year: "numeric",
// // //               })}
// // //           </div>
 
// // //           <div className="font-medium">Status</div>
// // //           <div className="font-semibold text-green-600">{order?.orderStatus}</div>
 
// // //           <div className="font-medium">Total Quantity</div>
// // //           <div className="text-black">{order?.totalQty}</div>
 
// // //           <div className="font-medium">Gross Total</div>
// // //           <div className="text-black">₹ {order?.grossTotal?.toLocaleString()}</div>
// // //         </div>
 
// // //         {/* Customer Info */}
// // //         <div className="pt-4 border-t">
// // //           <h2 className="mb-2 text-lg font-semibold">Customer Info</h2>
// // //           <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2">
// // //             <div className="font-medium">Name</div>
// // //             <div>{order?.addressFullName}</div>
 
// // //             <div className="font-medium">Mobile</div>
// // //             <div>{order?.addressMobileNumber}</div>
 
// // //             <div className="font-medium">GST Number</div>
// // //             <div>{order?.gstNumber}</div>
 
// // //             <div className="font-medium">Address</div>
// // //             <div>{order?.addressLine}</div>
// // //           </div>
// // //         </div>
 
// // //         {/* Product Info */}
// // //         <div className="pt-4 border-t">
// // //           <h2 className="mb-2 text-lg font-semibold">Products</h2>
// // //           {order?.product?.map((prod, i) => (
// // //             <div key={i} className="mb-4 text-sm">
// // //               <div className="font-medium text-black">{prod.name}</div>
// // //               <div className="mt-1 ml-4 space-y-1">
// // //                 {prod.variants.map((variant, j) => (
// // //                   <div key={j} className="text-gray-700">
// // //                     <div>
// // //                       Section: <span className="font-medium">{variant.section}</span>
// // //                     </div>
// // //                     <div>
// // //                       Length: <span className="font-medium">{variant.length}</span>
// // //                     </div>
// // //                     <div>
// // //                       Quantity: <span className="font-medium">{variant.qty}</span>
// // //                     </div>
// // //                     <div>
// // //                       Price: <span className="font-medium">₹ {variant.price?.toLocaleString()}</span>
// // //                     </div>
// // //                   </div>
// // //                 ))}
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
 
// // //         {/* Charges */}
// // //         <div className="grid grid-cols-2 pt-4 text-sm text-gray-700 border-t gap-y-2">
// // //           <div>Subtotal</div>
// // //           <div className="text-black">₹ {order?.subTotal?.toLocaleString()}</div>
 
// // //           <div>Loading Charge</div>
// // //           <div className="text-black">₹ {order?.loadingCharge?.toLocaleString()}</div>
 
// // //           <div>Insurance</div>
// // //           <div className="text-black">₹ {order?.insurance?.toLocaleString()}</div>
 
// // //           <div>GST Amount</div>
// // //           <div className="text-black">₹ {order?.gstAmount?.toLocaleString()}</div>
 
// // //           <div>TCS Amount</div>
// // //           <div className="text-black">₹ {order?.tcsAmount?.toLocaleString()}</div>
 
// // //           <div>Round Off</div>
// // //           <div className="text-black">₹ {order?.roundOff?.toFixed(2)}</div>
 
// // //           <div>Total Amount</div>
// // //           <div className="font-semibold text-black">₹ {order?.orderTotal?.toLocaleString()}</div>
// // //         </div>
 
// // //         {/* Invoices */}
// // //         <div className="pt-4 border-t">
// // //           <h2 className="mb-2 text-lg font-semibold">Invoices</h2>
// // //           <div className="space-y-2 text-sm text-blue-600">
// // //             {order?.invoiceOne && (
// // //               <div>
// // //                 Invoice 1:{" "}
// // //                 <Link
// // //                   href={`${process.env.NEXT_PUBLIC_BASE_URL}/invoice/${order.invoiceOne}`}
// // //                   target="_blank"
// // //                   className="hover:underline"
// // //                 >
// // //                   View PDF
// // //                 </Link>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };
 
// // // export default OrderDetailPage;



// // "use client";
// // import { useEffect } from "react";
// // import { useParams } from "next/navigation";
// // import { useDispatch, useSelector } from "react-redux";
// // import { getOrderDetail } from "@/redux/MyOrderDetailSlice";
// // import MainMenu from "@/components/wholesaler/MyAccount/MainMenu";
 
// // const OrderDetailPage = () => {
// //   const { orderId } = useParams();
// //   const dispatch = useDispatch();
 
// //   const { loading, order, error } = useSelector((state) => state.orderDetail);
 
// //   useEffect(() => {
// //     if (orderId) {
// //       dispatch(getOrderDetail(orderId));
// //     }
// //   }, [orderId, dispatch]);
 
// //   if (loading) return <div>Loading...</div>;
// //   if (error) return <div className="text-red-500">Error: {error}</div>;
 
// //   return (
// //     <div className="flex p-4 mx-auto space-x-4 bg-gray-100 max-w-7xl">
 
// //       {/* Order Details Content */}
// //       <div className="flex-grow p-6 bg-white rounded shadow">
// //         <h1 className="mb-6 text-2xl font-semibold text-gray-800">Order Details</h1>
 
// //         {/* Basic Info */}
// //         <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
// //           <h2 className="mb-3 text-lg font-semibold text-gray-700">Basic Information</h2>
// //           <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-3">
// //             <div className="font-medium">Order Number</div>
// //             <div className="font-semibold text-black">#{order?.orderNumber}</div>
 
// //             <div className="font-medium">Order Date</div>
// //             <div className="text-black">
// //               {order?.createdAt &&
// //                 new Date(order.createdAt).toLocaleDateString("en-GB", {
// //                   day: "2-digit",
// //                   month: "short",
// //                   year: "numeric",
// //                 })}
// //             </div>
 
// //             <div className="font-medium">Total Amount</div>
// //             <div className="font-semibold text-black">₹ {order?.orderTotal?.toLocaleString()}</div>
 
// //             <div className="font-medium">Status</div>
// //             <div className="font-semibold text-green-600">{order?.orderStatus}</div>
// //           </div>
// //         </div>
 
// //         {/* Order Items */}
// //         {order?.product && order.product.length > 0 && (
// //           <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
// //             <h2 className="mb-4 text-lg font-semibold text-black">Order Items</h2>
// //             {order.product.map((prod, i) => (
// //               <div key={i} className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm">
// //                 <div className="mb-2 text-base font-semibold text-gray-800">{prod.name}</div>
// //                 <div className="space-y-3">
// //                   {prod.variants.map((variant, j) => (
// //                     <div key={j} className="p-3 text-sm border border-gray-100 rounded shadow bg-gray-50">
// //                       <div className="flex justify-between text-black">
// //                         <div>
// //                           <div>Section : <span className="font-medium text-black">{variant.section}</span></div>
// //                           <div>Length : <span className="font-medium text-black">{variant.length}</span></div>
// //                           <div>Gauge Diff : <span className="font-medium text-black">{variant.gDiff}</span></div>
// //                         </div>
// //                         <div className="flex items-center gap-24">
// //                           <div> <span className="font-medium text-black">₹ {variant.price?.toLocaleString()}</span></div>
// //                           <div>Qty: <span className="font-medium text-black">{variant.qty}</span></div>
// //                           <div className="font-semibold text-black">
// //                             ₹ {(variant.price * variant.qty)?.toLocaleString()}
// //                           </div>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
 
// //         {/* Customer Address */}
// //         {order?.addressFullName && (
// //           <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
// //             <h2 className="mb-3 text-lg font-semibold text-black">Shipping Details</h2>
// //             <div className="grid grid-cols-1 text-sm text-black">
// //               <div className="font-medium"></div>
// //               <div className="text-black">{order?.addressFullName}</div>
// //               <div className="font-medium"></div>
// //               <div className="text-black">{order?.addressMobileNumber}</div>
// //               <div className="font-medium"></div>
// //               <div className="text-black">{order?.addressLine}</div>
// //             </div>
// //           </div>
// //         )}
 
// //         {/* GST Details */}
// //         {order?.gstNumber && (
// //           <div className="p-4 mb-6 border border-gray-200 rounded-md bg-gray-50">
// //             <h2 className="mb-3 text-lg font-semibold text-black">GST Details</h2>
// //             <div className="grid grid-cols-1 text-sm text-black gap-y-2">
// //               <div className="font-medium text-black">GSTIN: {order?.gstNumber}</div>
// //               {/* <div className="text-black"></div> */}
// //             </div>
// //           </div>
// //         )}
 
// //         {/* Order Summary */}
// //         <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
// //           <h2 className="mb-3 text-lg font-semibold text-black">Order Summary</h2>
// //           <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-2">
// //             <div>Subtotal</div>
// //             <div className="text-black">₹ {order?.subTotal?.toLocaleString()}</div>
 
// //             {order?.loadingCharge > 0 && (
// //               <>
// //                 <div>Loading Charge</div>
// //                 <div className="text-black">₹ {order?.loadingCharge?.toLocaleString()}</div>
// //               </>
// //             )}
 
// //             {order?.insurance > 0 && (
// //               <>
// //                 <div>Insurance</div>
// //                 <div className="text-black">₹ {order?.insurance?.toLocaleString()}</div>
// //               </>
// //             )}
 
// //             {order?.gstAmount > 0 && (
// //               <>
// //                 <div>GST Amount</div>
// //                 <div className="text-black">₹ {order?.gstAmount?.toLocaleString()}</div>
// //               </>
// //             )}
 
// //             {order?.tcsAmount > 0 && (
// //               <>
// //                 <div>TCS Amount</div>
// //                 <div className="text-black">₹ {order?.tcsAmount?.toLocaleString()}</div>
// //               </>
// //             )}
 
// //             <div>Round Off</div>
// //             <div className="text-black">₹ {order?.roundOff?.toFixed(2)}</div>
 
// //             <div className="font-semibold text-gray-800">Total Amount</div>
// //             <div className="font-semibold text-gray-800">₹ {order?.orderTotal?.toLocaleString()}</div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
 
// // export default OrderDetailPage;


// "use client";
// import { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderDetail } from "@/redux/MyOrderDetailSlice";
 
// const OrderDetailPage = () => {
//   const { orderId } = useParams();
//   const dispatch = useDispatch();
//   const { loading, order, error } = useSelector((state) => state.orderDetail);
 
//   useEffect(() => {
//     if (orderId) {
//       dispatch(getOrderDetail(orderId));
//     }
//   }, [orderId, dispatch]);
 
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">Error: {error}</div>;
 
//   return (
//     <div className="min-h-screen px-2 py-4 bg-gray-100 sm:px-4">
//       <div className="max-w-4xl mx-auto space-y-4">
//         <div className="p-4 bg-white rounded-lg shadow sm:p-6">
//           <h1 className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl">Order Details</h1>
 
//           {/* Basic Info */}
//           <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
//             <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Basic Information</h2>
//             <div className="space-y-2 text-sm text-gray-700 sm:space-y-3">
//               <div className="flex items-center justify-between">
//                 <div className="font-medium">Order Number</div>
//                 <div className="font-semibold text-black">#{order?.orderNumber}</div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="font-medium">Order Date</div>
//                 <div className="text-black">
//                   {order?.createdAt &&
//                     new Date(order.createdAt).toLocaleDateString("en-GB", {
//                       day: "2-digit",
//                       month: "short",
//                       year: "numeric",
//                     })}
//                 </div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="font-medium">Total Amount</div>
//                 <div className="font-semibold text-black">₹ {order?.orderTotal?.toLocaleString()}</div>
//               </div>
//               <div className="flex items-center justify-between">
//                 <div className="font-medium">Status</div>
//                 <div className="font-semibold text-black">{order?.orderStatus}</div>
//               </div>
//             </div>
//           </div>
 
//           {/* Order Items */}
 
//           {/* Order Items */}
//           {order?.product?.length > 0 && (
//             <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
//               <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Order Items</h2>
//               {order.product.map((prod, i) => (
//                 <div key={i} className="p-3 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-4">
//                   <div className="mb-2 text-sm font-semibold text-gray-800 sm:text-base">{prod.name}</div>
//                   <div className="space-y-3">
//                     {prod.variants.map((variant, j) => (
//                       <div
//                         key={j}
//                         className="p-3 text-sm border border-gray-100 rounded shadow bg-gray-50"
//                       >
//                         <div className="flex flex-col gap-4 text-black sm:flex-row sm:justify-between sm:items-center">
//                           <div className="space-y-1">
//                             <div>Section: <span className="font-medium text-black">{variant.section}</span></div>
//                             <div>Length: <span className="font-medium text-black">{variant.length}</span></div>
//                             <div>Gauge Diff: <span className="font-medium text-black">{variant.gDiff}</span></div>
//                           </div>
 
//                           <div className="flex flex-col w-full text-left items-left sm:items-start sm:flex-row sm:gap-6 sm:text-left sm:w-auto">
//                             <div>Price: <span className="font-medium text-black">₹ {variant.price?.toLocaleString()}</span></div>
//                             <div>Qty: <span className="font-medium text-black">{variant.qty}</span></div>
//                             <div className="font-semibold text-black">
//                               ₹ {(variant.price * variant.qty)?.toLocaleString()}
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//           {/* Shipping */}
//           {order?.addressFullName && (
//             <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
//               <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Shipping Details</h2>
//               <div className="space-y-1 text-sm text-black">
//                 <div>{order?.addressFullName}</div>
//                 <div>{order?.addressMobileNumber}</div>
//                 <div>{order?.addressLine}</div>
//               </div>
//             </div>
//           )}
 
//           {/* GST */}
//           {order?.gstNumber && (
//             <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
//               <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">GST Details</h2>
//               <div className="text-sm font-medium text-black">GSTIN: {order?.gstNumber}</div>
//             </div>
//           )}
 
//           {/* Summary */}
//           <div className="p-3 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
//             <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Order Summary</h2>
//             <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-2">
//               <div>Subtotal</div>
//               <div className="text-right text-black">₹ {order?.subTotal?.toLocaleString()}</div>
 
//               {order?.loadingCharge > 0 && (
//                 <>
//                   <div>Loading Charge (₹265 PMT)</div>
//                   <div className="text-right text-black">₹ {order.loadingCharge?.toLocaleString()}</div>
//                 </>
//               )}
 
//               {order?.insurance > 0 && (
//                 <>
//                   <div>Insurance (₹30 PMT)</div>
//                   <div className="text-right text-black">₹ {order.insurance?.toLocaleString()}</div>
//                 </>
//               )}
 
//               {order?.gstAmount > 0 && (
//                 <>
//                   <div>GST (18%)</div>
//                   <div className="text-right text-black">₹ {order.gstAmount?.toLocaleString()}</div>
//                 </>
//               )}
 
//               {order?.tcsAmount > 0 && (
//                 <>
//                   <div>TCS (0.1%)</div>
//                   <div className="text-right text-black">₹ {order.tcsAmount?.toLocaleString()}</div>
//                 </>
//               )}
 
 
//               <div>Round Off</div>
//               <div className="text-right text-black">₹ -{order?.roundOff?.toFixed(2)}</div>
 
//               <div className="font-semibold text-gray-800">Total Amount</div>
//               <div className="font-semibold text-right text-gray-800">₹ {order?.orderTotal?.toLocaleString()}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
 
// export default OrderDetailPage;

"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail , payInvoiceOne,payInvoiceTwo } from "@/redux/MyOrderDetailSlice";

const OrderDetailPage = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();
  const { loading, order, error } = useSelector((state) => state.orderDetail);

  useEffect(() => {
    if (orderId) {
      dispatch(getOrderDetail(orderId));
    }
  }, [orderId, dispatch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">Error: {error}</div>;

  return (
    <div className="min-h-screen px-2 py-4 bg-gray-100 sm:px-4">
      <div className="max-w-4xl mx-auto space-y-4">
        <div className="p-4 bg-white rounded-lg shadow sm:p-6">
          <h1 className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl">Order Details</h1>

          {/* Basic Info */}
          <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
            <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Basic Information</h2>
            <div className="space-y-2 text-sm text-gray-700 sm:space-y-3">
              <div className="flex items-center justify-between">
                <div className="font-medium">Order Number</div>
                <div className="font-semibold text-black">#{order?.orderNumber}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Order Date</div>
                <div className="text-black">
                  {order?.createdAt &&
                    new Date(order.createdAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Total Amount</div>
                <div className="font-semibold text-black">₹ {order?.orderTotal?.toLocaleString()}</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Status</div>
                <div className="font-semibold text-black">{order?.orderStatus}</div>
              </div>
            </div>
          </div>

{/*         
      {order?.invoiceOne && (
        <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
          <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">
            Invoice 1: Advance 10% Payment
          </h2>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <a
              href={`https://steel-junction.onrender.com/uploads/${order?.invoiceOne}`}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            {!order?.isPaidAdvanced && order?.orderStatus === "Pending" && (
              <button
                onClick={() => dispatch(payInvoiceOne(order._id)).then(() => dispatch(getOrderDetail(order._id)))}
                className="px-4 py-1 text-white bg-black rounded hover:bg-gray-800"
              >
                I Have Paid The Invoice
              </button>
            )}
          </div>
        </div>
      )}

      
      {order?.invoiceTwo && (
        <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
          <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">
            Invoice 2: Remaining 90% Payment
          </h2>
          <div className="flex items-center justify-between text-sm text-gray-700">
            <a
              href={`https://steel-junction.onrender.com/uploads/${order?.invoiceTwo}`}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View
            </a>
            {!order?.isPaidFinalPayment && order?.orderStatus === "Confirmed" && (
              <button
                onClick={() => dispatch(payInvoiceTwo(order._id)).then(() => dispatch(getOrderDetail(order._id)))}
                className="px-4 py-1 text-white bg-black rounded hover:bg-gray-800"
              >
                Pay The Remaining Amount (90%)
              </button>
            )}
          </div>
        </div>
      )} */}

          {/* Order Items */}
          {order?.product?.length > 0 && (
            <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
              <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Order Items</h2>
              {order.product.map((prod, i) => (
                <div key={i} className="p-3 mb-3 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-4">
                  <div className="mb-2 text-sm font-semibold text-gray-800 sm:text-base">{prod.name}</div>
                  <div className="space-y-3">
                    {prod.variants.map((variant, j) => (
                      <div
                        key={j}
                        className="p-3 text-sm border border-gray-100 rounded shadow bg-gray-50"
                      >
                        <div className="flex flex-col gap-4 text-black sm:flex-row sm:justify-between sm:items-center">
                          <div className="space-y-1">
                            <div>Section: <span className="font-medium text-black">{variant.section}</span></div>
                            <div>Length: <span className="font-medium text-black">{variant.length}</span></div>
                            <div>Gauge Diff: <span className="font-medium text-black">{variant.gDiff}</span></div>
                          </div>
 
                          <div className="flex flex-col w-full text-left items-left sm:items-start sm:flex-row sm:gap-6 sm:text-left sm:w-auto">
                            <div>Price: <span className="font-medium text-black">₹ {variant.price?.toLocaleString()}</span></div>
                            <div>Qty: <span className="font-medium text-black">{variant.qty}</span></div>
                            <div className="font-semibold text-black">
                              ₹ {(variant.price * variant.qty)?.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Shipping */}
          {order?.addressFullName && (
            <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
              <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Shipping Details</h2>
              <div className="space-y-1 text-sm text-black">
                <div>{order?.addressFullName}</div>
                <div>{order?.addressMobileNumber}</div>
                <div>{order?.addressLine}</div>
              </div>
            </div>
          )}
 
          {/* GST */}
          {order?.gstNumber && (
            <div className="p-3 mb-4 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
              <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">GST Details</h2>
              <div className="text-sm font-medium text-black">GSTIN: {order?.gstNumber}</div>
            </div>
          )}

          {/* Summary */}
          <div className="p-3 border border-gray-200 rounded-md sm:p-4 bg-gray-50">
            <h2 className="mb-2 text-base font-semibold text-black sm:text-lg">Order Summary</h2>
            <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-2">
              <div>Subtotal</div>
              <div className="text-right text-black">₹ {order?.subTotal?.toLocaleString()}</div>

              {order?.loadingCharge > 0 && (
                <>
                  <div>Loading Charge (₹265 PMT)</div>
                  <div className="text-right text-black">₹ {order.loadingCharge?.toLocaleString()}</div>
                </>
              )}

              {order?.insurance > 0 && (
                <>
                  <div>Insurance (₹30 PMT)</div>
                  <div className="text-right text-black">₹ {order.insurance?.toLocaleString()}</div>
                </>
              )}

              {order?.gstAmount > 0 && (
                <>
                  <div>GST (18%)</div>
                  <div className="text-right text-black">₹ {order.gstAmount?.toLocaleString()}</div>
                </>
              )}

              {order?.tcsAmount > 0 && (
                <>
                  <div>TCS (0.1%)</div>
                  <div className="text-right text-black">₹ {order.tcsAmount?.toLocaleString()}</div>
                </>
              )}

              <div>Round Off</div>
              <div className="text-right text-black">₹ -{order?.roundOff?.toFixed(2)}</div>

              <div className="font-semibold text-gray-800">Total Amount</div>
              <div className="font-semibold text-right text-gray-800">₹ {order?.orderTotal?.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

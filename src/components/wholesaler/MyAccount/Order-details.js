// // import React from "react";
// // import { User, ShoppingCart, MapPin, FileText, LogOut } from "lucide-react";
 
// // export default function OrderDetails() {
// //   return (
// //     <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// //       {/* Header */}
// //       <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// //         Order Details
// //       </div>
 
// //       <div className="flex flex-col gap-4 p-4 lg:flex-row">
// //         {/* Sidebar */}
// //         <aside className="w-full overflow-hidden border rounded-md lg:w-1/5">
// //           <div className="px-4 py-2 text-sm font-semibold text-white bg-black">
// //             My Account
// //           </div>
// //           <ul className="text-sm text-gray-700">
// //             <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
// //               <User size={16} /> Profile
// //             </li>
// //             <li className="flex items-center gap-2 px-4 py-3 font-medium text-black bg-gray-100 border-b">
// //               <ShoppingCart size={16} /> My Orders
// //             </li>
// //             <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
// //               <MapPin size={16} /> My Addresses
// //             </li>
// //             <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
// //               <FileText size={16} /> GST Details
// //             </li>
// //           </ul>
// //         </aside>
 
// //         {/* Order Details Content */}
// //         <main className="flex-grow p-4 space-y-6 bg-white border rounded-md">
// //           {/* Order Info */}
// //           <section>
// //             <h2 className="mb-2 text-base font-semibold">Order Info</h2>
// //             <div className="space-y-1 text-sm text-gray-700">
// //               <p>Order Number: <strong>#OD1817912IK</strong></p>
// //               <p>Order Date: <strong>29 Nov, 2024</strong></p>
// //               <p>Status: <strong className="text-cyan-600">Confirmed</strong></p>
// //             </div>
// //           </section>
 
// //           {/* Items */}
// //           <section>
// //             <h2 className="mb-2 text-base font-semibold">Order Items</h2>
// //             <div className="space-y-4">
// //               <div className="p-3 space-y-1 border rounded-md">
// //                 <p className="text-sm font-medium text-black">TMT Bar</p>
// //                 <p className="text-xs text-gray-600">Size: 20MM</p>
// //                 <p className="text-xs text-gray-600">Qty: 21.7 MT</p>
// //                 <p className="text-xs text-gray-600">₹ 10,83,313.7</p>
// //               </div>
// //               <div className="p-3 space-y-1 border rounded-md">
// //                 <p className="text-sm font-medium text-black">H Beam / RSJ Pole</p>
// //                 <p className="text-xs text-gray-600">Size: 200 x 100</p>
// //                 <p className="text-xs text-gray-600">Qty: 3 MT</p>
// //                 <p className="text-xs text-gray-600">₹ 2,57,212</p>
// //               </div>
// //             </div>
// //           </section>
 
// //           {/* Shipping Info */}
// //           <section>
// //             <h2 className="mb-2 text-base font-semibold">Shipping Details</h2>
// //             <p className="text-sm text-gray-700">
// //               MAHALAXMI TRADERS, KOTHUR, HYDERABAD, TELANGANA 509228
// //             </p>
// //           </section>
 
// //           {/* GST */}
// //           <section>
// //             <h2 className="mb-2 text-base font-semibold">GST Details</h2>
// //             <p className="text-sm text-gray-700">27ABCDE1234F1Z5</p>
// //           </section>
 
// //           {/* Summary */}
// //           <section>
// //             <h2 className="mb-2 text-base font-semibold">Order Summary</h2>
// //             <div className="space-y-1 text-sm text-gray-700">
// //               <p>Total Qty: 24.7 MT</p>
// //               <p>Subtotal: ₹ 11,28,404.7</p>
// //               <p>GST: ₹ 2,03,112.85</p>
// //               <p className="font-medium text-black">Order Total: ₹ 13,31,517.55</p>
// //             </div>
// //           </section>
// //         </main>
// //       </div>
// //     </div>
// //   );
// // }
 

// "use client";
// import { useEffect } from "react";
// import { useParams } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { getOrderDetail } from "@/redux/MyOrderDetailSlice";
// import Link from "next/link";
 
// const OrderDetailPage = () => {
//   const { orderId } = useParams();
//   const dispatch = useDispatch();
 
//   const { loading, order, error } = useSelector((state) => state.orderDetail);
 
//   useEffect(() => {
//      console.log("orderId:", orderId);
//     if (orderId) {
//       dispatch(getOrderDetail(orderId));
//     }
//   }, [orderId, dispatch]);
 
 
//   if (loading) return <div>Loading...</div>;
//   if (error) return <div className="text-red-500">Error: {error}</div>;
 
//   return (
//     <div className="max-w-3xl p-6 mx-auto bg-white rounded shadow">
//       <h1 className="mb-6 text-2xl font-semibold">Order Details</h1>
 
//       <div className="grid grid-cols-2 text-sm text-gray-600 gap-y-4">
//         <div className="font-medium">Order Number</div>
//         <div className="font-semibold text-black">#{order?._id}</div>
 
//         <div className="font-medium">Order Date</div>
//         <div className="text-black">
//           {order?.createdAt
//             ? new Date(order.createdAt).toLocaleDateString("en-GB", {
//                 day: "2-digit",
//                 month: "short",
//                 year: "numeric",
//               })
//             : ""}
//         </div>
 
//         <div className="font-medium">Total Amount</div>
//         <div className="font-semibold text-black">₹ {order?.totalAmount?.toLocaleString()}</div>
 
//         <div className="font-medium">Status</div>
//         <div className="font-semibold text-green-600">{order?.status}</div>
//       </div>
 
//       {/* <div className="pt-4 mt-6 space-y-3 text-sm text-gray-800 border-t">
//         <div className="flex justify-between">
//           <span>Invoice 1: Advance 10% Payment</span>
//           <Link href="#" className="font-medium text-blue-600 hover:underline">
//             View
//           </Link>
//         </div>
//         <div className="flex justify-between">
//           <span>Invoice 2: Remaining 90% Payment</span>
//           <Link href="#" className="font-medium text-blue-600 hover:underline">
//             View
//           </Link>
//         </div>
//         <div className="flex justify-between">
//           <span>Invoice</span>
//           <Link href="#" className="font-medium text-blue-600 hover:underline">
//             View
//           </Link>
//         </div>
//       </div> */}
//     </div>
//   );
// };
 
// export default OrderDetailPage;

"use client";
import { useEffect } from "react";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetail } from "@/redux/MyOrderDetailSlice";
import Link from "next/link";

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
    <div className="max-w-5xl p-6 mx-auto space-y-6 bg-white rounded shadow">
      <h1 className="mb-4 text-2xl font-bold">Order Details</h1>

      {/* Basic Info */}
      <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-3">
        <div className="font-medium">Order Number</div>
        <div className="font-semibold text-black">#{order?.orderNumber}</div>

        <div className="font-medium">Order Date</div>
        <div className="text-black">
          {order?.createdAt &&
            new Date(order.createdAt).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
        </div>

        <div className="font-medium">Status</div>
        <div className="font-semibold text-green-600">{order?.orderStatus}</div>

        <div className="font-medium">Total Quantity</div>
        <div className="text-black">{order?.totalQty}</div>

        <div className="font-medium">Gross Total</div>
        <div className="text-black">₹ {order?.grossTotal?.toLocaleString()}</div>
      </div>

      {/* Customer Info */}
      <div className="pt-4 border-t">
        <h2 className="mb-2 text-lg font-semibold">Customer Info</h2>
        <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2">
          <div className="font-medium">Name</div>
          <div>{order?.user?.name}</div>

          <div className="font-medium">Mobile</div>
          <div>{order?.addressMobileNumber}</div>

          <div className="font-medium">GST Number</div>
          <div>{order?.gstNumber}</div>

          <div className="font-medium">Address</div>
          <div>{order?.addressLine}</div>
        </div>
      </div>

      {/* Product Info */}
      <div className="pt-4 border-t">
        <h2 className="mb-2 text-lg font-semibold">Products</h2>
        {order?.product?.map((prod, i) => (
          <div key={i} className="mb-4 text-sm">
            <div className="font-medium text-black">{prod.name}</div>
            <div className="mt-1 ml-4 space-y-1">
              {prod.variants.map((variant, j) => (
                <div key={j} className="text-gray-700">
                  <div>
                    Section: <span className="font-medium">{variant.section}</span>
                  </div>
                  <div>
                    Length: <span className="font-medium">{variant.length}</span>
                  </div>
                  <div>
                    Quantity: <span className="font-medium">{variant.qty}</span>
                  </div>
                  <div>
                    Price: <span className="font-medium">₹ {variant.price?.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Charges */}
      <div className="grid grid-cols-2 pt-4 text-sm text-gray-700 border-t gap-y-2">
        <div>Subtotal</div>
        <div className="text-black">₹ {order?.subTotal?.toLocaleString()}</div>

        <div>Loading Charge</div>
        <div className="text-black">₹ {order?.loadingCharge?.toLocaleString()}</div>

        <div>Insurance</div>
        <div className="text-black">₹ {order?.insurance?.toLocaleString()}</div>

        <div>GST Amount</div>
        <div className="text-black">₹ {order?.gstAmount?.toLocaleString()}</div>

        <div>TCS Amount</div>
        <div className="text-black">₹ {order?.tcsAmount?.toLocaleString()}</div>

        <div>Round Off</div>
        <div className="text-black">₹ {order?.roundOff?.toFixed(2)}</div>

        <div>Total Amount</div>
        <div className="font-semibold text-black">₹ {order?.orderTotal?.toLocaleString()}</div>
      </div>

      {/* Invoices */}
      <div className="pt-4 border-t">
        <h2 className="mb-2 text-lg font-semibold">Invoices</h2>
        <div className="space-y-2 text-sm text-blue-600">
          {order?.invoiceOne && (
            <div>
              Invoice 1:{" "}
              <Link
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/invoice/${order.invoiceOne}`}
                target="_blank"
                className="hover:underline"
              >
                View PDF
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

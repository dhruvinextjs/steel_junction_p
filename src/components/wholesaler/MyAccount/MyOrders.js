// // // // "use client";
// // // // import React from "react";
// // // // import Image from "next/image";
// // // // import { ChevronRight } from "lucide-react";
// // // // import { useRouter } from "next/navigation";

// // // // const orders = [
// // // //   {
// // // //     id: "#OD1817912IK",
// // // //     status: "Pending",
// // // //     statusColor: "text-orange-500",
// // // //     date: "29 Nov, 2024",
// // // //     total: "₹ 13,40,526",
// // // //     items: [
// // // //       {
// // // //         name: "TMT Bar",
// // // //         qty: "21.7 MT",
// // // //         img: "/products/tmt-bar.jpg",
// // // //       },
// // // //       {
// // // //         name: "H Beam / RSJ Pole",
// // // //         qty: "3 MT",
// // // //         img: "/products/hbeam.jpg",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "#OD1817912IK",
// // // //     status: "Confirmed",
// // // //     statusColor: "text-cyan-600",
// // // //     date: "29 Nov, 2024",
// // // //     total: "₹ 13,40,526",
// // // //     items: [
// // // //       {
// // // //         name: "TMT Bar",
// // // //         qty: "21.7 MT",
// // // //         img: "/products/tmt-bar.jpg",
// // // //       },
// // // //       {
// // // //         name: "H Beam / RSJ Pole",
// // // //         qty: "3 MT",
// // // //         img: "/products/hbeam.jpg",
// // // //       },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "#OD1817912IK",
// // // //     status: "Processing",
// // // //     statusColor: "text-yellow-500",
// // // //     date: "29 Nov, 2024",
// // // //     total: "₹ 13,40,526",
// // // //     items: [
// // // //       {
// // // //         name: "TMT Bar",
// // // //         qty: "21.7 MT",
// // // //         img: "/products/tmt-bar.jpg",
// // // //       },
// // // //       {
// // // //         name: "H Beam / RSJ Pole",
// // // //         qty: "3 MT",
// // // //         img: "/products/hbeam.jpg",
// // // //       },
// // // //     ],
// // // //   },
// // // // ];

// // // // const MyOrders = () => {
// // // //   const router = useRouter();

// // // //   return (
// // // //     <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// // // //       <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// // // //         My Orders
// // // //       </div>

// // // //       <div className="p-4 space-y-6">
// // // //         {orders.map((order, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="relative px-4 py-3 space-y-3 border rounded-md shadow-sm"
// // // //           >
// // // //             {/* Order Header */}
// // // //             <div>
// // // //               <div className="flex items-center justify-between">
// // // //                 <p className="text-sm font-semibold">Order Number: {order.id}</p>
// // // //                 <p className={`text-sm font-semibold ${order.statusColor}`}>
// // // //                   {order.status}
// // // //                 </p>
// // // //               </div>
// // // //               <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
// // // //             </div>

// // // //             {/* Items List */}
// // // //             {order.items.map((item, j) => (
// // // //               <div key={j} className="flex items-center gap-4">
// // // //                 <Image
// // // //                   src={item.img}
// // // //                   alt={item.name}
// // // //                   width={50}
// // // //                   height={50}
// // // //                   className="rounded border w-[50px] h-[50px] object-cover"
// // // //                 />
// // // //                 <div>
// // // //                   <p className="text-sm font-medium">{item.name}</p>
// // // //                   <p className="text-xs text-gray-600">Qty: {item.qty}</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}

// // // //             <div className="h-[1px] bg-gray-300/50 my-2 w-full" />

// // // //             {/* Footer Section */}
// // // //             <div className="flex justify-between text-sm font-medium">
// // // //               <span>Total Amount: {order.total}</span>
// // // //               <span>{order.date}</span>
// // // //             </div>

// // // //             {/* ChevronRight click to navigate */}
// // // //             <div
// // // //               onClick={() => router.push("/order-details")}
// // // //               className="absolute p-1 text-white -translate-y-1/2 bg-black rounded-full cursor-pointer right-3 top-1/2"
// // // //             >
// // // //               <ChevronRight size={18} />
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MyOrders;

// // // "use client";
// // // import React, { useEffect } from "react";
// // // import Image from "next/image";
// // // import { ChevronRight } from "lucide-react";
// // // import { useRouter } from "next/navigation";
// // // import { useDispatch, useSelector, shallowEqual } from "react-redux";
// // // import { fetchOrders } from "@/redux/MyOrderSlice";

// // // const MyOrders = () => {
// // //   const router = useRouter();
// // //   const dispatch = useDispatch();

// // //   const {
// // //     orders = [],
// // //     loading = false,
// // //     error = null,
// // //   } = useSelector((state) => state.myOrders || {}, shallowEqual);

// // //   useEffect(() => {
// // //     dispatch(fetchOrders());
// // //   }, [dispatch]);

// // //   console.log(orders);
// // //   return (
// // //     <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// // //       <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// // //         My Orders
// // //       </div>

// // //       {loading && (
// // //         <div className="p-4 text-sm text-center text-gray-600">
// // //           Loading orders...
// // //         </div>
// // //       )}

// // //       {error && (
// // //         <div className="p-4 text-sm text-center text-red-500">{error}</div>
// // //       )}

// // //       {!loading && !error && (
// // //         <div className="p-4 space-y-6">
// // //           {orders.length === 0 ? (
// // //             <div className="text-sm text-center text-gray-500">
// // //               No orders found.
// // //             </div>
// // //           ) : (
// // //             orders.map((order, i) => (
// // //               <div
// // //                 key={order._id || i}
// // //                 className="relative px-4 py-3 space-y-3 border rounded-md shadow-sm"
// // //               >
// // //                 <div>
// // //                   <div className="flex items-center justify-between">
// // //                     <p className="text-sm font-semibold">
// // //                       Order Number: {order.orderNumber || order._id}
// // //                     </p>
// // //                     <p
// // //                       className={`text-sm font-semibold ${
// // //                         order.orderStatus === "Pending"
// // //                           ? "text-orange-500"
// // //                           : order.status === "Confirmed"
// // //                           ? "text-cyan-600"
// // //                           : order.status === "Processing"
// // //                           ? "text-yellow-500"
// // //                           : "text-green-600"
// // //                       }`}
// // //                     >
// // //                       {order.orderStatus}
// // //                     </p>
// // //                   </div>
// // //                   <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
// // //                 </div>

// // //                 {Array.isArray(order.product) &&
// // //                   order.product.map((prod, j) => {
// // //                     const name = prod?.pId?.name || "Product";
// // //                     const firstImage = prod?.pId?.images?.[0];
// // //                     let imageSrc = "/images/default.jpg"; // Default fallback image

// // //                     if (typeof firstImage === "string" && firstImage) {
// // //                       // Using external image URL like you did in the product details page
// // //                       imageSrc = `https://steel-junction.onrender.com/uploads/${firstImage}`;
// // //                     }

// // //                     return prod.variants.map((variant, k) => (
// // //                       <div
// // //                         key={`${j}-${k}`}
// // //                         className="flex items-center gap-4"
// // //                       >
// // //                         <Image
// // //                           src={imageSrc}
// // //                           alt={name}
// // //                           width={50}
// // //                           height={50}
// // //                           className="rounded border w-[50px] h-[50px] object-cover"
// // //                         />
// // //                         <div>
// // //                           <p className="text-sm font-medium">{name}</p>
// // //                           <p className="text-xs text-gray-600">
// // //                             Qty: {variant.qty}
// // //                           </p>
// // //                         </div>
// // //                       </div>
// // //                     ));
// // //                   })}

// // //                 <div className="h-[1px] bg-gray-300/50 my-2 w-full" />

// // //                 <div className="flex justify-between text-sm font-medium">
// // //                   <span>Total Amount: ₹ {order.grossTotal}</span>
// // //                   <span>{new Date(order.createdAt).toLocaleDateString()}</span>
// // //                 </div>

// // //                 <div
// // //   onClick={() => router.push(`/order-details/${order._id}`)}
// // //   className="absolute right-0 flex items-center justify-center w-6 text-white transition-colors -translate-y-1/2 bg-black rounded-r-lg cursor-pointer h-52 top-1/2 hover:bg-gray-800"
// // // >
// // //                   <ChevronRight size={18} />
// // //                 </div>
// // //               </div>
// // //             ))
// // //           )}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default MyOrders;

// // "use client";
// // import React, { useEffect } from "react";
// // import Image from "next/image";
// // import { ChevronRight } from "lucide-react";
// // import { useRouter } from "next/navigation";
// // import { useDispatch, useSelector, shallowEqual } from "react-redux";
// // import { fetchOrders } from "@/redux/MyOrderSlice";

// // const MyOrders = () => {
// //   const router = useRouter();
// //   const dispatch = useDispatch();

// //   const {
// //     orders = [],
// //     loading = false,
// //     error = null,
// //   } = useSelector((state) => state.myOrders || {}, shallowEqual);

// //   useEffect(() => {
// //     dispatch(fetchOrders());
// //   }, [dispatch]);

// //   return (
// //     <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// //       <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// //         My Orders
// //       </div>

// //       {loading && (
// //         <div className="p-4 text-sm text-center text-gray-600">
// //           Loading orders...
// //         </div>
// //       )}

// //       {error && (
// //         <div className="p-4 text-sm text-center text-red-500">{error}</div>
// //       )}

// //       {!loading && !error && (
// //         <div className="p-4 space-y-6">
// //           {orders.length === 0 ? (
// //             <div className="text-sm text-center text-gray-500">
// //               No orders found.
// //             </div>
// //           ) : (
// //             orders.map((order, i) => (
// //               <div
// //                 key={order._id || i}
// //                 className="relative px-4 py-3 space-y-3 overflow-hidden border rounded-md shadow-sm"
// //               >
// //                 <div>
// //                   <div className="flex items-center justify-between">
// //                     <p className="text-sm font-semibold">
// //                       Order Number: {order.orderNumber || order._id}
// //                     </p>
// //                     <p
// //                       className={`text-sm font-semibold ${
// //                         order.orderStatus === "Pending"
// //                           ? "text-orange-500"
// //                           : order.status === "Confirmed"
// //                           ? "text-cyan-600"
// //                           : order.status === "Processing"
// //                           ? "text-yellow-500"
// //                           : "text-green-600"
// //                       }`}
// //                     >
// //                       {order.orderStatus}
// //                     </p>
// //                   </div>
// //                   <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
// //                 </div>

// //                 {Array.isArray(order.product) &&
// //                   order.product.map((prod, j) => {
// //                     const name = prod?.pId?.name || "Product";
// //                     const firstImage = prod?.pId?.images?.[0];
// //                     let imageSrc = "/images/default.jpg"; // Default fallback image

// //                     if (typeof firstImage === "string" && firstImage) {
// //                       imageSrc = `https://steel-junction.onrender.com/uploads/${firstImage}`;
// //                     }

// //                     return prod.variants.map((variant, k) => (
// //                       <div
// //                         key={`${j}-${k}`}
// //                         className="flex items-center gap-4"
// //                       >
// //                         <Image
// //                           src={imageSrc}
// //                           alt={name}
// //                           width={50}
// //                           height={50}
// //                           className="rounded border w-[50px] h-[50px] object-cover"
// //                         />
// //                         <div>
// //                           <p className="text-sm font-medium">{name}</p>
// //                           <p className="text-xs text-gray-600">
// //                             Qty: {variant.qty}
// //                           </p>
// //                         </div>
// //                       </div>
// //                     ));
// //                   })}

// //                 <div className="h-[1px] bg-gray-300/50 my-2 w-full" />

// //                 <div className="flex justify-between text-sm font-medium">
// //                   <span>Total Amount: ₹ {order.grossTotal}</span>
// //                   <span>{new Date(order.createdAt).toLocaleDateString()}</span>
// //                 </div>

// //                 {/* Updated button styling to match the image exactly */}
// //                 <div
// //                   onClick={() => router.push(`/order-details/${order._id}`)}
// //                   className="absolute top-0 right-0 flex items-center justify-center w-5 text-white bg-black cursor-pointer bottom-4 rounded-r-md"
// //                 >
// //                   <ChevronRight size={18} />
// //                 </div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default MyOrders;

// "use client";
// import React, { useEffect } from "react";
// import Image from "next/image";
// import { ChevronRight } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector, shallowEqual } from "react-redux";
// import { fetchOrders } from "@/redux/MyOrderSlice";

// const MyOrders = () => {
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const {
//     orders = [],
//     loading = false,
//     error = null,
//   } = useSelector((state) => state.myOrders || {}, shallowEqual);

//   useEffect(() => {
//     dispatch(fetchOrders());
//   }, [dispatch]);

//   return (
//     <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
//       <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
//         My Orders
//       </div>

//       {loading && (
//         <div className="p-4 text-sm text-center text-gray-600">
//           Loading orders...
//         </div>
//       )}

//       {error && (
//         <div className="p-4 text-sm text-center text-red-500">{error}</div>
//       )}

//       {!loading && !error && (
//         <div className="p-4 space-y-6">
//           {orders.length === 0 ? (
//             <div className="text-sm text-center text-gray-500">
//               No orders found.
//             </div>
//           ) : (
//             orders.map((order, i) => (
//               <div
//                 key={order._id || i}
//                 className="relative px-4 py-3 space-y-3 overflow-hidden border rounded-md shadow-sm"
//               >
//                 <div>
//                   <div className="flex items-center justify-between">
//                     <p className="text-sm font-semibold">
//                       Order Number: {order.orderNumber || order._id}
//                     </p>
//                     <p
//                       className={`text-sm mr-6 font-semibold ${
//                         order.orderStatus === "Pending"
//                           ? "text-orange-500"
//                           : order.status === "Confirmed"
//                           ? "text-cyan-600"
//                           : order.status === "Processing"
//                           ? "text-yellow-500"
//                           : "text-green-600"
//                       }`}
//                     >
//                       {order.orderStatus}
//                     </p>
//                   </div>
//                   <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
//                 </div>

//                 {Array.isArray(order.product) &&
//                   order.product.map((prod, j) => {
//                     const name = prod?.pId?.name || "Product";
//                     const firstImage = prod?.pId?.images?.[0];
//                     let imageSrc = "/images/default.jpg"; // Default fallback image

//                     if (typeof firstImage === "string" && firstImage) {
//                       imageSrc = `https://steel-junction.onrender.com/uploads/${firstImage}`;
//                     }

//                     return prod.variants.map((variant, k) => (
//                       <div
//                         key={`${j}-${k}`}
//                         className="flex items-center gap-4"
//                       >
//                         <Image
//                           src={imageSrc}
//                           alt={name}
//                           width={50}
//                           height={50}
//                           className="rounded border w-[50px] h-[50px] object-cover"
//                         />
//                         <div>
//                           <p className="text-sm font-medium">{name}</p>
//                           <p className="text-xs text-gray-600">
//                             Qty: {variant.qty}
//                           </p>
//                         </div>
//                       </div>
//                     ));
//                   })}

//                 <div className="h-[1px] bg-gray-300/50 my-2 w-full" />

//                 <div className="flex justify-between mr-6 text-sm font-medium">
//                   <span>Total Amount: ₹ {order.grossTotal}</span>
//                   <span>{new Date(order.createdAt).toLocaleDateString()}</span>
//                 </div>

//                 {/* Exact button styling */}
//                 <div
//                   onClick={() => router.push(`/order-details/${order._id}`)}
//                   className="absolute right-0 flex items-center justify-center w-6 h-56 text-white bg-black rounded-r-lg cursor-pointer -top-3 "
//                 >
//                   <ChevronRight size={16} />
//                 </div>
//               </div>
//             ))
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyOrders;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { fetchOrders } from "@/redux/MyOrderSlice";

const MyOrders = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const orderCardRefs = useRef([]);

  const {
    orders = [],
    loading = false,
    error = null,
  } = useSelector((state) => state.myOrders || {}, shallowEqual);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  useEffect(() => {
    // After the component renders and order cards are in the DOM
    orderCardRefs.current.forEach((card, index) => {
      if (card) {
        const button = card.querySelector('.view-details-button');
        if (button) {
          // Make the button span the full height of the card
          button.style.top = '0';
          button.style.bottom = '0';
          button.style.height = 'auto'; // Ensure it stretches
        }
      }
    });
  }, [orders]); // Re-run when orders update

  return (
    <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
      <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
        My Orders
      </div>

      {loading && (
        <div className="p-4 text-sm text-center text-gray-600">
          Loading orders...
        </div>
      )}

      {error && (
        <div className="p-4 text-sm text-center text-red-500">{error}</div>
      )}

      {!loading && !error && (
        <div className="p-4 space-y-6">
          {orders.length === 0 ? (
            <div className="text-sm text-center text-gray-500">
              No orders found.
            </div>
          ) : (
            orders.map((order, i) => (
              <div
                key={order._id || i}
                className="relative px-4 py-3 space-y-3 overflow-hidden border rounded-md shadow-sm"
                ref={(el) => (orderCardRefs.current[i] = el)}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold">
                      Order Number: {order.orderNumber || order._id}
                    </p>
                    <p
                      className={`text-sm mr-6 font-semibold ${
                        order.orderStatus === "Pending"
                          ? "text-orange-500"
                          : order.status === "Confirmed"
                          ? "text-cyan-600"
                          : order.status === "Processing"
                          ? "text-yellow-500"
                          : "text-green-600"
                      }`}
                    >
                      {order.orderStatus}
                    </p>
                  </div>
                  <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
                </div>

                {Array.isArray(order.product) &&
                  order.product.map((prod, j) => {
                    const name = prod?.pId?.name || "Product";
                    const firstImage = prod?.pId?.images?.[0];
                    let imageSrc = "/images/default.jpg"; // Default fallback image

                    if (typeof firstImage === "string" && firstImage) {
                      imageSrc = `https://steel-junction.onrender.com/uploads/${firstImage}`;
                    }

                    return prod.variants.map((variant, k) => (
                      <div
                        key={`${j}-${k}`}
                        className="flex items-center gap-4"
                      >
                        <Image
                          src={imageSrc}
                          alt={name}
                          width={50}
                          height={50}
                          className="rounded border w-[50px] h-[50px] object-cover"
                        />
                        <div>
                          <p className="text-sm font-medium">{name}</p>
                          <p className="text-xs text-gray-600">
                            Qty: {variant.qty}
                          </p>
                        </div>
                      </div>
                    ));
                  })}

                <div className="h-[1px] bg-gray-300/50 my-2 w-full" />

                <div className="flex justify-between mr-6 text-sm font-medium">
                  <span>Total Amount: ₹ {order.grossTotal}</span>
                  <span>{new Date(order.createdAt).toLocaleDateString()}</span>
                </div>

                {/* View Details Button - Added a specific class */}
                <div
                  onClick={() => router.push(`/order-details/${order._id}`)}
                  className="absolute top-0 bottom-0 right-0 flex items-center justify-center w-4 text-white bg-black rounded-r-lg cursor-pointer view-details-button"
                  style={{ top: '0', bottom: '0', height: '100%' }}
                >
                  <ChevronRight size={16} />
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
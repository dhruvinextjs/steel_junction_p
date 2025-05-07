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
 
  return (
    <div className="flex flex-col min-h-screen p-2 bg-gray-50 md:flex-row md:p-4">
      {/* Orders Section */}
      <div className="w-full bg-white rounded-md">
        {/* Back Button + Heading */}
        <div className="flex items-center gap-3 px-4 py-2 border-b">
          {/* Back Button */}
          <div
            onClick={() => router.push("/wholesaler")}
            className="p-2 text-lg text-black rounded-full cursor-pointer hover:bg-gray-200"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </div>
 
          {/* Heading */}
          <div className="text-xl font-semibold text-black">My Orders</div>
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
          <div className="p-4 space-y-4">
            {orders.length === 0 ? (
              <div className="text-sm text-center text-gray-500">
                No orders found.
              </div>
            ) : (
              orders.map((order, i) => (
                <div
                  key={order._id || i}
                  className="relative flex flex-col overflow-hidden border rounded-lg shadow-sm md:flex-row"
                  ref={(el) => (orderCardRefs.current[i] = el)}
                >
                  <div className="flex-grow p-4 space-y-4">
                    {/* Order Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="text-sm font-semibold">
                        Order Number: {order.orderNumber || order._id}
                      </p>
                      <p
                        className={`text-sm font-semibold ${
                          order.orderStatus === "Pending"
                            ? "text-orange-500"
                            : order.orderStatus === "Confirmed"
                            ? "text-green-500"
                            : "text-cyan-600"
                        }`}
                      >
                        {order.orderStatus}
                      </p>
                    </div>
                    <div className="h-[1px] bg-gray-200" />
 
                    {/* Product List */}
                    <div className="space-y-2">
                      {Array.isArray(order.product) &&
                        order.product.map((prod, j) => {
                          const name = prod?.pId?.name || "Product";
                          const firstImage = prod?.pId?.images?.[0];
                          let imageSrc = "/images/default.jpg";
                          if (typeof firstImage === "string" && firstImage) {
                            imageSrc = `https://steel-junction.onrender.com/uploads/${firstImage}`;
                          }
 
                          return prod.variants.map((variant, k) => (
                            <div
                              key={`${j}-${k}`}
                              className="flex items-center gap-3 sm:gap-4"
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
                    </div>
 
                    <div className="h-[1px] bg-gray-200" />
 
                    {/* Order Footer */}
                    <div className="flex flex-wrap justify-between gap-2 text-sm font-medium">
                      <span>Total Amount: ₹ {order.grossTotal}</span>
                      <span>
                        {new Date(order.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
 
                  {/* Arrow Button */}
                  <div
                    onClick={() => router.push(`/order-details/${order._id}`)}
                    className="flex items-center justify-center w-full py-2 bg-black cursor-pointer md:w-4 md:py-0 md:rounded-r-md"
                  >
                    <ChevronRight size={16} className="text-white" />
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};
 
export default MyOrders;
 
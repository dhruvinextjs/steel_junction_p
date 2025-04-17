"use client";
import React from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
 
const orders = [
  {
    id: "#OD1817912IK",
    status: "Pending",
    statusColor: "text-orange-500",
    date: "29 Nov, 2024",
    total: "₹ 13,40,526",
    items: [
      {
        name: "TMT Bar",
        qty: "21.7 MT",
        img: "/products/tmt-bar.jpg",
      },
      {
        name: "H Beam / RSJ Pole",
        qty: "3 MT",
        img: "/products/hbeam.jpg",
      },
    ],
  },
  {
    id: "#OD1817912IK",
    status: "Confirmed",
    statusColor: "text-cyan-600",
    date: "29 Nov, 2024",
    total: "₹ 13,40,526",
    items: [
      {
        name: "TMT Bar",
        qty: "21.7 MT",
        img: "/products/tmt-bar.jpg",
      },
      {
        name: "H Beam / RSJ Pole",
        qty: "3 MT",
        img: "/products/hbeam.jpg",
      },
    ],
  },
  {
    id: "#OD1817912IK",
    status: "Processing",
    statusColor: "text-yellow-500",
    date: "29 Nov, 2024",
    total: "₹ 13,40,526",
    items: [
      {
        name: "TMT Bar",
        qty: "21.7 MT",
        img: "/products/tmt-bar.jpg",
      },
      {
        name: "H Beam / RSJ Pole",
        qty: "3 MT",
        img: "/products/hbeam.jpg",
      },
    ],
  },
];
 
const MyOrders = () => {
  const router = useRouter();
 
  return (
    <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
      <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
        My Orders
      </div>
 
      <div className="p-4 space-y-6">
        {orders.map((order, i) => (
          <div
            key={i}
            className="relative px-4 py-3 space-y-3 border rounded-md shadow-sm"
          >
            {/* Order Header */}
            <div>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Order Number: {order.id}</p>
                <p className={`text-sm font-semibold ${order.statusColor}`}>
                  {order.status}
                </p>
              </div>
              <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
            </div>
 
            {/* Items List */}
            {order.items.map((item, j) => (
              <div key={j} className="flex items-center gap-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded border w-[50px] h-[50px] object-cover"
                />
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-gray-600">Qty: {item.qty}</p>
                </div>
              </div>
            ))}
 
            <div className="h-[1px] bg-gray-300/50 my-2 w-full" />
 
            {/* Footer Section */}
            <div className="flex justify-between text-sm font-medium">
              <span>Total Amount: {order.total}</span>
              <span>{order.date}</span>
            </div>
 
            {/* ChevronRight click to navigate */}
            <div
              onClick={() => router.push("/order-details")}
              className="absolute p-1 text-white -translate-y-1/2 bg-black rounded-full cursor-pointer right-3 top-1/2"
            >
              <ChevronRight size={18} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default MyOrders;
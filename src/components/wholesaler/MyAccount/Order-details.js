import React from "react";
import { User, ShoppingCart, MapPin, FileText, LogOut } from "lucide-react";
 
export default function OrderDetails() {
  return (
    <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
      {/* Header */}
      <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
        Order Details
      </div>
 
      <div className="flex flex-col gap-4 p-4 lg:flex-row">
        {/* Sidebar */}
        <aside className="w-full overflow-hidden border rounded-md lg:w-1/5">
          <div className="px-4 py-2 text-sm font-semibold text-white bg-black">
            My Account
          </div>
          <ul className="text-sm text-gray-700">
            <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <User size={16} /> Profile
            </li>
            <li className="flex items-center gap-2 px-4 py-3 font-medium text-black bg-gray-100 border-b">
              <ShoppingCart size={16} /> My Orders
            </li>
            <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <MapPin size={16} /> My Addresses
            </li>
            <li className="flex items-center gap-2 px-4 py-3 border-b cursor-pointer hover:bg-gray-100">
              <FileText size={16} /> GST Details
            </li>
          </ul>
        </aside>
 
        {/* Order Details Content */}
        <main className="flex-grow p-4 space-y-6 bg-white border rounded-md">
          {/* Order Info */}
          <section>
            <h2 className="mb-2 text-base font-semibold">Order Info</h2>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Order Number: <strong>#OD1817912IK</strong></p>
              <p>Order Date: <strong>29 Nov, 2024</strong></p>
              <p>Status: <strong className="text-cyan-600">Confirmed</strong></p>
            </div>
          </section>
 
          {/* Items */}
          <section>
            <h2 className="mb-2 text-base font-semibold">Order Items</h2>
            <div className="space-y-4">
              <div className="p-3 space-y-1 border rounded-md">
                <p className="text-sm font-medium text-black">TMT Bar</p>
                <p className="text-xs text-gray-600">Size: 20MM</p>
                <p className="text-xs text-gray-600">Qty: 21.7 MT</p>
                <p className="text-xs text-gray-600">₹ 10,83,313.7</p>
              </div>
              <div className="p-3 space-y-1 border rounded-md">
                <p className="text-sm font-medium text-black">H Beam / RSJ Pole</p>
                <p className="text-xs text-gray-600">Size: 200 x 100</p>
                <p className="text-xs text-gray-600">Qty: 3 MT</p>
                <p className="text-xs text-gray-600">₹ 2,57,212</p>
              </div>
            </div>
          </section>
 
          {/* Shipping Info */}
          <section>
            <h2 className="mb-2 text-base font-semibold">Shipping Details</h2>
            <p className="text-sm text-gray-700">
              MAHALAXMI TRADERS, KOTHUR, HYDERABAD, TELANGANA 509228
            </p>
          </section>
 
          {/* GST */}
          <section>
            <h2 className="mb-2 text-base font-semibold">GST Details</h2>
            <p className="text-sm text-gray-700">27ABCDE1234F1Z5</p>
          </section>
 
          {/* Summary */}
          <section>
            <h2 className="mb-2 text-base font-semibold">Order Summary</h2>
            <div className="space-y-1 text-sm text-gray-700">
              <p>Total Qty: 24.7 MT</p>
              <p>Subtotal: ₹ 11,28,404.7</p>
              <p>GST: ₹ 2,03,112.85</p>
              <p className="font-medium text-black">Order Total: ₹ 13,31,517.55</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
 
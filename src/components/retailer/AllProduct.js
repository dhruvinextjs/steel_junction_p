"use client";
import React, { useState } from "react";
import CommonBannerPage from "../global/CommonBanner";

const products = [
  {
    name: "TMT Bar",
    id: "tmt",
    details: [
      { type: "Basic Rate", ISI: "39511", Jindal: "41711" },
      { type: "8, 32mm (GD 5500)", ISI: "46011", Jindal: "48211" },
      { type: "10mm (GD 5500)", ISI: "45011", Jindal: "47211" },
      { type: "12, 16, 20, 25mm (GD 5000)", ISI: "44511", Jindal: "46711" },
    ],
  },
  {
    name: "Angle",
    id: "angle",
    details: [{ type: "Basic Rate", ISI: "39000", Jindal: "41000" }],
  },
  {
    name: "Channel",
    id: "channel",
    details: [{ type: "Basic Rate", ISI: "39800", Jindal: "41800" }],
  },
  {
    name: "Angl",
    id: "angl",
    details: [{ type: "Basic Rate", ISI: "39000", Jindal: "41000" }],
  },
  {
    name: "Channe",
    id: "channe",
    details: [{ type: "Basic Rate", ISI: "39800", Jindal: "41800" }],
  },
];

const AllProductPage = () => {
  const [activeTab, setActiveTab] = useState("tmt");
  const activeProduct = products.find((p) => p.id === activeTab);
  return (
    <div className="w-full space-y-5 md:space-y-10">
      <CommonBannerPage
        image="/static/images/commonbanner.png"
        title="All Products"
      />
      <div className="container ">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-300">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`px-6 py-3 text-sm font-semibold ${
                activeTab === product.id
                  ? "text-black border-b-2 border-red-500"
                  : "text-gray-600"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Details */}
        <h2 className="text-lg font-bold">{activeProduct.name}</h2>
        <div className="flex items-start justify-between p-6 mt-4 bg-white shadow-md">
          <table className="w-full mt-4 border">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Type</th>
                <th className="px-4 py-2">ISI</th>
                <th className="px-4 py-2">Jindal</th>
              </tr>
            </thead>
            <tbody>
              {activeProduct.details.map((item, index) => (
                <tr key={index} className="border">
                  <td className="px-4 py-2">{item.type}</td>
                  <td className="px-4 py-2">{item.ISI}</td>
                  <td className="px-4 py-2">{item.Jindal}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Terms and Conditions */}
          <div className="mt-4">
            <p className="font-semibold text-red-600">
              Jindal TMT 550D available for Chhattisgarh, Madhya Pradesh, and
              Maharashtra
            </p>
            <h3 className="mt-2 font-semibold">TERMS AND CONDITIONS</h3>
            <ul className="pl-6 mt-2 text-sm list-disc">
              <li>
                Payment: 10% Advance with order Balance against E Invoice after
                loading
              </li>
              <li>Commercial grade material with ISI certificate</li>
              <li>Delivery Immediate</li>
              <li>Validity period 3 days</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;

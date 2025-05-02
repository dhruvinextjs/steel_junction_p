"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetFaqs } from "@/redux/GetContentSlice";
import { FaEnvelope } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
 
const FaqList = () => {
  const dispatch = useDispatch();
  const { faqs, loading, error } = useSelector((state) => state.getContent);
  const [activeIndex, setActiveIndex] = useState(null);
 
  useEffect(() => {
    if (!faqs || !Array.isArray(faqs)) {
      dispatch(handleGetFaqs());
    }
  }, [dispatch, faqs]);
 
  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
 
  if (loading) {
    return <p className="text-center text-gray-500">Loading FAQs...</p>;
  }
 
  if (error) {
    return <p className="text-center text-red-500">Error: {error}</p>;
  }
 
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header with background image */}
      <div
        className="relative flex items-center justify-center h-64 bg-center bg-cover"
        style={{ backgroundImage: "url('/static/images/commonbanner.png')" }}
      >
        <h2 className="z-10 text-3xl font-bold tracking-wider text-white uppercase">HELP</h2>
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>
 
      {/* Logo */}
      <div className="flex justify-center mt-10 mb-8">
        <img src="/static/images/logo.png" alt="Logo" className="h-20" />
      </div>
 
      {/* Centered Content (Email + FAQs) */}
      <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
        {/* Email box */}
        <div className="flex items-center gap-4 p-3 mb-8 bg-white border border-gray-300 rounded">
          {/* Icon */}
          <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
            <FaEnvelope className="text-xl text-green-600" />
          </div>
 
          {/* Divider line */}
          <div className="w-px h-8 bg-gray-300"></div>
 
          {/* Text */}
          <div>
            <p className="text-xs text-gray-500">Email us for any help</p>
            <p className="text-sm font-normal text-gray-900">loremIpsum@gmail.com</p>
          </div>
        </div>
 
 
 
        {/* FAQs */}
        <div className="space-y-4">
          {Array.isArray(faqs) &&
            faqs.map((faq, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-lg shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex items-center justify-between w-full p-4 text-base font-semibold text-left text-gray-800 focus:outline-none"
                >
                  {faq.question}
                  {activeIndex === index ? (
                    <IoIosArrowUp className="text-2xl" />
                  ) : (
                    <IoIosArrowDown className="text-2xl" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="p-4 pt-0 text-sm text-gray-700 transition-all duration-300 ease-in-out">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
 
export default FaqList;
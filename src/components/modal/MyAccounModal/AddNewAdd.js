import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAddress } from "@/redux/AddressSlice";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AddNewAdd = ({ setEditNewAddress }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [isDefault, setIsDefault] = useState(false);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("fullName", data.fullName);
    formData.append("mobileNumber", data.mobileNumber);
    formData.append("addressLine", data.addressLine);
    formData.append("isDefault", isDefault ? "1" : "0");

    dispatch(addAddress(formData)).then((res) => {
      if (!res.error) {
        setEditNewAddress(false);
      }
    });
  };

  return (
    <div className="relative bg-white rounded-md">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block text-xs text-gray-700">
            Your Name
          </label>
          <input
            {...register("fullName")}
            id="fullName"
            placeholder="Type here..."
            className="w-full p-2 mt-1 text-xs border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="mobileNumber" className="block text-xs text-gray-700">
            Mobile Number
          </label>
          <input
            {...register("mobileNumber")}
            id="mobileNumber"
            placeholder="Type here..."
            className="w-full p-2 mt-1 text-xs border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label htmlFor="addressLine" className="block text-xs text-gray-700">
            Address
          </label>
          <textarea
            {...register("addressLine")}
            id="addressLine"
            placeholder="Type here..."
            rows="3"
            className="w-full p-2 mt-1 text-xs border border-gray-300 rounded-md resize-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={isDefault}
            onChange={(e) => setIsDefault(e.target.checked)}
            className="w-4 h-4 text-indigo-600 border-gray-300 rounded form-checkbox focus:ring-indigo-500"
          />
          Set as default address
        </label>
        <button
          type="submit"
          className="py-2 text-sm font-medium text-white bg-black rounded-md w-36 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddNewAdd;
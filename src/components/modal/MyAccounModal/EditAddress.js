"use client";

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress, getAddressList } from "@/redux/AddressSlice";
import { Button } from "@/components/ui/button";
import Label from "@/components/ui/form/label";

const EditAddress = ({ setEditAddress, address }) => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const [name, setName] = useState(address?.fullName || "");
  const [phone, setPhone] = useState(address?.mobileNumber || "");
  const [addr, setAddr] = useState(address?.addressLine || "");
  const [isDefault, setIsDefault] = useState(address?.isDefault || false);

  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullName", name);
    formData.append("mobileNumber", phone);
    formData.append("addressLine", addr);
    formData.append("isDefault", isDefault ? "1" : "0");

    dispatch(updateAddress({ id: address._id, formData, token }))
      .then(() => {
        dispatch(getAddressList(token));
        setEditAddress(false); // Hide the form after update
      })
      .catch((error) => {
        console.error("Error in update address dispatch:", error);
      });
  };

  return (
    <form className="space-y-4" onSubmit={handleUpdate}>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="name" text="Your Name" />
        <input
          type="text"
          name="name"
          className="input_field"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="phone" text="Mobile Number" />
        <input
          type="text"
          name="phone"
          className="input_field"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <Label htmlFor="address" text="Address" />
        <textarea
          rows={4}
          name="address"
          className="input_field"
          placeholder="Enter Full Address"
          value={addr}
          onChange={(e) => setAddr(e.target.value)}
        />
      </div>
      <div className="w-full space-y-1 text-left">
        <input
          type="checkbox"
          name="isDefault"
          checked={isDefault}
          onChange={() => setIsDefault(!isDefault)}
        />
        <Label htmlFor="isDefault" text="Set as Default Address" className={"ml-1"} />
      </div>
      <div className="flex items-center gap-3 w-36">
        <Button type="submit" variant="primary">Update</Button>
      </div>
    </form>
  );
};

export default EditAddress;

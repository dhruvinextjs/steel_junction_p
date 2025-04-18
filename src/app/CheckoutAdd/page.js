"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressList,
  deleteAddress,
  setDefaultAddress,
} from "@/redux/AddressSlice";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdOutlineModeEdit } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";
import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
import EditAddress from "@/components/modal/MyAccounModal/EditAddress";

const Addresses = () => {
  const dispatch = useDispatch();
  const { addresses, defaultAddressId } = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.auth);

  const [editNewAddress, setEditNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);

  useEffect(() => {
    if (token) dispatch(getAddressList());
  }, [token, dispatch]);

  useEffect(() => {
    setSelectedAddress(defaultAddressId);
  }, [defaultAddressId]);

  const handleDelete = (id) => {
    dispatch(deleteAddress({ id, token }));
  };

  const handleSetDefault = (id) => {
    setSelectedAddress(id);
    dispatch(setDefaultAddress({ id, token }));
  };

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
      <div className="space-y-3">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          <RadioGroup value={selectedAddress}>
            {addresses.map((address) => (
              <div
                key={address._id}
                className="border rounded-md border-[#E6E6E6] w-full p-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <RadioGroupItem
                      value={address._id} // Use _id as the unique identifier
                      id={address._id}
                      checked={selectedAddress === address._id}
                      onChange={() => handleSetDefault(address._id)}
                    />
                    <div className="w-[80%] font-medium text-sm space-y-1">
                      <p className="font-semibold">{address.fullName}</p>
                      <p className="whitespace-pre-line">
                        {address.addressLine}
                      </p>
                      <p className="text-black">
                        Phone: {address.mobileNumber}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dialog open={editAddress} onOpenChange={setEditAddress}>
                      <DialogTrigger asChild>
                        <button
                          onClick={() => {
                            setEditAddress(true);
                            setCurrentEditData(address);
                          }}
                        >
                          <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
                        </button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[450px]">
                        <DialogTitle>Edit Address</DialogTitle>
                        <DialogDescription>
                          Update your existing address information.
                        </DialogDescription>
                        <hr />
                        <EditAddress
                          setEditAddress={setEditAddress}
                          address={currentEditData}
                        />
                      </DialogContent>
                    </Dialog>
                    <AiOutlineDelete
                      className="text-[#FE3000] text-xl cursor-pointer"
                      onClick={() => handleDelete(address._id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <p className="text-gray-500">No addresses found.</p>
        )}
        <Dialog open={editNewAddress}>
          <DialogTrigger
            onClick={() => setEditNewAddress(true)}
            className="focus:outline-none capitalize bg-[#000] p-3 rounded-md hover:bg-[#3d3d3d] text-white font-medium active:scale-90 transition text-sm"
          >
            + Add new Address
          </DialogTrigger>
          <DialogContent
            close={() => setEditNewAddress(false)}
            className="sm:max-w-[450px]"
          >
            <DialogTitle>Add New Address</DialogTitle>
            <DialogDescription>
              Enter your full address and contact details.
            </DialogDescription>
            <hr />
            <AddNewAdd setEditNewAddress={setEditNewAddress} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Addresses;
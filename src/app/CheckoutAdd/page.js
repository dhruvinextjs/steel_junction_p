"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddressList, setDefaultAddress } from "@/redux/AddressSlice";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MdOutlineModeEdit } from "react-icons/md";
import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
import { useRouter } from "next/navigation";

const Addresses = () => {
  const dispatch = useDispatch();
  const { addresses, defaultAddressId } = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.auth);

  const [editNewAddress, setEditNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);
  const router = useRouter()

  // Fetch address list on load
  useEffect(() => {
    if (token) dispatch(getAddressList());
  }, [token, dispatch]);

  // Sync local state with Redux default address
  useEffect(() => {
    setSelectedAddressId(defaultAddressId);
  }, [defaultAddressId]);

  // Handle making address default
  const handleSetDefault = async (id) => {
    setSelectedAddressId(id); // Update local UI immediately
    await dispatch(setDefaultAddress({ selectedId: id, allAddresses: addresses, token }));
    dispatch(getAddressList()); // Refresh updated list if needed
    router.push("/OrderSummary");
  };
  

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
      <div className="space-y-3">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          <RadioGroup value={selectedAddressId}   onValueChange={(addressId) => handleSetDefault(addressId)}>
            {addresses.map((address) => (
              <div
                key={address._id}
                className={`border rounded-md border-[#E6E6E6] w-full p-3 ${
                  selectedAddressId === address._id ? "bg-[#F0F9FF]" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-start gap-4">
                    <RadioGroupItem value={address._id} id={address._id} />
                    <div className="w-[80%] font-medium text-sm space-y-1">
                      <p className="font-semibold">{address.fullName}</p>
                      <p className="whitespace-pre-line">{address.addressLine}</p>
                      <p className="text-black">Phone: {address.mobileNumber}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {selectedAddressId === address._id && (
                      <span className="text-sm font-semibold text-green-600">
                        Default
                      </span>
                    )}

                    {/* Edit Address Modal */}
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
                        <hr />
                        <EditAddress
                          setEditAddress={setEditAddress}
                          address={currentEditData}
                        />
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </RadioGroup>
        ) : (
          <p className="text-gray-500">No addresses found.</p>
        )}

        {/* Add New Address */}
        <Dialog open={editNewAddress} onOpenChange={setEditNewAddress}>
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
            <hr />
            <AddNewAdd setEditNewAddress={setEditNewAddress} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Addresses;
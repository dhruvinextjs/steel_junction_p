// // import EditAddress from "@/components/modal/MyAccounModal/EditAddress";
// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogTitle,
// //   DialogTrigger,
// // } from "@/components/ui/dialog";
// // import React, { useState } from "react";
// // import { MdOutlineModeEdit } from "react-icons/md";
// // import { AiOutlineDelete } from "react-icons/ai";
// // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// // import { Button } from "@/components/ui/button";

// // const Addresses = () => {
// //   const [editAddress, setEditAddress] = useState(false);
// //   const [editNewAddress, setEditNewAddress] = useState(false);

// //   return (
// //     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
// //       <div className="space-y-4">
// //         <p className="text-xl text-[#25324B] font-semibold">Addresses</p>
// //         <div className="space-y-3">
// //           <RadioGroup defaultValue="option-one">
// //             <div className="border rounded-md border-[#E6E6E6] w-full p-3">
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-start gap-4">
// //                   <RadioGroupItem value="option-one" id="option-one" />
// //                   <div className="w-[80%] font-medium">
// //                     <p>John wade</p>
// //                     <p>
// //                       SHREE BHAGWATI STEEL TRADERS, PLOT NO. 255, PHASE-2, GIDC,
// //                       DEDIYASAN, MEHSANA, GUJARAT, INDIA-10001.
// //                     </p>
// //                     <p>Phone: 9874561230</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                   <Dialog open={editAddress}>
// //                     <DialogTrigger
// //                       onClick={(e) => setEditAddress(true)}
// //                       className=""
// //                     >
// //                       <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
// //                     </DialogTrigger>
// //                     <DialogContent
// //                       close={setEditAddress}
// //                       className="sm:max-w-[450px]"
// //                     >
// //                       <DialogTitle>Edit Address</DialogTitle>
// //                       <hr />
// //                       <EditAddress setEditAddress={setEditAddress} />
// //                     </DialogContent>
// //                   </Dialog>

// //                   <AiOutlineDelete className="text-[#FE3000] text-xl" />
// //                 </div>
// //               </div>
// //             </div>
// //             <div className="border rounded-md border-[#E6E6E6] w-full p-3">
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-start gap-4">
// //                   <RadioGroupItem value="option-two" id="option-two" />
// //                   <div className="w-[80%] font-medium">
// //                     <p>John wade</p>
// //                     <p>
// //                       SHREE BHAGWATI STEEL TRADERS, PLOT NO. 255, PHASE-2, GIDC,
// //                       DEDIYASAN, MEHSANA, GUJARAT, INDIA-10001.
// //                     </p>
// //                     <p>Phone: 9874561230</p>
// //                   </div>
// //                 </div>
// //                 <div className="flex items-center gap-2">
// //                    <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
// //                   <AiOutlineDelete className="text-[#FE3000] text-xl" />
// //                 </div>
// //               </div>
// //             </div>
// //           </RadioGroup>
// //           <Dialog open={editNewAddress}>
// //             <DialogTrigger
// //               onClick={(e) => setEditNewAddress(true)}
// //               className="focus:outline-none capitalize bg-[#000] p-3 rounded-md  hover:bg-[#3d3d3d] text-white font-medium  active:scale-90 transition text-sm"
// //             >
// //               + Add new Address
// //             </DialogTrigger>
// //             <DialogContent
// //               close={setEditNewAddress}
// //               className="sm:max-w-[450px]"
// //             >
// //               <DialogTitle>Add New Address</DialogTitle>
// //               <hr />
// //               <AddNewAdd setEditNewAddress={setEditNewAddress} />
// //             </DialogContent>
// //           </Dialog>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Addresses;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addAddress ,  getAddressList} from "@/redux/AddressSlice";
// import { Button } from "@/components/ui/button";
// import Label from "@/components/ui/form/label";

// const AddNewAdd = ({ setEditNewAddress }) => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);

//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");

//   const handleAdd = (e) => {
//     e.preventDefault();
//     if (!name || !phone || !address) {
//       toast.error("All fields are required!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("name", name);
//     formData.append("phone", phone);
//     formData.append("address", address);

//     dispatch(addAddress({ formData, token })).then(() => {
//       dispatch(getAddressList(token));
//       setEditNewAddress(false);
//     }).catch((err) => {
//       toast.error(err?.response?.data?.message || "Failed to add address");
//     });
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleAdd}>
//       <div className="w-full space-y-1 text-left">
//         <Label htmlFor="name" text="Your Name" />
//         <input
//           type="text"
//           name="name"
//           className="input_field"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div className="w-full space-y-1 text-left">
//         <Label htmlFor="phone" text="Mobile Number" />
//         <input
//           type="text"
//           name="phone"
//           className="input_field"
//           placeholder="Enter Phone Number"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//       </div>
//       <div className="w-full space-y-1 text-left">
//         <Label htmlFor="address" text="Address" />
//         <textarea
//           rows={4}
//           name="address"
//           className="input_field"
//           placeholder="Enter Full Address"
//           value={address}
//           onChange={(e) => setAddress(e.target.value)}
//         />
//       </div>

//       <div className="flex items-center gap-3">
//         <Button type="submit" variant="primary" className="w-auto">
//           Add
//         </Button>
//         <Button variant="disable" type="button" onClick={() => setEditNewAddress(false)}>
//           Close
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default AddNewAdd;

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
    dispatch(setDefaultAddress({ selectedId: id, token }));
  };

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
      <div className="space-y-3">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          <RadioGroup value={selectedAddress}   onValueChange={(id) => handleSetDefault(id)}>
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
                      // checked={selectedAddress === address._id}
                      // onChange={() => handleSetDefault(address._id)}
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
                        {/* <DialogDescription>
                          Update your existing address information.
                        </DialogDescription> */}
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
            {/* <DialogDescription>
              Enter your full address and contact details.
            </DialogDescription> */}
            <hr />
            <AddNewAdd setEditNewAddress={setEditNewAddress} />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Addresses;
// // // // "use client"
// // // // import React, { useEffect, useState } from "react";
// // // // import { useDispatch, useSelector } from "react-redux";
// // // // import {
// // // //   getAddressList,
// // // //   deleteAddress,
// // // //   setDefaultAddress,
// // // // } from "@/redux/AddressSlice";
// // // // import {
// // // //   Dialog,
// // // //   DialogContent,
// // // //   DialogTitle,
// // // //   DialogTrigger,
// // // //   DialogDescription,
// // // // } from "@/components/ui/dialog";
// // // // import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// // // // import { MdOutlineModeEdit } from "react-icons/md";
// // // // import { AiOutlineDelete } from "react-icons/ai";
// // // // import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// // // // import EditAddress from "@/components/modal/MyAccounModal/EditAddress";

// // // // const Addresses = () => {
// // // //   const dispatch = useDispatch();
// // // //   const { addresses, defaultAddressId } = useSelector((state) => state.address);
// // // //   const { token } = useSelector((state) => state.auth);

// // // //   const [editNewAddress, setEditNewAddress] = useState(false);
// // // //   const [editAddress, setEditAddress] = useState(false);
// // // //   const [selectedAddress, setSelectedAddress] = useState(null);
// // // //   const [currentEditData, setCurrentEditData] = useState(null);

// // // //   useEffect(() => {
// // // //     if (token) dispatch(getAddressList());
// // // //   }, [token, dispatch]);

// // // //   useEffect(() => {
// // // //     setSelectedAddress(defaultAddressId);
// // // //   }, [defaultAddressId]);

// // // //   const handleDelete = (id) => {
// // // //     dispatch(deleteAddress({ id, token }));
// // // //   };

// // // //   const handleSetDefault = (id) => {
// // // //     setSelectedAddress(id);
// // // //     dispatch(setDefaultAddress({ id, token }));
// // // //   };

// // // //   return (
// // // //     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
// // // //       <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
// // // //       <div className="space-y-3">
// // // //         {Array.isArray(addresses) && addresses.length > 0 ? (
// // // //           <RadioGroup value={selectedAddress}>
// // // //             {addresses.map((address) => (
// // // //               <div
// // // //                 key={address._id}
// // // //                 className="border rounded-md border-[#E6E6E6] w-full p-3"
// // // //               >
// // // //                 <div className="flex items-center justify-between">
// // // //                   <div className="flex items-start gap-4">
// // // //                     <RadioGroupItem
// // // //                       value={address._id} // Use _id as the unique identifier
// // // //                       id={address._id}
// // // //                       checked={selectedAddress === address._id}
// // // //                       onChange={() => handleSetDefault(address._id)}
// // // //                     />
// // // //                     <div className="w-[80%] font-medium text-sm space-y-1">
// // // //                       <p className="font-semibold">{address.fullName}</p>
// // // //                       <p className="whitespace-pre-line">
// // // //                         {address.addressLine}
// // // //                       </p>
// // // //                       <p className="text-black">
// // // //                         Phone: {address.mobileNumber}
// // // //                       </p>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="flex items-center gap-2">
// // // //                     <Dialog open={editAddress} onOpenChange={setEditAddress}>
// // // //                       <DialogTrigger asChild>
// // // //                         <button
// // // //                           onClick={() => {
// // // //                             setEditAddress(true);
// // // //                             setCurrentEditData(address);
// // // //                           }}
// // // //                         >
// // // //                           <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
// // // //                         </button>
// // // //                       </DialogTrigger>
// // // //                       <DialogContent className="sm:max-w-[450px]">
// // // //                         <DialogTitle>Edit Address</DialogTitle>
// // // //                         {/* <DialogDescription>
// // // //                           Update your existing address information.
// // // //                         </DialogDescription> */}
// // // //                         <hr />
// // // //                         <EditAddress
// // // //                           setEditAddress={setEditAddress}
// // // //                           address={currentEditData}
// // // //                         />
// // // //                       </DialogContent>
// // // //                     </Dialog>
// // // //                     <AiOutlineDelete
// // // //                       className="text-[#FE3000] text-xl cursor-pointer"
// // // //                       onClick={() => handleDelete(address._id)}
// // // //                     />
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </RadioGroup>
// // // //         ) : (
// // // //           <p className="text-gray-500">No addresses found.</p>
// // // //         )}
// // // //         <Dialog open={editNewAddress}>
// // // //           <DialogTrigger
// // // //             onClick={() => setEditNewAddress(true)}
// // // //             className="focus:outline-none capitalize bg-[#000] p-3 rounded-md hover:bg-[#3d3d3d] text-white font-medium active:scale-90 transition text-sm"
// // // //           >
// // // //             + Add new Address
// // // //           </DialogTrigger>
// // // //           <DialogContent
// // // //             close={() => setEditNewAddress(false)}
// // // //             className="sm:max-w-[450px]"
// // // //           >
// // // //             <DialogTitle>Add New Address</DialogTitle>
// // // //             {/* <DialogDescription>
// // // //               Enter your full address and contact details.
// // // //             </DialogDescription> */}
// // // //             <hr />
// // // //             <AddNewAdd setEditNewAddress={setEditNewAddress} />
// // // //           </DialogContent>
// // // //         </Dialog>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Addresses;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAddressList,
//   setDefaultAddress,
// } from "@/redux/AddressSlice";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { MdOutlineModeEdit } from "react-icons/md";
// import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// import EditAddress from "@/components/modal/MyAccounModal/EditAddress";

// const Addresses = () => {
//   const dispatch = useDispatch();
//   const { addresses, defaultAddressId } = useSelector((state) => state.address);
//   const { token } = useSelector((state) => state.auth);

//   const [editNewAddress, setEditNewAddress] = useState(false);
//   const [editAddress, setEditAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [currentEditData, setCurrentEditData] = useState(null);

//   useEffect(() => {
//     if (token) dispatch(getAddressList());
//   }, [token, dispatch]);

//   useEffect(() => {
//     setSelectedAddress(defaultAddressId);
//   }, [defaultAddressId]);

//   const handleSetDefault = (id) => {
//     setSelectedAddress(id);
//     dispatch(setDefaultAddress({ id, token }));
//   };

//   return (
//     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
//       <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
//       <div className="space-y-3">
//         {Array.isArray(addresses) && addresses.length > 0 ? (
//           <RadioGroup value={selectedAddress}>
//             {addresses.map((address) => (
//               <div
//                 key={address._id}
//                 className="border rounded-md border-[#E6E6E6] w-full p-3"
//               >
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-start gap-4">
//                     <RadioGroupItem
//                       value={address._id}
//                       id={address._id}
//                       checked={selectedAddress === address._id}
//                       onChange={() => handleSetDefault(address._id)}
//                     />
//                     <div className="w-[80%] font-medium text-sm space-y-1">
//                       <p className="font-semibold">{address.fullName}</p>
//                       <p className="whitespace-pre-line">
//                         {address.addressLine}
//                       </p>
//                       <p className="text-black">
//                         Phone: {address.mobileNumber}
//                       </p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Dialog open={editAddress} onOpenChange={setEditAddress}>
//                       <DialogTrigger asChild>
//                         <button
//                           onClick={() => {
//                             setEditAddress(true);
//                             setCurrentEditData(address);
//                           }}
//                         >
//                           <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
//                         </button>
//                       </DialogTrigger>
//                       <DialogContent className="sm:max-w-[450px]">
//                         <DialogTitle>Edit Address</DialogTitle>
//                         <hr />
//                         <EditAddress
//                           setEditAddress={setEditAddress}
//                           address={currentEditData}
//                         />
//                       </DialogContent>
//                     </Dialog>
//                     {/* Delete button removed */}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </RadioGroup>
//         ) : (
//           <p className="text-gray-500">No addresses found.</p>
//         )}
//         <Dialog open={editNewAddress}>
//           <DialogTrigger
//             onClick={() => setEditNewAddress(true)}
//             className="focus:outline-none capitalize bg-[#000] p-3 rounded-md hover:bg-[#3d3d3d] text-white font-medium active:scale-90 transition text-sm"
//           >
//             + Add new Address
//           </DialogTrigger>
//           <DialogContent
//             close={() => setEditNewAddress(false)}
//             className="sm:max-w-[450px]"
//           >
//             <DialogTitle>Add New Address</DialogTitle>
//             <hr />
//             <AddNewAdd setEditNewAddress={setEditNewAddress} />
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default Addresses;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAddressList,
//   setDefaultAddress,
// } from "@/redux/AddressSlice";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { MdOutlineModeEdit } from "react-icons/md";
// import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// import EditAddress from "@/components/modal/MyAccounModal/EditAddress";

// const Addresses = () => {
//   const dispatch = useDispatch();
//   const { addresses, defaultAddressId } = useSelector((state) => state.address);
//   const { token } = useSelector((state) => state.auth);

//   const [editNewAddress, setEditNewAddress] = useState(false);
//   const [editAddress, setEditAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [currentEditData, setCurrentEditData] = useState(null);

//   useEffect(() => {
//     if (token) dispatch(getAddressList());
//   }, [token, dispatch]);

//   useEffect(() => {
//     setSelectedAddress(defaultAddressId);
//   }, [defaultAddressId]);

//   const handleSetDefault = (id) => {
//     setSelectedAddress(id);
//     dispatch(setDefaultAddress({ id, token }));
//   };

//   return (
//     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
//     <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
//     <div className="space-y-3">
//       {Array.isArray(addresses) && addresses.length > 0 ? (
//         <RadioGroup value={selectedAddress}>
//           {addresses.map((address) => (
//             <div
//               key={address._id}
//               className={`border rounded-md border-[#E6E6E6] w-full p-3 ${selectedAddress === address._id ? "bg-[#F0F9FF]" : ""}`} // Highlight selected address
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-start gap-4">
//                   <RadioGroupItem
//                     value={address._id}
//                     id={address._id}
//                     checked={selectedAddress === address._id}
//                     onChange={() => handleSetDefault(address._id)}
//                   />
//                   <div className="w-[80%] font-medium text-sm space-y-1">
//                     <p className="font-semibold">{address.fullName}</p>
//                     <p className="whitespace-pre-line">{address.addressLine}</p>
//                     <p className="text-black">Phone: {address.mobileNumber}</p>
//                   </div>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   {address.isDefault && (
//                     <span className="text-sm font-semibold text-green-500">Default</span>
//                   )}
//                   <Dialog open={editAddress} onOpenChange={setEditAddress}>
//                     <DialogTrigger asChild>
//                       <button
//                         onClick={() => {
//                           setEditAddress(true);
//                           setCurrentEditData(address);
//                         }}
//                       >
//                         <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
//                       </button>
//                     </DialogTrigger>
//                     <DialogContent className="sm:max-w-[450px]">
//                       <DialogTitle>Edit Address</DialogTitle>
//                       <hr />
//                       <EditAddress
//                         setEditAddress={setEditAddress}
//                         address={currentEditData}
//                       />
//                     </DialogContent>
//                   </Dialog>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </RadioGroup>
//       ) : (
//         <p className="text-gray-500">No addresses found.</p>
//       )}
//       <Dialog open={editNewAddress}>
//         <DialogTrigger
//           onClick={() => setEditNewAddress(true)}
//           className="focus:outline-none capitalize bg-[#000] p-3 rounded-md hover:bg-[#3d3d3d] text-white font-medium active:scale-90 transition text-sm"
//         >
//           + Add new Address
//         </DialogTrigger>
//         <DialogContent
//           close={() => setEditNewAddress(false)}
//           className="sm:max-w-[450px]"
//         >
//           <DialogTitle>Add New Address</DialogTitle>
//           <hr />
//           <AddNewAdd setEditNewAddress={setEditNewAddress} />
//         </DialogContent>
//       </Dialog>
//     </div>
//   </div>
//   );
// };

// export default Addresses;
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

const Addresses = () => {
  const dispatch = useDispatch();
  const { addresses, defaultAddressId } = useSelector((state) => state.address);
  const { token } = useSelector((state) => state.auth);

  const [editNewAddress, setEditNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(false);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [currentEditData, setCurrentEditData] = useState(null);

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
    setSelectedAddressId(id); // UI feedback
    await dispatch(
      setDefaultAddress({ selectedId: id, allAddresses: addresses, token })
    );
    dispatch(getAddressList()); // Refresh updated list
  };

  return (
    <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
      <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
      <div className="space-y-3">
        {Array.isArray(addresses) && addresses.length > 0 ? (
          <RadioGroup value={selectedAddressId} onValueChange={handleSetDefault}>
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


// "use client"
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getAddressList,
//   setDefaultAddress,
// } from "@/redux/AddressSlice";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import { MdOutlineModeEdit } from "react-icons/md";
// import AddNewAdd from "@/components/modal/MyAccounModal/AddNewAdd";
// import EditAddress from "@/components/modal/MyAccounModal/EditAddress";

// const Addresses = () => {
//   const dispatch = useDispatch();
//   const { addresses, defaultAddressId } = useSelector((state) => state.address);
//   const { token } = useSelector((state) => state.auth);

//   const [editNewAddress, setEditNewAddress] = useState(false);
//   const [editAddress, setEditAddress] = useState(false);
//   const [selectedAddress, setSelectedAddress] = useState(null);
//   const [currentEditData, setCurrentEditData] = useState(null);

//   useEffect(() => {
//     if (token) dispatch(getAddressList());
//   }, [token, dispatch]);

//   useEffect(() => {
//     setSelectedAddress(defaultAddressId);
//   }, [defaultAddressId]);

//   const formatPrice = (price) => {
//     return price && !isNaN(price) ? price.toLocaleString("en-IN") : "0.00";
//   };

//   const handleSetDefault = (id) => {
//     setSelectedAddress(id);
//     dispatch(setDefaultAddress({ id, token }));
//   };

//   // Hardcoded values for the summary table (replace with actual data if necessary)
//   const totalQty = 30;  // Example quantity
//   const subtotal = 15000; // Example subtotal

//   const totalAmount = subtotal * 1.18 - 0.73; // Total amount including GST and some adjustments

//   return (
//     <div className="flex-grow p-3 bg-white rounded-md xl:p-5">
//       <p className="text-xl text-[#25324B] font-semibold mb-4">Addresses</p>
//       <div className="flex gap-4">
//         {/* Left side: Address List */}
//         <div className="w-full md:w-2/3">
//           <div className="space-y-3">
//             {Array.isArray(addresses) && addresses.length > 0 ? (
//               <RadioGroup value={selectedAddress}>
//                 {addresses.map((address) => (
//                   <div
//                     key={address._id}
//                     className="border rounded-md border-[#E6E6E6] w-full p-3"
//                   >
//                     <div className="flex items-center justify-between">
//                       <div className="flex items-start gap-4">
//                         <RadioGroupItem
//                           value={address._id}
//                           id={address._id}
//                           checked={selectedAddress === address._id}
//                           onChange={() => handleSetDefault(address._id)}
//                         />
//                         <div className="w-[80%] font-medium text-sm space-y-1">
//                           <p className="font-semibold">{address.fullName}</p>
//                           <p className="whitespace-pre-line">
//                             {address.addressLine}
//                           </p>
//                           <p className="text-black">
//                             Phone: {address.mobileNumber}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="flex items-center gap-2">
//                         <Dialog open={editAddress} onOpenChange={setEditAddress}>
//                           <DialogTrigger asChild>
//                             <button
//                               onClick={() => {
//                                 setEditAddress(true);
//                                 setCurrentEditData(address);
//                               }}
//                             >
//                               <MdOutlineModeEdit className="text-[#3AB54A] text-xl" />
//                             </button>
//                           </DialogTrigger>
//                           <DialogContent className="sm:max-w-[450px]">
//                             <DialogTitle>Edit Address</DialogTitle>
//                             <hr />
//                             <EditAddress
//                               setEditAddress={setEditAddress}
//                               address={currentEditData}
//                             />
//                           </DialogContent>
//                         </Dialog>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </RadioGroup>
//             ) : (
//               <p className="text-gray-500">No addresses found.</p>
//             )}
//             <Dialog open={editNewAddress}>
//               <DialogTrigger
//                 onClick={() => setEditNewAddress(true)}
//                 className="focus:outline-none capitalize bg-[#000] p-3 rounded-md hover:bg-[#3d3d3d] text-white font-medium active:scale-90 transition text-sm"
//               >
//                 + Add new Address
//               </DialogTrigger>
//               <DialogContent
//                 close={() => setEditNewAddress(false)}
//                 className="sm:max-w-[450px]"
//               >
//                 <DialogTitle>Add New Address</DialogTitle>
//                 <hr />
//                 <AddNewAdd setEditNewAddress={setEditNewAddress} />
//               </DialogContent>
//             </Dialog>
//           </div>
//         </div>

//         {/* Right side: Order Summary */}
//         <div className="w-full space-y-4 bg-white border xl:w-3/12">
//           <div className="p-4 space-y-3">
//             <div className="flex items-center justify-between">
//               <h3 className="text-base font-semibold text-black">
//                 Order Summary
//               </h3>
//               {totalQty < 25 && (
//                 <p className="text-xs font-medium text-red-600">
//                   *Min. order: 25 tons
//                 </p>
//               )}
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>Total Qty</span>
//               <span>{totalQty.toFixed(1)} MT</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>Subtotal</span>
//               <span>₹ {formatPrice(subtotal)}</span>
//             </div>
//             <div className="flex justify-between text-sm">
//               <span>GST (18%)</span>
//               <span>₹ {formatPrice(subtotal * 0.18)}</span>
//             </div>
//             <div className="flex justify-between text-sm font-bold">
//               <span>Order Total</span>
//               <span>₹ {formatPrice(totalAmount)}</span>
//             </div>
//             <button
//               className={`w-full mt-5 px-4 py-2 text-white rounded ${
//                 totalQty >= 25
//                   ? "bg-black hover:bg-gray-800"
//                   : "bg-gray-400 cursor-not-allowed"
//               }`}
//               // Add your proceed action here
//             >
//               Proceed to Buy
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Addresses;

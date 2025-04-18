// // import { Button } from "@/components/ui/button";
// // import React from "react";
// // import Label from "@/components/ui/form/label";

// // const EditAddress = ({ setEditAddress }) => {
// //   return (
// //     <>
// //       <form className="space-y-4">
// //         <div className="w-full space-y-1 text-left">
// //           <Label htmlFor="first_name" text="Your Name" />
// //           <input
// //             type="text"
// //             name="first_name"
// //             className="input_field"
// //             placeholder="Enter First Name"
// //             // defaultValue={user.first_name}
// //             // key={user.first_name}
// //             // disabled
// //           />
// //         </div>
// //         <div className="w-full space-y-1 text-left">
// //           <Label htmlFor="email" text="Mobile Number" />
// //           <input
// //             type="text"
// //             name="text"
// //             className="input_field"
// //             placeholder="490"
// //             // defaultValue={user.email}
// //             // key={user.email}
// //             // disabled
// //           />
// //         </div>
// //         <div className="w-full space-y-1 text-left">
// //           <Label htmlFor="email" text="Address" />
// //           <textarea rows={4} className="input_field" />
// //         </div>
// //       </form>
// //       <div className="flex items-center gap-3">
// //         <Button variant="primary" className="w-auto">
// //           Update
// //         </Button>
// //         <Button
// //           variant="disable"
// //           className=""
// //           onClick={(e) => setEditAddress(false)}
// //         >
// //           Close
// //         </Button>
// //       </div>
// //     </>
// //   );
// // };

// // export default EditAddress;


// // import React, { useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { updateAddress } from "@/redux/AddressSlice";
// // import { Button } from "@/components/ui/button";
// // import Label from "@/components/ui/form/label";
 
// // const EditAddress = ({ setEditAddress, address }) => {
// //   const dispatch = useDispatch();
// //   const { token } = useSelector((state) => state.auth);
 
// //   const [name, setName] = useState(address?.name || "");
// //   const [phone, setPhone] = useState(address?.phone || "");
// //   const [addr, setAddr] = useState(address?.address || "");
 
// //   const handleUpdate = (e) => {
// //     e.preventDefault();
 
// //     const formData = new FormData();
// //     formData.append("name", name);
// //     formData.append("phone", phone);
// //     formData.append("address", addr);
// //     formData.append("id", address.id);
// //     dispatch(updateAddress({ formData, token })).then(() => {
// //       dispatch(getAddressList(token));
// //     });
// //   };
 
// //   return (
// //     <form className="space-y-4" onSubmit={handleUpdate}>
// //       <div className="w-full space-y-1 text-left">
// //         <Label htmlFor="name" text="Your Name" />
// //         <input
// //           type="text"
// //           name="name"
// //           className="input_field"
// //           placeholder="Enter Name"
// //           value={name}
// //           onChange={(e) => setName(e.target.value)}
// //         />
// //       </div>
// //       <div className="w-full space-y-1 text-left">
// //         <Label htmlFor="phone" text="Mobile Number" />
// //         <input
// //           type="text"
// //           name="phone"
// //           className="input_field"
// //           placeholder="Enter Phone Number"
// //           value={phone}
// //           onChange={(e) => setPhone(e.target.value)}
// //         />
// //       </div>
// //       <div className="w-full space-y-1 text-left">
// //         <Label htmlFor="address" text="Address" />
// //         <textarea
// //           rows={4}
// //           name="address"
// //           className="input_field"
// //           placeholder="Enter Full Address"
// //           value={addr}
// //           onChange={(e) => setAddr(e.target.value)}
// //         />
// //       </div>
// //       <div className="flex items-center gap-3">
// //         <Button type="submit" variant="primary">
// //           Update
// //         </Button>
// //         <Button type="button" variant="disable" onClick={() => setEditAddress(false)}>
// //           Close
// //         </Button>
// //       </div>
// //     </form>
// //   );
// // };
 
// // export default EditAddress;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { updateAddress } from "@/redux/AddressSlice";
// import { Button } from "@/components/ui/button";
// import Label from "@/components/ui/form/label";

// const EditAddress = ({ setEditAddress, address }) => {
//   const dispatch = useDispatch();
//   const { token } = useSelector((state) => state.auth);

//   const [name, setName] = useState(address?.name || "");
//   const [phone, setPhone] = useState(address?.phone || "");
//   const [addr, setAddr] = useState(address?.address || "");
//   const [isDefault, setIsDefault] = useState(address?.isDefault || false); // Track the default status

//   const handleUpdate = (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullName", name);  // Ensure the keys match with the backend (e.g., fullName, mobileNumber)
//     formData.append("mobileNumber", phone);
//     formData.append("addressLine", addr);
//     formData.append("isDefault", isDefault ? "1" : "0");  // Convert boolean to string for backend

//     dispatch(updateAddress({ formData, token }))
//       .then(() => {
//         dispatch(getAddressList(token));
//         setEditAddress(false); // Close the edit form after successful update
//       });
//   };

//   return (
//     <form className="space-y-4" onSubmit={handleUpdate}>
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
//           value={addr}
//           onChange={(e) => setAddr(e.target.value)}
//         />
//       </div>
//       <div className="w-full space-y-1 text-left">
//         <Label htmlFor="isDefault" text="Set as Default Address" />
//         <input
//           type="checkbox"
//           name="isDefault"
//           checked={isDefault}
//           onChange={() => setIsDefault(!isDefault)}
//         />
//       </div>
//       <div className="flex items-center gap-3">
//         <Button type="submit" variant="primary">
//           Update
//         </Button>
//         <Button type="button" variant="disable" onClick={() => setEditAddress(false)}>
//           Close
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default EditAddress;


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

// Log each form data item to verify
formData.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

dispatch(updateAddress({ id: address._id, formData, token }))
  .then(() => {
    console.log("Address update dispatched successfully");
    dispatch(getAddressList(token));
    setEditAddress(false);
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
        <Label htmlFor="isDefault" text="Set as Default Address" />
        <input
          type="checkbox"
          name="isDefault"
          checked={isDefault}
          onChange={() => setIsDefault(!isDefault)}
        />
      </div>
      <div className="flex items-center gap-3">
        <Button type="submit" variant="primary">Update</Button>
        <Button type="button" variant="disable" onClick={() => setEditAddress(false)}>Close</Button>
      </div>
    </form>
  );
};

export default EditAddress;

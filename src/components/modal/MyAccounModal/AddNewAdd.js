// import { Button } from "@/components/ui/button";
// import React from "react";
// import Label from "@/components/ui/form/label";

// const AddNewAdd = ({ setEditNewAddress }) => {
//   return (
//     <>
//       <form className="space-y-4">
//         <div className="w-full space-y-1 text-left">
//           <Label htmlFor="first_name" text="Your Name" />
//           <input
//             type="text"
//             name="first_name"
//             className="input_field"
//             placeholder="Enter First Name"
//             // defaultValue={user.first_name}
//             // key={user.first_name}
//             // disabled
//           />
//         </div>
//         <div className="w-full space-y-1 text-left">
//           <Label htmlFor="email" text="Mobile Number" />
//           <input
//             type="text"
//             name="text"
//             className="input_field"
//             placeholder="490"
//             // defaultValue={user.email}
//             // key={user.email}
//             // disabled
//           />
//         </div>
//         <div className="w-full space-y-1 text-left">
//           <Label htmlFor="email" text="Address" />
//           <textarea rows={4} className="input_field" />
//         </div>
//       </form>
//       <div className="flex items-center gap-3">
//         <Button variant="primary" className="w-auto">
//           Add
//         </Button>
//         <Button
//           variant="disable"
//           className=""
//           onClick={(e) => setEditNewAddress(false)}
//         >
//           Close
//         </Button>
//       </div>
//     </>
//   );
// };

// export default AddNewAdd;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { addAddress ,  getAddressList} from "@/redux/AddressSlice";
// import { Button } from "@/components/ui/button";
// import Label from "@/components/ui/form/label";
// import toast from "react-hot-toast";
 
 
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
//     formData.append("fullName", name);
//     formData.append("mobileNumber", phone);
//     formData.append("addressLine", address);
//     formData.append("isDefault", "1");
  
//     // ✅ FIXED: No token passed manually
   
//   dispatch(addAddress(formData)).then((res) => {
//     if (res?.meta?.requestStatus === "fulfilled") {
//       dispatch(getAddressList());
//       setEditNewAddress(false);
//     }
//   });
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
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addAddress } from "@/redux/AddressSlice";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input
        {...register("fullName")}
        placeholder="Full Name"
        className="w-full p-2 border rounded"
      />
      <input
        {...register("mobileNumber")}
        placeholder="Mobile Number"
        className="w-full p-2 border rounded"
      />
      <textarea
        {...register("addressLine")}
        placeholder="Address"
        className="w-full p-2 border rounded"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isDefault}
          onChange={(e) => setIsDefault(e.target.checked)}
        />
        Set as default address
      </label>
      <button
        type="submit"
        className="p-2 text-white bg-black rounded hover:bg-gray-800"
      >
        Save Address
      </button>
    </form>
  );
};

export default AddNewAdd;

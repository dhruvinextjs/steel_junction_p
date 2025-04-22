
// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { handleAddGstDetail, handleUpdateGstDetail } from "@/redux/GstDetailSlice";
// // // import { Button } from "@/components/ui/button";
// // // import { X } from "lucide-react";
// // // import Link from "next/link";
// // // import { fetchOrderSummary } from "@/redux/OrderSlice";
 
// // // const GstDetails = () => {
// // //   const dispatch = useDispatch();
// // //   // const { loading } = useSelector((state) => state.gstDetail);
// // //   const { loading, totalQty, subTotal, gstAmount, loadingCharge, insurance, tcsAmount, orderTotal, roundOff, grossTotal } = useSelector((state) => state.order);
 
// // //   const [gstNumber, setGstNumber] = useState("");
// // //   const [gstFile, setGstFile] = useState(null);
// // //   const [preview, setPreview] = useState(null);
// // //   const [showPopup, setShowPopup] = useState(false);
 
// // //   // Popup editable states
// // //   const [editGstNumber, setEditGstNumber] = useState("");
// // //   const [editGstFile, setEditGstFile] = useState(null);
// // //   const [editPreview, setEditPreview] = useState(null);

// // //   useEffect(() => {
// // //     dispatch(fetchOrderSummary());
// // //   }, [dispatch]);
 
// // //   const handleFileChange = (e) => {
// // //     const file = e.target.files[0];
// // //     setGstFile(file);
// // //     setPreview(URL.createObjectURL(file));
// // //   };
 
// // //   const handleEditFileChange = (e) => {
// // //     const file = e.target.files[0];
// // //     setEditGstFile(file);
// // //     setEditPreview(URL.createObjectURL(file));
// // //   };
 
// // //   const handleSubmit = async () => {
// // //     if (!gstNumber || !gstFile) {
// // //       alert("Please provide GST number and upload certificate file.");
// // //       return;
// // //     }
 
// // //     await dispatch(handleAddGstDetail({ gstNumber, certificate: gstFile }));
// // //     setGstNumber("");
// // //     setGstFile(null);
// // //     setPreview(null);
// // //   };
 
// // //   const openEditPopup = () => {
// // //     setEditGstNumber(gstNumber);
// // //     setEditGstFile(gstFile);
// // //     setEditPreview(preview);
// // //     setShowPopup(true);
// // //   };
 
// // //   const handleUpdate = async () => {
// // //     await dispatch(
// // //       handleUpdateGstDetail({
// // //         gstNumber: editGstNumber,
// // //         certificate: editGstFile,
// // //       })
// // //     );
// // //     setGstNumber(editGstNumber);
// // //     setGstFile(editGstFile);
// // //     setPreview(editPreview);
// // //     setShowPopup(false);
// // //   };
 
// // //   return (
// // //     <div className="flex justify-center w-full">
// // //     <div className="flex flex-col w-full gap-4 lg:flex-row">
// // //       {/* GST Form */}
// // //       <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// // //         <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// // //           GST Details
// // //         </div>
 
// // //         <div className="p-4 space-y-4">
// // //           <div>
// // //             <label className="block mb-1 text-sm font-medium">GSTIN Number*</label>
// // //             <input
// // //               type="text"
// // //               value={gstNumber}
// // //               onChange={(e) => setGstNumber(e.target.value)}
// // //               placeholder="Enter GST Number"
// // //               className="flex-grow w-full px-3 py-2 text-sm border border-gray-300 rounded"
// // //             />
// // //           </div>
 
// // //           <div>
// // //             <label className="block mb-1 text-sm font-medium">GST Certificate*</label>
// // //             <div className="flex items-center gap-4">
// // //               <input type="file" onChange={handleFileChange} className="text-sm" />
// // //               <Button
// // //                 onClick={handleSubmit}
// // //                 className="px-4 py-1 text-sm text-red-700 bg-red-200 rounded hover:bg-red-300"
// // //                 disabled={loading}
// // //               >
// // //                 {loading ? "Uploading..." : "Upload"}
// // //               </Button>
// // //             </div>
 
// // //             {preview && (
// // //               <div className="mt-2">
// // //                 <img
// // //                   src={preview}
// // //                   alt="GST Certificate"
// // //                   className="w-auto border rounded h-28"
// // //                 />
// // //               </div>
// // //             )}
// // //           </div>
 
// // //           <div className="flex gap-2 pt-2">
// // //             <Button
// // //               onClick={openEditPopup}
// // //               className="text-white bg-black hover:bg-gray-800"
// // //             >
// // //               Update
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>
 
// // //       {/* Order Summary */}
// // //       <div className="bg-white border border-[#ddd] rounded-md p-4 lg:w-[350px] w-full">
// // //         <p className="pb-2 mb-3 font-semibold border-b text-md">Order Summary</p>
// // //         <div className="space-y-2 text-sm text-[#333]">
// // //             <div className="flex justify-between">
// // //               <span>Total Qty</span>
// // //               <span>{totalQty} MT</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Subtotal</span>
// // //               <span>₹ {subTotal.toLocaleString()}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Loading Charge (₹265 PMT)</span>
// // //               <span>₹ {loadingCharge.toLocaleString()}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Insurance (₹30 PMT)</span>
// // //               <span>₹ {insurance.toLocaleString()}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>GST (18%)</span>
// // //               <span>₹ {gstAmount.toLocaleString()}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>TCS (0.1%)</span>
// // //               <span>₹ {tcsAmount.toLocaleString()}</span>
// // //             </div>
// // //             <hr />
// // //             <div className="flex justify-between font-semibold">
// // //               <span>Order Total</span>
// // //               <span>₹ {orderTotal.toLocaleString()}</span>
// // //             </div>
// // //             <div className="flex justify-between">
// // //               <span>Round Off</span>
// // //               <span>- ₹ {roundOff.toFixed(2)}</span>
// // //             </div>
// // //             <div className="flex justify-between text-lg font-bold text-black">
// // //               <span>Gross Total Amount</span>
// // //               <span>₹ {grossTotal.toLocaleString()}</span>
// // //             </div>
// // //           </div>
// // //        <Link href={"/OrderSummary"}>
// // //        <Button className="w-full mt-4 text-white bg-black hover:bg-gray-800">
// // //           Proceed to Buy
// // //         </Button>
// // //        </Link>
// // //       </div>
 
// // //       {/* Edit Popup */}
// // //       {showPopup && (
// // //         <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
// // //           <div className="relative bg-white w-[400px] rounded-md shadow-xl border border-gray-300 p-5">
// // //           <button
// // //             className="absolute text-gray-600 top-2 right-2 hover:text-black"
// // //             onClick={() => setShowPopup(false)}
// // //           >
// // //             <X size={18} />
// // //           </button>
 
// // //           <h2 className="mb-4 text-lg font-semibold">Edit GST Details</h2>
 
// // //           <div className="space-y-4">
// // //             <div>
// // //               <label className="text-sm font-medium">GSTIN Number*</label>
// // //               <input
// // //                 type="text"
// // //                 value={editGstNumber}
// // //                 onChange={(e) => setEditGstNumber(e.target.value)}
// // //                 className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded"
// // //               />
// // //             </div>
 
// // //             <div>
// // //               <label className="text-sm font-medium">GST Certificate*</label>
// // //               <input type="file" onChange={handleEditFileChange} />
// // //             </div>
 
// // //             {editPreview && (
// // //               <div>
// // //                 <img
// // //                   src={editPreview}
// // //                   alt="GST Preview"
// // //                   className="border rounded h-28"
// // //                 />
// // //               </div>
// // //             )}
 
// // //             <Button
// // //               onClick={handleUpdate}
// // //               className="w-full text-white bg-black hover:bg-gray-800"
// // //               disabled={loading}
// // //             >
// // //               {loading ? "Updating..." : "Update"}
// // //             </Button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //       )}
// // //     </div>
// // //     </div>
// // //   );
// // // };
 
// // // export default GstDetails;


// // "use client";
// // import React, { useEffect, useState } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import {
// //   handleAddGstDetail,
// //   handleUpdateGstDetail,
// //   getGstDetails,
// // } from "@/redux/GstDetailSlice";
// // import { Button } from "@/components/ui/button";
// // import { X } from "lucide-react";
// // import { fetchOrderSummary } from "@/redux/OrderSlice";

// // const GstDetails = () => {
// //   const dispatch = useDispatch();
// //   const { gstDetails, loading } = useSelector((state) => state.gstDetail);
// //   const {
// //     totalQty,
// //     subTotal,
// //     gstAmount,
// //     loadingCharge,
// //     insurance,
// //     tcsAmount,
// //     orderTotal,
// //     roundOff,
// //     grossTotal,
// //   } = useSelector((state) => state.order);

// //   const [gstNumber, setGstNumber] = useState("");
// //   const [gstFile, setGstFile] = useState(null);
// //   const [preview, setPreview] = useState(null);
// //   const [showPopup, setShowPopup] = useState(false);

// //   const [editGstNumber, setEditGstNumber] = useState("");
// //   const [editGstFile, setEditGstFile] = useState(null);
// //   const [editPreview, setEditPreview] = useState(null);

// //   useEffect(() => {
// //     dispatch(fetchOrderSummary());
// //     dispatch(getGstDetails());
// //   }, [dispatch]);

// //   useEffect(() => {
// //     if (gstDetails) {
// //       setGstNumber(gstDetails.gstNumber || "");
// //       setPreview(gstDetails.certificateUrl || null);
// //     }
// //   }, [gstDetails]);

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setGstFile(file);
// //     setPreview(URL.createObjectURL(file));
// //   };

// //   const handleEditFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setEditGstFile(file);
// //     setEditPreview(URL.createObjectURL(file));
// //   };

// //   const handleSubmit = async () => {
// //     if (!gstNumber || !gstFile) {
// //       alert("Please provide GST number and upload certificate file.");
// //       return;
// //     }

// //     await dispatch(handleAddGstDetail({ gstNumber, certificate: gstFile }));
// //     setGstFile(null);
// //   };

// //   const openEditPopup = () => {
// //     setEditGstNumber(gstDetails?.gstNumber || "");
// //     setEditGstFile(null);
// //     setEditPreview(gstDetails?.certificateUrl || null);
// //     setShowPopup(true);
// //   };

// //   const handleUpdate = async () => {
// //     await dispatch(
// //       handleUpdateGstDetail({
// //         gstNumber: editGstNumber,
// //         certificate: editGstFile,
// //       })
// //     );
// //     setGstNumber(editGstNumber);
// //     setPreview(editPreview);
// //     setShowPopup(false);
// //   };

// //   return (
// //     <div className="flex justify-center w-full">
// //       <div className="flex flex-col w-full gap-4 lg:flex-row">
// //         {/* GST Form */}
// //         <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
// //           <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
// //             GST Details
// //           </div>

// //           <div className="p-4 space-y-4">
// //             <div>
// //               <label className="block mb-1 text-sm font-medium">GSTIN Number*</label>
// //               <input
// //                 type="text"
// //                 value={gstNumber}
// //                 onChange={(e) => setGstNumber(e.target.value)}
// //                 placeholder="Enter GST Number"
// //                 className="flex-grow w-full px-3 py-2 text-sm border border-gray-300 rounded"
// //               />
// //             </div>

// //             <div>
// //               <label className="block mb-1 text-sm font-medium">GST Certificate*</label>
// //               <div className="flex items-center gap-4">
// //                 <input type="file" onChange={handleFileChange} className="text-sm" />
// //                 <Button
// //                   onClick={handleSubmit}
// //                   className="px-4 py-1 text-sm text-red-700 bg-red-200 rounded hover:bg-red-300"
// //                   disabled={loading}
// //                 >
// //                   {loading ? "Uploading..." : "Upload"}
// //                 </Button>
// //               </div>

// //               {preview && (
// //                 <div className="mt-2">
// //                   <img
// //                     src={preview}
// //                     alt="GST Certificate"
// //                     className="w-auto border rounded h-28"
// //                   />
// //                 </div>
// //               )}
// //             </div>

// //             <div className="flex gap-2 pt-2">
// //               <Button
// //                 onClick={openEditPopup}
// //                 className="text-white bg-black hover:bg-gray-800"
// //               >
// //                 Update
// //               </Button>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Order Summary */}
// //         <div className="bg-white border border-[#ddd] rounded-md p-4 lg:w-[350px] w-full">
// //           <p className="pb-2 mb-3 font-semibold border-b text-md">Order Summary</p>
// //           <div className="space-y-2 text-sm text-[#333]">
// //             <div className="flex justify-between">
// //               <span>Total Qty</span>
// //               <span>{totalQty} MT</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Subtotal</span>
// //               <span>₹ {subTotal.toLocaleString()}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Loading Charge (₹265 PMT)</span>
// //               <span>₹ {loadingCharge.toLocaleString()}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>Insurance (₹30 PMT)</span>
// //               <span>₹ {insurance.toLocaleString()}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>GST (18%)</span>
// //               <span>₹ {gstAmount.toLocaleString()}</span>
// //             </div>
// //             <div className="flex justify-between">
// //               <span>TCS (0.1%)</span>
// //               <span>₹ {tcsAmount.toLocaleString()}</span>
// //             </div>
// //             <hr />
// //             <div className="flex justify-between font-semibold">
// //               <span>Order Total</span>
// //               <span>₹ {orderTotal.toLocaleString()}</span>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Popup */}
// //       {showPopup && (
// //         <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50">
// //           <div className="w-full max-w-md p-6 bg-white rounded shadow">
// //             <div className="flex items-center justify-between mb-4">
// //               <h2 className="text-lg font-semibold">Edit GST Details</h2>
// //               <button onClick={() => setShowPopup(false)}>
// //                 <X className="w-5 h-5" />
// //               </button>
// //             </div>

// //             <div className="space-y-4">
// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">GST Number</label>
// //                 <input
// //                   type="text"
// //                   value={editGstNumber}
// //                   onChange={(e) => setEditGstNumber(e.target.value)}
// //                   className="w-full px-3 py-2 border rounded"
// //                 />
// //               </div>

// //               <div>
// //                 <label className="block mb-1 text-sm font-medium">Certificate</label>
// //                 <input type="file" onChange={handleEditFileChange} />
// //                 {editPreview && (
// //                   <div className="mt-2">
// //                     <img src={editPreview} className="h-24 border rounded" alt="Preview" />
// //                   </div>
// //                 )}
// //               </div>

// //               <Button onClick={handleUpdate} className="w-full text-white bg-black">
// //                 {loading ? "Updating..." : "Save Changes"}
// //               </Button>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default GstDetails;

// "use client";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   handleAddGstDetail,
//   handleUpdateGstDetail,
//   getGstDetails,
// } from "@/redux/GstDetailSlice";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
// import { fetchOrderSummary } from "@/redux/OrderSlice";
// import axios from "axios";

// const GstDetails = () => {
//   const dispatch = useDispatch();
//   const { gstDetails, loading } = useSelector((state) => state.gstDetail);
//   const {
//     totalQty,
//     subTotal,
//     gstAmount,
//     loadingCharge,
//     insurance,
//     tcsAmount,
//     orderTotal,
//   } = useSelector((state) => state.order);

//   const [gstNumber, setGstNumber] = useState("");
//   const [gstFile, setGstFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);

//   const [editGstNumber, setEditGstNumber] = useState("");
//   const [editGstFile, setEditGstFile] = useState(null);
//   const [editPreview, setEditPreview] = useState(null);

//   useEffect(() => {
//     dispatch(fetchOrderSummary());
//     dispatch(getGstDetails());
//     fetchUserDetails(); // Pre-fill GST info from API
//   }, [dispatch]);

//   const fetchUserDetails = async () => {
//     try {
//       const res = await axios.get(
//         "/auth/userDetail"
//       );
//       const user = res.data?.data;
//       if (user) {
//         setGstNumber(user.gstNumber || "");
//         if (user.gstCertificate) {
//           setPreview(
//             `https://steel-junction.onrender.com/uploads/${user.gstCertificate}`
//           );
//         }
//       }
//     } catch (error) {
//       console.error("Failed to fetch user details", error);
//     }
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setGstFile(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   const handleEditFileChange = (e) => {
//     const file = e.target.files[0];
//     setEditGstFile(file);
//     setEditPreview(URL.createObjectURL(file));
//   };

//   const handleSubmit = async () => {
//     if (!gstNumber || !gstFile) {
//       alert("Please provide GST number and upload certificate file.");
//       return;
//     }

//     await dispatch(handleAddGstDetail({ gstNumber, certificate: gstFile }));
//     setGstFile(null);
//   };

//   const openEditPopup = () => {
//     setEditGstNumber(gstDetails?.gstNumber || "");
//     setEditGstFile(null);
//     setEditPreview(gstDetails?.certificateUrl || null);
//     setShowPopup(true);
//   };

//   const handleUpdate = async () => {
//     await dispatch(
//       handleUpdateGstDetail({
//         gstNumber: editGstNumber,
//         certificate: editGstFile,
//       })
//     );
//     setGstNumber(editGstNumber);
//     setPreview(editPreview);
//     setShowPopup(false);
//   };

//   return (
//     <div className="flex justify-center w-full">
//       <div className="flex flex-col w-full gap-4 lg:flex-row">
//         {/* GST Form */}
//         <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
//           <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
//             GST Details
//           </div>

//           <div className="p-4 space-y-4">
//             <div>
//               <label className="block mb-1 text-sm font-medium">GSTIN Number*</label>
//               <input
//                 type="text"
//                 value={gstNumber}
//                 onChange={(e) => setGstNumber(e.target.value)}
//                 placeholder="Enter GST Number"
//                 className="flex-grow w-full px-3 py-2 text-sm border border-gray-300 rounded"
//               />
//             </div>

//             <div>
//               <label className="block mb-1 text-sm font-medium">GST Certificate*</label>
//               <div className="flex items-center gap-4">
//                 <input type="file" onChange={handleFileChange} className="text-sm" />
//                 <Button
//                   onClick={handleSubmit}
//                   className="px-4 py-1 text-sm text-red-700 bg-red-200 rounded hover:bg-red-300"
//                   disabled={loading}
//                 >
//                   {loading ? "Uploading..." : "Upload"}
//                 </Button>
//               </div>

//               {preview && (
//                 <div className="mt-2">
//                   <img
//                     src={preview}
//                     alt="GST Certificate"
//                     className="w-auto border rounded h-28"
//                   />
//                 </div>
//               )}
//             </div>

//             <div className="flex gap-2 pt-2">
//               <Button
//                 onClick={openEditPopup}
//                 className="text-white bg-black hover:bg-gray-800"
//               >
//                 Update
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Order Summary */}
//         <div className="bg-white border border-[#ddd] rounded-md p-4 lg:w-[350px] w-full">
//           <p className="pb-2 mb-3 font-semibold border-b text-md">Order Summary</p>
//           <div className="space-y-2 text-sm text-[#333]">
//             <div className="flex justify-between">
//               <span>Total Qty</span>
//               <span>{totalQty} MT</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Subtotal</span>
//               <span>₹ {subTotal.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Loading Charge (₹265 PMT)</span>
//               <span>₹ {loadingCharge.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>Insurance (₹30 PMT)</span>
//               <span>₹ {insurance.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>GST (18%)</span>
//               <span>₹ {gstAmount.toLocaleString()}</span>
//             </div>
//             <div className="flex justify-between">
//               <span>TCS (0.1%)</span>
//               <span>₹ {tcsAmount.toLocaleString()}</span>
//             </div>
//             <hr />
//             <div className="flex justify-between font-semibold">
//               <span>Order Total</span>
//               <span>₹ {orderTotal.toLocaleString()}</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Edit Popup */}
//       {showPopup && (
//         <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black/50">
//           <div className="w-full max-w-md p-6 bg-white rounded shadow">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold">Edit GST Details</h2>
//               <button onClick={() => setShowPopup(false)}>
//                 <X className="w-5 h-5" />
//               </button>
//             </div>

//             <div className="space-y-4">
//               <div>
//                 <label className="block mb-1 text-sm font-medium">GST Number</label>
//                 <input
//                   type="text"
//                   value={editGstNumber}
//                   onChange={(e) => setEditGstNumber(e.target.value)}
//                   className="w-full px-3 py-2 border rounded"
//                 />
//               </div>

//               <div>
//                 <label className="block mb-1 text-sm font-medium">Certificate</label>
//                 <input type="file" onChange={handleEditFileChange} />
//                 {editPreview && (
//                   <div className="mt-2">
//                     <img src={editPreview} className="h-24 border rounded" alt="Preview" />
//                   </div>
//                 )}
//               </div>

//               <Button onClick={handleUpdate} className="w-full text-white bg-black">
//                 {loading ? "Updating..." : "Save Changes"}
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GstDetails;

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddGstDetail,
  handleUpdateGstDetail,
  getGstDetails,
} from "@/redux/GstDetailSlice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { fetchOrderSummary } from "@/redux/OrderSlice";
import axios from "axios";

const GstDetails = () => {
  const dispatch = useDispatch();
  const { gstDetails, loading } = useSelector((state) => state.gstDetail);
  const {
    totalQty,
    subTotal,
    gstAmount,
    loadingCharge,
    insurance,
    tcsAmount,
    orderTotal,
  } = useSelector((state) => state.order);

  const [gstNumber, setGstNumber] = useState("");
  const [gstFile, setGstFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const [editGstNumber, setEditGstNumber] = useState("");
  const [editGstFile, setEditGstFile] = useState(null);
  const [editPreview, setEditPreview] = useState(null);

  useEffect(() => {
    dispatch(fetchOrderSummary());
    dispatch(getGstDetails());
    fetchUserDetails();
  }, [dispatch]);

  const fetchUserDetails = async () => {
    try {
      const res = await axios.get("/auth/userDetail");
      const user = res.data?.data;
      if (user) {
        setGstNumber(user.gstNumber || "");
        if (user.gstCertificate) {
          setPreview(`https://steel-junction.onrender.com/uploads/${user.gstCertificate}`);
        }
      }
    } catch (error) {
      console.error("Failed to fetch user details", error);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setGstFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleEditFileChange = (e) => {
    const file = e.target.files[0];
    setEditGstFile(file);
    setEditPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    if (!gstNumber || !gstFile) {
      alert("Please provide GST number and upload certificate file.");
      return;
    }

    await dispatch(handleAddGstDetail({ gstNumber, certificate: gstFile }));
    setGstFile(null);
  };

  const openEditPopup = () => {
    setEditGstNumber(gstDetails?.gstNumber || "");
    setEditGstFile(null);
    setEditPreview(
      gstDetails?.certificate
        ? `https://steel-junction.onrender.com/uploads/${gstDetails.certificate}`
        : null
    );
    setShowPopup(true);
  };

  const handleUpdate = async () => {
    await dispatch(
      handleUpdateGstDetail({
        gstNumber: editGstNumber,
        certificate: editGstFile,
      })
    );
    setGstNumber(editGstNumber);
    setPreview(editPreview);
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col w-full gap-4 lg:flex-row">
        {/* GST Form */}
        <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
          <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
            GST Details
          </div>

          <div className="p-4 space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">GSTIN Number*</label>
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                placeholder="Enter GST Number"
                className="flex-grow w-full px-3 py-2 text-sm border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">GST Certificate*</label>
              <div className="flex items-center gap-4">
                <input type="file" onChange={handleFileChange} className="text-sm" />
                <Button
                  onClick={handleSubmit}
                  className="px-4 py-1 text-sm text-red-700 bg-red-200 rounded hover:bg-red-300"
                  disabled={loading}
                >
                  {loading ? "Uploading..." : "Upload"}
                </Button>
              </div>

              {preview && (
                <div className="mt-2">
                  <img
                    src={preview}
                    alt="GST Certificate"
                    className="w-auto border rounded h-28"
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2 pt-2">
              <Button
                onClick={openEditPopup}
                className="text-white bg-black hover:bg-gray-800"
              >
                Update
              </Button>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="bg-white border border-[#ddd] rounded-md p-4 lg:w-[350px] w-full">
          <p className="pb-2 mb-3 font-semibold border-b text-md">Order Summary</p>
          <div className="space-y-2 text-sm text-[#333]">
            <div className="flex justify-between">
              <span>Total Qty</span>
              <span>{totalQty} MT</span>
            </div>
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subTotal?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Loading Charge</span>
              <span>₹ {loadingCharge?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>Insurance</span>
              <span>₹ {insurance?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>GST</span>
              <span>₹ {gstAmount?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span>TCS</span>
              <span>₹ {tcsAmount?.toLocaleString()}</span>
            </div>
            <div className="flex justify-between pt-2 font-bold border-t">
              <span>Total</span>
              <span>₹ {orderTotal?.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Edit GST Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-full max-w-lg p-4 bg-white rounded shadow">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold">Edit GST Details</h2>
              <X className="cursor-pointer" onClick={() => setShowPopup(false)} />
            </div>
            <div className="space-y-4">
              <input
                type="text"
                value={editGstNumber}
                onChange={(e) => setEditGstNumber(e.target.value)}
                className="w-full px-3 py-2 border rounded"
                placeholder="Enter GST Number"
              />
              <input type="file" onChange={handleEditFileChange} />
              {editPreview && (
                <div className="mt-2">
                  <img
                    src={editPreview}
                    alt="Preview"
                    className="w-auto border rounded h-28"
                  />
                </div>
              )}
              <div className="flex justify-end gap-2">
                <Button onClick={() => setShowPopup(false)} variant="outline">
                  Cancel
                </Button>
                <Button onClick={handleUpdate} className="text-white bg-black">
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GstDetails;

// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { X } from "lucide-react";
 
// const GstDetails = () => {
//   const [gstNumber, setGstNumber] = useState("");
//   const [gstFile, setGstFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [showPopup, setShowPopup] = useState(false);
 
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setGstFile(file);
//     setPreview(URL.createObjectURL(file));
//   };
 
//   const handleUpdateClick = () => {
//     setShowPopup(true);
//   };
 
//   return (
//     <div className="flex flex-col w-full gap-4 lg:flex-row">
//       {/* GST Form */}
//       <div className="flex-grow p-4 bg-white rounded-md border border-[#ddd]">
//         <div className="px-4 py-2 text-lg font-semibold text-white bg-black rounded-t">
//           GST Details
//         </div>
 
//         <div className="p-4 space-y-4">
//           {/* GSTIN + Upload Button in one row */}
//           <div>
//             <label className="block mb-1 text-sm font-medium">GSTIN Number*</label>
//             <div className="flex items-center gap-4">
//               <input
//                 type="text"
//                 value={gstNumber}
//                 onChange={(e) => setGstNumber(e.target.value)}
//                 placeholder="Enter GST Number"
//                 className="flex-grow px-3 py-2 text-sm border border-gray-300 rounded"
//               />
//               <label>
//                 <input
//                   type="file"
//                   onChange={handleFileChange}
//                   className="hidden"
//                 />
//                 <Button className="px-4 py-1 text-sm text-white bg-red-400 rounded hover:bg-red-600">
//                   Upload
//                 </Button>
//               </label>
//             </div>
//           </div>
 
//           <div>
//             <label className="block mb-1 text-sm font-medium">GST Certificate*</label>
//             {preview && (
//               <div className="mt-2">
//                 <img
//                   src={preview}
//                   alt="GST Certificate"
//                   className="w-auto border rounded h-28"
//                 />
//               </div>
//             )}
//           </div>
 
//           <div className="pt-2">
//             <Button
//               onClick={handleUpdateClick}
//               className="text-white bg-black hover:bg-gray-800"
//             >
//               Update
//             </Button>
//           </div>
//         </div>
//       </div>
 
//       {/* Order Summary */}
//       <div className="bg-white border border-[#ddd] rounded-md p-4 lg:w-[350px] w-full">
//         <p className="pb-2 mb-3 font-semibold border-b text-md">Order Summary</p>
//         <div className="space-y-2 text-sm text-[#333]">
//           <div className="flex justify-between">
//             <span>Total Qty</span>
//             <span>26 MT</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Subtotal</span>
//             <span>₹ 11,28,404.7</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Loading Charge (₹265 PMT)</span>
//             <span>₹ 6,890</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Insurance (₹30 PMT)</span>
//             <span>₹ 780</span>
//           </div>
//           <div className="flex justify-between">
//             <span>GST (18%)</span>
//             <span>₹ 2,03,112.85</span>
//           </div>
//           <div className="flex justify-between">
//             <span>TCS (0.1%)</span>
//             <span>₹ 1,339.18</span>
//           </div>
//           <hr />
//           <div className="flex justify-between font-semibold">
//             <span>Order Total</span>
//             <span>₹ 13,40,526.73</span>
//           </div>
//           <div className="flex justify-between">
//             <span>Round Off</span>
//             <span>- ₹ 0.73</span>
//           </div>
//           <div className="flex justify-between text-lg font-bold text-black">
//             <span>Gross Total Amount</span>
//             <span>₹ 13,40,526</span>
//           </div>
//         </div>
//         <Button className="w-full mt-4 text-white bg-black hover:bg-gray-800">
//           Proceed to Buy
//         </Button>
//       </div>
 
//       {/* 👇 Inline Popup Section (Same Page) */}
//       {showPopup && (
//         <div className="fixed right-10 bottom-10 z-40 bg-white w-[400px] rounded-md shadow-xl border border-gray-300 p-5">
//           {/* Close button */}
//           <button
//             className="absolute text-gray-600 top-2 right-2 hover:text-black"
//             onClick={() => setShowPopup(false)}
//           >
//             <X size={18} />
//           </button>
 
//           <h2 className="mb-4 text-lg font-semibold">Edit GST Details</h2>
 
//           <div className="space-y-4">
//             <div>
//               <label className="text-sm font-medium">GSTIN Number*</label>
//               <input
//                 type="text"
//                 value={gstNumber}
//                 disabled
//                 className="w-full px-3 py-2 mt-1 text-sm bg-gray-100 border border-gray-300 rounded"
//               />
//             </div>
 
//             <div>
//               <label className="text-sm font-medium">GST Certificate*</label>
//               <div className="flex items-center gap-4 mt-1">
//                 <span className="text-sm">{gstFile?.name || "GST.jpg"}</span>
//                 <Button className="px-4 py-1 text-sm text-white bg-red-400 hover:bg-red-600">
//                   Upload
//                 </Button>
//               </div>
//             </div>
 
//             {preview && (
//               <div>
//                 <img
//                   src={preview}
//                   alt="GST Preview"
//                   className="border rounded h-28"
//                 />
//               </div>
//             )}
 
//             <Button
//               onClick={() => setShowPopup(false)}
//               className="w-full text-white bg-black hover:bg-gray-800"
//             >
//               Update
//             </Button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };
 
// export default GstDetails;


"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleAddGstDetail, handleUpdateGstDetail } from "@/redux/GstDetailSlice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
 
const GstDetails = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.gstDetail);
 
  const [gstNumber, setGstNumber] = useState("");
  const [gstFile, setGstFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
 
  // Popup editable states
  const [editGstNumber, setEditGstNumber] = useState("");
  const [editGstFile, setEditGstFile] = useState(null);
  const [editPreview, setEditPreview] = useState(null);
 
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
    setGstNumber("");
    setGstFile(null);
    setPreview(null);
  };
 
  const openEditPopup = () => {
    setEditGstNumber(gstNumber);
    setEditGstFile(gstFile);
    setEditPreview(preview);
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
    setGstFile(editGstFile);
    setPreview(editPreview);
    setShowPopup(false);
  };
 
  return (
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
            <span>26 MT</span>
          </div>
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>₹ 11,28,404.7</span>
          </div>
          <div className="flex justify-between">
            <span>Loading Charge (₹265 PMT)</span>
            <span>₹ 6,890</span>
          </div>
          <div className="flex justify-between">
            <span>Insurance (₹30 PMT)</span>
            <span>₹ 780</span>
          </div>
          <div className="flex justify-between">
            <span>GST (18%)</span>
            <span>₹ 2,03,112.85</span>
          </div>
          <div className="flex justify-between">
            <span>TCS (0.1%)</span>
            <span>₹ 1,339.18</span>
          </div>
          <hr />
          <div className="flex justify-between font-semibold">
            <span>Order Total</span>
            <span>₹ 13,40,526.73</span>
          </div>
          <div className="flex justify-between">
            <span>Round Off</span>
            <span>- ₹ 0.73</span>
          </div>
          <div className="flex justify-between text-lg font-bold text-black">
            <span>Gross Total Amount</span>
            <span>₹ 13,40,526</span>
          </div>
        </div>
        <Button className="w-full mt-4 text-white bg-black hover:bg-gray-800">
          Proceed to Buy
        </Button>
      </div>
 
      {/* Edit Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
          <div className="relative bg-white w-[400px] rounded-md shadow-xl border border-gray-300 p-5">
          <button
            className="absolute text-gray-600 top-2 right-2 hover:text-black"
            onClick={() => setShowPopup(false)}
          >
            <X size={18} />
          </button>
 
          <h2 className="mb-4 text-lg font-semibold">Edit GST Details</h2>
 
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">GSTIN Number*</label>
              <input
                type="text"
                value={editGstNumber}
                onChange={(e) => setEditGstNumber(e.target.value)}
                className="w-full px-3 py-2 mt-1 text-sm border border-gray-300 rounded"
              />
            </div>
 
            <div>
              <label className="text-sm font-medium">GST Certificate*</label>
              <input type="file" onChange={handleEditFileChange} />
            </div>
 
            {editPreview && (
              <div>
                <img
                  src={editPreview}
                  alt="GST Preview"
                  className="border rounded h-28"
                />
              </div>
            )}
 
            <Button
              onClick={handleUpdate}
              className="w-full text-white bg-black hover:bg-gray-800"
              disabled={loading}
            >
              {loading ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};
 
export default GstDetails;
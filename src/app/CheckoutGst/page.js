"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    handleAddGstDetail,
    handleUpdateGstDetail,
    getUserDetails,
} from "@/redux/GstDetailSlice";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const GstDetails = () => {
    const dispatch = useDispatch();
    const { loading, gstDetails } = useSelector((state) => state.gstDetail);

    const [gstNumber, setGstNumber] = useState("");
    const [gstFile, setGstFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const [editGstNumber, setEditGstNumber] = useState("");
    const [editGstFile, setEditGstFile] = useState(null);
    const [editPreview, setEditPreview] = useState(null);

    useEffect(() => {
        if (gstDetails) {
            setGstNumber(gstDetails.gstNumber || "");
            setPreview(gstDetails.certificateUrl || null);
            setEditGstNumber(gstDetails.gstNumber || "");
            setEditPreview(gstDetails.certificateUrl || null);
        } else {
            dispatch(getUserDetails());
        }
    }, [gstDetails, dispatch]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setGstFile(file);
        setPreview(URL.createObjectURL(file)); // For local preview
    };

    const handleEditFileChange = (e) => {
        const file = e.target.files[0];
        setEditGstFile(file);
        setEditPreview(URL.createObjectURL(file)); // For local preview
    };

    const handleSubmit = async () => {
        if (!gstNumber) {
            alert("Please provide GST number.");
            return;
        }
        await dispatch(handleAddGstDetail({ gstNumber, certificate: gstFile }));
        // After adding, refetch details automatically
        dispatch(getUserDetails());
    };

    const handleUpdate = async () => {
        await dispatch(handleUpdateGstDetail({
            gstNumber: editGstNumber,
            certificate: editGstFile,
        }));
        // After updating, refetch details automatically
        dispatch(getUserDetails());
        setShowPopup(false);
    };

    // Helper function to check if URL is complete or relative
    const getImageUrl = (url) => {
        if (url && !url.startsWith("http")) {
            return `https://steel-junction.onrender.com/${url}`;
        }
        return url; // Return the full URL if it's already complete
    };

    return (
        <div className="flex flex-col w-full max-w-6xl gap-4 mx-auto lg:flex-row">
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
                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
                                    src={getImageUrl(preview)}
                                    alt="GST Certificate"
                                    className="w-auto max-w-full border rounded h-28"
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex gap-2 pt-2">
                        <Button
                            onClick={() => {
                                setEditGstNumber(gstNumber);
                                setEditPreview(preview);
                                setShowPopup(true);
                            }}
                            className="text-white bg-black hover:bg-gray-800"
                        >
                            Edit
                        </Button>
                    </div>
                </div>
            </div>

            {showPopup && (
                <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-30">
                    <div className="relative bg-white w-[90%] max-w-md rounded-md shadow-xl border border-gray-300 p-5">
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
                                        src={getImageUrl(
                                            typeof editPreview === "string" ? editPreview : ''
                                        )}
                                        alt="GST Preview"
                                        className="max-w-full border rounded h-28"
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

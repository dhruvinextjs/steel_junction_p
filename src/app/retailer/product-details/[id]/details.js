"use client";
import Picture from "@/components/ui/picture";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleGetRetailerProductById } from "@/redux/ProductSlice";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import EnquiryModalPage from "./EnquiryModal";

const DetailsPage = () => {
  const [enquiry, setEnquiry] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { productDetails, loading } = useSelector((state) => state.getProduct);

  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(handleGetRetailerProductById(id));
    }
  }, [id, dispatch]);

  // Wait for the productDetails to load
  if (loading) {
    return <p>Loading...</p>;
  }

  if (!productDetails || Object.keys(productDetails).length === 0) {
    return <p>No product details found.</p>;
  }

  const {
    name,
    images = [],
    basicPrice,
    productDetail,
    termCondition,
    variants = [],
  } = productDetails;

  return (
    <div className="container w-full space-y-7 py-7">
      <div className="grid items-start justify-center grid-cols-1 gap-10 md:gap-4 xl:gap-0 md:grid-cols-2">
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            {images.map((image, index) => (
              // console.log("Images:", productDetails?.images);
              <Picture
                key={index}
                alt="images"
                // src={image}
                src={`https://steel-junction.onrender.com/uploads/${image}`}
                width={800}
                height={800}
                // alt={`Thumbnail ${index}`}
                className={`object-cover w-16 h-16 border cursor-pointer ${
                  selectedImage === image ? "border-blue-500" : ""
                }`}
                onClick={() => setSelectedImage(image)}
              />
            ))}
          </div>

          <div className="relative ml-4">
            <div className="relative overflow-hidden border group">
              {/* Large Image */}
              <Picture
                width={500}
                height={500}
                src={`https://steel-junction.onrender.com/uploads/${
                  selectedImage || "image"
                }`}
                alt="Selected"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-3xl font-semibold">{name}</p>
          <hr />
          <div className="w-full border rounded-lg shadow-md">
            <Table className="w-full">
              <TableHeader>
                <TableRow className="bg-[#f0f0f0]">
                  <TableHead className="font-semibold">Section</TableHead>
                  <TableHead className="font-semibold">Length</TableHead>
                  <TableHead className="font-semibold">Gauge Diff</TableHead>
                  <TableHead className="font-semibold">Rate PMT</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {variants?.map((variant, index) => (
                  <TableRow key={variant._id}>
                    <TableCell>{variant.section}</TableCell>
                    <TableCell>{variant.length}</TableCell>
                    <TableCell>{variant.gDiff}</TableCell>
                    {/* <TableCell>{variant.price}</TableCell> */}
                    <TableCell>{variant.rtPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Dialog open={enquiry}>
            <DialogTrigger
              onClick={(e) => setEnquiry(true)}
              className="focus:outline-none capitalize bg-[#000] p-3 w-full rounded-md  hover:bg-[#3d3d3d] text-white font-medium  active:scale-90 transition text-sm"
            >
              Enquiry / Order
            </DialogTrigger>
            <DialogContent close={setEnquiry} className="sm:max-w-[450px]">
              <DialogTitle>Enquiry</DialogTitle>
              <hr />
              <EnquiryModalPage setEnquiry={setEnquiry} productId={id}/>
            </DialogContent>
          </Dialog>

          <hr />
          <div className="space-y-5 md:space-y-10">
            <div className="space-y-3">
              <p className="text-[#1D1B1B] md:text-2xl text-lg font-semibold">
                Product Detail
              </p>
              {/* <ul className="container ml-3 space-y-1 text-sm list-disc md:text-base">
                <li>{products?.productDetail}</li>
              </ul> */}
              <div
                className="container ml-3 space-y-1 text-sm list-disc md:text-base"
                dangerouslySetInnerHTML={{
                  __html: productDetails?.productDetail || "",
                }}
              />
            </div>
            <div className="space-y-3">
              <p className="text-[#1D1B1B] md:text-2xl text-lg font-semibold">
                Terms And Conditions
              </p>
              {/* <ul className="container ml-3 space-y-1 text-sm list-decimal md:text-base">
                <li>{products?.termCondition}</li>
              </ul> */}
              <div
                className="container ml-3 space-y-1 text-sm list-disc md:text-base"
                dangerouslySetInnerHTML={{
                  __html: productDetails?.termCondition || "",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;

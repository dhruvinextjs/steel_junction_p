"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { BsWhatsapp } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { handleGetContactUs } from "@/redux/GetContentSlice";
import { BannerLoader } from "@/components/ui/skeleton/BannerLoader";

const BannerSection = () => {
  const dispatch = useDispatch();
  const { contactUs, loading, error } = useSelector(
    (state) => state.getContent
  );

  useEffect(() => {
    dispatch(handleGetContactUs());
  }, [dispatch]);

  // if (loading) {
  //   return <p>Loading...</p>; // Add a better loader if necessary
  // }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container relative w-full mx-auto">
      {loading ? (
        <div className="w-full">
          <BannerLoader />
        </div>
      ) : (
        <>
          <div className="relative w-full mx-auto overflow-hidden h-52 md:h-auto rounded-xl">
            <Image
              src={`https://steel-junction.onrender.com/uploads/${contactUs.image}`}
              alt="banner image"
              loading="lazy"
              width={1900}
              quality={100}
              height={500}
              className="object-cover rounded-md max-h-96"
            />
          </div>
          <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
            <div className="space-y-3 text-center text-white md:space-y-5">
              <div className="space-y-2">
                <p className="text-sm font-bold md:text-3xl">
                  {contactUs.title || "Default Title"}
                </p>
                <p className="text-sm font-semibold md:text-2xl">
                  {contactUs.subTitle || "Default Subtitle"}
                </p>
                <p className="text-sm md:text-2xl">
                  GSTIN: {contactUs.gstNumber || "N/A"}
                </p>
              </div>
              <div className="flex flex-col w-full space-y-2 md:space-y-5">
                <a
                  href={`https://wa.me/${contactUs.phone?.replace(/\s+/g, "")}`} // Remove spaces for WhatsApp
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto"
                >
                  <Button variant="secondary" className="w-full">
                    <BsWhatsapp />
                    {contactUs.phone || "N/A"}
                  </Button>
                </a>
                <a
                  href={`mailto:${contactUs.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-auto"
                >
                  <Button variant="danger" className="w-full">
                    <GrMail />
                    {contactUs.email || "N/A"}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BannerSection;

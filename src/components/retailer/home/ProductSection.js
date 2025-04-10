"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllProductretail } from "@/redux/GetContentSlice";
import { Category } from "@/components/ui/skeleton/category";
import Picture from "@/components/ui/picture";

const ProductSectionPage = () => {
  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.getContent);

  useEffect(() => {
    dispatch(handleGetAllProductretail());
  }, [dispatch]);

  return (
    <div className="w-full space-y-7">
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold md:text-3xl text-title_color">
          Categories
        </p>
        
      </div>
      <div className="w-full">
        {loading ? (
          <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-5 md:grid-cols-4 md:pb-10">
            {[...Array(product.length)].map((_, index) => (
              <Category key={index} />
            ))}
          </div>
        ) : (
          <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-4 md:grid-cols-3 md:pb-10">
            {product.map((item) => (
              <div
                className="w-full space-y-3 gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]"
                key={item?._id}
              >
                <div className="space-y-3 text-center">
                  <Link
                    href={`/retailer/product?categoryId=${item._id}`}
                    // state={{ id: item._id }}
                    // key={item._id}
                  >
                    <Picture
                      src={`https://steel-junction.onrender.com/uploads/${item?.image}`} // Dynamically load image
                      alt={item?.name || "Product"}
                      loading="lazy"
                      width={200}
                      height={200}
                      //   priority={true}
                      className="object-cover w-full h-auto"
                    />
                  </Link>
                </div>
                <div className="p-4 space-y-2">
                  <p className="mx-auto text-base md:text-xl">{item?.name}</p>
                  <p className="mx-auto text-sm md:text-base">
                    {item?.sortDescription}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductSectionPage;

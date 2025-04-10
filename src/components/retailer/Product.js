// "use client";
// import React, { useEffect } from "react";
// import Picture from "../ui/picture";
// import Link from "next/link";
// import CommonBannerPage from "../global/CommonBanner";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetAllRetailerProducts } from "@/redux/RetailerProductSlice";
// import { Skeleton } from "../ui/skeleton";
// import { useSearchParams } from "next/navigation";
// import {
//   handleGetAllProductretail,
//   handleGetContactUs,
// } from "@/redux/GetContentSlice";
// import Image from "next/image";
// import { BannerLoader } from "../ui/skeleton/BannerLoader";

// const RetailerProductPage = () => {
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector(
//     (state) => state.getRetailerProduct
//   );
//   const searchParams = useSearchParams();
//   const categoryId = searchParams.get("categoryId");

//   useEffect(() => {
//     dispatch(handleGetAllRetailerProducts(categoryId));
//   }, [dispatch, categoryId]);

//   useEffect(() => {
//       dispatch(handleGetAllProductretail());
//     }, [dispatch]);
 

//   const { contactUs, product } = useSelector((state) => state.getContent);
//   const selectedProduct = products.find(item => item._id === categoryId);

//   useEffect(() => {
//     dispatch(handleGetContactUs());
//   }, [dispatch]);

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <div className="container w-full space-y-5 md:space-y-10">
//       <div className="relative w-full mx-auto ">
//         {loading ? (
//           <div className="w-full">
//             <BannerLoader />
//           </div>
//         ) : (
//           <>
//             <div className="relative w-full mx-auto overflow-hidden h-52 md:h-auto rounded-xl">
//               <Image
//                 src={`https://steel-junction.onrender.com/uploads/${contactUs.image}`}
//                 // src={""}
//                 alt="banner image"
//                 loading="lazy"
//                 width={1900}
//                 quality={100}
//                 height={500}
//                 className="object-cover rounded-md max-h-96"
//               />
//             </div>
//             <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
//               <div className="space-y-3 text-center text-white md:space-y-5">
//                 <p className="text-sm font-bold md:text-3xl">
//                 {product.length > 0 ? `$${product[0].basicPrice}` : "Price Not Available"}
//                 </p>
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-4 md:grid-cols-2 md:pb-10">
//         {loading &&
//           Array.from({ length: 8 }).map((_, index) => (
//             <Skeleton
//               key={index}
//               height={300}
//               className="w-full bg-gray-200 border rounded-lg"
//             />
//           ))}
//         {!loading &&
//           !error &&
//           products.map((item) => (
//             //   <SingleProductBox item={item} key={item?.id} />
//             <div
//               className=" w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6] "
//               key={item._id}
//             >
//               <div className="relative w-full" key={item?._id}>
//                 <Link href={`/retailer/product-details/${item._id}`}>
//                   <Picture
//                     src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
//                     alt="spa life"
//                     width={200}
//                     height={200}
//                     //   priority={true}
//                     className="object-cover w-full h-auto"
//                   />
//                 </Link>
//                 <div className="p-4 space-y-2">
//                   <div className="flex items-center justify-between">
//                     <p className="font-semibold line-clamp-1">{item.name}</p>
//                   </div>
//                   <p className="text-sm text-[#1D1B1B]">
//                     {item?.sortDescription}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// };

// export default RetailerProductPage;


"use client";
import React, { useEffect } from "react";
import Picture from "../ui/picture";
import Link from "next/link";
import CommonBannerPage from "../global/CommonBanner";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllRetailerProducts } from "@/redux/RetailerProductSlice";
import { Skeleton } from "../ui/skeleton";
import { useSearchParams } from "next/navigation";
import {
  handleGetAllProductretail,
  handleGetContactUs,
} from "@/redux/GetContentSlice";
import Image from "next/image";
import { BannerLoader } from "../ui/skeleton/BannerLoader";

const RetailerProductPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(
    (state) => state.getRetailerProduct
  );
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");

  useEffect(() => {
    dispatch(handleGetAllRetailerProducts(categoryId));
  }, [dispatch, categoryId]);

  useEffect(() => {
    dispatch(handleGetAllProductretail());
  }, [dispatch]);

  const { contactUs, product } = useSelector((state) => state.getContent);
  const selectedProduct = products.find((item) => item._id === categoryId);

  useEffect(() => {
    dispatch(handleGetContactUs());
  }, [dispatch]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="container w-full space-y-5 md:space-y-10">
      <div className="relative w-full mx-auto">
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
                <p className="text-sm font-bold md:text-3xl">
                  {product.length > 0
                    ? `$${product[0].basicPrice}`
                    : "Price Not Available"}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="grid w-full grid-cols-1 gap-4 pb-5 xl:grid-cols-4 md:grid-cols-2 md:pb-10">
        {loading &&
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton
              key={index}
              height={300}
              className="w-full bg-gray-200 border rounded-lg"
            />
          ))}
        {!loading &&
          !error &&
          products.map((item) => {
            const image = item?.images
              ? `https://steel-junction.onrender.com/uploads/${
                  Array.isArray(item.images) ? item.images[0] : item.images
                }`
              : "/static/images/no-image.png";

            return (
              <div
                className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6]"
                key={item._id}
              >
                <div className="relative w-full">
                  <Link href={`/retailer/product-details/${item._id}`}>
                    <Picture
                      src={image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-cover w-full h-auto"
                    />
                  </Link>
                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold line-clamp-1">{item.name}</p>
                    </div>
                    <p className="text-sm text-[#1D1B1B]">
                      {item?.sortDescription}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RetailerProductPage;

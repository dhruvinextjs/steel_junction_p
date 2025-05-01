// // import React, { useEffect } from "react";
// // import {
// //   Carousel,
// //   CarouselContent,
// //   CarouselItem,
// //   CarouselNext,
// //   CarouselPrevious,
// //   CarouselDots,
// // } from "@/components/ui/carousel";
// // import Image from "next/image";
// // import Link from "next/link";
// // import { useDispatch, useSelector } from "react-redux";
// // import { handleGetProduct } from "@/redux/ProductSlice";
// // import { v4 } from "uuid";

// // const FeaturedProduct = () => {
// //   const dispatch = useDispatch();
// //   // const { products, loading, loaded } = useSelector(
// //   //   (state) => state.getProduct
// //   // );
// //    const { products = { all: [] }, loading, loaded } = useSelector((state) => state.getProduct); // Getting data from Redux store

// //   useEffect(() => {
// //     // Fetch products only if not already loaded
// //     if (!loaded.featured) {
// //       dispatch(handleGetProduct({ isFeatured: true }));
// //     }
// //   }, [dispatch, loaded.featured]);

// //   if (loading && !products.featured.length)
// //     return <div>Loading products...</div>;
// //   return (
// //     <div className="w-full space-y-7">
// //       <div className="flex items-center justify-between">
// //         <p className="text-xl font-bold md:text-3xl text-title_color">
// //           Featured Products
// //         </p>
// //         <Link href="/product">
// //           <p className="font-bold text-[#FC342A]">Show All</p>
// //         </Link>
// //       </div>
// //       <div className="w-full">
// //         <Carousel
// //           opts={{
// //             align: "start",
// //             loop: true,
// //           }}
// //           className="w-full"
// //         >
// //           <CarouselContent>
// //             {products.featured?.map((item) => (
// //               <CarouselItem
// //                 key={v4()}
// //                 className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// //               >
// //                 <div
// //                   className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// //                   key={item._id}
// //                 >
// //                   <Link href="/product-details">
// //                     {/* <Link href="/coming-soon"> */}
// //                     <Image
// //                       src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
// //                       alt={item.name}
// //                       loading="lazy"
// //                       width={250}
// //                       height={250}
// //                       className="object-cover w-full"
// //                     />
// //                   </Link>
// //                   <div className="p-4 space-y-2">
// //                     <p className="font-semibold line-clamp-1">{item.name}</p>
// //                     <p className="text-sm text-[#1D1B1B]">
// //                       {item?.sortDescription}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </CarouselItem>
// //             ))}
// //           </CarouselContent>
// //           <CarouselDots className="mx-auto mt-5" />
// //         </Carousel>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FeaturedProduct;


// // // import React, { useEffect } from "react";
// // // import {
// // //   Carousel,
// // //   CarouselContent,
// // //   CarouselItem,
// // //   CarouselNext,
// // //   CarouselPrevious,
// // //   CarouselDots,
// // // } from "@/components/ui/carousel";
// // // import Image from "next/image";
// // // import Link from "next/link";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { handleGetProduct } from "@/redux/ProductSlice";
// // // import { v4 } from "uuid";
 
// // // const FeaturedProduct = () => {
// // //   const dispatch = useDispatch();
// // //   const { products = { all: [], featured: [] }, loading = false, loaded = {} } = useSelector((state) => state.getProduct);
 
// // //   useEffect(() => {
// // //     if (!loaded.featured) {
// // //       console.log("Fetching Featured Products...");
// // //       dispatch(handleGetProduct({ isFeatured: true }));
// // //     } else {
// // //       console.log("Featured Products already loaded:", products.featured);
// // //     }
// // //   }, [dispatch, loaded.featured]);
 
// // //   if (loading && !(products?.featured?.length > 0)) {
// // //     return <div>Loading featured products...</div>;
// // //   }
 
// // //   return (
// // //     <div className="w-full space-y-7">
// // //       <div className="flex items-center justify-between">
// // //         <p className="text-xl font-bold md:text-3xl text-title_color">
// // //           Featured Products
// // //         </p>
// // //         <Link href="/product">
// // //           <p className="font-bold text-[#FC342A]">Show All</p>
// // //         </Link>
// // //       </div>
// // //       <div className="w-full">
// // //         <Carousel
// // //           opts={{
// // //             align: "start",
// // //             loop: true,
// // //           }}
// // //           className="w-full"
// // //         >
// // //           <CarouselContent>
// // //             {products.featured?.length > 0 ? (
// // //               products.featured?.map((item) => (
// // //                 <CarouselItem
// // //                   key={v4()}
// // //                   className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
// // //                 >
// // //                   <div
// // //                     className="border md:min-h-[19rem] md:max-h-[23rem] border-[#E2E2E2]"
// // //                     key={item._id}
// // //                   >
// // //                     <Link href="/product-details">
// // //                       <Image
// // //                         src={`https://steel-junction.onrender.com/uploads/${item?.images}`}
// // //                         alt={item.name}
// // //                         loading="lazy"
// // //                         width={250}
// // //                         height={250}
// // //                         className="object-cover w-full"
// // //                       />
// // //                     </Link>
// // //                     <div className="p-4 space-y-2">
// // //                       <p className="font-semibold line-clamp-1">{item.name}</p>
// // //                       <p className="text-sm text-[#1D1B1B]">
// // //                         {item?.sortDescription}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </CarouselItem>
// // //               ))
// // //             ) : (
// // //               !loading && <div>No featured products available.</div>
// // //             )}
// // //           </CarouselContent>
// // //           <CarouselDots className="mx-auto mt-5" />
// // //         </Carousel>
// // //       </div>
// // //     </div>
// // //   );
// // // };
 
// // // export default FeaturedProduct;


// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetCategories } from "@/redux/GetContentSlice";
// import Image from "next/image";
// import { Category } from "@/components/ui/skeleton/category";
// import { handleGetProduct } from "@/redux/ProductSlice";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
 
// const FeaturedProduct = () => {
//   const dispatch = useDispatch();
//   const { categories, loading } = useSelector((state) => state.getContent);
//   const [selectedCategory, setSelectedCategory] = useState(null);
 
//   useEffect(() => {
//     dispatch(handleGetCategories());
//   }, [dispatch]);
 
//   useEffect(() => {
//     if (selectedCategory) {
//       dispatch(handleGetProduct([selectedCategory]));
//     }
//   }, [selectedCategory, dispatch]);
 
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 4,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
 
 
//   return (
//     <div className="w-full pb-10 space-y-4 md:space-y-7">
//       <p className="text-xl font-bold md:text-3xl text-title_color">
//         Featured Products
//       </p>
//       <div className="w-full space-y-3">
//         {loading ? (
//           <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-5 md:grid-cols-4 md:pb-10">
//             {[...Array(categories.length)].map((_, index) => (
//               <Category key={index} />
//             ))}
//           </div>
//         ) : (
//           <Slider {...settings}>
//             {categories.map((item) => (
//               <div key={item?._id} className="px-2"> {/* ⭐ Side padding */}
//                 <div className="w-full gap-3 border rounded-lg select-none bg-[#FCFCFC] border-[#E6E6E6] overflow-hidden">
//                   <div className="p-3 space-y-3 text-center">
//                     <div className="relative w-full h-32 overflow-hidden rounded-lg md:h-48"> {/* ⭐ rounded image */}
//                       <Image
//                         src={`https://steel-junction.onrender.com/uploads/${item?.image}`}
//                         alt={item?.name || "Product"}
//                         loading="lazy"
//                         fill
//                         className="object-cover w-full h-full rounded-lg"
//                       />
//                     </div>
//                     <p className="mx-auto text-base md:text-xl">{item?.name}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         )}
//       </div>
//     </div>
//   );
// };
 
// export default FeaturedProduct;

"use client";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCategories } from "@/redux/GetContentSlice";
import { handleGetProduct } from "@/redux/ProductSlice";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Category } from "@/components/ui/skeleton/category";

const FeaturedProduct = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.getContent);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    dispatch(handleGetCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCategory) {
      dispatch(handleGetProduct([selectedCategory]));
    }
  }, [selectedCategory, dispatch]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4, slidesToScroll: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full pb-10 space-y-4 md:space-y-7">
      <p className="text-xl font-bold ml-11 md:text-3xl text-title_color">
        Featured Products
      </p>
      <div className="w-full space-y-3">
        {loading ? (
          <div className="grid w-full grid-cols-2 gap-4 pb-5 xl:grid-cols-5 md:grid-cols-4 md:pb-10">
            {[...Array(categories.length)].map((_, index) => (
              <Category key={index} />
            ))}
          </div>
        ) : (
         <div  className="px-4 md:px-10">
           <Slider {...settings}>
            {categories.map((item) => (
              <div key={item?._id} className="px-2">
                <div className="w-full overflow-hidden transition duration-300 bg-white border rounded-lg shadow-md hover:shadow-lg">
                  <div className="relative w-full h-40 md:h-52">
                    <Image
                      src={`https://steel-junction.onrender.com/uploads/${item?.image}`}
                      alt={item?.name || "Product"}
                      loading="lazy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-3 space-y-1 text-center">
                    <p className="text-sm font-semibold text-gray-800 md:text-base">
                      {item?.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate md:text-sm">
                      {/* {item?.description || "Product description"} */}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
         </div>
        )}
      </div>
    </div>
  );
};

export default FeaturedProduct;

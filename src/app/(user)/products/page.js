

// "use client";
// import React, { useEffect, useState } from "react";
// import { Carousel, CarouselContent, CarouselItem, CarouselDots } from "@/components/ui/carousel";
// import Image from "next/image";
// import Link from "next/link";
// import axios from "axios";
// import { v4 as uuidv4 } from "uuid";
// import { GetUrl } from "@/app/api/BaseUrl"; // or wherever your axios config is
// import { getToken } from "@/utils/auth";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
    
// const fetchProducts = async () => {
//   try {
//     setLoading(true);

//     const token = localStorage.getItem("token");

//     const res = await GetUrl.get("/product", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const allProducts = res.data?.data || [];
//     setProducts(allProducts);
//   } catch (err) {
//     setError("Failed to load products.");
//     console.error(err);
//   } finally {
//     setLoading(false);
//   }
// };
  
//     fetchProducts();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;
//   if (!products || products.length === 0) return <div>No trending products available.</div>;

//   return (
//     <div className="w-full space-y-7">
//       <div className="flex items-center justify-between">
//         <p className="text-xl font-bold md:text-3xl text-title_color">
//           Trending Products
//         </p>
//         <Link href="/products">
//           <p className="font-bold text-[#FC342A]">Show All</p>
//         </Link>
//       </div>
//       <div className="w-full">
//         <Carousel opts={{ align: "start", loop: true }} className="w-full">
//           <CarouselContent>
//             {products.map((item) => (
//              <CarouselItem
//              key={uuidv4()}
//              className="md:basis-[50%] xl:basis-[25%] lg:basis-[33%]"
//            >
//              <div className="border border-[#E2E2E2] h-[17rem] flex flex-col">
//                {/* Product Image */}
//                <div className="h-[12rem] w-full overflow-hidden">
//                  <Image
//                    src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
//                    alt={item?.name || "product image"}
//                    loading="lazy"
//                    width={250}
//                    height={250}
//                    className="object-cover w-full h-full"
//                  />
//                </div>
           
//                {/* Product Info */}
//                <div className="flex-1 p-3 space-y-1 overflow-hidden">
//                  <p className="text-sm font-semibold line-clamp-1">{item.name}</p>
//                  <p className="text-sm text-[#1D1B1B] line-clamp-2">
//                    {item?.sortDescription}
//                  </p>
//                </div>
//              </div>
//            </CarouselItem>
//             ))}
//           </CarouselContent>
//           <CarouselDots className="mx-auto mt-5" />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Products;


"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GetUrl } from "@/app/api/BaseUrl"; // or wherever your axios config is
import { v4 as uuidv4 } from "uuid";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);

        const token = localStorage.getItem("token");

        const res = await GetUrl.get("/product", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const allProducts = res.data?.data || [];
        setProducts(allProducts);
      } catch (err) {
        setError("Failed to load products.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!products || products.length === 0) return <div>No products available.</div>;

  return (
    <div className="w-full space-y-7">
      <div className="flex justify-between">
        <p className="font-bold md:text-3xl text-title_color">
          All Products
        </p>
      </div>

      {/* Grid Layout for Products */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((item) => (
          <div
            key={uuidv4()}
            className="border border-[#E2E2E2] h-[18rem] flex flex-col justify-between p-3"
          >
            {/* Product Image */}
            <div className="h-[12rem] w-full overflow-hidden">
              <Image
                src={`https://steel-junction.onrender.com/uploads/${item?.images[0]}`}
                alt={item?.name || "product image"}
                loading="lazy"
                width={250}
                height={250}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Product Info */}
            <div className="items-center justify-center flex-1 mt-4 space-y-2 text-center">
              <p className="text-sm font-semibold line-clamp-1">{item.name}</p>
              <p className="text-sm text-[#1D1B1B] line-clamp-2">
                {item?.sortDescription}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

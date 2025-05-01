// // // // "use client";
// // // // import React, { useState } from "react";
// // // // import CommonBannerPage from "../global/CommonBanner";

// // // // const products = [
// // // //   {
// // // //     name: "TMT Bar",
// // // //     id: "tmt",
// // // //     details: [
// // // //       { type: "Basic Rate", ISI: "39511", Jindal: "41711" },
// // // //       { type: "8, 32mm (GD 5500)", ISI: "46011", Jindal: "48211" },
// // // //       { type: "10mm (GD 5500)", ISI: "45011", Jindal: "47211" },
// // // //       { type: "12, 16, 20, 25mm (GD 5000)", ISI: "44511", Jindal: "46711" },
// // // //     ],
// // // //   },
// // // //   {
// // // //     name: "Angle",
// // // //     id: "angle",
// // // //     details: [{ type: "Basic Rate", ISI: "39000", Jindal: "41000" }],
// // // //   },
// // // //   {
// // // //     name: "Channel",
// // // //     id: "channel",
// // // //     details: [{ type: "Basic Rate", ISI: "39800", Jindal: "41800" }],
// // // //   },
// // // //   {
// // // //     name: "Angl",
// // // //     id: "angl",
// // // //     details: [{ type: "Basic Rate", ISI: "39000", Jindal: "41000" }],
// // // //   },
// // // //   {
// // // //     name: "Channe",
// // // //     id: "channe",
// // // //     details: [{ type: "Basic Rate", ISI: "39800", Jindal: "41800" }],
// // // //   },
// // // // ];

// // // // const AllProductPage = () => {
// // // //   const [activeTab, setActiveTab] = useState("tmt");
// // // //   const activeProduct = products.find((p) => p.id === activeTab);
// // // //   return (
// // // //     <div className="w-full space-y-5 md:space-y-10">
// // // //       <CommonBannerPage
// // // //         image="/static/images/commonbanner.png"
// // // //         title="All Products"
// // // //       />
// // // //       <div className="container ">
// // // //         {/* Tab Navigation */}
// // // //         <div className="flex border-b border-gray-300">
// // // //           {products.map((product) => (
// // // //             <button
// // // //               key={product.id}
// // // //               onClick={() => setActiveTab(product.id)}
// // // //               className={`px-6 py-3 text-sm font-semibold ${
// // // //                 activeTab === product.id
// // // //                   ? "text-black border-b-2 border-red-500"
// // // //                   : "text-gray-600"
// // // //               }`}
// // // //             >
// // // //               {product.name}
// // // //             </button>
// // // //           ))}
// // // //         </div>

// // // //         {/* Product Details */}
// // // //         <h2 className="text-lg font-bold">{activeProduct.name}</h2>
// // // //         <div className="flex items-start justify-between p-6 mt-4 bg-white shadow-md">
// // // //           <table className="w-full mt-4 border">
// // // //             <thead>
// // // //               <tr className="bg-gray-200">
// // // //                 <th className="px-4 py-2">Type</th>
// // // //                 <th className="px-4 py-2">ISI</th>
// // // //                 <th className="px-4 py-2">Jindal</th>
// // // //               </tr>
// // // //             </thead>
// // // //             <tbody>
// // // //               {activeProduct.details.map((item, index) => (
// // // //                 <tr key={index} className="border">
// // // //                   <td className="px-4 py-2">{item.type}</td>
// // // //                   <td className="px-4 py-2">{item.ISI}</td>
// // // //                   <td className="px-4 py-2">{item.Jindal}</td>
// // // //                 </tr>
// // // //               ))}
// // // //             </tbody>
// // // //           </table>

// // // //           {/* Terms and Conditions */}
// // // //           <div className="mt-4">
// // // //             <p className="font-semibold text-red-600">
// // // //               Jindal TMT 550D available for Chhattisgarh, Madhya Pradesh, and
// // // //               Maharashtra
// // // //             </p>
// // // //             <h3 className="mt-2 font-semibold">TERMS AND CONDITIONS</h3>
// // // //             <ul className="pl-6 mt-2 text-sm list-disc">
// // // //               <li>
// // // //                 Payment: 10% Advance with order Balance against E Invoice after
// // // //                 loading
// // // //               </li>
// // // //               <li>Commercial grade material with ISI certificate</li>
// // // //               <li>Delivery Immediate</li>
// // // //               <li>Validity period 3 days</li>
// // // //             </ul>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default AllProductPage;

// // "use client";
// // import React, { useState, useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { handleGetAllRetailerProducts } from "@/redux/RetailerProductSlice"; // Import the correct thunk
// // import {
// //   Table,
// //   TableBody,
// //   TableCell,
// //   TableHead,
// //   TableHeader,
// //   TableRow
// // } from "@/components/ui/table";
// // // ... other imports

// // const AllProductPage = () => {
// //   const [enquiry, setEnquiry] = useState(false);
// //   const dispatch = useDispatch();
// //   const { products: allProducts, loading, error } = useSelector((state) => state.getRetailerProduct); // Get the 'products' array

// //   useEffect(() => {
// //     dispatch(handleGetAllRetailerProducts()); // Fetch all products on component mount
// //   }, [dispatch]);

// //   if (loading) {
// //     return (
// //       <div className="container py-10">
// //         <p>Loading all retailer products...</p>
// //       </div>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <div className="container py-10">
// //         <p className="text-red-500">Error loading products: {error}</p>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container w-full space-y-7 py-7">
// //       <div className="space-y-5">
// //         <p className="text-3xl font-semibold">All Retailer Products</p> {/* Generic title */}
// //         <hr />
// //         {allProducts?.map((product) => (
// //           <div key={product._id} className="w-full border rounded-lg shadow-md mb-7">
// //             <p className="p-3 font-semibold bg-gray-100">{product.name}</p>
// //             <Table className="w-full">
// //               <TableHeader>
// //                 <TableRow className="bg-[#f0f0f0]">
// //                   <TableHead className="font-semibold">Section</TableHead>
// //                   <TableHead className="font-semibold">Length</TableHead>
// //                   <TableHead className="font-semibold">Gauge Diff</TableHead>
// //                   <TableHead className="font-semibold">Rate PMT</TableHead>
// //                 </TableRow>
// //               </TableHeader>
// //               <TableBody>
// //                 {product.variants?.map((variant) => (
// //                   <TableRow key={variant._id}>
// //                     <TableCell>{variant.section}</TableCell>
// //                     <TableCell>{variant.length}</TableCell>
// //                     <TableCell>{variant.gDiff}</TableCell>
// //                     <TableCell>{variant.rtPrice}</TableCell>
// //                   </TableRow>
// //                 ))}
// //                 {product.variants?.length === 0 && (
// //                   <TableRow>
// //                     <TableCell colSpan="4" className="text-center">
// //                       No variants available for {product.name}
// //                     </TableCell>
// //                   </TableRow>
// //                 )}
// //               </TableBody>
// //             </Table>
// //             <div className="p-3">
// //               <p className="font-semibold">Product Detail:</p>
// //               <div dangerouslySetInnerHTML={{ __html: product.productDetail || "" }} className="text-sm" />
// //               <p className="mt-3 font-semibold">Terms And Conditions:</p>
// //               <div dangerouslySetInnerHTML={{ __html: product.termCondition || "" }} className="text-sm" />
// //             </div>
// //           </div>
// //         ))}
// //         {allProducts?.length === 0 && !loading && !error && (
// //           <p>No retailer products available.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AllProductPage;

// "use client";
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetAllRetailerProducts } from "@/redux/RetailerProductSlice"; // Ensure correct import
// import CommonBannerPage from "../global/CommonBanner";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const AllProductPage = () => {
//   const [activeTab, setActiveTab] = useState("Retailer TMT BAR"); // Initialize with the name of the first product
//   const dispatch = useDispatch();
//   const {
//     products: allProducts,
//     loading,
//     error,
//   } = useSelector((state) => state.getRetailerProduct);

//   useEffect(() => {
//     dispatch(handleGetAllRetailerProducts());
//   }, [dispatch]);

//   const activeProduct = allProducts?.find((p) => p.name === activeTab);

//   if (loading) {
//     return (
//       <div className="container py-10">
//         <p>Loading all retailer products...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="container py-10">
//         <p className="text-red-500">Error loading products: {error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       <CommonBannerPage
//         image="/static/images/commonbanner.png"
//         title="All Products"
//       />
//       <div className="container ">
//         {/* Tab Navigation */}
//         <div className="flex border-b border-gray-300">
//           {allProducts?.map((product) => (
//             <button
//               key={product._id}
//               onClick={() => setActiveTab(product.name)}
//               className={`px-6 py-3 text-sm font-semibold capitalize ${
//                 activeTab === product.name
//                   ? "text-black border-b-2 border-red-500"
//                   : "text-gray-600"
//               }`}
//             >
//               {product.name}
//             </button>
//           ))}
//         </div>

//         {/* Product Details */}
//         <h2 className="mt-4 text-lg font-bold">{activeProduct?.name}</h2>
//         <div className="flex items-start justify-between p-6 mt-4 bg-white shadow-md">
//           <table className="w-full mt-4 border">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">Section</th>
//                 <th className="px-4 py-2">Length</th>
//                 <th className="px-4 py-2">Gauge Diff</th>
//                 <th className="px-4 py-2">Rate PMT</th>
//               </tr>
//             </thead>
//             <tbody>
//               {activeProduct?.variants?.map((variant, index) => (
//                 <TableRow key={variant._id} className="border">
//                   <TableCell className="px-4 py-2 text-center">
//                     {variant.section}
//                   </TableCell>
//                   <TableCell className="px-4 py-2 text-center">
//                     {variant.length}
//                   </TableCell>
//                   <TableCell className="px-4 py-2 text-center">
//                     {variant.gDiff}
//                   </TableCell>
//                   <TableCell className="px-4 py-2 text-center">
//                     {variant.rtPrice}
//                   </TableCell>
//                 </TableRow>
//               ))}
//               {activeProduct?.variants?.length === 0 && (
//                 <TableRow>
//                   <TableCell colSpan="4" className="py-4 text-center">
//                     No variants available for {activeProduct?.name}
//                   </TableCell>
//                 </TableRow>
//               )}
//             </tbody>
//           </table>

//           {/* Terms and Conditions */}
//           <div className="">
//             {/* <h3 className="pl-6 font-semibold text-red-600"> */}
//             <h3 className="pl-6 mt-2 font-semibold ">Product Details</h3>
//             {/* Add any specific condition here based on your data */}
//             <div
//               className="pl-6 mt-2 text-sm list-disc"
//               dangerouslySetInnerHTML={{
//                 __html: activeProduct.productDetail || "",
//               }}
//             />

//             {/* </h3> */}
//             <h3 className="pl-6 mt-4 font-semibold">TERMS AND CONDITIONS</h3>
//             <div
//               className="pl-6 mt-2 text-sm list-disc"
//               dangerouslySetInnerHTML={{
//                 __html: activeProduct?.termCondition || "",
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllProductPage;


"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllRetailerProducts } from "@/redux/RetailerProductSlice"; // Ensure correct import
import CommonBannerPage from "../global/CommonBanner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AllProductPage = () => {
  const [activeTab, setActiveTab] = useState("Retailer TMT BAR"); // Initialize with the name of the first product
  const dispatch = useDispatch();
  const {
    products: allProducts,
    loading,
    error,
  } = useSelector((state) => state.getRetailerProduct);

  useEffect(() => {
    dispatch(handleGetAllRetailerProducts());
  }, [dispatch]);

  const activeProduct = allProducts?.find((p) => p.name === activeTab);

  if (loading) {
    return (
      <div className="container py-10">
        <p>Loading all retailer products...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-10">
        <p className="text-red-500">Error loading products: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <CommonBannerPage
        image="/static/images/commonbanner.png"
        title="All Products"
      />
      <div className="container ">
        {/* Tab Navigation */}
        <div className="flex overflow-x-auto border-b border-gray-300">
          {allProducts?.map((product) => (
            <button
              key={product._id}
              onClick={() => setActiveTab(product.name)}
              className={`px-6 py-3 text-sm font-semibold capitalize whitespace-nowrap ${
                activeTab === product.name
                  ? "text-black border-b-2 border-red-500"
                  : "text-gray-600"
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Product Details */}
        <h2 className="mt-4 text-lg font-bold">{activeProduct?.name}</h2>
        <div className="flex flex-col items-start justify-between gap-6 p-6 mt-4 bg-white shadow-md lg:flex-row">
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] mt-4 border">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Section</th>
                  <th className="px-4 py-2">Length</th>
                  <th className="px-4 py-2">Gauge Diff</th>
                  <th className="px-4 py-2">Rate PMT</th>
                </tr>
              </thead>
              <tbody>
                {activeProduct?.variants?.map((variant, index) => (
                  <TableRow key={variant._id} className="border">
                    <TableCell className="px-4 py-2 text-center">
                      {variant.section}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center">
                      {variant.length}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center">
                      {variant.gDiff}
                    </TableCell>
                    <TableCell className="px-4 py-2 text-center">
                      {variant.rtPrice}
                    </TableCell>
                  </TableRow>
                ))}
                {activeProduct?.variants?.length === 0 && (
                  <TableRow>
                    <TableCell colSpan="4" className="py-4 text-center">
                      No variants available for {activeProduct?.name}
                    </TableCell>
                  </TableRow>
                )}
              </tbody>
            </table>
          </div>

          {/* Terms and Conditions */}
          <div className="w-full lg:max-w-[400px]">
            <h3 className="pl-6 mt-2 font-semibold ">Product Details</h3>
            <div
              className="pl-6 mt-2 text-sm list-disc"
              dangerouslySetInnerHTML={{
                __html: activeProduct?.productDetail || "",
              }}
            />

            <h3 className="pl-6 mt-4 font-semibold">TERMS AND CONDITIONS</h3>
            <div
              className="pl-6 mt-2 text-sm list-disc"
              dangerouslySetInnerHTML={{
                __html: activeProduct?.termCondition || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProductPage;
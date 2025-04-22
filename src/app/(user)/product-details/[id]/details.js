// // // "use client";
// // // import React, { useEffect, useState } from "react";
// // // import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
// // // import { IoIosShareAlt } from "react-icons/io";
// // // import { FaFilePdf, FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa6";
// // // import {
// // //   DropdownMenu,
// // //   DropdownMenuGroup,
// // //   DropdownMenuContent,
// // //   DropdownMenuItem,
// // //   DropdownMenuTrigger,
// // // } from "@/components/ui/dropdown-menu";
// // // import { FaFacebook, FaLink } from "react-icons/fa6";
// // // import { BsInstagram } from "react-icons/bs";
// // // import {
// // //   Table,
// // //   TableBody,
// // //   TableCaption,
// // //   TableCell,
// // //   TableHead,
// // //   TableHeader,
// // //   TableRow,
// // // } from "@/components/ui/table";
// // // import Image from "next/image";
// // // import Picture from "@/components/ui/picture";
// // // import { Button } from "@/components/ui/button";
// // // import { useParams, useRouter } from "next/navigation";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import { handleGetProductById } from "@/redux/ProductSlice";
// // // import { handleAddToCart } from "@/redux/CartSlice";
// // // import toast from "react-hot-toast";
// // // import Link from "next/link";

// // // const Details = () => {
// // //   const { id } = useParams();
// // //   const dispatch = useDispatch();

// // //   const { productDetails, loading, error } = useSelector(
// // //     (state) => state.getProduct
// // //   );
// // //   const token = useSelector((state) => state.auth.token) || localStorage.getItem("token");

// // //   // const handleAddToCartClick = () => {
// // //   //   const productId = productDetails._id;
// // //   //   const quantity = quantities.reduce((sum, qty) => sum + qty, 0);

// // //   //   if (!token) {
// // //   //     // If token is not found, show error message
// // //   //     toast.error("Please login to add items to the cart!");
// // //   //     return;
// // //   //   }

// // //   //   if (quantity > 0) {
// // //   //     // Dispatch the add to cart action if quantity is valid
// // //   //     dispatch(handleAddToCart({ productId, quantity, token }));
// // //   //   } else {
// // //   //     // Show error if no valid quantity is selected
// // //   //     toast.error("Please select a valid quantity.");
// // //   //   }
// // //   // };

// // //   const handleAddToCartClick = () => {
// // //     const productId = productDetails._id;
// // //     const quantity = quantities.reduce((sum, qty) => sum + qty, 0);

// // //     if (!token) {
// // //       toast.error("Please login to add items to the cart!");
// // //       return;
// // //     }

// // //     if (quantity > 0) {
// // //       dispatch(handleAddToCart({ productId, quantity, token }));
// // //     } else {
// // //       toast.error("Please select a valid quantity.");
// // //     }
// // //   };
// // //   const [isFavourite, setIsFavourite] = useState(false);
// // //   const [quantities, setQuantities] = useState([]);
// // //   const [selectedImage, setSelectedImage] = useState(null);

// // //   useEffect(() => {
// // //     if (productDetails?.variants?.length > 0) {
// // //       setQuantities(productDetails.variants.map(() => 0)); // Default Qty to 0
// // //     }
// // //   }, [productDetails]);

// // //   // const handleIncrement = (index) => {
// // //   //   setQuantities((prevQuantities) =>
// // //   //     prevQuantities.map((qty, i) =>
// // //   //       i === index ? parseFloat((qty + 0.1).toFixed(1)) : qty
// // //   //     )
// // //   //   );
// // //   // };

// // //   // const handleDecrement = (index) => {
// // //   //   setQuantities((prevQuantities) =>
// // //   //     prevQuantities.map((qty, i) =>
// // //   //       i === index && qty > 0 ? parseFloat((qty - 0.1).toFixed(1)) : qty
// // //   //     )
// // //   //   );
// // //   // };

// // //   // const handleInputChange = (index, value) => {
// // //   //   const numericValue = parseFloat(value);
// // //   //   setQuantities((prevQuantities) =>
// // //   //     prevQuantities.map((qty, i) =>
// // //   //       i === index ? (numericValue >= 0 ? numericValue : 0) : qty
// // //   //     )
// // //   //   );
// // //   // };

// // //   const handleIncrement = (index) => {
// // //     setQuantities((prevQuantities) =>
// // //       prevQuantities.map((qty, i) =>
// // //         i === index ? parseFloat((qty + 0.1).toFixed(1)) : qty
// // //       )
// // //     );
// // //   };

// // //   const handleDecrement = (index) => {
// // //     setQuantities((prevQuantities) =>
// // //       prevQuantities.map((qty, i) =>
// // //         i === index && qty > 0 ? parseFloat((qty - 0.1).toFixed(1)) : qty
// // //       )
// // //     );
// // //   };

// // //   const handleInputChange = (index, value) => {
// // //     const numericValue = parseFloat(value);
// // //     setQuantities((prevQuantities) =>
// // //       prevQuantities.map((qty, i) =>
// // //         i === index ? (numericValue >= 0 ? numericValue : 0) : qty
// // //       )
// // //     );
// // //   };

// // //   useEffect(() => {
// // //     if (id) {
// // //       dispatch(handleGetProductById(id));
// // //     }
// // //   }, [id, dispatch]);

// // //   useEffect(() => {
// // //     if (productDetails?.images?.length > 0) {
// // //       setSelectedImage(productDetails.images[0]);
// // //       setQuantities(productDetails.variants.map(() => 0)); // Reset quantities on product change
// // //     }
// // //   }, [productDetails]);

// // //   if (loading)
// // //     return (
// // //       <p className="flex items-center justify-center text-center">Loading...</p>
// // //     );
// // //   if (error) return <p>Error: {error}</p>;
// // //   return (
// // //     <div className="container w-full space-y-7 py-7">
// // //       <div className="grid items-start justify-center grid-cols-1 gap-10 md:gap-4 xl:gap-0 md:grid-cols-2">
// // //         <div className="flex gap-3">
// // //           <div className="flex flex-col gap-2">
// // //             {productDetails?.images?.map((image, index) => {
// // //               // console.log("Images:", productDetails?.images);
// // //               return (
// // //                 <Picture
// // //                   key={index}
// // //                   alt="images"
// // //                   // src={image}
// // //                   src={`https://steel-junction.onrender.com/uploads/${image}`}
// // //                   width={800}
// // //                   height={800}
// // //                   // alt={`Thumbnail ${index}`}
// // //                   className={`object-cover w-16 h-16 border cursor-pointer ${
// // //                     selectedImage === image ? "border-blue-500" : ""
// // //                   }`}
// // //                   onClick={() => setSelectedImage(image)}
// // //                 />
// // //               );
// // //             })}
// // //           </div>

// // //           <div className="relative ml-4">
// // //             <div className="relative overflow-hidden border group">
// // //               {/* Large Image */}
// // //               <Picture
// // //                 width={500}
// // //                 height={500}
// // //                 src={`https://steel-junction.onrender.com/uploads/${
// // //                   selectedImage || "image"
// // //                 }`}
// // //                 alt="Selected"
// // //                 className="object-cover w-full h-full"
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //         <div className="space-y-5">
// // //           <div className="flex items-center justify-between">
// // //             <p className="text-3xl font-semibold">{productDetails?.name}</p>
// // //             {/* <p>{products.sortDescription}</p> */}
// // //             <div className="flex items-center gap-2">
// // //               <div
// // //                 onClick={() => setIsFavourite(!isFavourite)}
// // //                 className={`${
// // //                   isFavourite ? "border-[#b6b6b6] border" : ""
// // //                 } rounded-full p-1.5 cursor-pointer border-[#b6b6b6] border`}
// // //               >
// // //                 {isFavourite ? (
// // //                   <HiHeart className="text-2xl text-red-500" />
// // //                 ) : (
// // //                   <HiOutlineHeart className="text-2xl text-black" />
// // //                 )}
// // //               </div>
// // //               <DropdownMenu>
// // //                 <DropdownMenuTrigger>
// // //                   <div className="border-[#b6b6b6] p-1.5 border rounded-full">
// // //                     <IoIosShareAlt className="text-2xl cursor-pointer" />
// // //                   </div>
// // //                 </DropdownMenuTrigger>
// // //                 <DropdownMenuContent className="w-40 p-1 mt-2 bg-white ring-1 ring-neutral-200">
// // //                   <DropdownMenuGroup className="space-y-1">
// // //                     <DropdownMenuItem>
// // //                       <div className="flex items-center gap-3 cursor-pointer">
// // //                         <FaFacebook className="text-3xl text-[#316FF6]" />
// // //                         <p>Facebook</p>
// // //                       </div>
// // //                     </DropdownMenuItem>
// // //                     <hr />
// // //                     <DropdownMenuItem>
// // //                       <div className="flex items-center gap-3 cursor-pointer">
// // //                         <BsInstagram className="text-3xl text-[#ee2a7b]" />
// // //                         <p>Instagram</p>
// // //                       </div>
// // //                     </DropdownMenuItem>
// // //                     <hr />
// // //                     <DropdownMenuItem>
// // //                       <div className="flex items-center gap-3 cursor-pointer">
// // //                         <FaLink className="text-3xl text-primary_color" />
// // //                         <p>Copy link</p>
// // //                       </div>
// // //                     </DropdownMenuItem>
// // //                   </DropdownMenuGroup>
// // //                 </DropdownMenuContent>
// // //               </DropdownMenu>
// // //             </div>
// // //           </div>
// // //           <div className="flex items-center gap-2 cursor-pointer">
// // //             <FaFilePdf className="text-[#FC342A] text-xl" />
// // //           <a href={"https://steel-junction.onrender.com/uploads/1737197116309APP.pdf"} target="_blank">
// // //             <p>View PDF</p>
// // //           </a>
// // //           </div>
// // //           <div className="w-full border rounded-lg shadow-md">
// // //             <Table className="w-full">
// // //               <TableHeader>
// // //                 <TableRow>
// // //                   <TableHead className="font-semibold">Section</TableHead>
// // //                   <TableHead className="font-semibold">Length</TableHead>
// // //                   <TableHead className="font-semibold">Gauge Diff</TableHead>
// // //                   <TableHead className="font-semibold">Rate PMT</TableHead>
// // //                   <TableHead className="font-semibold">Stock</TableHead>
// // //                   <TableHead className="font-semibold">Qty</TableHead>
// // //                 </TableRow>
// // //               </TableHeader>
// // //               <TableBody>
// // //                 {productDetails?.variants?.map((variant, index) => (
// // //                   <TableRow key={variant._id}>
// // //                     <TableCell>{variant.section}</TableCell>
// // //                     <TableCell>{variant.length}</TableCell>
// // //                     <TableCell>{variant.gDiff}</TableCell>
// // //                     <TableCell>{variant.price}</TableCell>
// // //                     <TableCell>
// // //                       {variant.qty ? Number(variant.qty).toFixed(2) : "N/A"}
// // //                     </TableCell>
// // //                     <TableCell>
// // //                       <div className="flex items-center justify-between border border-[#e3e3e3] rounded-md">
// // //                         <button
// // //                           onClick={() => handleDecrement(index)}
// // //                           className="hover:bg-[#d8d8d8] p-2"
// // //                         >
// // //                           <FaMinus className="text-[#A3A1A1]" />
// // //                         </button>
// // //                         <input
// // //                           type="number"
// // //                           step="0.1"
// // //                           value={quantities[index] ?? ""}
// // //                           onChange={(e) =>
// // //                             handleInputChange(index, e.target.value)
// // //                           }
// // //                           className="w-10 text-center border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
// // //                         />
// // //                         <button
// // //                           onClick={() => handleIncrement(index)}
// // //                           className="hover:bg-[#d8d8d8] p-2"
// // //                         >
// // //                           <FaPlus className="text-[#A3A1A1]" />
// // //                         </button>
// // //                       </div>
// // //                     </TableCell>
// // //                   </TableRow>
// // //                 ))}
// // //               </TableBody>
// // //             </Table>
// // //           </div>
// // //           <div className="flex items-center gap-5 md:gap-10">
// // //             <Button variant="outline" className="w-full">
// // //               Buy Now
// // //             </Button>
// // //             <Button
// // //               variant="primary"
// // //               className="w-full"
// // //               onClick={handleAddToCartClick}
// // //             >
// // //               Add to cart
// // //             </Button>
// // //           </div>
// // //           <div className="space-y-5 md:space-y-10">
// // //             <div className="space-y-3">
// // //               <p className="text-[#1D1B1B] md:text-2xl text-lg font-semibold">
// // //                 Product Detail
// // //               </p>
// // //               {/* <ul className="container ml-3 space-y-1 text-sm list-disc md:text-base">
// // //                 <li>{products?.productDetail}</li>
// // //               </ul> */}
// // //               <div
// // //                 className="container ml-3 space-y-1 text-sm list-disc md:text-base"
// // //                 dangerouslySetInnerHTML={{
// // //                   __html: productDetails?.productDetail || "",
// // //                 }}
// // //               />
// // //             </div>
// // //             <div className="space-y-3">
// // //               <p className="text-[#1D1B1B] md:text-2xl text-lg font-semibold">
// // //                 Terms And Conditions
// // //               </p>
// // //               {/* <ul className="container ml-3 space-y-1 text-sm list-decimal md:text-base">
// // //                 <li>{products?.termCondition}</li>
// // //               </ul> */}
// // //               <div
// // //                 className="container ml-3 space-y-1 text-sm list-decimal md:text-base"
// // //                 dangerouslySetInnerHTML={{
// // //                   __html: productDetails?.termCondition || "",
// // //                 }}
// // //               />
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Details;

// "use client";
// import React, { useEffect, useState } from "react";
// import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
// import { IoIosShareAlt } from "react-icons/io";
// import { FaFilePdf, FaMinus, FaPlus, FaWhatsapp } from "react-icons/fa6";
// import {
//   DropdownMenu,
//   DropdownMenuGroup,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { FaFacebook, FaLink } from "react-icons/fa6";
// import { BsInstagram } from "react-icons/bs";
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
// } from "@/components/ui/table";
// import Image from "next/image";
// import Picture from "@/components/ui/picture";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetProductById } from "@/redux/ProductSlice";
// import { handleAddToCart } from "@/redux/CartSlice";
// import toast from "react-hot-toast";
// import Link from "next/link";
// import axios from "axios";

// // ✅ ✅ ✅ MOVE THIS FUNCTION OUTSIDE COMPONENT
// const addToCart = async (productId, quantity = 1) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     toast.error("Please login to add items to the cart!");
//     return;
//   }

//   try {
//     const response = await axios.post(
//       "https://steel-junction.onrender.com/api/cart",
//       { productId, quantity },
//       {
//         headers: { Authorization: `Bearer ${token}` },
//       }
//     );

//     if (response.data.success) {
//       toast.success("Item added to cart successfully!");
//       console.log("Cart Response:", response.data);
//     } else {
//       toast.error(response.data.message || "Something went wrong.");
//     }
//   } catch (error) {
//     console.error("Add to cart error:", error);
//     toast.error(error?.response?.data?.message || "Failed to add item to cart");
//   }
// };

// const Details = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [isFavourite, setIsFavourite] = useState(false);
//   const [quantities, setQuantities] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const { productDetails, loading, error } = useSelector(
//     (state) => state.getProduct
//   );
//   const token =
//     useSelector((state) => state.auth.token) || localStorage.getItem("token");

//   useEffect(() => {
//     if (id) {
//       dispatch(handleGetProductById(id));
//     }
//   }, [id, dispatch]);

//   useEffect(() => {
//     if (productDetails?.variants?.length > 0) {
//       setQuantities(productDetails.variants.map(() => 0));
//     }
//     if (productDetails?.images?.length > 0) {
//       setSelectedImage(productDetails.images[0]);
//     }
//   }, [productDetails]);

//   const handleIncrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) => (i === index ? parseFloat((q + 0.1).toFixed(1)) : q))
//     );
//   };

//   const handleDecrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index && q > 0 ? parseFloat((q - 0.1).toFixed(1)) : q
//       )
//     );
//   };

//   const handleInputChange = (index, value) => {
//     const val = parseFloat(value);
//     setQuantities((prev) =>
//       prev.map((q, i) => (i === index ? (val >= 0 ? val : 0) : q))
//     );
//   };
//   // const handleAddToCartClick = async () => {
//   //   if (!token) {
//   //     toast.error("Please login to add items to the cart!");
//   //     return;
//   //   }

//   //   const cartItems = productDetails.variants
//   //     .map((variant, index) => ({
//   //       productId: productDetails._id,
//   //       name: productDetails.name,
//   //       image: productDetails.images?.[0],
//   //       variant: variant.section, // Or any unique identifier
//   //       price: variant.price,
//   //       quantity: quantities[index],
//   //     }))
//   //     .filter((item) => item.quantity > 0);

//   //   if (cartItems.length === 0) {
//   //     toast.error("Please select at least one quantity.");
//   //     return;
//   //   }

//   //   // Bulk request to add items to cart
//   //   try {
//   //     const response = await axios.post(
//   //       "https://steel-junction.onrender.com/api/cart",
//   //       { items: cartItems },
//   //       {
//   //         headers: { Authorization: `Bearer ${token}` },
//   //       }
//   //     );
//   //     if (response.data.success) {
//   //       toast.success("Items added to cart successfully!");
//   //       console.log("Cart Response:", response.data);
//   //     } else {
//   //       toast.error(response.data.message || "Something went wrong.");
//   //     }
//   //   } catch (error) {
//   //     console.error("Add to cart error:", error);
//   //     toast.error(error?.response?.data?.message || "Failed to add items to cart");
//   //   }
//   // };

//   const handleAddToCartClick = () => {
//     const payload = {
//       productId: productData?._id,
//       quantity: selectedQuantities[variant._id] || 1,
//       token,
//       name: productData?.name,
//       image: productData?.images?.[0]?.url,
//       variant: variant?.name,
//       price: variant?.price,
//     };

//     console.log("🛒 handleAddToCartClick Payload:", payload);

//     dispatch(handleAddToCart(payload));
//   };

//   if (loading)
//     return (
//       <p className="flex items-center justify-center text-center">Loading...</p>
//     );

//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="container w-full space-y-7 py-7">
//       {/* Image + Thumbnail Section */}
//       <div className="grid items-start justify-center grid-cols-1 gap-10 md:grid-cols-2">
//         <div className="flex gap-3">
//           <div className="flex flex-col gap-2">
//             {productDetails?.images?.map((img, idx) => (
//               <Picture
//                 key={idx}
//                 src={`https://steel-junction.onrender.com/uploads/${img}`}
//                 width={800}
//                 height={800}
//                 alt="Thumbnail"
//                 className={`object-cover w-16 h-16 border cursor-pointer ${
//                   selectedImage === img ? "border-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedImage(img)}
//               />
//             ))}
//           </div>

//           <div className="relative ml-4">
//             <Picture
//               width={500}
//               height={500}
//               src={`https://steel-junction.onrender.com/uploads/${selectedImage}`}
//               alt="Selected"
//               className="object-cover w-full h-full border"
//             />
//           </div>
//         </div>

//         {/* Product Info Section */}
//         <div className="space-y-5">
//           <div className="flex items-center justify-between">
//             <p className="text-3xl font-semibold">{productDetails?.name}</p>
//              {productDetails?.variants?.[0]?.rtPrice && (
//               <p className="text-lg text-gray-600">
//                 Price: ₹{productDetails.variants[0].rtPrice}
//               </p>
//             )}
//             <div className="flex items-center gap-2">
//               <div
//                 onClick={() => setIsFavourite(!isFavourite)}
//                 className="rounded-full p-1.5 cursor-pointer border"
//               >
//                 {isFavourite ? (
//                   <HiHeart className="text-2xl text-red-500" />
//                 ) : (
//                   <HiOutlineHeart className="text-2xl text-black" />
//                 )}
//               </div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger>
//                   <div className="p-1.5 border rounded-full">
//                     <IoIosShareAlt className="text-2xl cursor-pointer" />
//                   </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-40 p-1 mt-2 bg-white ring-1">
//                 <DropdownMenuGroup className="space-y-1">
//                     <DropdownMenuItem onClick={() => {
//                       const url = window.location.href;
//                       window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank");
//                     }}>
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <FaFacebook className="text-3xl text-[#316FF6]" />
//                         <p>Facebook</p>
//                       </div>
//                     </DropdownMenuItem>
//                     <hr />
//                     <DropdownMenuItem onClick={() => {
//                       const url = "https://www.instagram.com/";
//                       window.open(url, "_blank");
//                     }}>
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <BsInstagram className="text-3xl text-[#ee2a7b]" />
//                         <p>Instagram</p>
//                       </div>
//                     </DropdownMenuItem>
//                     <hr />
//                     <DropdownMenuItem onClick={() => {
//                       const url = window.location.href;
//                       navigator.clipboard.writeText(url).then(() => {
//                         toast.remove();
//                         toast.success("Link copied to clipboard!");
//                       });
//                     }}>
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <FaLink className="text-3xl text-primary_color" />
//                         <p>Copy link</p>
//                       </div>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>

//           {/* PDF Link */}
//           <div className="flex items-center gap-2">
//             <FaFilePdf className="text-[#FC342A] text-xl" />
//             <a
//               href="https://steel-junction.onrender.com/uploads/1737197116309APP.pdf"
//               target="_blank"
//             >
//               <p>View PDF</p>
//             </a>
//           </div>

//           {/* Table */}
//           <div className="w-full border rounded-lg shadow-md">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Section</TableHead>
//                   <TableHead>Length</TableHead>
//                   <TableHead>Gauge Diff</TableHead>
//                   <TableHead>Rate PMT</TableHead>
//                   <TableHead>Stock</TableHead>
//                   <TableHead>Qty</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {productDetails?.variants?.map((variant, idx) => (
//                   <TableRow key={variant._id}>
//                     <TableCell>{variant.section}</TableCell>
//                     <TableCell>{variant.length}</TableCell>
//                     <TableCell>{variant.gDiff}</TableCell>
//                     <TableCell>{variant.price}</TableCell>
//                     <TableCell>{variant.qty?.toFixed(2)}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center justify-between border rounded-md">
//                         <button
//                           onClick={() => handleDecrement(idx)}
//                           className="p-2"
//                         >
//                           <FaMinus />
//                         </button>
//                         <input
//                           type="number"
//                           step="0.1"
//                           value={quantities[idx] ?? ""}
//                           onChange={(e) =>
//                             handleInputChange(idx, e.target.value)
//                           }
//                           className="w-10 text-center outline-none"
//                         />
//                         <button
//                           onClick={() => handleIncrement(idx)}
//                           className="p-2"
//                         >
//                           <FaPlus />
//                         </button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           {/* Buttons */}
//           <div className="flex items-center gap-5 md:gap-10">
//             <Button variant="outline" className="w-full">
//               Buy Now
//             </Button>
//             <Button
//               variant="primary"
//               className="w-full"
//               onClick={handleAddToCartClick}
//             >
//               Add to cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;

// "use client";
// import React, { useEffect, useState } from "react";
// import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
// import { IoIosShareAlt } from "react-icons/io";
// import {
//   FaFilePdf,
//   FaMinus,
//   FaPlus,
//   FaWhatsapp,
//   FaFacebook,
//   FaLink,
// } from "react-icons/fa6";
// import { BsInstagram } from "react-icons/bs";
// import {
//   DropdownMenu,
//   DropdownMenuGroup,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   Table,
//   TableBody,
//   TableHead,
//   TableHeader,
//   TableRow,
//   TableCell,
// } from "@/components/ui/table";
// import Image from "next/image";
// import Picture from "@/components/ui/picture";
// import { Button } from "@/components/ui/button";
// import { useParams } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetProductById } from "@/redux/ProductSlice";
// import { handleAddToCart } from "@/redux/CartSlice";
// import toast from "react-hot-toast";

// const Details = () => {
//   const { id } = useParams();
//   const dispatch = useDispatch();
//   const [isFavourite, setIsFavourite] = useState(false);
//   const [quantities, setQuantities] = useState([]);
//   const [selectedImage, setSelectedImage] = useState(null);

//   const { productDetails, loading, error } = useSelector(
//     (state) => state.getProduct
//   );
//   const token =
//     useSelector((state) => state.auth.token) || localStorage.getItem("token");

//   useEffect(() => {
//     if (id) {
//       dispatch(handleGetProductById(id));
//     }
//   }, [id, dispatch]);

//   useEffect(() => {
//     if (productDetails) {
//       console.log("Product Details:", productDetails); // Log product details to check structure
//       setQuantities(productDetails.variants?.map(() => 0));
//       if (productDetails.images?.length > 0) {
//         setSelectedImage(productDetails.images[0]);
//       }
//     }
//   }, [productDetails]);

//   const handleIncrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index ? Math.max(0, parseFloat((q + 0.1).toFixed(1))) : q
//       )
//     );
//   };

//   const handleDecrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index && q > 0 ? Math.max(0, parseFloat((q - 0.1).toFixed(1))) : q
//       )
//     );
//   };

//   const handleInputChange = (index, value) => {
//     const val = parseFloat(value);
//     setQuantities((prev) =>
//       prev.map((q, i) => (i === index ? (val >= 0 ? val : 0) : q))
//     );
//   };

//   const handleAddToCartClick = () => {
//     // 1. Check if the token exists (user is logged in)
//     if (!token) {
//       toast.error("Please login to add items to the cart!");
//       return;
//     }
  
//     // 2. Check if productDetails is available
//     if (!productDetails || !productDetails._id) {
//       console.error("Product details are missing.");
//       return;
//     }
  
//     // 3. Check if variants are available for the product
//     if (!productDetails.variants || productDetails.variants.length === 0) {
//       toast.error("No variants available for this product.");
//       return;
//     }
  
//     // 4. Prepare selected variants based on the user's choice
//     const selectedVariants = productDetails.variants
//       .map((variant, index) => ({
//         variantId: variant._id,
//         qty: quantities[index],
//       }))
//       .filter((v) => v.qty > 0);
  
//     if (selectedVariants.length === 0) {
//       toast.error("Please select at least one quantity.");
//       return;
//     }
  
//     // 5. Prepare the payload for the action
//     const payload = {
//       productId: productDetails._id,
//       variants: selectedVariants,
//       token,
//     };
  
//     // 6. Check if the payload is valid
//     if (!payload.productId || !Array.isArray(payload.variants) || !payload.token) {
//       console.error("🚫 Invalid cart payload", payload);
//       return;
//     }
  
//     // 7. Log the final payload for debugging purposes
//     console.log("🔥 Final Payload to Redux:", payload);
  
//     // 8. Dispatch the action to add the product to the cart
//     dispatch(handleAddToCart(payload));
//   };
  

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-red-600">Error: {error}</p>;

//   return (
//     <div className="container w-full space-y-7 py-7">
//       <div className="grid items-start justify-center grid-cols-1 gap-10 md:grid-cols-2">
//         {/* Thumbnails */}
//         <div className="flex gap-3">
//           <div className="flex flex-col gap-2">
//             {productDetails?.images?.map((img, idx) => (
//               <Picture
//                 key={idx}
//                 src={`https://steel-junction.onrender.com/uploads/${img}`}
//                 width={800}
//                 height={800}
//                 alt="Thumbnail"
//                 className={`object-cover w-16 h-16 border cursor-pointer ${
//                   selectedImage === img ? "border-blue-500" : ""
//                 }`}
//                 onClick={() => setSelectedImage(img)}
//               />
//             ))}
//           </div>
//           {/* Main Image */}
//           <div className="relative ml-4">
//             <Picture
//               width={500}
//               height={500}
//               src={`https://steel-junction.onrender.com/uploads/${selectedImage}`}
//               alt="Selected"
//               className="object-cover w-full h-full border"
//             />
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="space-y-5">
//           <div className="flex items-center justify-between">
//             <p className="text-3xl font-semibold">{productDetails?.name}</p>
//             {productDetails?.variants?.[0]?.rtPrice && (
//               <p className="text-lg text-gray-600">
//                 Price: ₹{productDetails.variants[0].rtPrice}
//               </p>
//             )}
//             <div className="flex items-center gap-2">
//               <div
//                 onClick={() => setIsFavourite(!isFavourite)}
//                 className="rounded-full p-1.5 cursor-pointer border"
//               >
//                 {isFavourite ? (
//                   <HiHeart className="text-2xl text-red-500" />
//                 ) : (
//                   <HiOutlineHeart className="text-2xl text-black" />
//                 )}
//               </div>
//               <DropdownMenu>
//                 <DropdownMenuTrigger>
//                   <div className="p-1.5 border rounded-full">
//                     <IoIosShareAlt className="text-2xl cursor-pointer" />
//                   </div>
//                 </DropdownMenuTrigger>
//                 <DropdownMenuContent className="w-40 p-1 mt-2 bg-white ring-1">
//                   <DropdownMenuGroup className="space-y-1">
//                     <DropdownMenuItem
//                       onClick={() => {
//                         const url = window.location.href;
//                         window.open(
//                           `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                             url
//                           )}`,
//                           "_blank"
//                         );
//                       }}
//                     >
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <FaFacebook className="text-3xl text-[#316FF6]" />
//                         <p>Facebook</p>
//                       </div>
//                     </DropdownMenuItem>
//                     <hr />
//                     <DropdownMenuItem
//                       onClick={() =>
//                         window.open("https://www.instagram.com/", "_blank")
//                       }
//                     >
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <BsInstagram className="text-3xl text-[#ee2a7b]" />
//                         <p>Instagram</p>
//                       </div>
//                     </DropdownMenuItem>
//                     <hr />
//                     <DropdownMenuItem
//                       onClick={() => {
//                         navigator.clipboard
//                           .writeText(window.location.href)
//                           .then(() => {
//                             toast.success("Link copied to clipboard!");
//                           });
//                       }}
//                     >
//                       <div className="flex items-center gap-3 cursor-pointer">
//                         <FaLink className="text-3xl text-primary_color" />
//                         <p>Copy link</p>
//                       </div>
//                     </DropdownMenuItem>
//                   </DropdownMenuGroup>
//                 </DropdownMenuContent>
//               </DropdownMenu>
//             </div>
//           </div>

//           <div className="flex items-center gap-2">
//             <FaFilePdf className="text-[#FC342A] text-xl" />
//             <a
//               href="https://steel-junction.onrender.com/uploads/1737197116309APP.pdf"
//               target="_blank"
//             >
//               <p>View PDF</p>
//             </a>
//           </div>

//           {/* Table */}
//           <div className="w-full border rounded-lg shadow-md">
//             <Table>
//               <TableHeader>
//                 <TableRow>
//                   <TableHead>Section</TableHead>
//                   <TableHead>Length</TableHead>
//                   <TableHead>Gauge Diff</TableHead>
//                   <TableHead>Rate PMT</TableHead>
//                   <TableHead>Stock</TableHead>
//                   <TableHead>Qty</TableHead>
//                 </TableRow>
//               </TableHeader>
//               <TableBody>
//                 {productDetails?.variants?.map((variant, index) => (
//                   <TableRow key={variant._id}>
//                     <TableCell>{variant.section || "N/A"}</TableCell>
//                     <TableCell>{variant.length || "N/A"}</TableCell>
//                     <TableCell>{variant.gDiff || "N/A"}</TableCell>
//                     <TableCell>{variant.price || "N/A"}</TableCell>
//                     <TableCell>{variant.qty?.toFixed(2) || "N/A"}</TableCell>
//                     <TableCell>
//                       <div className="flex items-center gap-2">
//                         <Button
//                           type="button"
//                           onClick={() => handleDecrement(index)}
//                           size="icon"
//                           variant="outline"
//                           className="h-7 w-7"
//                         >
//                           <FaMinus className="text-sm" />
//                         </Button>
//                         <input
//                           type="number"
//                           min={0}
//                           step={0.1}
//                           className="w-16 px-2 py-1 text-center border rounded"
//                           value={quantities[index] || ""}
//                           onChange={(e) =>
//                             handleInputChange(index, e.target.value)
//                           }
//                         />
//                         <Button
//                           type="button"
//                           onClick={() => handleIncrement(index)}
//                           size="icon"
//                           variant="outline"
//                           className="h-7 w-7"
//                         >
//                           <FaPlus className="text-sm" />
//                         </Button>
//                       </div>
//                     </TableCell>
//                   </TableRow>
//                 ))}
//               </TableBody>
//             </Table>
//           </div>

//           <Button
//             onClick={handleAddToCartClick}
//             className="w-full text-white bg-primary_color hover:bg-primary_color/90"
//           >
//             Add to Cart
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


"use client";
import React, { useEffect, useState } from "react";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { IoIosShareAlt } from "react-icons/io";
import {
  FaFilePdf,
  FaMinus,
  FaPlus,
  FaWhatsapp,
  FaFacebook,
  FaLink,
} from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuGroup,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import Picture from "@/components/ui/picture";
import { Button } from "@/components/ui/button";
import { useParams, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { handleGetProductById } from "@/redux/ProductSlice";
import { handleAddToCart } from "@/redux/CartSlice";
import toast from "react-hot-toast";
 
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [isFavourite, setIsFavourite] = useState(false);
  const [quantities, setQuantities] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const router = useRouter()
 
  const { productDetails, loading, error } = useSelector(
    (state) => state.getProduct
  );
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");
 
  useEffect(() => {
    if (id) {
      dispatch(handleGetProductById(id));
    }
  }, [id, dispatch]);
 
  useEffect(() => {
    if (productDetails) {
      setQuantities(productDetails.variants?.map(() => 0) || []);
      if (productDetails.images?.length > 0) {
        setSelectedImage(productDetails.images[0]);
      }
    }
  }, [productDetails]);
 
  const handleIncrement = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) =>
        i === index ? Math.max(0, parseFloat((parseFloat(q || 0) + 0.1).toFixed(1))) : q
      )
    );
  };
 
  const handleDecrement = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) =>
        i === index && q > 0
          ? Math.max(0, parseFloat((parseFloat(q || 0) - 0.1).toFixed(1)))
          : q
      )
    );
  };
 
  const handleInputChange = (index, value) => {
    const val = parseFloat(value);
    setQuantities((prev) =>
      prev.map((q, i) =>
        i === index
          ? value === ""
            ? ""
            : !isNaN(val) && val >= 0
              ? val
              : 0
          : q
      )
    );
  };
 
  const handleInputFocus = (index) => {
    setQuantities((prev) =>
      prev.map((q, i) => (i === index && q === 0 ? "" : q))
    );
  };
 
  const handleAddToCartClick = () => {
    if (!token) {
      toast.error("Please login to add items to the cart!");
      return;
    }
 
    if (!productDetails || !productDetails._id) {
      console.error("Product details are missing.");
      return;
    }
 
    if (!productDetails.variants || productDetails.variants.length === 0) {
      toast.error("No variants available for this product.");
      return;
    }
 
    const selectedVariants = productDetails.variants
      .map((variant, index) => ({
        variantId: variant._id,
        qty: parseFloat(quantities[index]) || 0,
      }))
      .filter((v) => v.qty > 0);
 
    if (selectedVariants.length === 0) {
      toast.error("Please select at least one quantity.");
      return;
    }
 
    const payload = {
      productId: productDetails._id,
      variants: selectedVariants,
      token,
    };
 
    dispatch(handleAddToCart(payload));
  };
 
  const handleBuyNowClick = () => {
    if (!token) {
      toast.error("Please login to continue!");
      return;
    }
  
    if (!productDetails || !productDetails._id) {
      console.error("Product details are missing.");
      return;
    }
  
    if (!productDetails.variants || productDetails.variants.length === 0) {
      toast.error("No variants available for this product.");
      return;
    }
  
    const selectedVariants = productDetails.variants
      .map((variant, index) => ({
        variantId: variant._id,
        qty: parseFloat(quantities[index]) || 0,
      }))
      .filter((v) => v.qty > 0);
  
    if (selectedVariants.length === 0) {
      toast.error("Please select at least one variant and quantity");
      return;
    }
  
    const payload = {
      productId: productDetails._id,
      variants: selectedVariants,
      token,
    };
  
    dispatch(handleAddToCart(payload)).then((res) => {
      // Navigate to cart after successful add
      if (res.meta.requestStatus === "fulfilled") {
        router.push("/shopping-cart");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    });
  };
 
  // ✅ Calculate total quantity across all variants
  const totalQty = quantities.reduce(
    (acc, q) => acc + (parseFloat(q) || 0),
    0
  );
 
  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-red-600">Error: {error}</p>;
 
  return (
    <div className="container w-full space-y-7 py-7">
      <div className="grid items-start justify-center grid-cols-1 gap-10 md:grid-cols-2">
        {/* Thumbnails and Main Image */}
        <div className="flex gap-3">
          <div className="flex flex-col gap-2">
            {productDetails?.images?.map((img, idx) => (
              <Picture
                key={idx}
                src={`https://steel-junction.onrender.com/uploads/${img}`}
                width={800}
                height={800}
                alt="Thumbnail"
                className={`object-cover w-16 h-16 border cursor-pointer ${selectedImage === img ? "border-blue-500" : ""
                  }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
          <div className="relative ml-4">
            <Picture
              width={500}
              height={500}
              src={`https://steel-junction.onrender.com/uploads/${selectedImage}`}
              alt="Selected"
              className="object-cover w-full h-full border"
            />
          </div>
        </div>
 
        {/* Product Info */}
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <p className="text-3xl font-semibold">{productDetails?.name}</p>
            {productDetails?.variants?.[0]?.rtPrice && (
              <p className="text-lg text-white">
                Price: ₹{productDetails.variants[0].rtPrice}
              </p>
            )}
            <div className="flex items-center gap-2">
              <div
                onClick={() => setIsFavourite(!isFavourite)}
                className="rounded-full p-1.5 cursor-pointer border"
              >
                {isFavourite ? (
                  <HiHeart className="text-2xl text-red-500" />
                ) : (
                  <HiOutlineHeart className="text-2xl text-black" />
                )}
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <div className="p-1.5 border rounded-full">
                    <IoIosShareAlt className="text-2xl cursor-pointer" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40 p-1 mt-2 bg-white ring-1">
                  <DropdownMenuGroup className="space-y-1">
                    <DropdownMenuItem
                      onClick={() => {
                        const url = window.location.href;
                        window.open(
                          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                            url
                          )}`,
                          "_blank"
                        );
                      }}
                    >
                      <div className="flex items-center gap-3 cursor-pointer">
                        <FaFacebook className="text-3xl text-[#316FF6]" />
                        <p>Facebook</p>
                      </div>
                    </DropdownMenuItem>
                    <hr />
                    <DropdownMenuItem
                      onClick={() =>
                        window.open("https://www.instagram.com/", "_blank")
                      }
                    >
                      <div className="flex items-center gap-3 cursor-pointer">
                        <BsInstagram className="text-3xl text-[#ee2a7b]" />
                        <p>Instagram</p>
                      </div>
                    </DropdownMenuItem>
                    <hr />
                    <DropdownMenuItem
                      onClick={() => {
                        navigator.clipboard
                          .writeText(window.location.href)
                          .then(() => {
                            toast.success("Link copied to clipboard!");
                          });
                      }}
                    >
                      <div className="flex items-center gap-3 cursor-pointer">
                        <FaLink className="text-3xl text-primary_color" />
                        <p>Copy link</p>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
 
          <div className="flex items-center gap-2">
            <FaFilePdf className="text-[#FC342A] text-xl" />
            <a
              href="https://steel-junction.onrender.com/uploads/1737197116309APP.pdf"
              target="_blank"
            >
              <p>View PDF</p>
            </a>
          </div>
 
          {/* Product Variant Table */}
          <div className="w-full border rounded-lg shadow-md">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section</TableHead>
                  <TableHead>Length</TableHead>
                  <TableHead>Gauge Diff</TableHead>
                  <TableHead>Rate PMT</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Qty</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {productDetails?.variants?.map((variant, index) => (
                  <TableRow key={variant._id}>
                    <TableCell>{variant.section || "N/A"}</TableCell>
                    <TableCell>{variant.length || "N/A"}</TableCell>
                    <TableCell>{variant.gDiff || "N/A"}</TableCell>
                    <TableCell>{variant.price || "N/A"}</TableCell>
                    <TableCell>{variant.qty?.toFixed(2) || "N/A"}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button
                          type="button"
                          onClick={() => handleDecrement(index)}
                          size="icon"
                          variant="outline"
                          className="border-gray-200 h-7 w-7"
                        >
                          <FaMinus className="text-sm" />
                        </Button>
                        <input
                          type="number"
                          min={0}
                          step={0.1}
                          className="w-12 px-2 py-1 text-center border rounded"
                          value={
                            quantities[index] === "" ? "" : quantities[index] !== undefined ? quantities[index] : 0
                          }
                          onChange={(e) => handleInputChange(index, e.target.value)}
                          onFocus={() => handleInputFocus(index)}
                        />
                        <Button
                          type="button"
                          onClick={() => handleIncrement(index)}
                          size="icon"
                          variant="outline"
                          className="border-gray-200 w-7 h-7 "
                        >
                          <FaPlus className="text-sm" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
 
 
          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleBuyNowClick}
              disabled={totalQty < 25}
              className="w-full text-black bg-white border border-gray-300 hover:bg-white hover:border-gray-300"
            >
              Buy Now
            </Button>
            <Button
              onClick={handleAddToCartClick}
              className="w-full text-white bg-primary_color hover:bg-primary_color/90"
              disabled={totalQty < 25}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Details;
 
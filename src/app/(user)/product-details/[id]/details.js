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
// import Picture from "@/components/ui/picture";
// import { Button } from "@/components/ui/button";
// import { useParams, useRouter } from "next/navigation";
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
//   const router = useRouter()

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
//       setQuantities(productDetails.variants?.map(() => 0) || []);
//       if (productDetails.images?.length > 0) {
//         setSelectedImage(productDetails.images[0]);
//       }
//     }
//   }, [productDetails]);

//   const handleIncrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index ? Math.max(0, parseFloat((parseFloat(q || 0) + 0.1).toFixed(1))) : q
//       )
//     );
//   };

//   const handleDecrement = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index && q > 0
//           ? Math.max(0, parseFloat((parseFloat(q || 0) - 0.1).toFixed(1)))
//           : q
//       )
//     );
//   };

//   const handleInputChange = (index, value) => {
//     const val = parseFloat(value);
//     setQuantities((prev) =>
//       prev.map((q, i) =>
//         i === index
//           ? value === ""
//             ? ""
//             : !isNaN(val) && val >= 0
//               ? val
//               : 0
//           : q
//       )
//     );
//   };

//   const handleInputFocus = (index) => {
//     setQuantities((prev) =>
//       prev.map((q, i) => (i === index && q === 0 ? "" : q))
//     );
//   };

//   const handleAddToCartClick = () => {
//     if (!token) {
//       toast.error("Please login to add items to the cart!");
//       return;
//     }

//     if (!productDetails || !productDetails._id) {
//       console.error("Product details are missing.");
//       return;
//     }

//     if (!productDetails.variants || productDetails.variants.length === 0) {
//       toast.error("No variants available for this product.");
//       return;
//     }

//     const selectedVariants = productDetails.variants
//       .map((variant, index) => ({
//         variantId: variant._id,
//         qty: parseFloat(quantities[index]) || 0,
//       }))
//       .filter((v) => v.qty > 0);

//     if (selectedVariants.length === 0) {
//       toast.error("Please select at least one quantity.");
//       return;
//     }

//     const payload = {
//       productId: productDetails._id,
//       variants: selectedVariants,
//       token,
//     };

//     dispatch(handleAddToCart(payload));
//   };

//   const handleBuyNowClick = () => {
//     if (!token) {
//       toast.error("Please login to continue!");
//       return;
//     }

//     if (!productDetails || !productDetails._id) {
//       console.error("Product details are missing.");
//       return;
//     }

//     if (!productDetails.variants || productDetails.variants.length === 0) {
//       toast.error("No variants available for this product.");
//       return;
//     }

//     const selectedVariants = productDetails.variants
//       .map((variant, index) => ({
//         variantId: variant._id,
//         qty: parseFloat(quantities[index]) || 0,
//       }))
//       .filter((v) => v.qty > 0);

//     if (selectedVariants.length === 0) {
//       toast.error("Please select at least one variant and quantity");
//       return;
//     }

//     const payload = {
//       productId: productDetails._id,
//       variants: selectedVariants,
//       token,
//     };

//     dispatch(handleAddToCart(payload)).then((res) => {
//       // Navigate to cart after successful add
//       if (res.meta.requestStatus === "fulfilled") {
//         router.push("/shopping-cart");
//       } else {
//         toast.error("Something went wrong, please try again.");
//       }
//     });
//   };

//   // ✅ Calculate total quantity across all variants
//   const totalQty = quantities.reduce(
//     (acc, q) => acc + (parseFloat(q) || 0),
//     0
//   );

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-red-600">Error: {error}</p>;

//   return (
//     <div className="container w-full space-y-7 py-7">
//       <div className="grid items-start justify-center grid-cols-1 gap-10 md:grid-cols-2">
//         {/* Thumbnails and Main Image */}
//         <div className="flex gap-3">
//           <div className="flex flex-col gap-2">
//             {productDetails?.images?.map((img, idx) => (
//               <Picture
//                 key={idx}
//                 src={`https://steel-junction.onrender.com/uploads/${img}`}
//                 width={800}
//                 height={800}
//                 alt="Thumbnail"
//                 className={`object-cover w-16 h-16 border cursor-pointer ${selectedImage === img ? "border-blue-500" : ""
//                   }`}
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

//         {/* Product Info */}
//         <div className="space-y-5">
//           <div className="flex items-center justify-between">
//             <p className="text-3xl font-semibold">{productDetails?.name}</p>
//             {/* {productDetails?.variants?.[0]?.rtPrice && (
//               <p className="text-lg text-gray-600">
//                 Price: ₹{productDetails.variants[0].rtPrice}
//               </p>
//             )} */}
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

//           {/* Product Variant Table */}
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
//                           className="border-gray-200 h-7 w-7"
//                         >
//                           <FaMinus className="text-sm" />
//                         </Button>
//                         <input
//                           type="number"
//                           min={0}
//                           step={0.1}
//                           className="w-16 px-2 py-1 text-center border rounded"
//                           value={
//                             quantities[index] === "" ? "" : quantities[index] !== undefined ? quantities[index] : 0
//                           }
//                           onChange={(e) => handleInputChange(index, e.target.value)}
//                           onFocus={() => handleInputFocus(index)}
//                         />
//                         <Button
//                           type="button"
//                           onClick={() => handleIncrement(index)}
//                           size="icon"
//                           variant="outline"
//                           className="border-gray-200 w-7 h-7 "
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

//           {/* Buttons */}
//           <div className="flex gap-3">
//             <Button
//               onClick={handleBuyNowClick}
//               disabled={totalQty < 25}
//               className="w-full text-black bg-white border border-gray-300 hover:bg-white hover:border-gray-300"
//             >
//               Buy Now
//             </Button>
//             <Button
//               onClick={handleAddToCartClick}
//               className="w-full text-white bg-primary_color hover:bg-primary_color/90"
//               disabled={totalQty < 25}
//             >
//               Add to Cart
//             </Button>
//           </div>

//           <hr className="border-t border-gray-300 my-7" />

//           {/* Product Details */}
//           <div className="space-y-7">
//             <h3 className="text-xl font-semibold">Product Details</h3>
//             <div
//               className="product-description "
//               dangerouslySetInnerHTML={{
//                 __html: productDetails?.productDetail || "",
//               }}
//             />
//           </div>

//           {/* Horizontal Grey Line */}
//           <hr className="border-t border-gray-300 my-7" />

//           {/* Terms and Conditions */}
//           <div className="space-y-7">
//             <h3 className="text-xl font-semibold">Terms & Conditions</h3>
//             <div
//               className="text-gray-600 terms-and-conditions"
//               dangerouslySetInnerHTML={{
//                 __html: productDetails?.termCondition || "",
//               }}
//             />
//           </div>

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
import { handleAddFavRemove, handleGetFavs } from "@/redux/FavouriteSlice"; // Import your action

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const router = useRouter();

  const [isFavourite, setIsFavourite] = useState(false);
  const [fromCart, setFromCart] = useState(false);

  // Check if coming from cart (preserve quantities if true)
  useEffect(() => {
    const cameFromCart = sessionStorage.getItem("fromCart") === "true";
    setFromCart(cameFromCart);

    if (!cameFromCart && id) {
      // Clear the stored quantity if not coming from cart
      localStorage.removeItem(`product_${id}_quantities`);
      setQuantities([]); // clear state as well
    }

    sessionStorage.removeItem("fromCart"); // clear flag either way
  }, [id]);

  const [quantities, setQuantities] = useState(() => {
    if (typeof window !== "undefined" && id) {
      const storedQuantities = localStorage.getItem(`product_${id}_quantities`);
      return storedQuantities ? JSON.parse(storedQuantities) : [];
    }
    return [];
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const { productDetails, loading, error } = useSelector(
    (state) => state.getProduct
  );
  const { favorites: favProducts } = useSelector((state) => state.getfavorites);
  const token =
    useSelector((state) => state.auth.token) || localStorage.getItem("token");

  useEffect(() => {
    if (id) {
      dispatch(handleGetProductById(id));
      if (token) {
        dispatch(handleGetFavs({}));
      }

      const storedQuantities = localStorage.getItem(`product_${id}_quantities`);
      if (storedQuantities) {
        setQuantities(JSON.parse(storedQuantities));
      }
    }
  }, [id, dispatch, token]);

  useEffect(() => {
    if (productDetails) {
      if (quantities.length === 0 && productDetails.variants) {
        setQuantities(productDetails.variants.map(() => 0));
      } else if (
        quantities.length !== productDetails.variants?.length &&
        productDetails.variants
      ) {
        const newQuantities = [...quantities];
        while (newQuantities.length < productDetails.variants.length) {
          newQuantities.push(0);
        }
        setQuantities(newQuantities);
      }

      if (productDetails.images?.length > 0) {
        setSelectedImage(productDetails.images[0]);
      }
      const isAlreadyFav = favProducts?.some(
        (fav) => fav._id === productDetails._id
      );
      setIsFavourite(isAlreadyFav);
    }
  }, [productDetails, favProducts, id]);

  const saveQuantities = (newQuantities) => {
    if (typeof window !== "undefined" && id) {
      localStorage.setItem(
        `product_${id}_quantities`,
        JSON.stringify(newQuantities)
      );
    }
  };

  const handleIncrement = (index) => {
    const newQuantities = quantities.map((q, i) =>
      i === index
        ? Math.max(0, parseFloat((parseFloat(q || 0) + 0.1).toFixed(1)))
        : q
    );
    setQuantities(newQuantities);
    saveQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = quantities.map((q, i) =>
      i === index && q > 0
        ? Math.max(0, parseFloat((parseFloat(q || 0) - 0.1).toFixed(1)))
        : q
    );
    setQuantities(newQuantities);
    saveQuantities(newQuantities);
  };

  const handleInputChange = (index, value) => {
    const val = parseFloat(value);
    const newQuantities = quantities.map((q, i) =>
      i === index ? (value === "" ? "" : !isNaN(val) && val >= 0 ? val : 0) : q
    );
    setQuantities(newQuantities);
    saveQuantities(newQuantities);
  };

  const handleInputFocus = (index) => {
    const newQuantities = quantities.map((q, i) =>
      i === index && q === 0 ? "" : q
    );
    setQuantities(newQuantities);
    saveQuantities(newQuantities);
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

    dispatch(handleAddToCart(payload)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        // toast.success("Product added to cart");
        sessionStorage.setItem("fromCart", "true");
      } else {
        toast.error("Failed to add to cart");
      }
    });
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
      if (res.meta.requestStatus === "fulfilled") {
        sessionStorage.setItem("fromCart", "true");
        router.push("/shopping-cart");
      } else {
        toast.error("Something went wrong, please try again.");
      }
    });
  };

  const toggleFavourite = () => {
    if (!token) {
      toast.error("Please login to add/remove from wishlist!");
      return;
    }
    if (productDetails?._id) {
      dispatch(handleAddFavRemove({ id: productDetails._id }));
      setIsFavourite(!isFavourite);
    }
  };

  const totalQty = quantities.reduce((acc, q) => acc + (parseFloat(q) || 0), 0);

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
                className={`object-cover w-16 h-16 border cursor-pointer ${
                  selectedImage === img ? "border-blue-500" : ""
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
            <div className="flex items-center gap-2">
              <div
                onClick={toggleFavourite} // Use the toggleFavourite function
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
                          className="w-16 px-2 py-1 text-center border rounded"
                          value={
                            quantities[index] === ""
                              ? ""
                              : quantities[index] !== undefined
                              ? quantities[index]
                              : 0
                          }
                          onChange={(e) =>
                            handleInputChange(index, e.target.value)
                          }
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

          <hr className="border-t border-gray-300 my-7" />

          {/* Product Details */}
          <div className="space-y-7">
            <h3 className="text-xl font-semibold">Product Details</h3>
            <div
              className="product-description "
              dangerouslySetInnerHTML={{
                __html: productDetails?.productDetail || "",
              }}
            />
          </div>

          {/* Horizontal Grey Line */}
          <hr className="border-t border-gray-300 my-7" />

          {/* Terms and Conditions */}
          <div className="space-y-7">
            <h3 className="text-xl font-semibold">Terms & Conditions</h3>
            <div
              className="text-gray-600 terms-and-conditions"
              dangerouslySetInnerHTML={{
                __html: productDetails?.termCondition || "",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

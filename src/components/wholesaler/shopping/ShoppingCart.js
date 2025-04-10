// "use client";
// import React from "react";
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableFooter,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";
// import { FaMinus, FaPlus } from "react-icons/fa6";

// const CartPage = () => {
//   const [count, setCount] = React.useState(0);
//   const [selectedImage, setSelectedImage] = React.useState(
//     "/static/images/Image Placeholder (4).png"
//   );
//   const [productQuantities, setProductQuantities] = React.useState({});

//   // const handleIncrement = () => {
//   //   setCount(count + 1);
//   // };

//   // const handleDecrement = () => {
//   //   setCount(count - 1);
//   // };
//   // const handleChange = (e) => {
//   //   const value = parseFloat(e.target.value); // Parse the input value to a float
//   //   if (!isNaN(value)) {
//   //     setCount(value); // Update count if it's a valid number
//   //   } else {
//   //     setCount(""); // Clear if input is invalid
//   //   }
//   // };

//   const handleIncrement = (productId) => {
//     setProductQuantities((prev) => ({
//       ...prev,
//       [productId]: (prev[productId] || 0) + 1,
//     }));
//   };
  
//   const handleDecrement = (productId) => {
//     setProductQuantities((prev) => ({
//       ...prev,
//       [productId]: Math.max((prev[productId] || 0) - 1, 0),
//     }));
//   };
  
//   const handleChange = (productId, e) => {
//     const value = parseInt(e.target.value, 10);
//     if (!isNaN(value)) {
//       setProductQuantities((prev) => ({
//         ...prev,
//         [productId]: value,
//       }));
//     }
//   };
//   return (
//     <div className="w-full space-y-5 md:space-y-10">
//       <div className="relative md:h-80 h-60 bg-primary_color">
//         <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
//           Shopping Cart
//         </h1>
//       </div>
//       <div className="container flex flex-col items-start w-full h-full gap-3 mx-auto xl:flex-row">
//         <div className="w-full h-full bg-white border xl:w-9/12">
//           <Table className="w-full space-y-2">
//             <TableHeader className="text-white bg-black">
//               <TableRow>
//                 <TableHead className="w-[100px]">Product</TableHead>
//                 <TableHead className="w-[250px]">Rate PMT </TableHead>
//                 <TableHead>Quantity</TableHead>
//                 <TableHead className="text-right">Subtotal</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody className="bg-[#F3F6FA]">
//               <TableRow>
//                 <TableCell className="w-[400px]">
//                   <p>Section : 8 mm</p>
//                   <p>Length : 40 FT</p>
//                   <p>Guage Diff : 8600</p>
//                 </TableCell>
//                 <TableCell className="">
//                   <p>₹ 39,011</p>
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center justify-between  border border-[#e3e3e3] rounded-md">
//                     <button
//                       onClick={handleDecrement}
//                       className="hover:bg-[#d8d8d8] hover:text-black p-2"
//                     >
//                       <FaMinus className="text-[#A3A1A1] hover:text-black" />
//                     </button>
//                     <input
//                       type="number"
//                       step="0.1"
//                       value={count}
//                       onChange={handleChange}
//                       className="w-6 text-center border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                     />
//                     <button
//                       onClick={handleIncrement}
//                       className="hover:bg-[#d8d8d8] hover:text-black p-2"
//                     >
//                       <FaPlus className="text-[#A3A1A1] hover:text-black" />
//                     </button>
//                   </div>
//                 </TableCell>
//                 <TableCell className="text-right">$300.00</TableCell>
//               </TableRow>
//             </TableBody>
//             <TableBody className="bg-[#F3F6FA]">
//               <TableRow>
//                 <TableCell className="w-[400px]">
//                   <p>Section : 8 mm</p>
//                   <p>Length : 40 FT</p>
//                   <p>Guage Diff : 8600</p>
//                 </TableCell>
//                 <TableCell className="">
//                   <p>₹ 39,011</p>
//                 </TableCell>
//                 <TableCell>
//                   <div className="flex items-center justify-between  border border-[#e3e3e3] rounded-md">
//                     <button
//                       onClick={handleDecrement}
//                       className="hover:bg-[#d8d8d8] hover:text-black p-2"
//                     >
//                       <FaMinus className="text-[#A3A1A1] hover:text-black" />
//                     </button>
//                     <input
//                       type="number"
//                       step="0.1"
//                       value={count}
//                       onChange={handleChange}
//                       className="w-6 text-center border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
//                     />
//                     <button
//                       onClick={handleIncrement}
//                       className="hover:bg-[#d8d8d8] hover:text-black p-2"
//                     >
//                       <FaPlus className="text-[#A3A1A1] hover:text-black" />
//                     </button>
//                   </div>
//                 </TableCell>
//                 <TableCell className="text-right">$300.00</TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//         <div className="w-full space-y-4 bg-white xl:w-3/12">
//           <div className="py-3 space-y-4 bg-white border">
//             <p className="px-3">Order Summary</p>
//             <Table>
//               <TableFooter>
//                 <TableRow>
//                   <TableCell colSpan={2}>Total Qty</TableCell>
//                   <TableCell className="text-right">24.7 MT</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell colSpan={2}>Subtotal</TableCell>
//                   <TableCell className="text-right">₹ 11,28,404.7</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell colSpan={2}>GST (18%)</TableCell>
//                   <TableCell className="text-right">₹ 2,03,112.846</TableCell>
//                 </TableRow>
//                 <TableRow>
//                   <TableCell colSpan={2} className="font-semibold">
//                     Order Total
//                   </TableCell>
//                   <TableCell className="text-right">₹ 13,31,517.546</TableCell>
//                 </TableRow>
//               </TableFooter>
//             </Table>
//             <div className="px-3">
//               {/* <Link href="/check-out"> */}
//               <Button variant="primary" className="md:w-full">
//                 Proceed to Buy
//               </Button>
//               {/* </Link> */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;


"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FaMinus, FaPlus } from "react-icons/fa6";

// Dummy data for now — replace with actual cart data from Redux or props
const dummyProducts = [
  {
    id: "prod1",
    section: "8 mm",
    length: "40 FT",
    gauge: "8600",
    price: 39011,
    subtotal: 30000,
  },
  {
    id: "prod2",
    section: "10 mm",
    length: "50 FT",
    gauge: "7200",
    price: 41000,
    subtotal: 41000,
  },
];

const CartPage = () => {
  const [productQuantities, setProductQuantities] = React.useState({});

  const handleIncrement = (productId) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: parseFloat(((prev[productId] || 0) + 0.1).toFixed(1)),
    }));
  };

  const handleDecrement = (productId) => {
    setProductQuantities((prev) => ({
      ...prev,
      [productId]: Math.max(parseFloat(((prev[productId] || 0) - 0.1).toFixed(1)), 0),
    }));
  };

  const handleChange = (productId, e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setProductQuantities((prev) => ({
        ...prev,
        [productId]: value,
      }));
    }
  };

  return (
    <div className="w-full space-y-5 md:space-y-10">
      <div className="relative md:h-80 h-60 bg-primary_color">
        <h1 className="absolute text-2xl font-bold text-center text-white uppercase -translate-x-1/2 -translate-y-1/2 md:text-4xl top-1/2 left-1/2">
          Shopping Cart
        </h1>
      </div>
      <div className="container flex flex-col items-start w-full h-full gap-3 mx-auto xl:flex-row">
        <div className="w-full h-full bg-white border xl:w-9/12">
          <Table className="w-full space-y-2">
            <TableHeader className="text-white bg-black">
              <TableRow>
                <TableHead className="w-[100px]">Product</TableHead>
                <TableHead className="w-[250px]">Rate PMT </TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead className="text-right">Subtotal</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="bg-[#F3F6FA]">
              {dummyProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="w-[400px]">
                    <p>Section : {product.section}</p>
                    <p>Length : {product.length}</p>
                    <p>Gauge Diff : {product.gauge}</p>
                  </TableCell>
                  <TableCell>
                    <p>₹ {product.price.toLocaleString()}</p>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center justify-between border border-[#e3e3e3] rounded-md">
                      <button
                        onClick={() => handleDecrement(product.id)}
                        className="hover:bg-[#d8d8d8] hover:text-black p-2"
                      >
                        <FaMinus className="text-[#A3A1A1] hover:text-black" />
                      </button>
                      <input
                        type="number"
                        step="0.1"
                        value={productQuantities[product.id] || 0}
                        onChange={(e) => handleChange(product.id, e)}
                        className="w-10 text-center border-none outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      />
                      <button
                        onClick={() => handleIncrement(product.id)}
                        className="hover:bg-[#d8d8d8] hover:text-black p-2"
                      >
                        <FaPlus className="text-[#A3A1A1] hover:text-black" />
                      </button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    ₹ {product.subtotal.toLocaleString()}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="w-full space-y-4 bg-white xl:w-3/12">
          <div className="py-3 space-y-4 bg-white border">
            <p className="px-3">Order Summary</p>
            <Table>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={2}>Total Qty</TableCell>
                  <TableCell className="text-right">24.7 MT</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>Subtotal</TableCell>
                  <TableCell className="text-right">₹ 11,28,404.7</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}>GST (18%)</TableCell>
                  <TableCell className="text-right">₹ 2,03,112.846</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2} className="font-semibold">
                    Order Total
                  </TableCell>
                  <TableCell className="text-right">₹ 13,31,517.546</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
            <div className="px-3">
              <Button variant="primary" className="md:w-full">
                Proceed to Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

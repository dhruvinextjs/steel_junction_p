// "use client";
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { MdLocationPin } from "react-icons/md";
// import { BiMenuAltRight } from "react-icons/bi";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { FaRegHeart } from "react-icons/fa6";
// import { IoSearchSharp } from "react-icons/io5";
// import { HiOutlineShoppingCart } from "react-icons/hi2";
// import { FaRegUserCircle } from "react-icons/fa";
// import Picture from "@/components/ui/picture";
// import { AiOutlineClose } from "react-icons/ai";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useRole } from "@/app/context/RoleContext";
// import { useRouter } from 'nextjs-toploader/app';
// import { IoChatboxEllipsesOutline } from "react-icons/io5";

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { useSelector } from "react-redux";

// const RetailerHeaderPage = () => {
//   const [sticky, setSticky] = useState(false);
//   const [openSidebar, setOpenSidebar] = useState(false);
//   const [setUser] = useState(null);
//   const { role, setRole } = useRole(); // Access role and setRole from context
//   const router = useRouter();

//   const { user } = useSelector((state) => state.auth);

//   const handleRoleChange = (newRole) => {
//     setRole(newRole);
//     router.push(`/${newRole}`);
//   };

//   // Sync role from localStorage on component mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   const handleSignOut = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     router.push("/login");
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.scrollY > 80) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     });
//     return () => {
//       window.removeEventListener("scroll", () => {});
//     };
//   }, []);
//   return (
//     <div
//       className={`bg-white duration-300 transition-all text-black w-full ${
//         sticky &&
//         "z-50 top-0 duration-300 w-full transition-all fixed shadow-2xl"
//       }`}
//     >
//       {/* mobile header start */}
//       <div
//         className={`xl:hidden bg-white space-y-5  text-black absolute top-0 -left-1 z-20 min-h-screen max-h-screen min-w-[80%] ${
//           openSidebar ? "translate-x-0" : "-translate-x-full"
//         } transition duration-300 ease-linear`}
//       >
//         <div className="flex items-center justify-between p-5">
//           <Link href="/" className="flex items-center gap-3">
//             <Picture
//               src={"/static/images/Logo (1).png"}
//               alt="logo"
//               width={35}
//               height={35}
//               className=""
//             />
//             <p className="text-[#FC342A] font-bold md:text-3xl text-lg">
//               Steel <span className="text-primary_color">Junction</span>
//             </p>
//           </Link>

//           <div>
//             <AiOutlineClose
//               className="ml-auto text-2xl cursor-pointer"
//               onClick={() => setOpenSidebar(false)}
//             />
//           </div>
//         </div>

//         <div className="px-10 space-y-3 text-left">
//           <hr />
//           <div>
//             <Sheet>
//               <SheetTrigger asChild>
//                 <div
//                   className="flex items-center gap-2 cursor-pointer"
//                   onClick={() => setOpenSidebar(false)}
//                 >
//                   <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
//                   <p>Chat</p>
//                 </div>
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader className="flex items-center justify-center py-6 text-white bg-primary_color">
//                   <SheetTitle>Chats</SheetTitle>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>
//           </div>
//           <hr />
//           <div>
//             {user !== null ? (
//               <Link href="/my-account">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>My Account</p>
//                 </div>
//               </Link>
//             ) : (
//               <Link href="/login">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>Sign In</p>
//                 </div>
//               </Link>
//             )}
//           </div>
//           <hr />
//           {/* {user === null ? (
//             ) : (
//               <Link href="/my-account">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>My Acount</p>
//                 </div>
//               </Link>
//             )} */}
//         </div>
//       </div>
//       {openSidebar && (
//         <div
//           onClick={() => setOpenSidebar(false)}
//           className="xl:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
//         ></div>
//       )}
//       {openSidebar && (
//         <div
//           onClick={() => setOpenSidebar(false)}
//           className="xl:hidden inset-0 z-0 absolute overflow-hidden backdrop-blur-sm bg-lightBlack bg-opacity-50 min-h-screen max-h-screen max-w-[100%]"
//         ></div>
//       )}
//       {/* mobile header end */}

//       <div
//         className="container mx-auto xl:flex xl:justify-between md:items-center"
//         id="topMenu"
//       >
//         <div className="flex items-center justify-between py-2 md:gap-6">
//           <div className="flex flex-col items-center w-full gap-2 md:flex-row md:gap-6">
//             <div className="flex items-center justify-between w-full xl:w-auto">
//               <div>
//                 <Link href="/" className="flex items-center gap-3">
//                   <Picture
//                     src={"/static/images/Logo (1).png"}
//                     alt="logo"
//                     width={35}
//                     height={35}
//                     className=""
//                   />
//                   <p className="text-[#FC342A] font-bold md:text-3xl text-lg">
//                     Steel <span className="text-primary_color">Junction</span>
//                   </p>
//                 </Link>
//               </div>
//               <div className="block xl:hidden">
//                 <Select
//                   onValueChange={handleRoleChange}
//                   value={role || "select Role"}
//                 >
//                   <SelectTrigger className="w-[120px] focus:outline-none capitalize bg-[#FC342A] hover:bg-[#000] text-white font-medium active:scale-90 outline transition text-sm">
//                     <SelectValue placeholder="select Role" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem
//                       value="wholesaler"
//                       onClick={() => handleRoleChange("wholesaler")}
//                     >
//                       Wholesaler
//                     </SelectItem>
//                     <SelectItem
//                       value="retailer"
//                       onClick={() => handleRoleChange("retailer")}
//                     >
//                       Retailer
//                     </SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="block pl-2 xl:hidden">
//                 <BiMenuAltRight
//                   className="text-2xl cursor-pointer text-primary_color"
//                   onClick={() => setOpenSidebar(true)}
//                 />
//               </div>
//             </div>
//             <div className="w-full md:w-auto rounded-md flex items-center md:px-4 px-2 py-2 gap-2 space-y-1 text-left bg-[#F3F6FA]">
//               <IoSearchSharp className="text-2xl text-[#5E5E6D]" />
//               <input
//                 type="text"
//                 name="first_name"
//                 id="fname"
//                 className="w-full bg-[#F3F6FA] outline-none"
//                 placeholder="Search for items..."
//                 pattern="[A-Za-z]{4,18}"
//                 // required
//               />
//             </div>
//           </div>
//         </div>
//         <div className="hidden xl:block">
//           <div className="flex items-center gap-6">
//             <Select
//               onValueChange={handleRoleChange}
//               value={role || "select Role"}
//             >
//               <SelectTrigger className="w-[150px] focus:outline-none capitalize bg-[#FC342A] hover:bg-[#000] text-white font-medium active:scale-90 outline transition text-sm">
//                 <SelectValue placeholder="select Role" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="wholesaler">Wholesaler</SelectItem>
//                 <SelectItem value="retailer">Retailer</SelectItem>
//               </SelectContent>
//             </Select>

//             {/* chats section */}
//             <Sheet>
//               <SheetTrigger asChild>
//                 <div className="flex items-center gap-2 cursor-pointer">
//                   <IoChatboxEllipsesOutline className="text-xl text-[#5E5E6D]" />
//                   <p>Chat</p>
//                 </div>
//               </SheetTrigger>
//               <SheetContent>
//                 <SheetHeader className="flex items-center justify-center py-6 text-white bg-primary_color">
//                   <SheetTitle>Chats</SheetTitle>
//                 </SheetHeader>
//               </SheetContent>
//             </Sheet>

//             {user !== null ? (
//               <Link href="/my-account">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>My Account</p>
//                 </div>
//               </Link>
//             ) : (
//               <Link href="/login">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>Sign In</p>
//                 </div>
//               </Link>
//             )}

//             {/* {user === null ? (
//             ) : (
//               <Link href="/my-account">
//                 <div className="flex items-center gap-2">
//                   <FaRegUserCircle className="text-xl text-[#5E5E6D]" />
//                   <p>My Acount</p>
//                 </div>
//               </Link>
//             )} */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RetailerHeaderPage;
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index
// "use client";
// import React, { useEffect } from "react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { SlLocationPin } from "react-icons/sl";
// import { LuPhone } from "react-icons/lu";
// import { TiMail } from "react-icons/ti";
// import { useRole } from "@/app/context/RoleContext";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetContactUs } from "@/redux/GetContentSlice";

// const Footer = () => {
//   const { role } = useRole();
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const { contactUs, loading, error } = useSelector(
//     (state) => state.getContent
//   );
//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   useEffect(() => {
//     dispatch(handleGetContactUs());
//   }, [dispatch]);
//   return (
//     <div className="mt-12 space-y-5 bg-primary_color md:mt-24">
//       <div className="container py-5 mx-auto">
//         <div className="grid items-center justify-center w-full grid-cols-1 px-0 py-5 md:grid-cols-2 md:px-4 lg:grid-cols-3 lg:px-10">
//           <div className="space-y-4 text-white">
//             <Link href="/">
//               <Image
//                 src={"/static/images/logo.png"}
//                 alt="spa life"
//                 loading="lazy"
//                 width={100}
//                 height={100}
//                 className=""
//               />
//             </Link>
//             {loading ? (
//               <p>Loading...</p>
//             ) : (
//               <>
//                 <div className="flex items-start gap-2">
//                   <SlLocationPin className="text-white" />
//                   <p className="inline-block">
//                     {contactUs?.address}
//                   </p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <LuPhone className="text-white" />
//                   <p className="inline-block">{contactUs?.phone}</p>
//                 </div>
//                 <div className="flex items-center gap-2">
//                   <TiMail className="text-lg text-white" />
//                   <p className="inline-block">{contactUs?.email}</p>
//                 </div>
//               </>
//             )}
//           </div>
//           <div className="mt-8 ml-0 space-y-4 text-white md:ml-12 md:mt-0 lg:ml-0">
//             <p className="text-base font-semibold text-white title heading">
//               Customer Service
//             </p>
//             <p className="text-sm font-light">
//               <Link href="/aboutus">
//                 <span className="inline-block footer">About Us</span>
//               </Link>
//             </p>
//             <p className="text-sm font-light">
//               <Link href="/terms-conditions">
//                 <span className="inline-block footer">Terms & Conditions</span>
//               </Link>
//             </p>
//             <p className="text-sm font-light">
//               <Link href="/privacy-policy">
//                 <span className="inline-block footer">Privacy & Policy</span>
//               </Link>
//             </p>
//           </div>
//           {user && (
//             <>
//               {role === "wholesaler" && (
//                 <div className="mt-8 space-y-4 text-white lg:mt-0">
//                   <p className="text-base font-semibold text-white title heading">
//                     My Account
//                   </p>
//                   <p className="text-sm font-light">
//                     <Link href="/orders">
//                       <span className="inline-block footer">My Orders</span>
//                     </Link>
//                   </p>
//                   <p className="text-sm font-light">
//                     <Link href="/wishlist">
//                       <span className="inline-block footer">Wishlist</span>
//                     </Link>
//                   </p>
//                   <p className="text-sm font-light">
//                     <Link href="/shopping-cart">
//                       <span className="inline-block footer">Shopping Cart</span>
//                     </Link>
//                   </p>
//                 </div>
//               )}
//             </>
//           )}
//           {/* <form
//             className="hidden mt-8 ml-12 text-white lg:ml-0 lg:mt-0 md:block"
//             noValidate
//           >
//             <p className="text-base font-semibold text-white title heading">
//               Join Our Newsletter
//             </p>
//             <div className="space-y-2">
//               <p>Your Email</p>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 className="p-2 bg-white rounded-md outline-none md:w-4/5 text-md input_field"
//                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//                 required
//               />
//             </div>
//             <Button
//               variant="danger"
//               type="button"
//               className="min-w-[150px] mt-4"
//             >
//               Subscribe
//             </Button>
//           </form> */}

//         </div>
//         <hr className="w-full mt-4 bg-[#252859]" />
//         <p className="flex items-center justify-center mt-4 text-xs text-white">
//           @ {new Date().getFullYear()} All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { TiMail } from "react-icons/ti";
import { useRole } from "@/app/context/RoleContext";
import { useDispatch, useSelector } from "react-redux";
import { handleGetContactUs } from "@/redux/GetContentSlice";
 
const Footer = () => {
  const { role } = useRole();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { contactUs, loading, error } = useSelector(
    (state) => state.getContent
  );
 
  useEffect(() => {
    dispatch(handleGetContactUs());
  }, [dispatch]);
 
  if (error) {
    return <p>Error: {error}</p>;
  }
 
  return (
    <div className="mt-12 space-y-5 bg-primary_color md:mt-24">
      <div className="container py-5 mx-auto">
        <div className="grid items-start justify-center w-full grid-cols-1 gap-8 px-0 py-5 md:grid-cols-2 md:px-4 lg:grid-cols-4 lg:px-10">
          {/* Contact Info */}
          <div className="space-y-4 text-white">
            <Link href="/">
              <Image
                src={"/static/images/logo.png"}
                alt="spa life"
                loading="lazy"
                width={70}
                height={70}
                className=""
              />
            </Link>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <>
                <div className="flex items-start gap-2">
                  <SlLocationPin className="text-white" />
                  <p className="inline-block">{contactUs?.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <LuPhone className="text-white" />
                  <p className="inline-block">{contactUs?.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <TiMail className="text-lg text-white" />
                  <p className="inline-block">{contactUs?.email}</p>
                </div>
              </>
            )}
          </div>
 
          {/* Customer Service Links */}
          <div className="mt-12 space-y-3 text-white">
            <p className="text-base font-semibold text-white title heading">
              Customer Service
            </p>
            <p className="text-sm font-light">
              <Link href="/aboutus">
                <span className="inline-block footer">About Us</span>
              </Link>
            </p>
            <p className="text-sm font-light">
              <Link href="/terms-conditions">
                <span className="inline-block footer">Terms & Conditions</span>
              </Link>
            </p>
            <p className="text-sm font-light">
              <Link href="/privacy-policy">
                <span className="inline-block footer">Privacy & Policy</span>
              </Link>
            </p>
          </div>
 
 
          {/* My Account */}
          <div className="mt-12 space-y-4 text-white">
            <p className="text-base font-semibold text-white title heading">
              My Account
            </p>
            <p className="text-sm font-light">
              <Link href="/My-Orders">
                <span className="inline-block footer">My Orders</span>
              </Link>
            </p>
            <p className="text-sm font-light">
              <Link href="/wishlist">
                <span className="inline-block footer">Wishlist</span>
              </Link>
            </p>
            <p className="text-sm font-light">
              <Link href="/shopping-cart">
                <span className="inline-block footer">Shopping Cart</span>
              </Link>
            </p>
          </div>
 
 
          {/* Newsletter Form (now on the right side) */}
          <form
            className="hidden mt-12 text-white md:block"
            noValidate
          >
            <p className="text-base font-semibold text-white title heading">
              Join Our Newsletter
            </p>
            <div className="mt-2 space-y-2">
              <p>Your Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="p-2 bg-white rounded-md outline-none md:w-4/5 text-md input_field"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
              />
            </div>
            <Button
              variant="danger"
              type="button"
              className="min-w-[150px] mt-4"
            >
              Subscribe
            </Button>
          </form>
 
        </div>
 
        <hr className="w-full mt-4 bg-[#252859]" />
        <p className="flex items-center justify-center mt-4 text-xs text-white">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
};
 
export default Footer;


// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import Image from "next/image";
// import { SlLocationPin } from "react-icons/sl";
// import { LuPhone } from "react-icons/lu";
// import { TiMail } from "react-icons/ti";
// import { useRole } from "@/app/context/RoleContext";
// import { useDispatch, useSelector } from "react-redux";
// import { handleGetContactUs } from "@/redux/GetContentSlice";
// import toast from "react-hot-toast";

// const Footer = () => {
//   const { role } = useRole();
//   const { user } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   const { contactUs, loading, error } = useSelector(
//     (state) => state.getContent
//   );
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     dispatch(handleGetContactUs());
//   }, [dispatch]);

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   const isValidEmail = (email) => {
//     // Basic email validation regex
//     const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
//     return emailRegex.test(email);
//   };

//   const handleMsg = () => {
//     if (!email) {
//       toast.error("Please enter your email address.");
//       return;
//     }

//     if (!isValidEmail(email)) {
//       toast.error("Please enter a valid email address.");
//       return;
//     }

//     toast.success("You have subscribed to the newsletter!");
//     setEmail(""); // Clear the email field after successful subscription
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <div className="mt-12 space-y-5 bg-primary_color md:mt-24">
//       <div className="container py-5 mx-auto">
//         <div
//           className={`grid items-center justify-center w-full grid-cols-1 gap-8 px-0 py-5 text-center md:text-left md:items-start ${
//             user ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"
//           } lg:px-10`}
//         >
//           {/* Contact Info */}
//           <div className="space-y-4 text-white">
//             <Link href="/">
//               <Image
//                 src={"/static/images/logo.png"}
//                 alt="spa life"
//                 loading="lazy"
//                 width={70}
//                 height={70}
//                 className="mx-auto md:mx-0"
//               />
//             </Link>

//             {contactUs && (
//               <>
//                 <div className="flex items-start justify-center gap-2 md:justify-start">
//                   <SlLocationPin className="mt-1 text-white" />
//                   <p className="inline-block">{contactUs?.address}</p>
//                 </div>
//                 <div className="flex items-center justify-center gap-2 md:justify-start">
//                   <LuPhone className="text-white" />
//                   <p className="inline-block">{contactUs?.phone}</p>
//                 </div>
//                 <div className="flex items-center justify-center gap-2 md:justify-start">
//                   <TiMail className="text-lg text-white" />
//                   <p className="inline-block">{contactUs?.email}</p>
//                 </div>
//               </>
//             )}
//           </div>

//           {/* Customer Service Links */}
//           <div className="mt-12 space-y-3 text-white">
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
//             <p className="text-sm font-light">
//               <Link href="/help">
//                 <span className="inline-block footer">Help</span>
//               </Link>
//             </p>
//           </div>

//           {/* My Account - Show only when user is logged in */}
//           {user && (
//             <div className="mt-12 space-y-4 text-white">
//               <p className="text-base font-semibold text-white title heading">
//                 My Account
//               </p>
//               <p className="text-sm font-light">
//                 <Link href="/myOrders">
//                   <span className="inline-block footer">My Orders</span>
//                 </Link>
//               </p>
//               <p className="text-sm font-light">
//                 <Link href="/wishlist">
//                   <span className="inline-block footer">Wishlist</span>
//                 </Link>
//               </p>
//               <p className="text-sm font-light">
//                 <Link href="/shopping-cart">
//                   <span className="inline-block footer">Shopping Cart</span>
//                 </Link>
//               </p>
//             </div>
//           )}

//           {/* Newsletter Form */}
//           <form className="block mt-12 text-white " noValidate>
//             <p className="text-base font-semibold text-white title heading">
//               Join Our Newsletter
//             </p>
//             <div className="mt-2 space-y-2">
//               <p>Your Email</p>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter Your Email"
//                 className="p-2 mx-auto text-black bg-white rounded-md outline-none md:mx-0 md:w-4/5 text-md input_field"
//                 pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
//                 required
//                 value={email}
//                 onChange={handleEmailChange}
//               />
//             </div>
//             <Button
//               variant="danger"
//               type="button"
//               className="min-w-[150px] mt-4"
//               onClick={handleMsg}
//             >
//               Subscribe
//             </Button>
//           </form>
//         </div>

//         <hr className="w-full mt-4 bg-[#252859]" />
//         <p className="flex items-center justify-center mt-4 text-xs text-white">
//           © {new Date().getFullYear()} All rights reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Footer;

 
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { LuPhone } from "react-icons/lu";
import { TiMail } from "react-icons/ti";
import { useRole } from "@/app/context/RoleContext";
import { useDispatch, useSelector } from "react-redux";
import { handleGetContactUs } from "@/redux/GetContentSlice";
import toast from "react-hot-toast";
 
const Footer = () => {
  const { role } = useRole();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const { contactUs, loading, error } = useSelector(
    (state) => state.getContent
  );
  const [email, setEmail] = useState("");
 
  useEffect(() => {
    dispatch(handleGetContactUs());
  }, [dispatch]);
 
  if (error) {
    return <p>Error: {error}</p>;
  }
 
  const isValidEmail = (email) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    return emailRegex.test(email);
  };
 
  const handleMsg = () => {
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }
    if (!isValidEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    toast.success("You have subscribed to the newsletter!");
    setEmail("");
  };
 
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
 
  return (
    <div className="mt-12 space-y-5 bg-primary_color md:mt-24">
      <div className="container py-5 mx-auto">
        <div
          className={`grid items-start w-full grid-cols-1 gap-8 px-0 py-5 text-center md:text-left ${
            user ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"
          } lg:px-10`}
        >
          {/* Contact Info */}
          <div className="space-y-4 text-white">
            <Link href="/">
              <Image
                src={"/static/images/logo.png"}
                alt="spa life"
                loading="lazy"
                width={70}
                height={70}
                className="mx-auto md:mx-0"
              />
            </Link>
 
            {contactUs && (
              <>
                <div className="flex items-start justify-center gap-2 md:justify-start">
                  <SlLocationPin className="mt-1 text-white" />
                  <p className="inline-block">{contactUs?.address}</p>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <LuPhone className="text-white" />
                  <p className="inline-block">{contactUs?.phone}</p>
                </div>
                <div className="flex items-center justify-center gap-2 md:justify-start">
                  <TiMail className="text-lg text-white" />
                  <p className="inline-block">{contactUs?.email}</p>
                </div>
              </>
            )}
          </div>
 
          {/* Customer Service Links */}
          <div className="space-y-3 text-white md:mt-6">
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
            <p className="text-sm font-light">
              <Link href="/help">
                <span className="inline-block footer">Help</span>
              </Link>
            </p>
          </div>
 
          {/* My Account */}
          {user && (
            <div className="space-y-3 text-white md:mt-10">
              <p className="text-base font-semibold text-white title heading">
                My Account
              </p>
              <p className="text-sm font-light">
                <Link href="/myOrders">
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
          )}
 
          {/* Newsletter */}
          <form className="block text-white md:mt-12" noValidate>
            <p className="text-base font-semibold text-white title heading">
              Join Our Newsletter
            </p>
            <div className="mt-2 space-y-2">
              <p>Your Email</p>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="p-2 mx-auto text-black bg-white rounded-md outline-none md:mx-0 md:w-4/5 text-md input_field"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                required
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <Button
              variant="danger"
              type="button"
              className="min-w-[150px] mt-4"
              onClick={handleMsg}
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
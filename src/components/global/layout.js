"use client";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import RetailerHeaderPage from "./RetailerHeader";
import { useRole } from "@/app/context/RoleContext";
import Picture from "../ui/picture";

function Layout({ children }) {
  const pathname = usePathname();
  const { role, isLoggedIn } = useRole();
  // const [isReady, setIsReady] = useState(false);

  const excludedPaths = ["/login", "/signup", "/forget-passcode"];
  // useEffect(() => {
  //   // Wait for client-side rendering to check login state
  //   setIsReady(true);
  // }, []);

  // if (!isReady) {
  //   // Optionally show a loader until login state is verified
  //   return (
  //     <div className="flex items-center justify-center min-h-screen">
        
  //     </div>
  //   );
  // }

  if (excludedPaths.includes(pathname)) {
    return <>{children}</>;
  }
  // console.log("Current: pathname - ", pathname);
  // console.log("Current: role - ", role);
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;

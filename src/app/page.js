"use client";

import React, { useEffect } from "react";
import { useRole } from "./context/RoleContext";
import Home from "./wholesaler/page";
import RetailerHome from "./retailer/page";
import { useRouter } from "next/navigation";
import WithoutLoginPage from "@/components/global/WithoutLogin";

const Page = () => {
  const { role, isLoggedIn } = useRole();
  const router = useRouter();
  useEffect(() => {
    // Redirect to login page if not logged in
    if (!isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn, router]);
  // return (
  //   <div>
  //     {role === "wholesaler" ? <Home/> : <RetailerHome/>}
  //   </div>
  // )
  if (!isLoggedIn) return <WithoutLoginPage />;
  return role === "wholesaler" ? <Home /> : <RetailerHome />;
};

export default Page;

import BannerSection from "@/components/retailer/home/Banner";
import ProductSectionPage from "@/components/retailer/home/ProductSection";
import Download from "@/components/wholesaler/home/Download";
import React from "react";

const RetailerHome = () => {
  return (
    <div className="space-y-6 xl:space-y-11">
      <BannerSection />
      <div className="container pb-10 space-y-6 lg:space-y-11">
        <ProductSectionPage />
        <Download/>
      </div>
    </div>
  );
};

export default RetailerHome;

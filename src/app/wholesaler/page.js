"use client";

import CategorySection from "@/components/wholesaler/home/Category";
import Download from "@/components/wholesaler/home/Download";
import FeaturedProduct from "@/components/wholesaler/home/FeaturedProduct";
import HeroSection from "@/components/wholesaler/home/HeroSection";


export default function Home() {
  return (
    <div className="space-y-6 xl:space-y-11">
      <HeroSection />
      <div className="container space-y-6 lg:space-y-11">
        <CategorySection />
        {/* <FeaturedProduct/> */}
        <Download />
      </div>
    </div>
  );
}

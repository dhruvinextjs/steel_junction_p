"use client";
import dynamic from "next/dynamic";

// global components

const Button = dynamic(() => import("@/components/ui/button"));

// Home Components
const HeroSection = dynamic(() => import("@/components/user/home/HeroSection"));
const CategorySection = dynamic(() =>
  import("@/components/user/home/CategorySection")
);
const FeaturedProduct = dynamic(() =>
  import("@/components/user/home/FeaturedProduct")
);
const Download = dynamic(() => import("@/components/user/home/Download"));
const Testimonials = dynamic(() =>
  import("@/components/user/home/Testimonials")
);
const TrendingProduct = dynamic(() =>
  import("@/components/user/home/TrendingProduct")
);

export { Button };
export {
  HeroSection,
  CategorySection,
  FeaturedProduct,
  Download,
  TrendingProduct,
  Testimonials,
};

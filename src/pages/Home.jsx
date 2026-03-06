import React from "react";

import HeroSection from "../sections/HeroSection";
import CategoriesSection from "../sections/CategoriesSection";
import ValuePropsSection from "../sections/ValuePropsSection";
import FeaturedCollection from "../sections/FeaturedCollection";
import TestimonialSection from "../sections/TestimonialSection";

export default function Home() {
  return (
    <div className="w-full">
      {/* ABOUT / HERO SECTION */}
      <HeroSection />

      {/* SHOP BY CATEGORY */}
      <CategoriesSection />

      {/* VALUE PROPOSITIONS */}
      <ValuePropsSection />

      {/* FEATURED COLLECTION */}
      <FeaturedCollection />

      {/* TESTIMONIAL */}
      <TestimonialSection />
    </div>
  );
}

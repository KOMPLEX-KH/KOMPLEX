'use client'

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/pages/landing/Hero";
import Features from "@/components/pages/landing/Features";
import AboutFeatures from "@/components/pages/landing/AboutFeatures";
import Goals from "@/components/pages/landing/Goals";
import Founders from "@/components/pages/landing/Founders";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <AboutFeatures />
      {/* <Goals /> */}
      <Founders />
      <Footer />
    </div>
  );
}
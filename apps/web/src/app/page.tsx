'use client'

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/pages/landing/Hero";
import Features from "@/components/pages/landing/Features";
import AboutFeatures from "@/components/pages/landing/AboutFeatures";
import Founders from "@/components/pages/landing/Founders";
import { useState } from "react";
import BetaDialog from "@/components/common/BetaDialog";

export default function Home() {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <AboutFeatures />
      {/* <Goals /> */}
      <Founders />
      <Footer />
      <BetaDialog isBetaDialogOpen={isBetaDialogOpen} setIsBetaDialogOpen={setIsBetaDialogOpen} />
    </div>
  );
}
'use client'

import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/pages/landing/Hero";
import Features from "@/components/pages/landing/Features";
import AboutFeatures from "@/components/pages/landing/AboutFeatures";
import Founders from "@/components/pages/landing/Founders";
import { useEffect, useState } from "react";
import BetaDialog from "@/components/common/BetaDialog";

export default function Home() {
  const [isBetaDialogOpen, setIsBetaDialogOpen] = useState(false);
  const [hasCheckedBetaDialog, setHasCheckedBetaDialog] = useState(false);

  useEffect(() => {
    const hasSeenBetaDialog =
      typeof window !== "undefined" ? window.localStorage.getItem("isShownBetaDialog") : "true";

    if (!hasSeenBetaDialog) {
      setIsBetaDialogOpen(true);
    }

    setHasCheckedBetaDialog(true);
  }, []);

  const handleBetaDialogVisibility = (isOpen: boolean) => {
    setIsBetaDialogOpen(isOpen);

    if (!isOpen) {
      window.localStorage.setItem("isShownBetaDialog", "true");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-hidden scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <AboutFeatures />
      {/* <Goals /> */}
      <Founders />
      <Footer />
      {hasCheckedBetaDialog && (
        <BetaDialog isBetaDialogOpen={isBetaDialogOpen} setIsBetaDialogOpen={handleBetaDialogVisibility} />
      )}
    </div>
  );
}
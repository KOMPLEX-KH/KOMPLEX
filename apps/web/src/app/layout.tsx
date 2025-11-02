'use client';

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import ModalRoot from "@/components/common/ModalRoot";
import Script from "next/script";
import { AuthProvider } from "@hooks/useAuth";
import { useEffect, useState } from "react";
import { feedCurriculumsService } from "@/services";
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// export const metadata: Metadata = {
//   title: "KOMPLEX",
//   description: "KOMPLEX is a platform for learning and teaching mathematics and physics.",
//   icons: {
//     icon: "/logo.png",
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  useEffect(() => {
    const stored = localStorage.getItem("curriculum");
    if (stored) {
      return;
    }
    const fetchCurriculum = async () => {
      try {
        const curriculumData = await feedCurriculumsService.getCurriculum();

        localStorage.setItem('curriculum', JSON.stringify(curriculumData));
      } catch (error) {
        console.error('Error fetching curriculum:', error);
      }
    };
    fetchCurriculum();
  }, []);


  return (
    <html lang="kh" className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/app/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;500;700&display=swap&subset=khmer"
          rel="stylesheet"
        />

        <title>KOMPLEX</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <Script
          src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"
          strategy="beforeInteractive"
        />
        {/* <Script src="https://cdn.jsdelivr.net/npm/eruda" strategy="beforeInteractive" />
        <Script id="eruda-init" strategy="beforeInteractive">
          {`eruda.init();`}
        </Script> */}

        <AuthProvider>
          <Header />
          {children}
          <ModalRoot />
        </AuthProvider>
      </body>
    </html>
  );
}
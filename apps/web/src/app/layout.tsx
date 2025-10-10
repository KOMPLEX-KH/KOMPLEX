'use client';

import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@components/common/Header";
import ModalRoot from "@components/common/ModalRoot";
import Script from "next/script";
import { AuthProvider } from "@hooks/useAuth";
import "katex/dist/katex.min.css";
import { useEffect, useState } from "react";
import { Grade } from "@core-types/docs/curriculum";
import axios from "@/configs/axios";

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
  const [curriculum, setCurriculum] = useState<Grade[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem("curriculum");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });
  useEffect(() => {
    const stored = localStorage.getItem("curriculum");
    if (stored) {
      setCurriculum(JSON.parse(stored));
      return;
    }
    const fetchCurriculum = async () => {
      const res = await axios.get('http://localhost:6969/api/feed/lessons');
      setCurriculum(res.data.data);
      localStorage.setItem('curriculum', JSON.stringify(res.data.data));
    };
    fetchCurriculum();
  }, []);


  return (
    <html lang="kh" className={poppins.className}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/app/favicon.ico" />
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

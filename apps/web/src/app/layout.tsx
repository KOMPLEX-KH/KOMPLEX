'use client';

import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/Header";
import ModalRoot from "@/components/common/ModalRoot";
import Script from "next/script";
import { AuthProvider } from "@hooks/useAuth";
import { ThemeProvider } from "@hooks/useTheme";
import { Suspense, useEffect, useState, useCallback, useMemo, useRef } from "react";
import { feedCurriculumsService } from "@/services";
import "katex/dist/katex.min.css";
import { GA_MEASUREMENT_ID } from "@/configs/googleAnalytics";
import AnalyticsListener from "./analytics-listener";
import { metadataConfig } from "@/configs/metadata";

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

function RootLayoutInner({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setThemeState] = useState<'light' | 'dark'>('light');
  const isFirstPersistRun = useRef(true);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const preferDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setThemeState(preferDark ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (isFirstPersistRun.current) {
      isFirstPersistRun.current = false;
      return;
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Sync theme to <html> so Tailwind dark: works (Next.js may not re-patch root html on state change)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const setTheme = useCallback((next: 'light' | 'dark') => setThemeState(next), []);
  const toggleTheme = useCallback(() => setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark')), []);
  const themeValue = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme,
      isDark: theme === 'dark',
    }),
    [theme, setTheme, toggleTheme]
  );

  useEffect(() => {
    const stored = localStorage.getItem("curriculum");
    if (stored) {
      return;
    }
    const fetchCurriculum = async () => {
      try {
        const curriculumData = await feedCurriculumsService.getCurriculum();

        if (curriculumData.data) {
          localStorage.setItem('curriculum', JSON.stringify(curriculumData.data));
        }
      } catch (error) {
        console.error('Error fetching curriculum:', error);
      }
    };
    fetchCurriculum();
  }, []);

  // Runs before first paint — prevents flash of wrong theme (must match init logic in useEffect below)
  const themeScript = `
(function() {
  var stored = localStorage.getItem('theme');
  var dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
})();
`;

  return (
    <html lang="kh" className={`${poppins.className} ${theme === 'dark' ? 'dark' : ''}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />

        {/* Primary Meta Tags */}
        <title>{metadataConfig.siteName} - {metadataConfig.siteDescription}</title>
        <meta name="title" content={metadataConfig.siteName} />
        <meta name="description" content={metadataConfig.siteDescription} />
        <meta name="keywords" content={metadataConfig.siteKeywords} />
        <meta name="author" content="KOMPLEX Team" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="language" content="Khmer" />
        <meta name="revisit-after" content="7 days" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="color-scheme" content="light" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={metadataConfig.siteUrl} />
        <meta property="og:title" content={metadataConfig.siteName} />
        <meta property="og:description" content={metadataConfig.siteDescription} />
        <meta property="og:image" content={`${metadataConfig.siteUrl}/logo.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={metadataConfig.siteName} />
        <meta property="og:site_name" content={metadataConfig.siteName} />
        <meta property="og:locale" content="km_KH" />
        <meta property="og:locale:alternate" content="en_US" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={metadataConfig.siteUrl} />
        <meta name="twitter:title" content={metadataConfig.siteName} />
        <meta name="twitter:description" content={metadataConfig.siteDescription} />
        <meta name="twitter:image" content={`${metadataConfig.siteUrl}/logo.png`} />
        <meta name="twitter:image:alt" content={metadataConfig.siteName} />
        <meta name="twitter:creator" content="@komplex_app" />
        <meta name="twitter:site" content="@komplex_app" />

        {/* Additional SEO Tags */}
        <meta name="application-name" content={metadataConfig.siteName} />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={metadataConfig.siteName} />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no, address=no, email=no" />

        {/* Icons */}
        <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/logo.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/logo.png" sizes="180x180" />
        <link rel="shortcut icon" href="/logo.png" />

        {/* Canonical URL */}
        <link rel="canonical" href={metadataConfig.siteUrl} />

        {/* Alternate Languages */}
        <link rel="alternate" hrefLang="km" href={metadataConfig.siteUrl} />
        <link rel="alternate" hrefLang="en" href={`${metadataConfig.siteUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={metadataConfig.siteUrl} />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Khmer:wght@400;500;700&display=swap&subset=khmer"
          rel="stylesheet"
        />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.desmos.com" />

        <title>KOMPLEX</title>

        {/* Google Analytics */}
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Structured Data - JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'EducationalOrganization',
              name: metadataConfig.siteName,
              description: metadataConfig.siteDescription,
              url: metadataConfig.siteUrl,
              logo: `${metadataConfig.siteUrl}/logo.png`,
              sameAs: [
                // Add social media links here when available
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
              },
              areaServed: {
                '@type': 'Country',
                name: 'Cambodia',
              },
              inLanguage: 'km',
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased bg-zinc-900`}
      >
        <Suspense fallback={null}>
          <AnalyticsListener />
        </Suspense>
        <Script
          src="https://www.desmos.com/api/v1.6/calculator.js?apiKey=dcb31709b452b1cf9dc26972add0fda6"
          strategy="beforeInteractive"
        />
        {/* <Script src="https://cdn.jsdelivr.net/npm/eruda" strategy="beforeInteractive" />
        <Script id="eruda-init" strategy="beforeInteractive">
          {`eruda.init();`}
        </Script> */}

        <ThemeProvider value={themeValue}>
          <AuthProvider>
            <Header />
            {children}
            <ModalRoot />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

export default function RootLayout(props: Readonly<{ children: React.ReactNode }>) {
  return <RootLayoutInner {...props} />;
}
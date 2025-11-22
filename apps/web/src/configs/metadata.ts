import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://komplex.app";
const siteName = "KOMPLEX";
const siteDescription =
  "KOMPLEX - វេទិកាសិក្សាគណិតវិទ្យា និងរូបវិទ្យាសម្រាប់សិស្សខ្មែរ។ រៀនគណិតវិទ្យា និងរូបវិទ្យាជាមួយមេរៀនដែលមានគុណភាព វីដេអូ លំហាត់ និងវេទិកាសន្ទនា។";
const siteKeywords = [
  "KOMPLEX",
  "គណិតវិទ្យា",
  "រូបវិទ្យា",
  "ការសិក្សា",
  "អប់រំ",
  "វីដេអូ",
  "លំហាត់",
  "វេទិកា",
  "mathematics",
  "physics",
  "education",
  "learning",
  "Cambodia",
  "Khmer",
  "សិស្ស",
  "គ្រូ",
].join(", ");

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: siteKeywords,
  authors: [
    {
      name: "KOMPLEX Team",
      url: siteUrl,
    },
  ],
  creator: "KOMPLEX",
  publisher: "KOMPLEX",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "km_KH",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: ["/logo.png"],
    creator: "@komplex_app",
    site: "@komplex_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/logo.png", sizes: "any" },
      { url: "/logo.png", type: "image/png", sizes: "32x32" },
      { url: "/logo.png", type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
  manifest: "/manifest.json",
  category: "education",
  classification: "Educational Platform",
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": siteName,
    "mobile-web-app-capable": "yes",
    "theme-color": "#4f46e5",
    "color-scheme": "light",
  },
};

export const metadataConfig = {
  siteUrl,
  siteName,
  siteDescription,
  siteKeywords,
};

/**
 * Helper function to generate page-specific metadata
 */
export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}): Metadata {
  const pageUrl = `${siteUrl}${path}`;
  const pageTitle = `${title} | ${siteName}`;
  const pageDescription = description || siteDescription;
  const pageImage = image || `${siteUrl}/logo.png`;

  return {
    title: pageTitle,
    description: pageDescription,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: pageUrl,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      title: pageTitle,
      description: pageDescription,
      images: [pageImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
        },
  };
}

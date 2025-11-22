import { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://komplex.app";
const siteName = "KOMPLEX";
const siteDescription =
  "KOMPLEX - វេទិកាសិក្សាគណិតវិទ្យា និងរូបវិទ្យាសម្រាប់សិស្សខ្មែរ។ រៀនជាមួយមេរៀនគុណភាពខ្ពស់ វីដេអូ លំហាត់ អត្ថបទ និងប្រព័ន្ធ AI សម្រាប់ជំនួយសិក្សា។";

const siteKeywords = [
  "KOMPLEX",
  "គណិតវិទ្យា",
  "រូបវិទ្យា",
  "ការសិក្សា",
  "អប់រំ",
  "លំហាត់",
  "វីដេអូ",
  "ពិភាក្សា",
  "STEM",
  "mathematics",
  "physics",
  "education",
  "learning",
  "Cambodia",
  "Khmer",
].join(", ");

const previewImage = `${siteUrl}/logo-text.png`;
const favicon = "/logo.png";

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

  applicationName: siteName,
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

  icons: {
    icon: [
      { url: favicon, sizes: "any" },
      { url: favicon, type: "image/png", sizes: "32x32" },
      { url: favicon, type: "image/png", sizes: "16x16" },
    ],
    apple: [{ url: favicon, sizes: "180x180", type: "image/png" }],
    shortcut: favicon,
  },

  openGraph: {
    type: "website",
    locale: "km_KH",
    siteName,
    url: siteUrl,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: previewImage,
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
    images: [previewImage],
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

  manifest: "/manifest.json",

  category: "education",
  classification: "STEM Learning Platform",

  other: {
    "apple-mobile-web-app-capable": "yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": siteName,
    "apple-mobile-web-app-status-bar-style": "default",
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
 * Helper function to generate metadata for individual pages
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
  const pageImage = image || previewImage;

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
      card: "summary_large_image",
    },

    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

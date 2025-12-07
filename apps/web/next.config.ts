import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.komplex.app",
        pathname: "/**",
      },
    ],
  },
  experimental: {
    // appDir: true,
  },
  turbopack: {},
};

export default bundleAnalyzer(nextConfig);

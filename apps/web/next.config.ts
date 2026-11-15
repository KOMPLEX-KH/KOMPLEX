import type { NextConfig } from "next";
import path from "node:path";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = {
  output: "standalone", // small self-contained server for Docker (less RAM, smaller image)
  outputFileTracingRoot: path.join(__dirname, "../.."), // pnpm monorepo root
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

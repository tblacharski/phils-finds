import type { NextConfig } from "next";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const nextConfig: NextConfig = {
  devIndicators: {
    buildActivity: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      }
    ],
  },
};

export default nextConfig;

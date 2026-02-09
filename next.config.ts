import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      }
    ]
  },

  // This fixes the webpack error
  turbopack: {},
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [38, 75],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "theramamita.com",
      },
      {
        protocol: "https",
        hostname: "www.theramamita.com",
      },
    ],
  },
};

export default nextConfig;

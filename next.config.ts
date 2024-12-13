import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Required if you use the Image component in Next.js
  },
};

export default nextConfig;

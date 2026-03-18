import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true // Required — image optimization needs a server
  }
};

export default nextConfig;

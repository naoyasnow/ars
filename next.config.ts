import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/ars",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
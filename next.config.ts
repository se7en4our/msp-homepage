import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: { BUILD_SHA: process.env.BUILD_SHA ?? "dev" },
};

export default nextConfig;

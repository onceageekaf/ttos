import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "proxy.extractcss.dev",
      },
      {
        protocol: "https",
        hostname: "attio.com",
      },
      {
        protocol: "https",
        hostname: "a.storyblok.com",
      },
    ],
  },
};

export default nextConfig;

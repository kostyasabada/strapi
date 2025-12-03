import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*"
      }
    ],
    dangerouslyAllowSVG: true,
    unoptimized: true, // ← або тимчасово вимкнути оптимізацію
  }
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // local Strapi dev
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Unsplash
      },
      {
        protocol: "https",
        hostname: "hamptons-hills-strapi-backend.onrender.com",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;

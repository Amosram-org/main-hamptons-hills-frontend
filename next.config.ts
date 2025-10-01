import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", // or your server/domain name
        port: "1337",          // Strapi default port
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", // keep Unsplash too
      },
    ],
  },
};

export default nextConfig;

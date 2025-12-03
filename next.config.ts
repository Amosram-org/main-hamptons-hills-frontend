import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost", //Local Strapi (dev)
        port: "1337",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com", //Unsplash (optional)
      },
      {
        protocol: "https",
        hostname: "hamptons-hills-strapi-backend.onrender.com", //Your Strapi backend (Render)
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", // Cloudinary CDN domain
        pathname: "/**", // allow all Cloudinary images
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

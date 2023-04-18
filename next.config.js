/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.valpapers.tech",
        port: "",
        pathname: "/assets/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/*",
      },
    ],
    domains: ["cdn.valpapers.tech", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;

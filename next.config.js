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
    ],
    domains: ["cdn.valpapers.tech"],
  },
};

module.exports = nextConfig;

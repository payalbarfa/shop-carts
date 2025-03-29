import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["sgp1.digitaloceanspaces.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/categories",
        permanent: true, // 308 Redirect (Permanent)
      },
    ];
  },
};

export default nextConfig;


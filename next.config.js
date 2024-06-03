/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cashkr.blr1.cdn.digitaloceanspaces.com",
      },
      {
        protocol: "https",
        hostname: "www.cashkr.com",
      },

      {
        protocol: "http",
        hostname: "api.cashkr.com",
      },
    ],
  },
};

module.exports = nextConfig;

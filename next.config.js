/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/login",
      },
    ];
  },
};

module.exports = nextConfig;

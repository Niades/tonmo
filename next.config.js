/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    async redirects() {
      return [
        {
          source: "/",
          destination: "/login",
          permanent: true,
        }
      ]
    }
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/login'
      }
    ]
  }
};

module.exports = nextConfig;

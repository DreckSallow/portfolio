/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
  async redirects() {
    return [
      {
        source: "/dashboard",
        destination: "/dashboard/projects",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

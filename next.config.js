/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['sereja-art.ru'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sereja-art.ru',
      },
    ],
  },
}

module.exports = nextConfig

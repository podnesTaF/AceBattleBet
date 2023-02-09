/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  // reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/uploads/**',
      },
      {
        protocol: "https",
        hostname: "abb-server-production.up.railway.app",
        // port: "7490",
        pathname: '/uploads/**',
      }
    ],
  },
}

module.exports = nextConfig

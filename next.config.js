/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,

    legacyBrowsers: false,
    browsersListForSwc: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    minimumCacheTTL: 84600 * 30, // 30days
  },
}

module.exports = nextConfig

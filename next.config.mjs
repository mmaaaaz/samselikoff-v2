import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,

  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  poweredByHeader: false,

  images: {
    minimumCacheTTL: 84600 * 30, // 30days
  },
}

export default withContentlayer({ nextConfig })
// export default nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict mode helps identify problems in an application
  reactStrictMode: true,

  // Image optimization settings
  images: {
    domains: ['yourdomain.com'], // ✅ Replace with actual image domains
    formats: ['image/webp', 'image/avif'],
    unoptimized: false
  },

  // Enable and prepare for future improvements
  experimental: {
    optimizeCss: true // ✅ Remove serverActions, keep valid flags
  },

  // Compiler optimizations for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
    styledComponents: true
  },

  // Performance enhancements
  poweredByHeader: false,
  compress: true,

  // Improve build flow safety
  eslint: {
    ignoreDuringBuilds: false
  },

  typescript: {
    ignoreBuildErrors: false
  }
};

export default nextConfig;

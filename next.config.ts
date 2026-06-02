import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (best compression), fallback to WebP
    formats: ["image/avif", "image/webp"],
    // Responsive breakpoints matching our CSS
    deviceSizes: [375, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384, 512],
    // Cache optimized images for 24 hours on CDN/edge
    minimumCacheTTL: 86400,
  },
  // Gzip compress all responses
  compress: true,
  // Remove X-Powered-By header (minor security + perf)
  poweredByHeader: false,
  // Enable strict hydration checks
  reactStrictMode: true,
};

export default nextConfig;

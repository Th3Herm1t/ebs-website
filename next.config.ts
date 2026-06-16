import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ebs.tn',
      },
      {
        protocol: 'https',
        hostname: 'www.uqat.ca',
      },
      {
        protocol: 'https',
        hostname: 'uqat.ca',
      },
    ],
  },
};

export default withNextIntl(nextConfig);

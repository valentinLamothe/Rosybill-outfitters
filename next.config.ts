import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    // Every quality passed to <Image>; Next 16 rejects unlisted values.
    qualities: [65, 75, 82, 90],
  },
};

export default nextConfig;

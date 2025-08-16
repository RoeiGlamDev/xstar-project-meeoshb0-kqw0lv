import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: [], // Add your image domain here
    formats: ['image/avif', 'image/webp']
},
  experimental: {
    optimizeCss: true
},
  webpack: (config) => {
    config.module.rules.push({
      test: /\.glb$/,
      use: 'file-loader'
});
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY'
},
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
},
        ]
},
    ];
  },
  env: {
    BRAND_NAME: 'luxury LRP cosmetics',
    PRIMARY_COLOR: '#FFA500', // Orange
    SECONDARY_COLOR: '#FFFFFF', // White
  }
};

export default nextConfig;
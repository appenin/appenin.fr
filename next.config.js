/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];

module.exports = withBundleAnalyzer({
  env: {
    analytics: '//www.googletagmanager.com/gtag/js?id=',
    fontInter: '//fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    novocall: '//call.novocall.co/v1/widgets?id=RiL79OgM65w',
    salesForce: '//webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
  },
  experimental: {
    //To remove properties matching the default regex ^data-test
    reactRemoveProperties: true,
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  i18n: {
    locales: ['fr'],
    defaultLocale: 'fr',
  },
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    // fixes packages that depend on fs/module module
    if (!isServer) {
      config.resolve.fallback = { fs: false, module: false };
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
});

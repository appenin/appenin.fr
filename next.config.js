/** @type {import('next').NextConfig} */
const { withContentlayer } = require('next-contentlayer');

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

module.exports = withContentlayer()(
  withBundleAnalyzer({
    compiler: {
      //To remove properties matching the default regex ^data-test
      reactRemoveProperties: true,
    },
    env: {
      analytics: '//appenin.matomo.cloud',
      novocall: '//call.novocall.co/v1/widgets?id=',
      salesforce: '//webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8',
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
    async redirects() {
      return [
        {
          source: `/contact`,
          destination: `https://client.appenin.fr/contact`,
          permanent: true,
        },
      ];
    },
    i18n: {
      locales: ['fr'],
      defaultLocale: 'fr',
    },
    reactStrictMode: true,
    //Disable the minification to prevent lottie's animation problem between development and production mode
    //swcMinify: true,
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
  }),
);

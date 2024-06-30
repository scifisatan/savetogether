import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';
const nextConfig = {};
const withPWAConfig = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: false,
  reloadOnOnline: true,
  disable: false,
  runtimeCaching: [
    {
      urlPattern: /^\/page/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'page',
        expiration: {
          maxEntries: 10,
          maxAgeSeconds: 24 * 60 * 60, // 1 day
        },
      },
    },
  ],
});

// export default withPWAConfig(nextConfig)
//enable pwa if prod if else disable
export default MillionLint.next({
  rsc: true
})(process.env.NODE_ENV === 'production' ? withPWAConfig(nextConfig) : nextConfig);
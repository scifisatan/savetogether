import MillionLint from '@million/lint';
/** @type {import('next').NextConfig} */

import withPWA from 'next-pwa';
const nextConfig = {};
const withPWAConfig = withPWA({
  dest: 'public',
  cacheOnFrontEndNav: true,
  reloadOnOnline: true,
  disable: false
});

// export default withPWAConfig(nextConfig)
//enable pwa if prod if else disable
export default MillionLint.next({
  rsc: true
})(process.env.NODE_ENV === 'production' ? withPWAConfig(nextConfig) : nextConfig);
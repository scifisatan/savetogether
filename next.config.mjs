import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};
const withPWAConfig = withPWA({
    dest: 'public',
    cacheOnFrontEndNav: true,
    reloadOnOnline: true,
    disable: false,
});

export default withPWAConfig(nextConfig)
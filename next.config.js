/** @type {import('next').NextConfig} */
const nextConfig = {
  disableManifest: true,
  cacheBust: true,
  images: {
    domains: [
      "via.placeholder.com",
      "staging.lazynerdstudios.com",
      "cdn-icons-png.flaticon.com",
    ], // Add the domain(s) of your image sources
  },
  reactStrictMode: false
};

module.exports = nextConfig;

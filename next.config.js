/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "staging.lazynerdstudios.com",
      "cdn-icons-png.flaticon.com",
    ], // Add the domain(s) of your image sources
  },
};

module.exports = nextConfig;

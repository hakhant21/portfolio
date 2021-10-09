module.exports = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  target: "serverless",
  images: {
    domains: ['cdn.sanity.io'],
  },
};

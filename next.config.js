/** @type {import('next').NextConfig} */
module.exports = {
  compiler: {
    styledComponents: true,
  },
  assetPrefix: "",
  reactStrictMode: true,
  experimental: {
    esmExternals: "loose"
  },
};

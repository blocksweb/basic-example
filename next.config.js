const MiniCssExtractPlugin = require("mini-css-extract-plugin");

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack(config, { dev, isServer }) {
    // only for client production builds
    if (!dev && !isServer) {
      // swap Next's style loader for MiniCssExtract
      config.module.rules.forEach((rule) => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf.forEach((r) => {
            if (r.use && r.use.loader?.includes("next-style-loader")) {
              r.use.loader = MiniCssExtractPlugin.loader;
            }
          });
        }
      });

      // emit a CSS file
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: "static/css/[name].css",
        })
      );
    }
    return config;
  },
};

module.exports = nextConfig;

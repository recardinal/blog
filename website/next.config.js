/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["jsx", "js", "ts", "tsx", "mdx", "md"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    images: { unoptimized: true },
  },
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /.mdx?$/,
      use: [
        defaultLoaders.babel,
        {
          loader: "@mdx-js/loader",
          options: {},
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

import recmaNextjsStaticProps from 'recma-nextjs-static-props';

import rehypeExportHeadings from './plugins/rehype-exporting-headings.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: process.env.NODE_ENV == 'production' ? '/blog' : undefined,
  pageExtensions: ['jsx', 'js', 'ts', 'tsx', 'mdx', 'md'],
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
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            providerImportSource: '@mdx-js/react',
            recmaPlugins: [recmaNextjsStaticProps],
            rehypePlugins: [rehypeExportHeadings],
            format: 'mdx',
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;

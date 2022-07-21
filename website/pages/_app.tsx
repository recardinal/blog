import type { AppProps } from 'next/app';
import { MDXProvider } from '@mdx-js/react';

import { PostInfoProvider } from '~/providers/postInfo';
import PostLayout from '~/components/layout/PostLayout';
import { H2 } from '~/components/mdx/headings';

import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PostInfoProvider>
      <MDXProvider
        components={{
          wrapper: PostLayout,
          h2: H2,
        }}>
        <Component {...pageProps} />
      </MDXProvider>
    </PostInfoProvider>
  );
}

export default MyApp;

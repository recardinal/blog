import React from 'react';

import PostSiderBar from './sidebar/PostSiderbar';
import Toc from './TOC';

import type { Headings } from '~/types/common';

export default function PostLayout({
  children,
  headings,
}: {
  children: React.ReactNode;
  headings: Headings;
}) {
  return (
    <div className="flex">
      <PostSiderBar />
      <main className="flex-1">{children}</main>
      <Toc headings={headings} />
    </div>
  );
}

import type { Headings } from '~/types/common';

export default function Toc({ headings }: { headings: Headings }) {
  return (
    <nav className="shrink-0 w-64">
      <ul>
        {headings.map(({ depth, title }, index) => (
          <li key={index}>{title}</li>
        ))}
      </ul>
    </nav>
  );
}

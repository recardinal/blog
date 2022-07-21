import Link from 'next/link';
import { Listbox } from '@headlessui/react';

import { usePostInfo } from '~/providers/postInfo';

export default function PostSiderBar() {
  const [{ postLabels, filteredLabels, filteredPosts }, dispatch] = usePostInfo();
  return (
    <aside className="w-64 pr-8 shrink-0">
      <div className="sticky top-0">
        <Listbox
          value={filteredLabels}
          onChange={(labels) => {
            dispatch({ type: 'changeLabels', labels });
          }}
          multiple>
          <div className="relative">
            <Listbox.Button className="w-full h-9 white-space bg-gray-100 rounded-lg">
              {filteredLabels.join(', ')}
            </Listbox.Button>
            <Listbox.Options className="absolute overflow-auto w-full max-h-48 mt-1 text-base rounded-lg bg-white shadow-lg">
              {postLabels.map(({ name, id }) => (
                <Listbox.Option key={id} value={name} className="py-2">
                  {name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </div>
        </Listbox>
        <ul>
          {filteredPosts.map(({ title, route }) => (
            <li
              key={title}
              title={title}
              className="whitespace-nowrap overflow-hidden text-ellipsis">
              <Link href={`/post/${route}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

import { createContext, useContext, useReducer } from 'react';

import type { PostInfo } from '~/types/common';
import generateInfo from '~/pages/post/generate_info.json';

type FilterPostState = {
  filteredLabels: string[];
  filteredPosts: PostInfo[];
  posts: PostInfo[];
  postLabels: { id: number; name: string }[];
  sort: 'desc' | 'asc';
};

type FilterPostAction =
  | {
      type: 'changeLabels';
      labels: string[];
    }
  | {
      type: 'sort';
    };

const { issues, labels } = generateInfo;

const postInfo: PostInfo[] = issues.map((post) => ({
  ...post,
  route: post.title.replace(/\s/g, '-'),
}));

export const PostInfoContext = createContext<[FilterPostState, React.Dispatch<FilterPostAction>]>(
  [] as any,
);

export function PostInfoProvider({ children }: { children: React.ReactNode }) {
  const postState = useReducer(
    function (state: FilterPostState, action: FilterPostAction): FilterPostState {
      switch (action.type) {
        case 'sort':
          return {
            ...state,
            sort: state.sort == 'asc' ? 'desc' : 'asc',
            filteredPosts: state.filteredPosts.slice().reverse(),
          };
        case 'changeLabels': {
          const currentLabels = action.labels;
          const currentPosts = action.labels.length
            ? postInfo.filter(({ labels }) =>
                labels.some((label) => currentLabels.includes(label.name)),
              )
            : postInfo;

          return {
            ...state,
            filteredLabels: currentLabels,
            filteredPosts: state.sort == 'desc' ? currentPosts : currentPosts.reverse(),
          };
        }
        default:
          return state;
      }
    },
    {
      filteredLabels: [],
      filteredPosts: postInfo,
      posts: postInfo,
      postLabels: labels,
      sort: 'desc',
    },
  );

  return <PostInfoContext.Provider value={postState}>{children}</PostInfoContext.Provider>;
}

export function usePostInfo() {
  return useContext(PostInfoContext);
}

export type PostInfo = {
  id: number;
  title: string;
  route: string;
  number: number;
  labels: {
    id: number;
    name: string;
  }[];
};

export type Headings = {
  depth: string;
  title: string;
}[];

export interface RepositoryListType {
  totalCount: number;
  edges: Edge[];
  pageInfo: PageInfo;
}

export interface Edge {
  node: Node;
  cursor: string;
}

export interface Node {
  id: string;
  name: string;
  ownerName: string;
  createdAt: Date;
  fullName: string;
  reviewCount: number;
  ratingAverage: number;
  forksCount: number;
  stargazersCount: number;
  description: string;
  language: string;
  ownerAvatarUrl: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string;
}

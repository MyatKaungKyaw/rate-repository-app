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

export interface AuthenticateResponse {
  authenticate: Authenticate;
}

interface Authenticate {
  accessToken: string;
  expiresAt: string;
  user: User;
}

interface User {
  id: string;
  username: string;
}

export interface AuthenticateInput {
  credentials: Credentials;
}

interface Credentials {
  password: string;
  username: string;
}

export interface MeType {
  me: Me;
}

interface Me {
  id: string;
  username: string;
}

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

export interface RepositoryType {
  id: string;
  fullName: string;
  url: string;
}

export interface CreateReviewInput {
  review: Review;
}

export interface Review {
  ownerName: string;
  rating: number;
  repositoryName: string;
  text: string;
}

export interface CreateReviewResponse {
  createReview: CreateReview;
}

interface CreateReview {
  createdAt: string;
  id: string;
  rating: number;
  repositoryId: string;
  text: string;
  userId: string;
}

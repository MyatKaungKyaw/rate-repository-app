import { gql } from "@apollo/client";

export const Authenticate = gql`
  mutation Authenticate($credentials: AuthenticateInput) {
    authenticate(credentials: $credentials) {
      accessToken
      expiresAt
      user {
        id
        username
      }
    }
  }
`;

export const CreateReview = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      createdAt
      id
      rating
      repositoryId
      text
      userId
    }
  }
`;

export const CreateUser = gql`
  mutation CreateUser($user: CreateUserInput) {
    createUser(user: $user) {
      createdAt
      id
      username
    }
  }
`;

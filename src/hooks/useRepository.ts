import { useQuery } from "@apollo/client";
import { repository as getRepo } from "../graphql/queries";


const useRepository = (repositoryId: string) => {
  const { loading, data, refetch } = useQuery<QueryType, RepositoryInput>(
    getRepo,
    { variables: { repositoryId } }
  );

  let repository;

  if (!loading && data != undefined && Object.hasOwn(data, "repository")) {
    repository = data.repository;
  }

  return { repository, loading, refetch };
};

//Repository query type

interface QueryType {
  repository: Repository;
}

export interface Repository {
  id: string;
  fullName: string;
  url: string;
  reviews: Reviews;
}

export interface Reviews {
  edges: Edge[];
}

export interface Edge {
  node: Node;
}

export interface Node {
  id: string;
  text: string;
  rating: number;
  createdAt: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
}

export interface RepositoryInput {
  repositoryId: string;
}

export default useRepository;

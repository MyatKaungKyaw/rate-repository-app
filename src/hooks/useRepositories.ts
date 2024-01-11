import { useQuery } from "@apollo/client";

import { repositories as getRepos } from "../graphql/queries";
import { RepositoryListType } from "../graphql/types";

interface QueryType {
  repositories: RepositoryListType;
}

const useRepositories = () => {
  const { loading, data, refetch } = useQuery<QueryType>(getRepos, {
    fetchPolicy: "cache-and-network",
  });

  let repositories: RepositoryListType | undefined;

  if (!loading && data != undefined && Object.hasOwn(data, "repositories")) {
    repositories = data.repositories;
  }

  return { repositories, loading, refetch };
};

export default useRepositories;

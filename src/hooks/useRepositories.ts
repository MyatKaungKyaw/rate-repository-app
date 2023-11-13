import { useQuery } from "@apollo/client";

import { repositories as getRepos } from "../graphql/queries";
import { RepositoryListType } from "../graphql/types";

const useRepositories = () => {
  const { loading, data, refetch } = useQuery(getRepos, {
    fetchPolicy: "cache-and-network",
  });

  let repositories: RepositoryListType | undefined;

  if (!loading && Object.hasOwn(data, "repositories")) {
    repositories = data.repositories as RepositoryListType;
  }

  return { repositories, loading, refetch };
};

export default useRepositories;

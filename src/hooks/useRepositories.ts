import { RepositoryListType } from "../components/Repository/types";
import { useQuery } from "@apollo/client";
import { repositories as getRepos } from "../graphql/queries";

const useRepositories = () => {
  const { loading, data, refetch } = useQuery(getRepos);
  let repositories: RepositoryListType | undefined;

  if (!loading && Object.hasOwn(data, "repositories")) {
    repositories = data.repositories as RepositoryListType;
  }

  return { repositories, loading, refetch };
};

export default useRepositories;

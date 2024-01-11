import { useQuery } from "@apollo/client";
import { repository as getRepo } from "../graphql/queries";
import { RepositoryInput, RepositoryType } from "../graphql/types";

interface QueryType {
  repository: RepositoryType;
}

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

export default useRepository;

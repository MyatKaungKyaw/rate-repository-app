import { useState, useEffect } from "react";
import { RepositoryListType } from "../components/Repository/types";

const useRepositories = () => {
  const [repositories, setRepositories] = useState<RepositoryListType>();
  const [loading, setLoading] = useState(false);

  const fetchRepositories = async () => {
    setLoading(true);

    const response = await fetch("http://10.1.9.144:5000/api/repositories");
    const json = (await response.json()) as RepositoryListType;

    setLoading(false);
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  return { repositories, loading, refetch: fetchRepositories };
};

export default useRepositories;

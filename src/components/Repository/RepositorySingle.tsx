import { useLocation, useParams, Location } from "react-router-native";
import RepositoryItem, { RepositoryItemProps } from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";

const RepositorySingle = () => {
  const { id } = useParams();

  if (id == undefined) return null;

  const location = useLocation();
  const item: RepositoryItemProps["item"] = location.state;
  const { repository } = useRepository(id);
  item.url = repository?.url;

  return <RepositoryItem item={item} />;
};

export default RepositorySingle;

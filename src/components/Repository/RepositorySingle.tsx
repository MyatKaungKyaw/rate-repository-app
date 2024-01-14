import { useLocation, useParams, Location } from "react-router-native";
import RepositoryItem, { RepositoryItemProps } from "./RepositoryItem";
import useRepository from "../../hooks/useRepository";
import { FlatList, StyleSheet, View } from "react-native";
import Review from "./Review";

const RepositorySingle = () => {
  const { id } = useParams();

  if (id == undefined) return null;

  const location = useLocation();
  const item: RepositoryItemProps["item"] = location.state;
  const { repository } = useRepository(id);
  item.url = repository?.url;

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
    headerComponent: {
      paddingBottom: 10,
    },
  });
  const ItemSperator = () => <View style={styles.separator} />;

  return (
    <FlatList
      data={repository?.reviews.edges}
      keyExtractor={(item) => item.node.id}
      renderItem={Review}
      ListHeaderComponent={() => <RepositoryItem item={item} />}
      ListHeaderComponentStyle={styles.headerComponent}
      ItemSeparatorComponent={ItemSperator}
    />
  );
};

export default RepositorySingle;

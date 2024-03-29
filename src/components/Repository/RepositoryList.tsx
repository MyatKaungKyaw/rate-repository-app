import { FlatList, View, StyleSheet, Pressable } from "react-native";

import RepositoryItem, { RepositoryItemProps } from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import { RepositoryListType } from "../../graphql/types";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const repositories = [
  {
    id: "jaredpalmer.formik",
    fullName: "jaredpalmer/formik",
    description: "Build forms in React, without the tears",
    language: "TypeScript",
    forksCount: 1589,
    stargazersCount: 21553,
    ratingAverage: 88,
    reviewCount: 4,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
  },
  {
    id: "rails.rails",
    fullName: "rails/rails",
    description: "Ruby on Rails",
    language: "Ruby",
    forksCount: 18349,
    stargazersCount: 45377,
    ratingAverage: 100,
    reviewCount: 2,
    ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
  },
  {
    id: "django.django",
    fullName: "django/django",
    description: "The Web framework for perfectionists with deadlines.",
    language: "Python",
    forksCount: 21015,
    stargazersCount: 48496,
    ratingAverage: 73,
    reviewCount: 5,
    ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
  },
  {
    id: "reduxjs.redux",
    fullName: "reduxjs/redux",
    description: "Predictable state container for JavaScript apps",
    language: "TypeScript",
    forksCount: 13902,
    stargazersCount: 52869,
    ratingAverage: 0,
    reviewCount: 0,
    ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
  },
];

const ItemSeparator = () => <View style={styles.separator} />;

interface RepositoryListContainerProps {
  repositories: RepositoryListType | undefined;
}

export const RepositoryListContainer = ({
  repositories,
}: RepositoryListContainerProps) => {
  const navigate = useNavigate();

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => {
        // return edge.node;
        return {
          navigate: navigate,
          ...edge.node,
        };
      })
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={RepositoryPressable}
    />
  );
};

type RepositoryPressableProps = {
  item: {
    navigate: ReturnType<typeof useNavigate>;
  } & RepositoryItemProps["item"];
};

const RepositoryPressable = (props: RepositoryPressableProps) => {
  const { navigate, ...item } = props.item;

  const onPressHandler = () => {
    navigate(`repository/${props.item.id}`, { state: item });
  };

  return (
    <Pressable onPress={onPressHandler}>
      <RepositoryItem item={item} />
    </Pressable>
  );
};

const RepositoryList = () => {
  const { repositories } = useRepositories();

  return <RepositoryListContainer repositories={repositories} />;
};

export default RepositoryList;

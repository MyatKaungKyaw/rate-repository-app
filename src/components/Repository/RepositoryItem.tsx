import { Image, Pressable, StyleSheet, View } from "react-native";
import * as Linking from "expo-linking";

import Count from "./Count";
import Topic from "./Topic";
import theme from "../../theme";
import Text from "../Text/Text";
import TextPrimary from "../Text/TextPrimary";

export interface RepositoryItemProps {
  item: {
    id: string;
    fullName: string;
    description: string;
    language: string;
    forksCount: number;
    stargazersCount: number;
    ratingAverage: number;
    reviewCount: number;
    ownerAvatarUrl: string;
    url?: string;
  };
}

const styles = StyleSheet.create({
  avatar: {
    width: theme.length.logoLength,
    height: theme.length.logoLength,
    borderRadius: theme.length.logoLength * theme.length.radiusRatio,
  },
  mainContainer: {
    backgroundColor: theme.colors.secondary,
    padding: 10,
    rowGap: 8,
  },
  avaterAndDetailContainer: {
    flexDirection: "row",
    flexBasis: "auto",
    columnGap: 15,
  },
  detailContainer: {
    flex: 1,
    flexDirection: "column",
    rowGap: 8,
  },
  countContainer: {
    flexDirection: "row",
    alignSelf: "flex-start",
    columnGap: 15,
    flexWrap: "wrap",
    flexBasis: "auto",
  },
  pressableContainer: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.length.elementRadius,
    padding: 6,
    paddingTop: 6,
    height: 30,
    width: "100%",
    alignItems: "center",
  },
});

const RepositoryItem = ({ item }: RepositoryItemProps): JSX.Element => {
  const openGHOnpressHandler = () => {
    if (item.url == undefined) return;
    Linking.openURL(item.url);
  };

  return (
    <View testID="repositoryItem" style={styles.mainContainer}>
      <View style={styles.avaterAndDetailContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.detailContainer}>
          <TextPrimary>{item.fullName}</TextPrimary>
          <Text color="tertiary">{item.description}</Text>
          <Topic>{item.language}</Topic>
        </View>
      </View>
      <View style={styles.countContainer}>
        <Count count={item.stargazersCount} unit="Stars" />
        <Count count={item.forksCount} unit="Forks" />
        <Count count={item.reviewCount} unit="Reviews" />
        <Count count={item.ratingAverage} unit="Rating" />
      </View>
      {item.url != undefined && (
        <Pressable
          style={styles.pressableContainer}
          onPress={openGHOnpressHandler}
        >
          <Text color="secondary">Open in GitHub</Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;

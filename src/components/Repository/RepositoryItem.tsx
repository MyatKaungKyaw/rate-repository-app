import { Image, StyleSheet, View } from "react-native";
import TextPrimary from "../Text/TextPrimary";
import Text from "../Text/Text";
import theme from "../../theme";
import Topic from "./Topic";
import Count from "./Count";

interface props {
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
    flex: 1,
    flexDirection: "column",
  },
  avaterAndDetailContainer: {
    flex: 1,
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
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    columnGap: 15,
    flexWrap: "wrap",
    flexBasis: "auto",
  },
});

const RepositoryItem = ({ item }: props): JSX.Element => {
  return (
    <View style={styles.mainContainer}>
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
    </View>
  );
};

export default RepositoryItem;

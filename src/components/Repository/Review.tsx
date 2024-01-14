import { StyleSheet, View } from "react-native";
import { Repository } from "../../hooks/useRepository";
import Text, { TextProps } from "../Text/Text";
import TextPrimary from "../Text/TextPrimary";
import theme from "../../theme";

interface Props {
  item: Repository["reviews"]["edges"][number];
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: theme.colors.secondary,
    flexDirection: "row",
    rowGap: 8,
    columnGap: 8,
    padding:10,
  },
  ratingNumberContainer: {
    flexBasis: 50,
    alignItems: "center",
    paddingTop: 10,
  },
  ratingNumber: {
    width: theme.length.ratingContainerLength,
    height: theme.length.ratingContainerLength,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    borderRadius: theme.length.ratingContainerLength / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    flexBasis:'auto',
    flexShrink:1,
    rowGap: 3,
  },
});

const Review = ({ item }: Props) => {
  const node = item.node;
  const createdAt = new Date(node.createdAt);
  let date =
    createdAt.getDate() >= 10
      ? createdAt.getDate().toString()
      : `0${createdAt.getDate()}`;
  date +=
    "." +
    (createdAt.getMonth() >= 10
      ? createdAt.getMonth().toString()
      : `0${createdAt.getMonth()}`);

  date += "." + createdAt.getFullYear();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.ratingNumberContainer}>
        <View style={styles.ratingNumber}>
          <TextPrimary color="primary">{node.rating}</TextPrimary>
        </View>
      </View>
      <View style={styles.info}>
        <TextPrimary>{node.user.username}</TextPrimary>
        <Text color="tertiary">{date}</Text>
        <Text>{node.text}</Text>
      </View>
    </View>
  );
};

export default Review;

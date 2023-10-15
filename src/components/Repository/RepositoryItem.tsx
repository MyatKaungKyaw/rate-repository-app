import { Image, StyleSheet, Text, View } from "react-native"
import TextPrimary from "../Text/TextPrimary"

interface props {
  item: {
    id: string
    fullName: string
    description: string
    language: string
    forksCount: number
    stargazersCount: number
    ratingAverage: number
    reviewCount: number
    ownerAvatarUrl: string
  }
}

const sytles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
  }
});

const RepositoryItem = ({ item }: props): JSX.Element => {
  return (
    <View>
      <Image
        style={sytles.avatar}
        source={{ uri: item.ownerAvatarUrl }}
      />
      <TextPrimary color="primary">{item.fullName}</TextPrimary>
    </View>
  );
}

export default RepositoryItem;
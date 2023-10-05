import { Text } from "react-native"

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

const RepositoryItem = ({ item }: props): JSX.Element => {
  return (<Text>
    Full Name: {item.fullName}{'\n'}
    Description: {item.description}{'\n'}
    Languge: {item.language}{'\n'}
    Stars: {item.stargazersCount}{'\n'}
    Forks: {item.forksCount}{'\n'}
    Reviews: {item.reviewCount}{'\n'}
    Rating: {item.ratingAverage}
  </Text>);
}

export default RepositoryItem;
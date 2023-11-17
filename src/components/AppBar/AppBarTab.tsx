import { Pressable, StyleSheet } from "react-native";
import { Link } from "react-router-native";

import TextPrimary from "../Text/TextPrimary";

interface Props {
  text: string;
  linkTo: string;
  onPress?: () => Promise<void>;
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 7,
    marginRight: 7,
  },
});

const AppBarTab = ({ text, linkTo, onPress }: Props) => {
  return (
    <Pressable style={styles.container}>
      <Link to={linkTo} onPress={onPress}>
        <TextPrimary color="secondary">{text}</TextPrimary>
      </Link>
    </Pressable>
  );
};

export default AppBarTab;

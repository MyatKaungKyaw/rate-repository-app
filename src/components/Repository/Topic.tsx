import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { ReactNode } from "react";
import Text from "../Text/Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    borderRadius: (theme.fontSizes.body+9) * theme.length.radiusRatio,
    padding: 6,
    paddingTop: 3,
    alignSelf: 'flex-start',
  }
})

interface Props {
  children?: ReactNode;
}

const Topic = ({ children }: Props) => (
  <View style={styles.container}><Text color="secondary">{children}</Text></View>
)

export default Topic;
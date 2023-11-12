import { View, StyleSheet, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.length.height,
    backgroundColor: theme.colors.textPrimary,
    height: theme.length.barHeight,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" linkTo="/" />
        <AppBarTab text="Sign in" linkTo="sign-in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;

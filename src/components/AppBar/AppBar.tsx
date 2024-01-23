import { View, StyleSheet, ScrollView } from "react-native";

import AppBarTab from "./AppBarTab";
import useLogInUser from "../../hooks/useLogInUser";
import useSignOut from "../../hooks/useSignOut";
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
  const signOut = useSignOut();
  const { loading, user } = useLogInUser();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" linkTo="/" />
        {!loading && user?.me && user.me.id && user.me.username ? (
          <>
            <AppBarTab text="Create a review" linkTo="create-review" />
            <AppBarTab
              text="Sign out"
              onPress={signOut.signOut}
              linkTo="sign-in"
            />
          </>
        ) : (
          <AppBarTab text="Sign in" linkTo="sign-in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;

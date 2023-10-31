import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./Repository/RepositoryList";
import theme from "../theme";
import AppBar from "./AppBar/AppBar";
import { Routes, Route, Navigate } from "react-router-native";
import SignIn from "./SignIn";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackGround,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;

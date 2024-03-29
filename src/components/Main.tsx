import { StyleSheet, View } from "react-native";
import { Routes, Route, Navigate } from "react-router-native";

import AppBar from "./AppBar/AppBar";
import RepositoryList from "./Repository/RepositoryList";
import SignIn from "./SignIn";
import theme from "../theme";
import RepositorySingle from "./Repository/RepositorySingle";
import ReviewForm from "./ReviewForm";
import SignUpForm from "./SignUpForm";

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
        <Route path="repository/:id" element={<RepositorySingle />} />
        <Route path="create-review" element={<ReviewForm />} />
        <Route path="sign-up" element={<SignUpForm />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;

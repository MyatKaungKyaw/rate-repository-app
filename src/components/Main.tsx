import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './Repository/RepositoryList';
import theme from '../theme';
import AppBar from './AppBar/AppBar';

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
      <AppBar/>
      <RepositoryList />
    </View>
  );
};

export default Main;
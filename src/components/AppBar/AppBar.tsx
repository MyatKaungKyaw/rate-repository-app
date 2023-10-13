import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import TextSubHeading from '../TextSubHeading';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.length.height,
    backgroundColor: theme.colors.appBarBackGround,
    height: theme.length.barHeight,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <TextSubHeading>Repositories</TextSubHeading>
    </Pressable>
  </View>;
};

export default AppBar;
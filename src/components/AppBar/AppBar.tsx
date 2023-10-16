import { View, StyleSheet, Pressable } from 'react-native';
import theme from '../../theme';
import TextPrimary from '../Text/TextPrimary';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.length.height,
    backgroundColor: theme.colors.textPrimary,
    height: theme.length.barHeight,
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <Pressable>
      <TextPrimary color='secondary'>Repositories</TextPrimary>
    </Pressable>
  </View>;
};

export default AppBar;
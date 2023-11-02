import {
  TextInput as NativeTextInput,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
import theme from "../theme";

interface Props extends React.ComponentProps<typeof NativeTextInput> {
  style?: StyleProp<TextStyle>;
  error?: string;
}

const styles = StyleSheet.create({
  container: {
    borderRadius: theme.length.elementRadius,
    padding: 6,
    borderWidth: 1,
  },
  error: {
    color: theme.colors.error,
    borderColor: theme.colors.error,
  },
});

const TextInput = ({ style, error, ...props }: Props) => {
  const styleCombine = error
    ? [styles.container, styles.error, style]
    : [styles.container, style];

  return <NativeTextInput style={styleCombine} {...props} />;
};

export default TextInput;

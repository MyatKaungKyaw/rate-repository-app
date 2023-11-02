import {
  TextInput as NativeTextInput,
  StyleProp,
  TextStyle,
} from "react-native";

interface Props extends React.ComponentProps<typeof NativeTextInput> {
  style?: StyleProp<TextStyle>;
  error?: string;
}

const TextInput = ({ style, error, ...props }: Props) => {
  return <NativeTextInput style={style} {...props} />;
};

export default TextInput;

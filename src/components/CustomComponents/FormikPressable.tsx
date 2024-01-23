import { Pressable, StyleSheet, ViewStyle } from "react-native";
import Text from "../Text/Text";
import theme from "../../theme";
import { FormikHandlers } from "formik";

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: theme.colors.primary,
    borderRadius: (theme.fontSizes.body + 9) * theme.length.radiusRatio,
    alignItems: "center",
    width: "100%",
    height: theme.length.inputHeight,
    justifyContent: "center",
  },
});

interface Props extends React.ComponentProps<typeof Pressable> {
  text: string;
  handleSubmit: FormikHandlers["handleSubmit"];
  style?: ViewStyle;
}

const FormikPressable = ({ text, handleSubmit, style, ...props }: Props) => {
  const pressableStyle = [styles.pressable, style];
  return (
    <Pressable onPress={() => handleSubmit()} style={pressableStyle} {...props}>
      <Text color="secondary" fontWeight="bold">
        {text}
      </Text>
    </Pressable>
  );
};

export default FormikPressable;

import { ReactNode } from "react";
import Text, { TextProps } from "./Text";
import { Text as NativeText, TextStyle } from "react-native";


interface Props extends React.ComponentProps<typeof NativeText> {
  children?: ReactNode;
  color?: TextProps["color"];
  style?: TextStyle;
}

const TextPrimary = ({ children, color, style, ...props }: Props) => (
  <Text
    color={color}
    fontSize="subheading"
    fontWeight="bold"
    style={style}
    {...props}
  >{children}</Text>
)

export default TextPrimary;
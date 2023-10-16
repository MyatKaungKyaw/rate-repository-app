import { ReactNode } from "react";
import Text, { TextProps } from "./Text";
import { TextStyle } from "react-native";


interface Props {
  children?: ReactNode;
  color?: TextProps["color"];
  style?: TextStyle;
  props?: TextProps['props'];
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
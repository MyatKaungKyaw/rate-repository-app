import { ReactNode } from "react";
import { Text as NativeText, TextStyle } from "react-native";

import Text, { TextProps } from "./Text";

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
  >
    {children}
  </Text>
);

export default TextPrimary;

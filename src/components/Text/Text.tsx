import { ReactNode } from "react";
import { Text as NativeText, StyleSheet, TextStyle } from "react-native";

import theme from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorTextTertiary: {
    color: theme.colors.textTertiary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

export interface TextProps extends React.ComponentProps<typeof NativeText> {
  color?: "secondary" | "primary" | "tertiary" | string;
  fontSize?: "subheading";
  fontWeight?: "bold";
  style?: TextStyle;
  children?: ReactNode;
}

const Text = ({
  color,
  fontSize,
  fontWeight,
  style,
  children,
  ...props
}: TextProps) => {
  const textStyle = [
    styles.text,
    color === "secondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "tertiary" && styles.colorTextTertiary,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;

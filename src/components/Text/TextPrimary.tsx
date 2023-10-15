import { ReactNode } from "react";
import Text from "./Text";
import theme from '../../theme';


interface Props {
  children?: ReactNode;
  color?: 'primary' | 'textSecondary';
}

const TextPrimary = ({ children, color = 'primary' }: Props) => (
  <Text
    color={color}
    fontSize="subheading"
    fontWeight="bold"
  >{children}</Text>
)

export default TextPrimary;
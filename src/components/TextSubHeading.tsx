import { ReactNode } from "react";
import Text from "./Text";

interface Props {
  children: ReactNode;
}

const TextSubHeading = ({ children }: Props) => (
  <Text
   color="textSecondary"
   fontSize="subheading"
   fontWeight="bold"
  >{children}</Text>
)

export default TextSubHeading;
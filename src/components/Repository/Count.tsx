import { StyleSheet, View } from "react-native";
import Text from "../Text/Text";
import TextPrimary from "../Text/TextPrimary";

const styles = StyleSheet.create({
  component: {
    flex: 1,
    flexDirection: 'column',
    // alignSelf: 'flex-start',
    backgroundColor: '#e2e2e2',
  },
  text: {
    textAlign: 'center',
  },
})

interface Props {
  unit: string;
  count: number;
}

const getWitKSuffix = (count: number): string => {
  const co: string = `${count / 1000}`
  return parseFloat(co) > 1 ? `${co.slice(0, co.indexOf('.') + 2)}k` : `${count}`;
}

const Count = ({ unit, count }: Props) => (
  <View style={styles.component}>
    <TextPrimary style={styles.text}>{getWitKSuffix(count)}</TextPrimary>
    <Text color="tertiary" style={styles.text}>{unit}</Text>
  </View>
);

export default Count;
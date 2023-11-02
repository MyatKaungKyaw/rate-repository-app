import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text/Text";
import theme from "../theme";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: theme.colors.error,
  },
});

interface Props extends React.ComponentProps<typeof NativeTextInput> {
  name: string;
}

const FormikTextInput = ({ name, ...props }: Props) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched ? meta.error : undefined;

  return (
    <>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && (
        <Text style={styles.errorText} color={theme.colors.error}>
          {meta.error}
        </Text>
      )}
    </>
  );
};

export default FormikTextInput;

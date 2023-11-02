import { StyleSheet, TextInput as NativeTextInput } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text/Text";

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
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
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;

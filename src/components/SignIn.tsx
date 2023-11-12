import { Formik, FormikProps, useField } from "formik";
import { View, StyleSheet, Pressable } from "react-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text/Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    display: "flex",
    rowGap: 10,
    width: "100%",
    height: "auto",
    padding: 10,
    borderBottomLeftRadius: theme.length.elementRadius,
    borderBottomRightRadius: theme.length.elementRadius,
  },
  inputText: {
    backgroundColor: theme.colors.secondary,
    alignSelf: "flex-start",
    width: "100%",
  },
  pressable: {
    backgroundColor: theme.colors.primary,
    borderRadius: (theme.fontSizes.body + 9) * theme.length.radiusRatio,
    alignSelf: "flex-start",
    width: "100%",
    padding: 6,
  },
});

interface FormValues {
  userName: string;
  password: string;
}

const SubmitForm = ({ handleSubmit }: FormikProps<FormValues>) => {
  const [nameField, _nameMeta, nameHelper] = useField("userName");
  const [passwordField, _passwordMeta, passwordHelper] = useField("password");

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="userName"
        placeholder="User Name"
        value={nameField.value}
        onChangeText={(text) => nameHelper.setValue(text)}
        style={styles.inputText}
      />
      <FormikTextInput
        name="password"
        placeholder="Password"
        secureTextEntry
        value={passwordField.value}
        onChangeText={(text) => passwordHelper.setValue(text)}
        style={styles.inputText}
      />
      <Pressable onPress={() => handleSubmit()} style={styles.pressable}>
        <Text color="secondary" fontWeight="bold">
          Sign In
        </Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const initialValues = {
    userName: "",
    password: "",
  };

  const onSubmit = (values: FormValues) => {
    console.log("onsubmit");
    console.log(values);
  };

  const validationSchema = yup.object().shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props: FormikProps<FormValues>) => <SubmitForm {...props} />}
    </Formik>
  );
};

export default SignIn;

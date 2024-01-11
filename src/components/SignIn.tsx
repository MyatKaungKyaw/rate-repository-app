import { Formik, FormikProps, useField } from "formik";
import { useEffect } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { useNavigate } from "react-router-native";
import * as yup from "yup";

import FormikTextInput from "./FormikTextInput";
import Text from "./Text/Text";
import { AuthenticateInput } from "../graphql/types";
import useSignIn from "../hooks/useSignIn";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
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

export interface FormValues {
  username: string;
  password: string;
}

interface SigninFormInputPorps {
  handleSubmit: FormikProps<FormValues>["handleSubmit"];
}

const SignInFormInput = ({ handleSubmit }: SigninFormInputPorps) => {
  const [nameField, _nameMeta, nameHelper] = useField("username");
  const [passwordField, _passwordMeta, passwordHelper] = useField("password");

  return (
    <View style={styles.container}>
      <FormikTextInput
        name="username"
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

interface SignInFormProps {
  handleSubmit: (values: FormValues) => void;
}

export const SignInForm = ({ handleSubmit }: SignInFormProps) => {
  const onSubmit = (values: FormValues) => {
    handleSubmit(values);
  };

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {(props: FormikProps<FormValues>) => (
        <SignInFormInput handleSubmit={props.handleSubmit} />
      )}
    </Formik>
  );
};

const SignIn = () => {
  const [signIn, { data }] = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (data?.authenticate.accessToken) {
      navigate("/");
    }
  }, [data]);

  const onSubmit = (values: FormValues) => {
    const signInInput: AuthenticateInput = {
      credentials: { ...values },
    };

    signIn(signInInput);
  };

  return <SignInForm handleSubmit={onSubmit} />;
};

export default SignIn;

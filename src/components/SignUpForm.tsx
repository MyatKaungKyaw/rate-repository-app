import { Formik } from "formik";
import useCreateUser from "../hooks/useCreateUser";
import { StyleSheet, View } from "react-native";
import FormikTextInput from "./CustomComponents/FormikTextInput";
import FormikPressable from "./CustomComponents/FormikPressable";
import { useEffect, useState } from "react";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";
import * as yup from "yup";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    rowGap: 10,
    width: "100%",
    padding: 10,
  },
});

interface FormValues {
  username: string;
  password: string;
  passwordConfirmation: string;
}

const initialValues: FormValues = {
  username: "",
  password: "",
  passwordConfirmation: "",
};

const validationSchema = yup
  .object()
  .shape<Record<keyof FormValues, yup.AnySchema>>({
    username: yup
      .string()
      .required("Username is required.")
      .min(5, "Username's length must be at least 5.")
      .max(30, "Username's length must be less than or equal 30."),
    password: yup
      .string()
      .required("Password is required.")
      .min(5, "Passwrod's length must be at least 5.")
      .max(50, "Password's length must be less than or equal 50."),
    passwordConfirmation: yup
      .string()
      .required("Password confirmation is required.")
      .min(5, "Password confirmation's length must be at least 5.")
      .max(50, "Password confirmation's length must be less than or equal 50.")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });

const SignUpForm = () => {
  const [createUser, createUserResult] = useCreateUser();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [signIn, signInResult] = useSignIn();
  const navigate = useNavigate();

  useEffect(() => {
    if (createUserResult.data?.createUser.id) {
      signIn({ credentials: { username, password } });
    }
  }, [createUserResult]);

  useEffect(() => {
    if (signInResult.data?.authenticate.accessToken) {
      navigate("/");
    }
  }, [signInResult]);

  const onSubmit = (values: FormValues) => {
    setUsername(values.username);
    setPassword(values.password);
    createUser({
      username: values.username,
      password: values.password,
    });
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput
            secureTextEntry
            name="password"
            placeholder="Password"
          />
          <FormikTextInput
            secureTextEntry
            name="passwordConfirmation"
            placeholder="Password confirmation"
          />
          <FormikPressable handleSubmit={handleSubmit} text="Sign up" />
        </View>
      )}
    </Formik>
  );
};

export default SignUpForm;

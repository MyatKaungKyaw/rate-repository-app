import { StyleSheet, View } from "react-native";
import Text from "./Text/Text";
import { Formik } from "formik";
import * as yup from "yup";
import FormikTextInput from "./CustomComponents/FormikTextInput";
import useCreateReview from "../hooks/useCreateReview";
import { Review } from "../graphql/types";
import FormikPressable from "./CustomComponents/FormikPressable";
import theme from "../theme";
import { useEffect } from "react";
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
    rowGap: 10,
    width: "100%",
    padding: 10,
  },
});

interface FromValues {
  repositoryOwnerName: string;
  repositoryName: string;
  rating: string;
  review: string;
}

const initialValues: FromValues = {
  repositoryOwnerName: "",
  repositoryName: "",
  rating: "",
  review: "",
};

const validationSchema = yup
  .object()
  .shape<Record<keyof FromValues, yup.AnySchema>>({
    repositoryOwnerName: yup
      .string()
      .required("Repository Owner Name is required."),
    repositoryName: yup.string().required("Repository Name is required."),
    rating: yup
      .number()
      .required("Rating is required.")
      .min(0, "Rating must be greater than 0.")
      .max(100, "Rating must be less or equal to 100."),
    review: yup.string().nullable(),
  });

const ReviewForm = () => {
  const [createReview, result] = useCreateReview();
  const navigate = useNavigate();

  useEffect(() => {
    if (result.data?.createReview.id) {
      navigate("/");
    }
  }, [result]);

  const onSubmit = (values: FromValues) => {
    const reviewInput: Review = {
      ownerName: values.repositoryOwnerName,
      rating: Number(values.rating),
      repositoryName: values.repositoryName,
      text: values.review,
    };
    createReview(reviewInput);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <FormikTextInput
            name="repositoryOwnerName"
            placeholder="Repository owner name"
          />
          <FormikTextInput
            name="repositoryName"
            placeholder="Repository name"
          />
          <FormikTextInput
            name="rating"
            placeholder="Rating between 0 and 100"
          />
          <FormikTextInput name="review" placeholder="Reveiw" />
          <FormikPressable text="Create a review" handleSubmit={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

export default ReviewForm;

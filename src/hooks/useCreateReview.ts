import { useMutation } from "@apollo/client";

import { CreateReview } from "../graphql/mutations";
import { CreateReviewInput, CreateReviewResponse } from "../graphql/types";

const useCreateReview = () => {
  const [review, result] = useMutation<CreateReviewResponse, CreateReviewInput>(
    CreateReview
  );

  const createReview = (createReviewInput: CreateReviewInput["review"]) => {
    review({ variables: { review: { ...createReviewInput } } });
  };

  return [createReview, result] as const;
};

export default useCreateReview;

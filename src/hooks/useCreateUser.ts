import { useMutation } from "@apollo/client";
import { CreateUserInput, CreateUserResponse } from "../graphql/types";
import { CreateReview } from "../graphql/mutations";

const useCreateUser = () => {
  const [create, result] = useMutation<CreateUserResponse, CreateUserInput>(
    CreateReview
  );

  const createUser = (user: CreateUserInput["user"]) => {
    create({ variables: { user: user } });
  };

  return [createUser, result] as const;
};

export default useCreateUser;

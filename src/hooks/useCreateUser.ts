import { useMutation } from "@apollo/client";
import { CreateUserInput, CreateUserResponse } from "../graphql/types";
import { CreateUser } from "../graphql/mutations";

const useCreateUser = () => {
  const [create, result] = useMutation<CreateUserResponse, CreateUserInput>(
    CreateUser
  );

  const createUser = (user: CreateUserInput["user"]) => {
    create({ variables: { user: user } });
  };

  return [createUser, result] as const;
};

export default useCreateUser;

import { useMutation } from "@apollo/client";

import { Authenticate } from "../graphql/mutations";
import { AuthenticateInput, AuthenticateResponse } from "../graphql/types";

const useSignIn = () => {
  const [authenticate, result] = useMutation<
    AuthenticateResponse,
    AuthenticateInput
  >(Authenticate);

  const signIn = (authenticateInput: AuthenticateInput) => {
    authenticate({ variables: { ...authenticateInput } });
  };

  return [signIn, result] as const;
};

export default useSignIn;

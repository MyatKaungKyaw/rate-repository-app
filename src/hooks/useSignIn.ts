import { useApolloClient, useMutation } from "@apollo/client";
import { useEffect } from "react";

import useAuthStorage from "./useAuthStorage";
import { Authenticate } from "../graphql/mutations";
import { AuthenticateInput, AuthenticateResponse } from "../graphql/types";

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [authenticate, result] = useMutation<
    AuthenticateResponse,
    AuthenticateInput
  >(Authenticate);
  const client = useApolloClient();

  useEffect(() => {
    onResultChange();
  }, [result]);

  const onResultChange = async () => {
    if (result.data?.authenticate.accessToken != null) {
      await authStorage?.setAccessToken(result.data?.authenticate.accessToken);
      client.resetStore();
    }
  };

  const signIn = (authenticateInput: AuthenticateInput) => {
    authenticate({ variables: { ...authenticateInput } });
  };

  return [signIn, result] as const;
};

export default useSignIn;

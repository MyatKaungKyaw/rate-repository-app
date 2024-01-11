import { useQuery } from "@apollo/client";

import { me as Me } from "../graphql/queries";
import { MeType } from "../graphql/types";

const useLogInUser = () => {
  const { loading, error, data } = useQuery(Me, {
    fetchPolicy: "cache-and-network",
  });

  let user: MeType | undefined;

  if (!loading && data && "me" in data) {
    user = data;
  }

  return { loading, error, user };
};

export default useLogInUser;

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import Constants from "expo-constants";

const uri = Constants.expoConfig?.extra && Constants.expoConfig.extra.apolloUri;

const httpLink = createHttpLink({
  uri,
});

const createApolloClient = () => {
  return new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;

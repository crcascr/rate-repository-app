import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";

function createApolloClient() {
  return new ApolloClient({
    uri: "http://192.168.1.4:5000/graphql",
    link: new HttpLink({
      uri: "http://192.168.1.4:5000/graphql",
    }),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;

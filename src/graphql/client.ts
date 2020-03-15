import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloLink } from "apollo-link";

const httpLink = new HttpLink({
  uri: process.env.GRAPHQL_URI || "http://localhost:4000/graphql",
  credentials: "include"
});

export default new ApolloClient({
  link: ApolloLink.from([httpLink]),
  cache: new InMemoryCache()
});

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql", // uses the Vite proxy
  cache: new InMemoryCache(),
});

console.log("Apollo Client URI:", "/graphql"); // sanity check

export default client;

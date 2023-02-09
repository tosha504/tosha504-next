import { ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
	query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all',
	},
};

const client = new ApolloClient({
  uri: "http://localhost/webdeb/graphql/",
  cache: new InMemoryCache(),
	defaultOptions
});

export default client;
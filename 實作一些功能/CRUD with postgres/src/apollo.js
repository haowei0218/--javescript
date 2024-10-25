import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
         uri: 'http://localhost:4000/graphql',//link to our fake server
         cache: new InMemoryCache(),
});

export default client
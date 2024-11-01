import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
         uri: 'https://graphql-server-wgyc.onrender.com/graphql',//link to our fake server
         cache: new InMemoryCache(),
});

export default client
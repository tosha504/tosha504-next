import '../styles/globals.scss'
import client from '../client';
import { ApolloProvider} from "@apollo/client";


export default function MyApp({ Component, pageProps }) {	
  return (
    <ApolloProvider client={client}>
			<Component {...pageProps} />
    </ApolloProvider>
  )
}



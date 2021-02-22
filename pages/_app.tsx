import "tailwindcss/tailwind.css";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={pageProps.initialApolloState}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

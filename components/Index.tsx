import Layout from "./Layout";
import StickyNav from "./StickyNav";
import Footer from "./Footer";
import MainImage from "./MainImage";
import { Fragment } from "react";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const httpLink = createHttpLink({
  uri: "http://localhost:3000/api/graphql-data",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

//Apollo provider -  enables all child components to access apollo client to send queries and mutations
//client supplied as a prop to
const Index = () => {
  return (
      <ApolloProvider client={client}>
        <Fragment>
          <Layout />
          <StickyNav name="Airpods Pro" />
          <MainImage />
          <Footer />
        </Fragment>
      </ApolloProvider>
  );
};
export default Index;

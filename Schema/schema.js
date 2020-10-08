import { gql } from "apollo-server-micro";

const typeDefs = gql`
  type Section {
    name: String
    text: String
    style: String
  }

  type Query {
    sections: [Section]
  }
`;

export default typeDefs
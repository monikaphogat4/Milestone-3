import { ApolloServer, gql } from "apollo-server-micro";

const typeDefs = gql`
  type Section {
    name: String!
    text: String
    style: String
    baseUrl: String!
    imageCount: [ImageCount]
  }

  type Query {
    sections: [Section]
  }

  type ImageCount {
    noOfImages: Int
  }

  type Mutation {
    updateSection(name: String!, text: String!): Section
  }
`;
const sections = [
  {
    name: "01-hero-lightpass",
    text:
      "Active Noise Cancellation for immersive sound. Transparency mode for hearing what is happening around you.",
    style: "black",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "02-head-bob-turn",
    text: "Arrival of the fittest.",
    style: "black",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "03-flip-for-guts",
    text: "Sound that cuts out the noise.",
    style: "white",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "04-explode-tips",
    text:
      "Choose from three sizes of soft, flexible silicone tips that click into place. Find the best fit and get the best sound by using the Ear Tip Fit Test.",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "05-flip-for-nc",
    text:
      "Enjoy superior sound quality with Adaptive EQ, which automatically tunes music to the shape of your ear for a rich, consistent listening experience.",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "06-transparency-head",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "07-flip-reveal-guts",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "08-turn-for-chip",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "09-scoop-turn",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
  {
    name: "10-fall-into-case",
    text: "Charge wirelessly. Use tirelessly.",
    baseUrl:
      "https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/",
  },
];

const ImageCount = [{ noOfImages: 20 }];

//instruct Apollo on how to fetch the data and how to update it.
const resolvers = {
  Query: {
    sections: () => sections,
  },

  Mutation: {
    updateSection: (root, args) => {
      section.name = args.name;
      section.text = args.text;
      return section;
    },
  },
};

//setup apollo server
const server = new ApolloServer({ typeDefs, resolvers });

const handler = server.createHandler({ path: "/api/graphql-data" });

export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;

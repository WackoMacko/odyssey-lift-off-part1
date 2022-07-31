const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  "Tracks array for the home page grid"
  tracksForHome: [Track!]!
}

"A Track is a group of modules that teaches about a specific topic"
type Track {
  id: ID!
  "The track's title"
  title: String!
  "The track's main author"
  author: Author!
  "An illustration to display on Track Card or Track main page"
  thumbnail: String
  length: Int
  modulesCount: Int
}

"A Track's Author"
type Author {
  id: ID!
  "first and last name of the author"
  name: String!
  "Url to a image of the author"
  photo: String
}
`;

module.exports = typeDefs;

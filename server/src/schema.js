const { gql } = require('apollo-server');

const typeDefs = gql`
type Query {
  "Tracks array for the home page grid"
  tracksForHome: [Track!]!
  "A Track retrieved by its id"
  track(id: ID!): Track
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
  description: String
  numberOfViews: Int
  "Array witj all modules of this track"
  modules: [Module!]!
}

"A Module can be part of many Tracks"
type Module {
  id: ID!
  title: String!
  "The length in minutes"
  length: Int
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

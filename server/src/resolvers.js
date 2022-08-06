const resolvers = {
  Query: {
    // returns array of tracks for the home page
    tracksForHome: (_, __, {dataSources}) => {
      return dataSources.trackAPI.getTracksForHome();
    },
    // returns a single track for details page
    track: (_, {id}, {dataSources}) => {
      return dataSources.trackAPI.getTrack(id);
    }
  },
  Track: {
    author: ({authorId}, _, {dataSources}) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },
    modules: ({id}, _, {dataSources}) => {
      return dataSources.trackAPI.getTrackModules(id);
    }
  }
};

module.exports = resolvers;

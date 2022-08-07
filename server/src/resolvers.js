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
  Mutation: {
    incrementTrackViews: async (_, {id}, {dataSources}) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}!`,
          track
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null
        };
      }
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

import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    suggestions: (_, { id }) => getSuggestions(id),
    movie: (_, { id }) => getMovie(id),
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

export default resolvers;

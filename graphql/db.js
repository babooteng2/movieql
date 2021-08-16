import axios from "axios";
import { async } from "regenerator-runtime";
const BASE_URL = "https://yts.mx/api/v2/";
const LIST_MOVIE_URL = `${BASE_URL}list_movies.json`;
const DETAIL_MOVIE_URL = `${BASE_URL}movie_details.json`;
const SUGGESTIONS_MOVIE_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovie = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios(DETAIL_MOVIE_URL, {
    params: {
      movie_id: id,
    },
  });
  return movie;
};

export const getMovies = async (limit, rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(LIST_MOVIE_URL, {
    params: {
      limit,
      minimum_rating: rating,
    },
  });
  return movies;
};

export const getSuggestions = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios(SUGGESTIONS_MOVIE_URL, {
    params: {
      movie_id: id,
    },
  });
  return movies;
};

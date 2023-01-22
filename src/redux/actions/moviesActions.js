import constants from "../constants/constants";

// Import Data
import { movies$ } from "../../data/movies";

// This function will dispatch actions to get movies from movies.js,
export const getMoviesAction = () => (dispatch) => {
  // This action will set projects to an empty array and loading to true.
  dispatch({ type: constants.MOVIES_REQUEST });

  // Fetch movies
  movies$
    .then((data) => {
      dispatch({
        type: constants.GET_MOVIES,
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};

// This function will dispatch action to update movie like/dislike stats
export const updateLikeMovieAction = (movies, e, id) => {
  let filteredMovies = movies.filter((movie) => movie.id !== id);
  let movieToUpdate = movies.find((movie) => movie.id === id);
  movieToUpdate[e.target.checked === true ? "likes" : "dislikes"] += 1;
  filteredMovies.push(movieToUpdate);

  return {
    type: constants.UPDATE_LIKE_MOVIE,
    payload: filteredMovies.sort((a, b) => a.id - b.id),
  };
};

// This function will dispatch action to update movie state filtering the movie equalling index,
export const deleteMovieAction = (id) => {
  return {
    type: constants.DELETE_MOVIE,
    payload: id,
  };
};

import constants from "../constants/constants";

// All movies reducer.
// The reducer sends the payload coming from the action to the store.
export const moviesReducer = (state = { movies: [] }, action) => {
  // So we check which action has been dispatched to the reducer and update
  // the state depending on the action type
  switch (action.type) {
    // If this action type dispatched we set the movies state to an empty array
    case constants.MOVIES_REQUEST:
      return {
        loading: true,
        movies: [],
      };
    // If this action type dispatched we set the movies state to the movies
    // array in the action payload data
    case constants.GET_MOVIES:
      return {
        loading: false,
        movies: action.payload,
      };
    // If this action type dispatched we update movie like/dislike stats
    case constants.UPDATE_LIKE_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    // If this action type dispatched we filter the movies state without the
    // movie equalling the index in payload
    case constants.DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload),
      };

    default:
      return state;
  }
};

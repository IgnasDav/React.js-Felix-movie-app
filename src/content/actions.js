import * as types from "./types";
import apiSettings from "../API";

export const getMovies = () => async (dispatch, getState) => {
  const storageToken = localStorage.getItem("token");
  dispatch({ type: types.GET_MOVIES, payload: true });
  try {
    const { content } = getState();
    if (!storageToken && content.movies.list.length) {
      const movies = content.movies.list;
      dispatch({ type: types.GET_MOVIES_SUCCESS, payload: movies });
    } else {
      const payload = storageToken
        ? await apiSettings.fetchMovies(storageToken)
        : await apiSettings.fetchFreeMovies();
      dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
    }
  } catch (error) {
    dispatch({ type: types.GET_MOVIES_ERROR, payload: error });
  }
  dispatch({ type: types.GET_MOVIES, payload: false });
};
export const toggleFavorite = (id) => (dispatch) =>
  dispatch({ type: types.TOGGLE_FAVORITES, id });

export const getSingleMovie = (movieId) => async (dispatch, getState) => {
  const storageToken = localStorage.getItem("token");
  const { content } = getState();
  if (!content.movies.list.length) {
    dispatch({ type: types.GET_MOVIES, payload: true });
    try {
      const response = storageToken
        ? await apiSettings.fetchSingleMovie(movieId, storageToken)
        : await apiSettings.fetchSingleMovie(movieId);
      dispatch({ type: types.GET_MOVIES_SUCCESS, payload: response });
    } catch (error) {
      dispatch({ type: types.GET_MOVIES_ERROR, payload: error });
    }
    dispatch({ type: types.GET_MOVIES, payload: true });
  } else {
    const singleMovie = content.movies.list.filter(
      (movie) => movie.id === movieId
    );
    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: singleMovie });
  }
};

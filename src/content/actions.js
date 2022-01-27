import * as types from "./types";
import apiSettings from "../API";

export const getMovies = () => async (dispatch, getState) => {
  console.log("Get movies action");
  const storageToken = localStorage.getItem("token");
  dispatch({ type: types.GET_MOVIES, payload: true });
  try {
    const payload = storageToken
      ? await apiSettings.fetchMovies(storageToken)
      : await apiSettings.fetchFreeMovies();
    dispatch({ type: types.GET_MOVIES_SUCCESS, payload });
  } catch (error) {
    dispatch({ type: types.GET_MOVIES_ERROR, payload: error });
  }
  dispatch({ type: types.GET_MOVIES, payload: false });
};
export const toggleFavorite = (id) => (dispatch) =>
  dispatch({ type: types.TOGGLE_FAVORITES, id });

export const getSingleMovie = (movieId) => async (dispatch, getState) => {
  const storageToken = localStorage.getItem("token");
  dispatch({ type: types.GET_MOVIES, payload: true });
  try {
    const response = storageToken
      ? await apiSettings.fetchSingleMovie(movieId, storageToken)
      : await apiSettings.fetchSingleMovie(movieId);
    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: [response] });
    console.log(response);
  } catch (error) {
    dispatch({ type: types.GET_MOVIES_ERROR, payload: error });
  }
  dispatch({ type: types.GET_MOVIES, payload: false });
};

import * as types from "./types";
import apiSettings from "../API";
import auth from "../auth";
export const getMovies = () => async (dispatch, getState) => {
  const storageToken = localStorage.getItem("token");
  dispatch({ type: types.GET_MOVIES, payload: true });
  try {
    let { data, status } = await apiSettings.fetchMovies(storageToken);
    if (status === 401) {
      dispatch({ type: auth.types.DELETE_TOKEN_DATA });
    }

    dispatch({ type: types.GET_MOVIES_SUCCESS, payload: await data });
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

import * as types from "./types";
import apiSettings from "../API";

export const setToken = (username, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.SET_TOKEN, paylaod: true });
    const response = await apiSettings.signIn(username, password);
    if (response.token) {
      dispatch({
        type: types.SET_TOKEN_SUCCESS,
        payload: response.token,
      });
      dispatch({ type: types.SET_TOKEN_ERROR, payload: null });
    } else {
      dispatch({ type: types.SET_TOKEN_ERROR, payload: response.message });
    }
  } catch (error) {
    dispatch({ type: types.SET_TOKEN_ERROR, payload: error });
  }
  dispatch({ type: types.SET_TOKEN, payload: false });
};
export const deleteToken = () => (dispatch, getState) => {
  localStorage.removeItem("token");
  dispatch({ type: types.SET_TOKEN_SUCCESS, payload: "" });
};

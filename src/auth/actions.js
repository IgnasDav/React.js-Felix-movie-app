import * as types from "./types";
import { createAction } from "redux-api-middleware";

export const setToken = (username, password) =>
  createAction({
    endpoint: "https://academy-video-api.herokuapp.com/auth/login",
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ username, password }),
    types: [types.SET_TOKEN, types.SET_TOKEN_SUCCESS, types.SET_TOKEN_ERROR],
  });

// export const setToken = (username, password) => async (dispatch, getState) => {
//   try {
//     dispatch({ type: types.SET_TOKEN, paylaod: true });
//     const response = await apiSettings.signIn(username, password);
//     if (await response.token) {
//       await dispatch({
//         type: types.SET_TOKEN_SUCCESS,
//         payload: response.token,
//       });
//       dispatch({ type: types.SET_TOKEN_ERROR, payload: null });
//     } else {
//       dispatch({ type: types.SET_TOKEN_ERROR, payload: response.message });
//     }
//   } catch (error) {
//     dispatch({ type: types.SET_TOKEN_ERROR, payload: error });
//   }
//   dispatch({ type: types.SET_TOKEN, payload: false });
// };
export const deleteTokenData = () => (dispatch, getState) => {
  dispatch({ type: types.DELETE_TOKEN_DATA });
};
export const deleteTokenError = () => (dispatch) => {
  dispatch({ type: types.DELETE_TOKEN_ERROR });
};

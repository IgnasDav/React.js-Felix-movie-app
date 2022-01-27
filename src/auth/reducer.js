import * as types from "./types";
const DEFAULT_STATE = {
  token: {
    loading: false,
    data: localStorage.getItem("token") || "",
    error: null,
  },
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN: {
      return { ...state, token: { ...state.token, loading: action.payload } };
    }
    case types.SET_TOKEN_SUCCESS: {
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        token: {
          ...state.token,
          data: action.payload,
        },
      };
    }
    case types.SET_TOKEN_ERROR: {
      return {
        ...state,
        token: {
          ...state.token,
          error: action.payload,
        },
      };
    }
    case types.DELETE_TOKEN: {
      return {
        ...state,
        token: {},
      };
    }
    default:
      return state;
  }
};
export default reducer;

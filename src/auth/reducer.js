import { type } from "@testing-library/user-event/dist/type";
import * as types from "./types";
const DEFAULT_STATE = {
  token: localStorage.getItem("token") || "",
};

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.SET_TOKEN: {
      localStorage.setItem("token", action.payload);
      return { ...state, token: action.payload };
    }
    default:
      return state;
  }
};
export default reducer;

import { createStore, combineReducers } from "redux";
import content from "../content";

const rootReducer = combineReducers({
  content: content.reducer,
  // auth: (state) => {
  //   return state;
  // },
});

const store = createStore(rootReducer);

export default store;

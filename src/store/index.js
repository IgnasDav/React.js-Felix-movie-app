import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import content from "../content";
import auth from "../auth";
import middleware from "./middleware";

const enhancers =
  process.env.NODE_ENV !== "production" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const rootReducer = combineReducers({
  content: content.reducer,
  auth: auth.reducer,
  // auth: (state) => {
  //   return state;
  // },
});

const store = createStore(
  rootReducer,
  {},
  enhancers(applyMiddleware(...middleware))
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

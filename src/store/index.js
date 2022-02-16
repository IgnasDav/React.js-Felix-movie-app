import { configureStore } from "@reduxjs/toolkit";
import content from "../content";
import auth from "../auth";
import middleware from "./middleware";

const store = configureStore({
  reducer: {
    content: content.reducer,
    auth: auth.authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});
export default store;

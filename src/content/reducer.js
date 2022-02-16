import { createReducer } from "@reduxjs/toolkit";
import * as types from "./types";

const DEFAULT_STATE = {
  favorites: [],
  movies: {
    isLoading: false,
    error: null,
    list: [],
  },
};
const contentReducer = createReducer(DEFAULT_STATE, (builder) => {
  builder
    .addCase(types.TOGGLE_FAVORITES, (state, action) => {
      const { favorites } = state;
      if (favorites.includes(action.id)) {
        state.favorites = favorites.filter((id) => id !== action.id);
      } else {
        state.favorites = favorites.concat(action.id);
      }
    })
    .addCase(types.GET_MOVIES, (state, action) => {
      state.movies.isLoading = action.payload;
    })
    .addCase(types.GET_MOVIES_SUCCESS, (state, action) => {
      state.movies.list = action.payload;
    })
    .addCase(types.GET_MOVIES_ERROR, (state, action) => {
      state.movies.error = action.payload;
    });
});
// const reducer = (state = DEFAULT_STATE, action) => {
//   switch (action.type) {
//     case types.TOGGLE_FAVORITES: {
//       const { favorites } = state;
//       if (favorites.includes(action.id)) {
//         return {
//           ...state,
//           favorites: favorites.filter((item) => item !== action.id),
//         };
//       } else {
//         return { ...state, favorites: favorites.concat(action.id) };
//       }
//     }
//     case types.GET_MOVIES: {
//       return {
//         ...state,
//         movies: {
//           ...state.movies,
//           isLoading: action.payload,
//         },
//       };
//     }
//     case types.GET_MOVIES_SUCCESS: {
//       return {
//         ...state,
//         movies: {
//           ...state.movies,
//           list: action.payload,
//         },
//       };
//     }
//     case types.GET_MOVIES_ERROR: {
//       return {
//         ...state,
//         movies: {
//           ...state.movies,
//           error: action.payload,
//         },
//       };
//     }
//     default:
//       return state;
//   }
// };

export default contentReducer;

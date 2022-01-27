import * as types from "./types";

const DEFAULT_STATE = {
  favorites: [],
  movies: {
    isLoading: false,
    error: null,
    list: [],
  },
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case types.TOGGLE_FAVORITES: {
      const { favorites } = state;
      if (favorites.includes(action.id)) {
        return {
          ...state,
          favorites: favorites.filter((item) => item !== action.id),
        };
      } else {
        return { ...state, favorites: favorites.concat(action.id) };
      }
    }
    case types.GET_MOVIES: {
      return {
        ...state,
        movies: {
          ...state.movies,
          isLoading: action.payload,
        },
      };
    }
    case types.GET_MOVIES_SUCCESS: {
      return {
        ...state,
        movies: {
          ...state.movies,
          list: action.payload,
        },
      };
    }
    case types.GET_MOVIES_ERROR: {
      return {
        ...state,
        movies: {
          ...state.movies,
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;

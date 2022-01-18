const DEFAULT_STATE = {
  favorites: [],
  movies: {
    isLoading: false,
    isError: false,
    list: [],
  },
};
const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case "CONTENT/TOGGLE_FAVORITES": {
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

    default:
      return state;
  }
};

export default reducer;

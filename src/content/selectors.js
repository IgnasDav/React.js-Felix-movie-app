export const getMovies = (state) => state.content.movies.list;
export const getMoviesError = (state) => state.content.movies.isError;
export const getMoviesLoading = (state) => state.content.movies.isLoading;
export const getFavorites = (state) => state.content.favorites;
export const isFavorite = (state, id) => state.content.favorites.includes(id);
export const getFavoriteMovies = (state) => {
  const movies = getMovies(state);
  const favorites = getFavorites(state);

  const favoriteMovies = movies.filter(({ id }) => favorites.includes(id));
  return favoriteMovies;
};

import { createContext, useState } from "react";

const GET_MOVIES = false;
const GET_MOVIES_SUCCESS = [];
const GET_MOVIES_ERROR = null;

const MoviesContext = createContext({
  movies: GET_MOVIES_SUCCESS,
  error: GET_MOVIES_ERROR,
  loading: GET_MOVIES,
});

const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(GET_MOVIES_SUCCESS);
  const [error, setError] = useState(GET_MOVIES_ERROR);
  const [loading, setLoading] = useState(GET_MOVIES);

  return (
    <MoviesContext.Provider
      value={{ setMovies, movies, setLoading, loading, error, setError }}
    >
      {children}
    </MoviesContext.Provider>
  );
};
export default MoviesContext;
export { MoviesProvider };

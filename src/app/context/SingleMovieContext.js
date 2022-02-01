import { createContext, useState } from "react";

const GET_MOVIE = false;
const GET_MOVIE_SUCCESS = [];
const GET_MOVIE_ERROR = null;

const SingleMovieContext = createContext({
  movie: GET_MOVIE_SUCCESS,
  error: GET_MOVIE_ERROR,
  loading: GET_MOVIE,
});

const SingleMovieProvider = ({ children }) => {
  const [movie, setMovie] = useState(GET_MOVIE_SUCCESS);
  const [error, setError] = useState(GET_MOVIE_ERROR);
  const [loading, setLoading] = useState(GET_MOVIE);

  return (
    <SingleMovieContext.Provider
      value={{ setMovie, movie, setLoading, loading, error, setError }}
    >
      {children}
    </SingleMovieContext.Provider>
  );
};
export default SingleMovieContext;
export { SingleMovieProvider };

import { useCallback, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiSettings from "../../API";
//Components
import MovieInfo from "../components/MovieInfo";
import Spinner from "../components/Spinner";
import AuthContext from "../context/AuthContext";
import MoviesContext from "../context/MoviesContext";
import SingleMovieContext from "../context/SingleMovieContext";

const SingleMovie = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const { setMovie, movie, setLoading, loading, error, setError } =
    useContext(SingleMovieContext);
  const { movies } = useContext(MoviesContext);
  if (movies.length) setMovie(movies.find((movie) => movie.id === id));
  const getSingleMovie = useCallback(async () => {
    try {
      setLoading(true);
      let response;
      if (token) response = await apiSettings.fetchSingleMovie(id, token);
      else {
        response = await apiSettings.fetchSingleMovie(id);
      }
      setMovie(response);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [setLoading, setError, setMovie, token, id]);

  useEffect(() => {
    if (!movies.length) getSingleMovie();
  }, [getSingleMovie, movies]);
  return (
    <>
      {error && <h1>{error}</h1>}
      {loading && <Spinner />}
      {movie && (
        <MovieInfo
          title={movie.title}
          img={movie.image}
          description={movie.description}
          id={movie.id}
          video={movie.video}
        />
      )}
    </>
  );
};

export default SingleMovie;

import { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";
//Components
import MovieInfo from "../";
import Spinner from "../components/Spinner";
import apiSettings from "../../API";

const SingleMovie = () => {
  const token = localStorage.getItem("token");
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();
  const getMovie = useCallback(async () => {
    try {
      setIsLoading(true);
      if (token) {
        setMovie(await apiSettings.fetchSingleMovie(id, token));
      } else {
        setMovie(await apiSettings.fetchSingleMovie(id));
      }
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  }, [id, token]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <>
      {!isLoading ? (
        <MovieInfo
          title={movie.title}
          img={movie.image}
          description={movie.description}
          id={movie.id}
          video={movie.video}
        />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default SingleMovie;

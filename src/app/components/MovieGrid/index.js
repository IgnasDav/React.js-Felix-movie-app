import { useCallback, useContext, useEffect } from "react";
import MoviesContext from "../../context/MoviesContext";
import AuthContext from "../../context/AuthContext";

//Styles
import { Wrapper, Content, Error } from "./MovieGrid.styles";
//Components
import Card from "../Card";
import Spinner from "../Spinner";
import Button from "../Button/Button.style";
//API
import apiSettings from "../../../API";

const MovieGrid = () => {
  const { error, setError, setMovies, movies, setLoading, loading } =
    useContext(MoviesContext);
  const { token } = useContext(AuthContext);
  const getMovies = useCallback(async () => {
    try {
      setLoading(true);
      let response;
      if (token) response = await apiSettings.fetchMovies(token);
      else {
        response = await apiSettings.fetchFreeMovies();
      }
      setMovies(response);
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  }, [setError, setLoading, setMovies, token]);
  useEffect(() => {
    getMovies();
  }, [getMovies]);
  return (
    <>
      {error && <Error>{error.message}</Error>}
      {!error && (
        <Wrapper>
          <Content>
            {movies?.map((movie, i) => (
              <Card
                id={movie.id}
                img={movie.image}
                title={movie.title}
                description={movie.description.substring(0, 100) + "..."}
                key={movie.id}
              />
            ))}
          </Content>
          {loading && <Spinner />})
          {!loading && (
            <Button to="/signin">
              <p>Load More</p>
            </Button>
          )}
        </Wrapper>
      )}
    </>
  );
};

export default MovieGrid;

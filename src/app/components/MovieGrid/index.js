import { useState, useCallback, useEffect } from "react";
//Styles
import { Wrapper, Content } from "./MovieGrid.styles";
//Components
import Card from "../Card";
import Spinner from "../Spinner";

//API
import apiSettings from "../../../API";
import Button from "../Button/Button.style";

const MovieGrid = ({ token, setToken }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const storageToken = localStorage.getItem("token");
  const getMovies = useCallback(async () => {
    try {
      setIsLoading(true);
      if (storageToken) {
        setMovies(await apiSettings.fetchMovies(storageToken));
      } else {
        setMovies(await apiSettings.fetchFreeMovies());
      }
      setIsLoading(false);
    } catch {
      setError(true);
    }
  }, [storageToken]);
  useEffect(() => {
    getMovies();
  }, [getMovies]);

  return (
    <>
      {error && <h1>404 Bad request</h1>}
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
        {isLoading && <Spinner />})
        {!storageToken && (
          <Button to="/signin">
            <p>Load More</p>
          </Button>
        )}
      </Wrapper>
    </>
  );
};

export default MovieGrid;
